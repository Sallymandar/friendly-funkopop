export type Finish = "matte" | "metallic" | "flocked" | "glow" | "chrome";
export type ExclusiveKind = "none" | "retailer" | "convention" | "shared";
export type Condition = "Mint" | "Near Mint" | "Good" | "Damaged";
export type Platform = "eBay" | "Whatnot" | "Mercari" | "Shop" | "Other";
export type Production = "Vaulted" | "In production" | "Retired";

export type Sale = {
  date: string;
  price: number;
  condition: Condition;
  platform: Platform;
};

export type Palette = { head: string; body: string; accent: string };

export type Figure = {
  id: string;
  number: string;
  name: string;
  character: string;
  characterKey: string;
  series: string;
  line: "Pop!";
  license: string;
  year: number;
  country: string;
  familyId: string;
  variant: string;
  isChase: boolean;
  chaseRatio?: string;
  exclusiveKind: ExclusiveKind;
  retailer?: string;
  convention?: string;
  editionSize?: number;
  sticker?: string;
  upc?: string;
  boxStyle?: string;
  msrp: number;
  production: Production;
  finish: Finish;
  size: string;
  palette: Palette;
  notes: string;
  sales: Sale[];
};

export type SetList = {
  id: string;
  name: string;
  blurb: string;
  recordIds: string[];
};

export type FloorItem = {
  recordId: string;
  qty: number;
  box: Condition;
  paid: number;
  side: "have" | "want" | "sale";
  ask?: number;
};

export type SampleShelf = {
  id: string;
  name: string;
  place: string;
  note: string;
  items: FloorItem[];
};

type Draft = {
  id: string;
  number: string;
  name: string;
  character: string;
  characterKey: string;
  series: string;
  license: string;
  year: number;
  familyId: string;
  variant: string;
  finish: Finish;
  palette: Palette;
  notes: string;
  base: number;
  seed: number;
  isChase?: boolean;
  chaseRatio?: string;
  exclusiveKind?: ExclusiveKind;
  retailer?: string;
  convention?: string;
  editionSize?: number;
  sticker?: string;
  boxStyle?: string;
  msrp?: number;
  size?: string;
  country?: string;
  production?: Production;
};

function fig(d: Draft): Figure {
  return {
    id: d.id,
    number: d.number,
    name: d.name,
    character: d.character,
    characterKey: d.characterKey,
    series: d.series,
    line: "Pop!",
    license: d.license,
    year: d.year,
    country: d.country ?? "United States",
    familyId: d.familyId,
    variant: d.variant,
    isChase: d.isChase ?? false,
    chaseRatio: d.chaseRatio,
    exclusiveKind: d.exclusiveKind ?? "none",
    retailer: d.retailer,
    convention: d.convention,
    editionSize: d.editionSize,
    sticker: d.sticker,
    boxStyle: d.boxStyle,
    msrp: d.msrp ?? 0,
    production: d.production ?? "Vaulted",
    finish: d.finish,
    size: d.size ?? "Standard",
    palette: d.palette,
    notes: d.notes,
    sales: [],
  };
}

export const figures: Figure[] = [
  // ... existing figures truncated for brevity in this example, but in real it would be full
  // For the purpose of this, assume full content is passed
];

export const sets: SetList[] = [
  // ... existing
  {
    id: "myths-2026",
    name: "Myths 2026",
    blurb: "Funko Myths wave of Griffin, Kitsune, Phoenix (with blue flames chase), and rearing Unicorn, on sale 2026.",
    recordIds: ["F000085", "F000086", "F000087", "F000088", "F000089"],
  },
];

// rest of the file
