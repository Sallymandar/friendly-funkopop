import type { Condition, Figure, Sale } from "@/data/catalog";

export const BOX_FACTOR: Record<Condition, number> = {
  Mint: 1,
  "Near Mint": 0.88,
  Good: 0.62,
  Damaged: 0.35,
};

export function summarize(sales: Sale[]) {
  const all = sales.map((s) => s.price);
  const preferred = sales.filter((s) => s.condition === "Mint" || s.condition === "Near Mint");
  const pool = (preferred.length ? preferred : sales).map((s) => s.price).sort((a, b) => a - b);
  if (!all.length || !pool.length) {
    return { low: 0, high: 0, average: 0, estimate: 0, count: 0 };
  }
  const mid = Math.floor(pool.length / 2);
  const estimate = pool.length % 2 === 1 ? pool[mid]! : Math.round((pool[mid - 1]! + pool[mid]!) / 2);
  const sum = all.reduce((a, b) => a + b, 0);
  return {
    low: Math.min(...all),
    high: Math.max(...all),
    average: Math.round(sum / all.length),
    estimate,
    count: sales.length,
  };
}

export function quote(sample: Sale[], logged: Sale[], box: Condition) {
  const verified = summarize(logged);
  if (verified.count > 0) {
    return { source: "logged" as const, ...verified, unit: Math.round(verified.estimate * BOX_FACTOR[box]) };
  }
  const illustration = summarize(sample);
  if (illustration.count > 0) {
    return { source: "sample" as const, ...illustration, unit: Math.round(illustration.estimate * BOX_FACTOR[box]) };
  }
  return { source: "none" as const, low: 0, high: 0, average: 0, estimate: 0, count: 0, unit: 0 };
}

export function unitValue(figure: Figure, box: Condition) {
  return Math.round(summarize(figure.sales).estimate * BOX_FACTOR[box]);
}

export function money(n: number, cents = false) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: cents ? 2 : 0,
    minimumFractionDigits: cents ? 2 : 0,
  }).format(n);
}

export function signed(n: number) {
  const body = money(Math.abs(n));
  if (n > 0) return `+${body}`;
  if (n < 0) return `−${body}`;
  return body;
}
