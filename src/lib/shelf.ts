import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getFigure, resolveFigure, type Condition, type Figure, type Sale } from "@/data/catalog";
import { quote } from "@/lib/value";

export type ShelfPhoto = { id: string; angle: string; dataUrl: string };

export type Holding = {
  recordId: string;
  qty: number;
  box: Condition;
  figure: Condition;
  paid: number;
  pulledChase: boolean;
  grail: boolean;
  forSale: boolean;
  ask: number | null;
  editionNumber: string;
  notes: string;
  photos: ShelfPhoto[];
};

export type Want = {
  recordId: string;
  ceiling: number | null;
  note: string;
};

export type Visibility = "private" | "friends" | "public";

export type LoggedSale = Sale & { id: string; recordId: string };

type ShelfState = {
  holdings: Holding[];
  wants: Want[];
  sales: LoggedSale[];
  custom: Figure[];
  visibility: Visibility;
  upsertHolding: (h: Holding) => void;
  removeHolding: (id: string) => void;
  upsertWant: (w: Want) => void;
  removeWant: (id: string) => void;
  logSale: (sale: LoggedSale) => void;
  removeSale: (id: string) => void;
  addCustom: (figure: Figure) => void;
  importBatch: (sales: LoggedSale[], created: Figure[]) => void;
  setVisibility: (v: Visibility) => void;
  resetSample: () => void;
  clearAll: () => void;
};

export const emptyHolding = (recordId: string): Holding => ({
  recordId,
  qty: 1,
  box: "Mint",
  figure: "Mint",
  paid: 0,
  pulledChase: false,
  grail: false,
  forSale: false,
  ask: null,
  editionNumber: "",
  notes: "",
  photos: [],
});

const sampleHoldings: Holding[] = [
  { ...emptyHolding("F000010"), paid: 25 },
  { ...emptyHolding("F000001"), qty: 2, paid: 15, forSale: true, ask: 30 },
  { ...emptyHolding("F000020"), box: "Damaged", figure: "Good", paid: 8 },
];

const sampleWants: Want[] = [
  { recordId: "F000012", ceiling: 160, note: "NYCC glow, sticker on" },
  { recordId: "F000002", ceiling: 100, note: "Pulled or bought, either way" },
  { recordId: "F000021", ceiling: 40, note: "Flocked, not the smooth one" },
];

export const useShelf = create<ShelfState>()(
  persist(
    (set) => ({
      holdings: sampleHoldings,
      wants: sampleWants,
      sales: [],
      custom: [],
      visibility: "private",
      upsertHolding: (h) =>
        set((s) => ({
          holdings: s.holdings.some((x) => x.recordId === h.recordId)
            ? s.holdings.map((x) => (x.recordId === h.recordId ? h : x))
            : [h, ...s.holdings],
        })),
      removeHolding: (id) => set((s) => ({ holdings: s.holdings.filter((h) => h.recordId !== id) })),
      upsertWant: (w) =>
        set((s) => ({
          wants: s.wants.some((x) => x.recordId === w.recordId)
            ? s.wants.map((x) => (x.recordId === w.recordId ? w : x))
            : [w, ...s.wants],
        })),
      removeWant: (id) => set((s) => ({ wants: s.wants.filter((w) => w.recordId !== id) })),
      logSale: (sale) => set((s) => ({ sales: [sale, ...s.sales.filter((x) => x.id !== sale.id)] })),
      removeSale: (id) => set((s) => ({ sales: s.sales.filter((x) => x.id !== id) })),
      addCustom: (figure) => set((s) => ({ custom: [figure, ...s.custom.filter((f) => f.id !== figure.id)] })),
      importBatch: (sales, created) =>
        set((s) => ({
          sales: [...sales, ...s.sales],
          custom: [...created, ...s.custom.filter((f) => !created.some((c) => c.id === f.id))],
        })),
      setVisibility: (visibility) => set({ visibility }),
      resetSample: () => set({ holdings: sampleHoldings, wants: sampleWants, visibility: "private" }),
      clearAll: () => set({ holdings: [], wants: [] }),
    }),
    { name: "funkodb-shelf-v1" },
  ),
);

export function useHydrated() {
  const [hydrated, setHydrated] = useState(() => useShelf.persist.hasHydrated());
  useEffect(() => {
    setHydrated(useShelf.persist.hasHydrated());
    return useShelf.persist.onFinishHydration(() => setHydrated(true));
  }, []);
  return hydrated;
}

export function shelfMath(holdings: Holding[], custom: Figure[] = [], logged: LoggedSale[] = []) {
  let copies = 0;
  let verified = 0;
  let verifiedCost = 0;
  let illustrated = 0;
  let invested = 0;
  let unpriced = 0;
  let chases = 0;
  let grails = 0;
  let exclusives = 0;
  for (const h of holdings) {
    const figure = resolveFigure(h.recordId, custom) ?? getFigure(h.recordId);
    if (!figure) continue;
    copies += h.qty;
    invested += h.paid * h.qty;
    const q = quote(
      figure.sales,
      logged.filter((s) => s.recordId === h.recordId),
      h.box,
    );
    if (q.source === "logged") {
      verified += q.unit * h.qty;
      verifiedCost += h.paid * h.qty;
    } else if (q.source === "sample") {
      illustrated += q.unit * h.qty;
      unpriced += h.qty;
    } else {
      unpriced += h.qty;
    }
    if (figure.isChase) chases += h.qty;
    if (h.grail) grails += h.qty;
    if (figure.exclusiveKind !== "none") exclusives += h.qty;
  }
  return {
    copies,
    verified,
    illustrated,
    invested,
    gain: verified - verifiedCost,
    unpriced,
    chases,
    grails,
    exclusives,
  };
}
