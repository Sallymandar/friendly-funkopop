import { Link } from "@tanstack/react-router";
import type { Figure } from "@/data/catalog";
import { money, signed } from "@/lib/value";

export const field =
  "w-full min-h-11 rounded-xl border border-line bg-ink px-3 text-base text-paper placeholder:text-mute";
export const btn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-base font-medium transition-opacity duration-200 hover:opacity-90 disabled:opacity-50";
export const btnAmber = `${btn} bg-amber text-amber-ink`;
export const btnGhost = `${btn} border border-line bg-transparent text-paper`;

export function PageHeader({ kicker, title, lede }: { kicker: string; title: string; lede?: string }) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm text-amber">{kicker}</p>
      <h1 className="mt-1 font-display text-4xl text-paper sm:text-5xl">{title}</h1>
      {lede && <p className="mt-3 max-w-2xl text-base leading-relaxed text-dim">{lede}</p>}
    </header>
  );
}

export function Badges({ figure }: { figure: Figure }) {
  return (
    <div className="flex flex-wrap gap-2">
      {figure.isChase && (
        <span className="rounded-full bg-amber px-2.5 py-1 text-sm font-medium text-amber-ink">Chase</span>
      )}
      {figure.exclusiveKind !== "none" && (
        <span className="rounded-full border border-line px-2.5 py-1 text-sm text-paper">
          {figure.exclusiveKind === "convention"
            ? "Convention"
            : figure.exclusiveKind === "shared"
              ? "Shared sticker"
              : "Retailer"}
        </span>
      )}
      <span className="rounded-full border border-line px-2.5 py-1 text-sm text-mute">{figure.production}</span>
    </div>
  );
}

export function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-line bg-panel px-4 py-3">
      <p className="text-sm text-mute">{label}</p>
      <p className="mt-1 font-display text-2xl tabular-nums text-paper">{value}</p>
      {hint && <p className="mt-1 text-sm text-dim">{hint}</p>}
    </div>
  );
}

export function Gain({ n }: { n: number }) {
  return <span className={`tabular-nums ${n >= 0 ? "text-amber" : "text-dim"}`}>{signed(n)}</span>;
}

export function FigureLink({ figure, detail }: { figure: Figure; detail?: string }) {
  return (
    <Link
      to="/record/$id"
      params={{ id: figure.id }}
      className="block rounded-2xl border border-line bg-panel p-3 transition-colors duration-200 hover:border-dim"
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-medium text-paper">
          {figure.name} <span className="text-mute">#{figure.number}</span>
        </p>
        <span className="shrink-0 text-sm tabular-nums text-dim">{detail}</span>
      </div>
      <p className="mt-1 text-sm text-mute">
        {figure.variant} · {figure.series} · {figure.year}
      </p>
    </Link>
  );
}

export function MoneyLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-2">
      <span className="text-mute">{label}</span>
      <span className="tabular-nums text-paper">{value}</span>
    </div>
  );
}

export function formatWhen(iso: string) {
  const [y, m, d] = iso.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`;
}

export { money };
