import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { figures, getFigure, sets } from "@/data/catalog";
import { btnAmber, field, PageHeader, Stat } from "@/components/bits";
import { VinylPlate } from "@/components/vinyl";
import { shelfMath, useShelf } from "@/lib/shelf";
import { money, signed } from "@/lib/value";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const holdings = useShelf((s) => s.holdings);
  const custom = useShelf((s) => s.custom);
  const sales = useShelf((s) => s.sales);
  const math = shelfMath(holdings, custom, sales);
  const chases = figures.filter((f) => f.isChase);
  const families = new Set(figures.map((f) => f.familyId)).size;
  const spotlight = ["F000001", "F000010", "F000020"].map((id) => getFigure(id)!);

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        kicker="FunkoDB"
        title="The ledger, priced only by sales."
        lede="Identity, exclusives, chase, shelf, want list, trades, and a price book. A rate counts only after you log or import a real sale. This is not a hobbyDB or Pop Price Guide scrape, and it is not every Pop in circulation."
      />

      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          void navigate({ to: "/catalog", search: { q, lens: "all", family: "", series: "" } });
        }}
      >
        <label className="sr-only" htmlFor="q">Search the ledger</label>
        <input
          id="q"
          className={field}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, number, sticker, retailer"
        />
        <button className={btnAmber} type="submit">Search</button>
      </form>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Records" value={String(figures.length + custom.length)} hint={`${families} variant families in the starter set`} />
        <Stat label="Verified value" value={money(math.verified)} hint={math.unpriced ? `${math.unpriced} copies still unpriced` : `${math.copies} copies priced from your sales`} />
        <Stat label="Amount invested" value={money(math.invested)} />
        <Stat label="Gain on priced copies" value={signed(math.gain)} hint={`${math.chases} chase · ${math.exclusives} exclusive`} />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="font-display text-2xl">Families</h2>
            <Link to="/catalog" search={{ q: "", lens: "all", family: "", series: "" }} className="text-sm text-amber">
              Full catalog
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {spotlight.map((figure) => {
              const count = figures.filter((f) => f.familyId === figure.familyId).length;
              return (
                <Link key={figure.familyId} to="/catalog" search={{ q: "", lens: "all", family: figure.familyId, series: "" }} className="block">
                  <VinylPlate figure={figure} />
                  <p className="mt-2 font-medium">{figure.name} #{figure.number}</p>
                  <p className="text-sm text-mute">{count} known variants</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-panel p-4">
          <h2 className="font-display text-2xl">Chase case</h2>
          <p className="mt-1 text-sm text-mute">Standard and chase stay linked. Ratio is the cited case odds.</p>
          <ul className="mt-4 flex flex-col gap-3">
            {chases.map((figure) => {
              const common = figures.find((f) => f.familyId === figure.familyId && !f.isChase);
              return (
                <li key={figure.id}>
                  <Link to="/record/$id" params={{ id: figure.id }} className="block">
                    <p className="text-sm text-mute">{common ? `${common.name} #${common.number}` : figure.name}</p>
                    <p className="font-medium">{figure.variant}</p>
                    <p className="text-sm text-amber">Chase ratio {figure.chaseRatio}</p>
                  </Link>
                </li>
              );
            })}
            {chases.length === 0 && <li className="text-mute">No chase rows yet.</li>}
          </ul>
          <Link to="/sets" className="mt-4 inline-flex min-h-11 items-center text-sm text-amber">
            {sets.length} completion sets
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h2 className="font-display text-2xl">Price book</h2>
          <Link to="/market" className="text-sm text-amber">Import sales</Link>
        </div>
        <p className="text-sm text-mute">Median of the mint and near-mint sales you entered. Nothing here is estimated from a third-party feed.</p>
        {sales.length === 0 ? (
          <p className="mt-3 rounded-2xl border border-line bg-panel px-4 py-6 text-dim">
            No sales yet. Open a record and log one, or import a sheet on Market.
          </p>
        ) : (
          <ul className="mt-3 grid gap-2">
            {sales.slice(0, 6).map((sale) => {
              const figure = getFigure(sale.recordId) ?? custom.find((f) => f.id === sale.recordId);
              if (!figure) return null;
              return (
                <li key={sale.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-panel px-4 py-3">
                  <div>
                    <Link to="/record/$id" params={{ id: figure.id }} className="font-medium">
                      {figure.name} #{figure.number}
                    </Link>
                    <p className="text-sm text-mute">{figure.variant} · {sale.condition} · {sale.platform}</p>
                  </div>
                  <p className="font-display text-2xl tabular-nums">{money(sale.price)}</p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
