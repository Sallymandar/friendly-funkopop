import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { resolveFigure, sampleShelves } from "@/data/catalog";
import { btnAmber, field, PageHeader } from "@/components/bits";
import { parseCompCsv } from "@/lib/import-comps";
import { useHydrated, useShelf } from "@/lib/shelf";
import { money, quote, summarize } from "@/lib/value";

export const Route = createFileRoute("/market")({ component: MarketPage });

const sheetHint = `number,name,price,date,condition,platform,series,variant
239,Godzilla,42,2026-03-01,Mint,eBay,Movies,Standard
01,Batman,18,2026-04-12,Near Mint,Whatnot,Heroes,Standard`;

function MarketPage() {
  const hydrated = useHydrated();
  const holdings = useShelf((s) => s.holdings);
  const wants = useShelf((s) => s.wants);
  const custom = useShelf((s) => s.custom);
  const sales = useShelf((s) => s.sales);
  const importBatch = useShelf((s) => s.importBatch);
  const [haveId, setHaveId] = useState("");
  const [wantId, setWantId] = useState("");
  const [csv, setCsv] = useState("");
  const [report, setReport] = useState("");

  const have = holdings.find((h) => h.recordId === (haveId || holdings[0]?.recordId));
  const want = wants.find((w) => w.recordId === (wantId || wants[0]?.recordId));
  const haveFig = have ? resolveFigure(have.recordId, custom) : undefined;
  const wantFig = want ? resolveFigure(want.recordId, custom) : undefined;
  const haveQ = have && haveFig ? quote(haveFig.sales, sales.filter((s) => s.recordId === haveFig.id), have.box) : undefined;
  const wantQ = want && wantFig ? quote(wantFig.sales, sales.filter((s) => s.recordId === wantFig.id), "Mint") : undefined;
  const haveVal = haveQ?.source === "logged" ? haveQ.unit : null;
  const wantVal = wantQ?.source === "logged" ? wantQ.unit : null;
  const verifiedTrade = haveVal != null && wantVal != null;
  const diff = verifiedTrade ? wantVal - haveVal : 0;

  const mySaleIds = new Set(holdings.filter((h) => h.forSale).map((h) => h.recordId));
  const myWantIds = new Set(wants.map((w) => w.recordId));

  const book = [...sales].sort((a, b) => b.date.localeCompare(a.date));
  const byRecord = new Map<string, typeof sales>();
  for (const sale of sales) {
    const list = byRecord.get(sale.recordId) ?? [];
    list.push(sale);
    byRecord.set(sale.recordId, list);
  }

  function runImport() {
    const result = parseCompCsv(csv, custom);
    if (result.sales.length) importBatch(result.sales, result.created);
    const bits = [`Logged ${result.sales.length} sale${result.sales.length === 1 ? "" : "s"}.`];
    if (result.created.length) bits.push(`Added ${result.created.length} figure${result.created.length === 1 ? "" : "s"} that were not in the catalog.`);
    if (result.skipped.length) bits.push(result.skipped.slice(0, 4).join(" "));
    setReport(bits.join(" "));
    if (result.sales.length) setCsv("");
  }

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        kicker="Market"
        title="Sales, wants, and trades."
        lede="Your price book is the sales you log or import. Asking prices are what a shelf is asking, not a market average. Sample shelves are examples, not other people’s accounts."
      />

      {!hydrated ? (
        <p className="text-mute">Opening the floor…</p>
      ) : (
        <>
          <section className="rounded-2xl border border-line bg-panel p-4 sm:p-5">
            <h2 className="font-display text-2xl">Import sales</h2>
            <p className="mt-1 text-sm text-mute">
              One sale per line. If the box number matches more than one variant, include the variant column or the row is skipped.
            </p>
            <textarea
              className={`${field} mt-3 min-h-36 py-3 font-mono text-sm`}
              value={csv}
              onChange={(e) => setCsv(e.target.value)}
              placeholder={sheetHint}
              aria-label="Sale spreadsheet"
            />
            <button type="button" className={`${btnAmber} mt-3`} onClick={runImport} disabled={!csv.trim()}>
              Add these sales
            </button>
            {report && <p className="mt-3 text-sm text-dim">{report}</p>}
          </section>

          <section className="rounded-2xl border border-line bg-panel p-4 sm:p-5">
            <h2 className="font-display text-2xl">Price book</h2>
            {book.length === 0 ? (
              <p className="mt-3 text-dim">No logged sales. Estimates stay blank until a sale lands here.</p>
            ) : (
              <ul className="mt-3 flex flex-col">
                {[...byRecord.entries()].map(([id, rows]) => {
                  const figure = resolveFigure(id, custom);
                  if (!figure) return null;
                  const summary = summarize(rows);
                  return (
                    <li key={id} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line py-3">
                      <div>
                        <Link to="/record/$id" params={{ id }} className="font-medium">{figure.name} #{figure.number}</Link>
                        <p className="text-sm text-mute">{figure.variant} · {summary.count} sale{summary.count === 1 ? "" : "s"}</p>
                      </div>
                      <p className="text-right">
                        <span className="font-display text-2xl tabular-nums">{money(summary.estimate)}</span>
                        <span className="mt-1 block text-sm text-mute">{money(summary.low)} – {money(summary.high)}</span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <ListCard title="Want list" empty="Nothing on the hunt.">
              {wants.map((w) => {
                const figure = resolveFigure(w.recordId, custom);
                if (!figure) return null;
                return (
                  <li key={w.recordId} className="border-b border-line py-3">
                    <Link to="/record/$id" params={{ id: figure.id }} className="font-medium">{figure.name} #{figure.number}</Link>
                    <p className="text-sm text-mute">{figure.variant}{w.ceiling != null ? ` · ceiling ${money(w.ceiling)}` : ""}</p>
                    {w.note && <p className="text-sm text-dim">{w.note}</p>}
                  </li>
                );
              })}
            </ListCard>
            <ListCard title="For sale" empty="Nothing listed from your shelf.">
              {holdings.filter((h) => h.forSale).map((h) => {
                const figure = resolveFigure(h.recordId, custom);
                if (!figure) return null;
                return (
                  <li key={h.recordId} className="border-b border-line py-3">
                    <Link to="/record/$id" params={{ id: figure.id }} className="font-medium">{figure.name} #{figure.number}</Link>
                    <p className="text-sm text-mute">{h.box} · asking {money(h.ask ?? 0)}</p>
                  </li>
                );
              })}
            </ListCard>
          </section>

          <section className="rounded-2xl border border-line bg-panel p-4">
            <h2 className="font-display text-2xl">Trade gap</h2>
            <p className="mt-1 text-sm text-mute">Uses your logged sales only. A missing sale means the gap stays blank.</p>
            {holdings.length === 0 || wants.length === 0 ? (
              <p className="mt-3 text-dim">Add something you have and something you want.</p>
            ) : (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-mute">
                  I have
                  <select className={`${field} mt-1`} value={have?.recordId ?? ""} onChange={(e) => setHaveId(e.target.value)}>
                    {holdings.map((h) => {
                      const figure = resolveFigure(h.recordId, custom);
                      return figure ? <option key={h.recordId} value={h.recordId}>{figure.name} #{figure.number}</option> : null;
                    })}
                  </select>
                  {haveFig && <p className="mt-2 text-paper">{haveVal == null ? "No verified price" : `Verified ${money(haveVal)}`}</p>}
                </label>
                <label className="text-sm text-mute">
                  I want
                  <select className={`${field} mt-1`} value={want?.recordId ?? ""} onChange={(e) => setWantId(e.target.value)}>
                    {wants.map((w) => {
                      const figure = resolveFigure(w.recordId, custom);
                      return figure ? <option key={w.recordId} value={w.recordId}>{figure.name} #{figure.number}</option> : null;
                    })}
                  </select>
                  {wantFig && <p className="mt-2 text-paper">{wantVal == null ? "No verified price" : `Verified ${money(wantVal)}`}</p>}
                </label>
                <p className="sm:col-span-2 font-display text-3xl tabular-nums">
                  {verifiedTrade
                    ? diff > 0
                      ? `You add ${money(diff)}`
                      : diff < 0
                        ? `You come out ahead ${money(Math.abs(diff))}`
                        : "Even trade"
                    : "No rate yet"}
                </p>
              </div>
            )}
          </section>

          <section>
            <h2 className="font-display text-2xl">Sample shelves</h2>
            <p className="mt-1 text-sm text-mute">Example lists so a match against your wants is visible. Their asking numbers are sample asks, not comps.</p>
            <ul className="mt-3 grid gap-3 lg:grid-cols-3">
              {sampleShelves.map((shelf) => {
                const hits = shelf.items.filter((i) => (i.side !== "want" && myWantIds.has(i.recordId)) || (i.side === "want" && mySaleIds.has(i.recordId)));
                const copies = shelf.items.filter((i) => i.side !== "want").reduce((n, i) => n + i.qty, 0);
                return (
                  <li key={shelf.id} className="rounded-2xl border border-line bg-panel p-4">
                    <h3 className="font-display text-2xl">{shelf.name}</h3>
                    <p className="text-sm text-mute">{shelf.place} · {copies} copies</p>
                    <p className="mt-2 text-sm text-dim">{shelf.note}</p>
                    <ul className="mt-3 flex flex-col gap-2 text-sm">
                      {shelf.items.map((item, idx) => {
                        const figure = resolveFigure(item.recordId, custom);
                        if (!figure) return null;
                        return (
                          <li key={`${item.recordId}-${item.side}-${idx}`}>
                            <span className="text-mute capitalize">{item.side} · </span>
                            <Link to="/record/$id" params={{ id: figure.id }}>{figure.name} #{figure.number}</Link>
                            {item.ask != null && <span className="text-dim"> · asking {money(item.ask)}</span>}
                          </li>
                        );
                      })}
                    </ul>
                    {hits.length > 0 && <p className="mt-3 text-sm text-amber">Touches your want list or your for-sale.</p>}
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

function ListCard({ title, empty, children }: { title: string; empty: string; children: ReactNode }) {
  const items = Array.isArray(children) ? children.filter(Boolean) : [children];
  return (
    <div className="rounded-2xl border border-line bg-panel p-4">
      <h2 className="font-display text-2xl">{title}</h2>
      {items.length === 0 ? <p className="mt-3 text-dim">{empty}</p> : <ul className="mt-2">{items}</ul>}
    </div>
  );
}