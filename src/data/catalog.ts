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
  line: "Pop!" | "Soda" | "Bitty Pop";
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
  line?: "Pop!" | "Soda" | "Bitty Pop";
  country?: string;
  production?: Production;
  size?: string;
};

function fig(d: Draft): Figure {
  return {
    id: d.id,
    number: d.number,
    name: d.name,
    character: d.character,
    characterKey: d.characterKey,
    series: d.series,
    line: d.line ?? "Pop!",
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
  // ... existing figures up to F000125 ...
  fig({
    id: "F000126",
    number: "1317",
    name: "Nuka Girl",
    character: "Nuka Girl",
    characterKey: "nuka-girl",
    series: "Games",
    license: "Fallout",
    year: 2026,
    familyId: "nuka-girl-fallout",
    variant: "Standard",
    finish: "matte",
    palette: { head: "#F5DEB3", body: "#FFFFFF", accent: "#FFA500" },
    base: 0,
    seed: 126,
    notes: "Pop! Games mold of Nuka Girl from Fallout, put on sale November 27 2026. Source: retailer announcements including EB Games and FunkoPOP News. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 14.99,
    line: "Pop!",
  }),
  fig({
    id: "F000127",
    number: "1649",
    name: "Red Guardian",
    character: "Red Guardian",
    characterKey: "red-guardian",
    series: "Marvel",
    license: "Avengers: Doomsday",
    year: 2026,
    familyId: "red-guardian-doomsday",
    variant: "GameStop Exclusive",
    finish: "matte",
    palette: { head: "#8B0000", body: "#8B0000", accent: "#C0C0C0" },
    base: 0,
    seed: 127,
    notes: "GameStop exclusive limited edition Pop! Marvel mold of Red Guardian from Avengers: Doomsday, 9500 pieces, dropping November 28 2026. Source: FunkoPOP News and pops.today. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 0,
    exclusiveKind: "retailer",
    retailer: "GameStop",
    editionSize: 9500,
    line: "Pop!",
  }),
];

export const sets: SetList[] = [
  // existing sets
];

// rest of the file
