import { figures, type Condition, type ExclusiveKind, type Figure, type Finish, type Platform } from "@/data/catalog";
import type { LoggedSale } from "@/lib/shelf";

export type ImportReport = {
  sales: LoggedSale[];
  created: Figure[];
  skipped: string[];
  attached: number;
};

const CONDITIONS: Condition[] = ["Mint", "Near Mint", "Good", "Damaged"];
const PLATFORMS: Platform[] = ["eBay", "Whatnot", "Mercari", "Shop", "Other"];

function looseNum(value: string) {
  const trimmed = value.trim().replace(/^#/, "");
  return trimmed.replace(/^0+(?=\d)/, "") || "0";
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "figure";
}

function parseDate(raw: string): string | null {
  const t = raw.trim();
  if (!t) return new Date().toISOString().slice(0, 10);
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
  const us = t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!us) return null;
  return `${us[3]}-${us[1]!.padStart(2, "0")}-${us[2]!.padStart(2, "0")}`;
}

function conditionOf(raw: string): Condition | null {
  const t = raw.trim().toLowerCase();
  if (!t || t === "m" || t === "mint") return "Mint";
  if (t === "nm" || t === "near mint" || t === "nearmint") return "Near Mint";
  if (t === "g" || t === "good") return "Good";
  if (t === "d" || t === "dmg" || t === "damaged") return "Damaged";
  return CONDITIONS.find((c) => c.toLowerCase() === t) ?? null;
}

function platformOf(raw: string): Platform {
  const t = raw.trim().toLowerCase();
  return PLATFORMS.find((p) => p.toLowerCase() === t) ?? "Other";
}

function cellsOf(line: string) {
  const out: string[] = [];
  let cur = "";
  let quoted = false;
  for (const ch of line) {
    if (ch === '"') {
      quoted = !quoted;
      continue;
    }
    if (ch === "," && !quoted) {
      out.push(cur.trim());
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur.trim());
  return out;
}

function paint(finish: Finish): Figure["palette"] {
  if (finish === "metallic") return { head: "#d5d8df", body: "#9aa0a8", accent: "#e4a322" };
  if (finish === "flocked") return { head: "#e6d3a1", body: "#c4b49a", accent: "#8a5a3a" };
  if (finish === "glow") return { head: "#d8ffb0", body: "#7dcc6a", accent: "#f4fff0" };
  if (finish === "chrome") return { head: "#e6c56b", body: "#c6a15a", accent: "#f3ead7" };
  return { head: "#c4b49a", body: "#8a8070", accent: "#e4a322" };
}

function blankFigure(input: { number: string; name: string; variant: string; series: string; year: number }): Figure {
  const who = input.name;
  const line = input.series || "Imported";
  const finish: Finish = "matte";
  return {
    id: `C${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    number: input.number,
    name: who,
    character: who,
    characterKey: slug(who),
    series: line,
    line: "Pop!",
    license: "Unknown",
    year: input.year,
    country: "Unknown",
    familyId: `${slug(line)}-${input.number.replace(/\s+/g, "")}`,
    variant: input.variant || "Standard",
    isChase: false,
    exclusiveKind: "none" satisfies ExclusiveKind,
    msrp: 0,
    production: "Vaulted",
    finish,
    size: "Standard",
    palette: paint(finish),
    notes: "Added from a sale import. Fill the record if the sticker or exclusive differs.",
    sales: [],
  };
}

export function parseCompCsv(text: string, custom: Figure[]): ImportReport {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const skipped: string[] = [];
  if (!lines.length) return { sales: [], created: [], skipped: ["The sheet was empty."], attached: 0 };

  const first = cellsOf(lines[0]!).map((c) => c.toLowerCase());
  const headed = first.includes("price");
  const keys = headed ? first : ["number", "name", "price", "date", "condition", "platform", "series", "variant"];
  const body = headed ? lines.slice(1) : lines;
  const pool: Figure[] = [...custom, ...figures];
  const created: Figure[] = [];
  const sales: LoggedSale[] = [];

  body.forEach((line, index) => {
    const cells = cellsOf(line);
    const row: Record<string, string> = {};
    keys.forEach((key, i) => {
      row[key] = cells[i] ?? "";
    });
    const price = Number((row.price ?? "").replace(/[$,]/g, ""));
    if (!Number.isFinite(price) || price <= 0) {
      skipped.push(`Row ${index + 1}: price missing.`);
      return;
    }
    const date = parseDate(row.date ?? "");
    if (!date) {
      skipped.push(`Row ${index + 1}: date must be YYYY-MM-DD.`);
      return;
    }
    const condition = conditionOf(row.condition ?? "");
    if (!condition) {
      skipped.push(`Row ${index + 1}: condition must be Mint, Near Mint, Good, or Damaged.`);
      return;
    }
    const number = (row.number ?? row.box ?? "").trim();
    const name = (row.name ?? row.character ?? "").trim();
    const variant = (row.variant ?? "").trim();
    const series = (row.series ?? "").trim();
    const id = (row.id ?? "").trim();
    const year = Number(row.year) || new Date().getFullYear();

    let match: Figure | undefined;
    if (id) match = pool.find((f) => f.id === id);
    const candidates = pool.filter((f) => {
      if (number && looseNum(f.number) !== looseNum(number)) return false;
      if (name && f.name.toLowerCase() !== name.toLowerCase() && f.character.toLowerCase() !== name.toLowerCase()) return false;
      if (series && f.series.toLowerCase() !== series.toLowerCase()) return false;
      if (variant && f.variant.toLowerCase() !== variant.toLowerCase()) return false;
      return Boolean(number || name);
    });
    if (!match) {
      match = candidates.length === 1 ? candidates[0] : undefined;
    }
    if (!match && candidates.length > 1) {
      skipped.push(`Row ${index + 1}: ${candidates.length} figures share that number. Add a variant column.`);
      return;
    }
    if (!match) {
      if (!name || !number) {
        skipped.push(`Row ${index + 1}: need a name and box number to add a new figure.`);
        return;
      }
      match = blankFigure({ number, name, variant: variant || "Standard", series, year });
      created.push(match);
      pool.push(match);
    }
    sales.push({
      id: crypto.randomUUID(),
      recordId: match.id,
      date,
      price: Math.round(price),
      condition,
      platform: platformOf(row.platform ?? ""),
    });
  });

  return { sales, created, skipped, attached: sales.length - created.length };
}
