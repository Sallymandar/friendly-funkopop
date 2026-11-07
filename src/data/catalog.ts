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
  fig({
    id: "F000090",
    number: "1634",
    name: "Iron Man Mark 3",
    character: "Iron Man",
    characterKey: "iron-man",
    series: "Marvel",
    license: "The Infinity Saga",
    year: 2026,
    familyId: "iron-man-mark-3",
    variant: "Limited Edition Glow",
    finish: "glow",
    palette: { head: "#C0C0C0", body: "#8B0000", accent: "#FFD700" },
    base: 0,
    seed: 90,
    notes: "Hot Topic exclusive limited edition glow Pop! from The Infinity Saga, 7500 pieces, released November 2026. Source: ComicBook.com and Hot Topic announcements. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 19.9,
    exclusiveKind: "retailer",
    retailer: "Hot Topic",
    editionSize: 7500,
    sticker: "Limited Edition Elite",
  }),
  fig({
    id: "F000091",
    number: "1648",
    name: "Professor X",
    character: "Professor X",
    characterKey: "professor-x",
    series: "Marvel",
    license: "Avengers: Doomsday",
    year: 2026,
    familyId: "professor-x-doomsday",
    variant: "Seated",
    finish: "matte",
    palette: { head: "#F5DEB3", body: "#191970", accent: "#808080" },
    base: 0,
    seed: 91,
    notes: "Target exclusive limited edition Pop! from Avengers: Doomsday, 9500 pieces, scheduled for November 8 2026. Source: ComicBook.com. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 19.99,
    exclusiveKind: "retailer",
    retailer: "Target",
    editionSize: 9500,
  }),
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
