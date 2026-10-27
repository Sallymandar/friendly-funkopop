import { useEffect, useState } from "react";
import type { Sale } from "@/data/catalog";

export function CompsChart({ sales }: { sales: Sale[] }) {
  const [Inner, setInner] = useState<null | typeof import("./comps-chart-inner").CompsChartInner>(null);
  useEffect(() => {
    void import("./comps-chart-inner").then((m) => setInner(() => m.CompsChartInner));
  }, []);
  if (!Inner) return <div className="h-44 rounded-2xl bg-ink" />;
  return <Inner sales={sales} />;
}
