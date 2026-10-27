import { format, parseISO } from "date-fns";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { Sale } from "@/data/catalog";
import { money } from "@/lib/value";

export function CompsChartInner({ sales }: { sales: Sale[] }) {
  const data = [...sales]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((s) => ({ ...s, label: format(parseISO(s.date), "MMM d") }));

  return (
    <div className="h-44 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis dataKey="label" tick={{ fill: "var(--color-mute)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis hide domain={["dataMin - 8", "dataMax + 8"]} />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const row = payload[0]?.payload as Sale & { label: string };
              return (
                <div className="rounded-xl border border-line bg-panel px-3 py-2 text-sm text-paper">
                  <p className="tabular-nums">{money(row.price)}</p>
                  <p className="text-mute">{row.condition} · {row.platform}</p>
                </div>
              );
            }}
          />
          <Line type="monotone" dataKey="price" stroke="var(--color-amber)" strokeWidth={2} dot={{ r: 3, fill: "var(--color-amber)" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
