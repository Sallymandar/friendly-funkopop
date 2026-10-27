import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Ledger" },
  { to: "/catalog", label: "Catalog" },
  { to: "/shelf", label: "Shelf" },
  { to: "/sets", label: "Sets" },
  { to: "/market", label: "Market" },
  { to: "/identify", label: "Identify" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const on = (to: string) => path === to || (to !== "/" && path.startsWith(to));

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <div className="md:grid md:grid-cols-[220px_1fr]">
        <aside className="hidden md:sticky md:top-0 md:flex md:h-screen md:flex-col md:border-r md:border-line md:px-4 md:py-6">
          <Link to="/" className="px-2 font-display text-3xl text-paper">
            Funko<span className="text-amber">DB</span>
          </Link>
          <p className="mt-1 px-2 text-sm text-mute">Collector’s ledger</p>
          <nav className="mt-8 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`min-h-11 rounded-xl px-3 py-2 text-base ${on(l.to) ? "bg-panel-2 text-paper" : "text-dim"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-auto px-2 text-sm leading-relaxed text-mute">
            Independent ledger. Not affiliated with Funko.
          </p>
        </aside>
        <div className="min-w-0">
          <header className="flex items-center justify-between border-b border-line px-4 py-3 md:hidden">
            <Link to="/" className="font-display text-2xl text-paper">
              Funko<span className="text-amber">DB</span>
            </Link>
            <p className="text-sm text-mute">Ledger</p>
          </header>
          <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
        </div>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-line bg-ink md:hidden">
        {links.slice(1).map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`flex min-h-14 flex-1 items-center justify-center text-sm ${on(l.to) ? "text-amber" : "text-mute"}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
