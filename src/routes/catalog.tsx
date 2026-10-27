import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { figures } from "@/data/catalog";
import { Badges, field, PageHeader } from "@/components/bits";
import { VinylPlate } from "@/components/vinyl";
import { useShelf } from "@/lib/shelf";
import { money, quote } from "@/lib/value";

const lenses = ["all", "chase", "exclusive", "vaulted"] as const;

export const Route = createFileRoute("/catalog")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
    lens: lenses.includes(search.lens as (typeof lenses)[number]) ? (search.lens as (typeof lenses)[number]) : "all",
    family: typeof search.family === "string" ? search.family : "",
    series: typeof search.series === "string" ? search.series : "",
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const custom = useShelf((s) => s.custom);
  const logged = useShelf((s) => s.sales);
  const [sort, setSort] = useState<"value" | "year" | "number" | "name">("name");
  const pool = useMemo(() => [...custom, ...figures], [custom]);
  const lines = useMemo(() => [...new Set(pool.map((f) => f.series))], [pool]);

  const rows = useMemo(() => {
    const q = search.q.trim().toLowerCase();
    const list = pool.filter((f) => {
      if (search.family && f.familyId !== search.family) return false;
      if (search.series && f.series !== search.series) return false;
      if (search.lens === "chase" && !f.isChase) return false;
      if (search.lens === "exclusive" && f.exclusiveKind === "none") return false;
      if (search.lens === "vaulted" && f.production !== "Vaulted") return false;
      if (!q) return true;
      const hay = [f.name, f.character, f.number, f.variant, f.license, f.series, f.sticker, f.retailer, f.convention, f.upc, f.id]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
    list.sort((a, b) => {
      if (sort === "value") {
        const av = quote(a.sales, logged.filter((s) => s.recordId === a.id), "Mint");
        const bv = quote(b.sales, logged.filter((s) => s.recordId === b.id), "Mint");
        const ae = av.source === "logged" ? av.estimate : -1;
        const be = bv.source === "logged" ? bv.estimate : -1;
        return be - ae;
      }
      if (sort === "year") return b.year - a.year;
      if (sort === "number") return a.number.localeCompare(b.number, undefined, { numeric: true });
      return a.name.localeCompare(b.name) || a.variant.localeCompare(b.variant);
    });
    return list;
  }, [search, sort, pool, logged]);

  const familyName = search.family ? pool.find((f) => f.familyId === search.family) : undefined;

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        kicker="Catalog"
        title={familyName ? `${familyName.name} #${familyName.number}` : "Master catalog"}
        lede={
          familyName
            ? `${rows.length} variants share this number. They stay in one family.`
            : "Starter ledger of known rows, plus any figure you add. Verified prices appear only after a logged sale."
        }
      />
      <Link to="/add" className="self-start text-sm text-amber">Add a missing figure</Link>

      <div className="flex flex-col gap-3">
        <input
          className={field}
          value={search.q}
          onChange={(e) => void navigate({ search: { ...search, q: e.target.value }, replace: true })}
          placeholder="Name, number, sticker, retailer"
          aria-label="Filter catalog"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {(["", ...lines] as const).map((series) => (
            <button
              key={series || "all"}
              type="button"
              className={`min-h-11 shrink-0 rounded-full px-4 ${search.series === series ? "bg-amber text-amber-ink" : "border border-line text-paper"}`}
              onClick={() => void navigate({ search: { ...search, series } })}
            >
              {series || "All lines"}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {lenses.map((lens) => (
            <button
              key={lens}
              type="button"
              className={`min-h-11 rounded-full px-4 capitalize ${search.lens === lens ? "bg-panel-2 text-paper" : "text-mute"}`}
              onClick={() => void navigate({ search: { ...search, lens } })}
            >
              {lens}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm text-mute">
            Sort
            <select
              className="min-h-11 rounded-xl border border-line bg-ink px-2 text-paper"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
            >
              <option value="name">Name</option>
              <option value="number">Number</option>
              <option value="year">Year</option>
              <option value="value">Estimate</option>
            </select>
          </label>
        </div>
        {search.family && (
          <button type="button" className="self-start text-sm text-amber" onClick={() => void navigate({ search: { ...search, family: "" } })}>
            Clear family filter
          </button>
        )}
      </div>

      <p className="text-sm text-mute">{rows.length} records</p>

      {rows.length === 0 ? (
        <p className="rounded-2xl border border-line bg-panel px-4 py-8 text-dim">Nothing in the ledger matches that.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((figure) => {
            const q = quote(figure.sales, logged.filter((s) => s.recordId === figure.id), "Mint");
            return (
            <li key={figure.id}>
              <Link to="/record/$id" params={{ id: figure.id }} className="block rounded-2xl focus-visible:outline-offset-4">
                <VinylPlate figure={figure} />
                <div className="mt-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium">{figure.name}</p>
                    <p className="text-sm text-mute">{figure.series} · {figure.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl tabular-nums">{q.source === "logged" ? money(q.estimate) : "—"}</p>
                    <p className="text-sm text-mute">{q.source === "logged" ? `${q.count} logged` : "Unpriced"}</p>
                  </div>
                </div>
                <div className="mt-2"><Badges figure={figure} /></div>
              </Link>
            </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
