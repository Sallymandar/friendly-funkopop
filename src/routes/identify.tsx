import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { figures, seriesNames, type Figure } from "@/data/catalog";
import { btnAmber, btnGhost, field, PageHeader } from "@/components/bits";
import { VinylPlate } from "@/components/vinyl";
import { matchPhoto, type PhotoMatch } from "@/lib/identify.functions";
import { emptyHolding, useShelf } from "@/lib/shelf";
import { money, quote } from "@/lib/value";

export const Route = createFileRoute("/identify")({ component: IdentifyPage });

const finishes = ["", "matte", "metallic", "flocked", "glow", "chrome"] as const;
const stickers = [
  { id: "", label: "Any sticker" },
  { id: "chase", label: "Chase sticker" },
  { id: "exclusive", label: "Retailer or show" },
  { id: "none", label: "No special sticker" },
] as const;

function IdentifyPage() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [series, setSeries] = useState("");
  const [finish, setFinish] = useState<(typeof finishes)[number]>("");
  const [sticker, setSticker] = useState<(typeof stickers)[number]["id"]>("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [busy, setBusy] = useState(false);
  const [photoNote, setPhotoNote] = useState("");
  const [photoMatches, setPhotoMatches] = useState<PhotoMatch[]>([]);
  const [added, setAdded] = useState("");
  const upsert = useShelf((s) => s.upsertHolding);
  const custom = useShelf((s) => s.custom);
  const pool = useMemo(() => [...custom, ...figures], [custom]);

  const scored = useMemo(() => {
    return pool
      .map((figure) => ({ figure, score: scoreFigure(figure, { number, name, series, finish, sticker }) }))
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [number, name, series, finish, sticker, pool]);

  const asked = number || name || series || finish || sticker;

  async function onPhoto(file: File) {
    setPhotoError("");
    setPhotoNote("");
    setPhotoMatches([]);
    try {
      const bitmap = await createImageBitmap(file);
      const scale = Math.min(1, 640 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Couldn’t read that photo.");
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      const url = canvas.toDataURL("image/jpeg", 0.7);
      if (url.length > 450_000) throw new Error("Crop in closer — that photo is too heavy.");
      setPhotoUrl(url);
    } catch (err) {
      setPhotoError(err instanceof Error ? err.message : "Couldn’t read that photo.");
    }
  }

  async function runMatch() {
    if (!photoUrl) return;
    setBusy(true);
    setPhotoNote("");
    setPhotoMatches([]);
    try {
      const result = await matchPhoto({ data: { image: photoUrl } });
      if (!result.ok) {
        setPhotoNote(result.error);
        return;
      }
      setPhotoMatches(result.matches);
      if (result.matches.length === 0) setPhotoNote("Nothing in this starter ledger looks like that photo.");
    } catch {
      setPhotoNote("Photo match didn’t answer. Use the questions below.");
    } finally {
      setBusy(false);
    }
  }

  function add(figure: Figure) {
    upsert({ ...emptyHolding(figure.id), paid: 0 });
    setAdded(`${figure.name} #${figure.number} is on your shelf.`);
  }

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        kicker="Identify"
        title="What number is on the box?"
        lede="Narrow the starter ledger by number, finish, and sticker. A photo is a second opinion — it only suggests rows already in FunkoDB, and only when you ask."
      />

      <section className="rounded-2xl border border-line bg-panel p-4">
        <h2 className="font-display text-2xl">Photo</h2>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <label className={`${btnGhost} cursor-pointer`}>
            Choose a photo
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                if (file) void onPhoto(file);
              }}
            />
          </label>
          <button type="button" className={btnAmber} disabled={!photoUrl || busy} onClick={() => void runMatch()}>
            {busy ? "Matching…" : "Match this photo"}
          </button>
        </div>
        {photoUrl && <img src={photoUrl} alt="Figure you want identified" className="mt-3 h-40 w-40 rounded-xl object-cover" />}
        {photoError && <p className="mt-2 text-sm text-dim">{photoError}</p>}
        {photoNote && <p className="mt-2 text-sm text-dim">{photoNote}</p>}
        {photoMatches.length > 0 && (
          <ul className="mt-4 flex flex-col gap-3">
            {photoMatches.map((match) => {
              const figure = pool.find((f) => f.id === match.id);
              if (!figure) return null;
              return <MatchCard key={match.id} figure={figure} because={match.because} confidence={match.confidence} onAdd={() => add(figure)} />;
            })}
          </ul>
        )}
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-mute">
          Box number
          <input className={`${field} mt-1`} value={number} onChange={(e) => setNumber(e.target.value)} placeholder="239" />
        </label>
        <label className="text-sm text-mute">
          Name
          <input className={`${field} mt-1`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Godzilla" />
        </label>
        <label className="text-sm text-mute">
          Line
          <select className={`${field} mt-1`} value={series} onChange={(e) => setSeries(e.target.value)}>
            <option value="">Any line</option>
            {seriesNames.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label className="text-sm text-mute">
          Finish
          <select className={`${field} mt-1`} value={finish} onChange={(e) => setFinish(e.target.value as typeof finish)}>
            <option value="">Any finish</option>
            {finishes.filter(Boolean).map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </label>
        <fieldset className="sm:col-span-2">
          <legend className="text-sm text-mute">Sticker</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {stickers.map((s) => (
              <button
                key={s.id || "any"}
                type="button"
                className={`min-h-11 rounded-full px-4 ${sticker === s.id ? "bg-amber text-amber-ink" : "border border-line"}`}
                onClick={() => setSticker(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </fieldset>
      </section>

      <section>
        <h2 className="font-display text-2xl">Possible matches</h2>
        {!asked ? (
          <p className="mt-2 text-dim">Enter a number or a name to search the ledger.</p>
        ) : scored.length === 0 ? (
          <p className="mt-2 text-dim">No row fits those answers.</p>
        ) : (
          <ul className="mt-3 flex flex-col gap-3">
            {scored.map(({ figure }) => (
              <li key={figure.id}>
                <MatchCard figure={figure} onAdd={() => add(figure)} />
              </li>
            ))}
          </ul>
        )}
        {added && <p className="mt-3 text-sm text-amber">{added}</p>}
      </section>
    </div>
  );
}

function MatchCard({
  figure,
  because,
  confidence,
  onAdd,
}: {
  figure: Figure;
  because?: string;
  confidence?: string;
  onAdd: () => void;
}) {
  const sales = useShelf((s) => s.sales);
  const priced = quote(figure.sales, sales.filter((s) => s.recordId === figure.id), "Mint");
  return (
    <div className="grid gap-3 rounded-2xl border border-line bg-panel p-3 sm:grid-cols-[160px_1fr]">
      <VinylPlate figure={figure} />
      <div>
        <p className="text-sm text-amber">{confidence ? `${confidence} confidence` : "Ledger match"}</p>
        <Link to="/record/$id" params={{ id: figure.id }} className="font-display text-2xl">
          {figure.line} {figure.name} #{figure.number}
        </Link>
        <p className="text-dim">{figure.year} · {figure.variant} · {figure.series}</p>
        <p className="mt-1 tabular-nums">{priced.source === "logged" ? `Verified ${money(priced.estimate)}` : "No verified price"}</p>
        {because && <p className="mt-1 text-sm text-mute">{because}</p>}
        <button type="button" className={`${btnAmber} mt-3`} onClick={onAdd}>Yes — add to shelf</button>
      </div>
    </div>
  );
}

function scoreFigure(
  figure: Figure,
  q: { number: string; name: string; series: string; finish: string; sticker: string },
) {
  let score = 0;
  const num = q.number.trim().replace(/^0+/, "");
  if (num) {
    const theirs = figure.number.replace(/^0+/, "");
    if (theirs === num) score += 6;
    else if (theirs.includes(num)) score += 2;
    else return 0;
  }
  if (q.series) {
    if (figure.series === q.series) score += 2;
    else return 0;
  }
  if (q.finish) {
    if (figure.finish === q.finish) score += 3;
    else score -= 1;
  }
  if (q.sticker === "chase") score += figure.isChase ? 3 : -2;
  if (q.sticker === "exclusive") score += figure.exclusiveKind !== "none" ? 2 : -1;
  if (q.sticker === "none") score += !figure.isChase && figure.exclusiveKind === "none" ? 2 : -1;
  if (q.name.trim()) {
    const hay = `${figure.name} ${figure.character} ${figure.variant}`.toLowerCase();
    if (hay.includes(q.name.trim().toLowerCase())) score += 4;
    else if (!num) return 0;
  }
  return score;
}
