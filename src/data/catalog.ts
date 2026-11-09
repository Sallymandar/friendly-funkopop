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
  fig({
    id: "F000092",
    number: "2090",
    name: "Art the Clown",
    character: "Art the Clown",
    characterKey: "art-the-clown",
    series: "Movies",
    license: "Terrifier 3",
    year: 2026,
    familyId: "art-the-clown-terrifier",
    variant: "Seated Cobweb Scare Fair",
    finish: "matte",
    palette: { head: "#FFFFFF", body: "#000000", accent: "#FFFF00" },
    base: 0,
    seed: 92,
    notes: "Hot Topic Scare Fair exclusive seated Pop! Movies mold of Art the Clown from Terrifier 3, now in stores. Source: Hot Topic listing and FunkoPOP News. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 15.9,
    exclusiveKind: "retailer",
    retailer: "Hot Topic",
    sticker: "Scare Fair 2026",
  }),
  fig({
    id: "F000093",
    number: "n/a",
    name: "Tigerzord with White Ranger",
    character: "Tigerzord",
    characterKey: "tigerzord",
    series: "Movies",
    license: "Power Rangers",
    year: 2026,
    familyId: "tigerzord-white-ranger",
    variant: "Bitty Bot",
    finish: "matte",
    palette: { head: "#FFA500", body: "#FFFFFF", accent: "#0000FF" },
    base: 0,
    seed: 93,
    notes: "Walmart exclusive Bitty Pop Bitty Bot of Tigerzord with White Ranger, now live on Funko Shop. Source: Funko product page. Guide average is not a logged sale.",
    line: "Bitty Pop",
    size: "Bitty",
    production: "In production",
    msrp: 19.99,
    exclusiveKind: "retailer",
    retailer: "Walmart",
  }),
  fig({
    id: "F000094",
    number: "1983",
    name: "Jack Kline",
    character: "Jack Kline",
    characterKey: "jack-kline",
    series: "Television",
    license: "Supernatural",
    year: 2026,
    familyId: "jack-kline-supernatural",
    variant: "Standard",
    finish: "matte",
    palette: { head: "#F5DEB3", body: "#4169E1", accent: "#FFFFFF" },
    base: 0,
    seed: 94,
    notes: "Funko web exclusive Pop! Television mold of Jack Kline from Supernatural, with chance of glow chase, dropping November 9 2026. Source: Funko product page. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 14.99,
    exclusiveKind: "retailer",
    retailer: "Funko",
    isChase: false,
    chaseRatio: "1/6",
  }),
  fig({
    id: "F000095",
    number: "1979",
    name: "Meg Masters",
    character: "Meg Masters",
    characterKey: "meg-masters",
    series: "Television",
    license: "Supernatural",
    year: 2026,
    familyId: "meg-masters-supernatural",
    variant: "Standard",
    finish: "matte",
    palette: { head: "#F5DEB3", body: "#2F4F4F", accent: "#C0C0C0" },
    base: 0,
    seed: 95,
    notes: "Funko web exclusive Pop! Television mold of Meg Masters from Supernatural, dropping November 9 2026. Source: Funko product page. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 14.99,
    exclusiveKind: "retailer",
    retailer: "Funko",
  }),
  fig({
    id: "F000096",
    number: "653",
    name: "Professor Pyg",
    character: "Professor Pyg",
    characterKey: "professor-pyg",
    series: "Heroes",
    license: "Batman",
    year: 2026,
    familyId: "professor-pyg-batman",
    variant: "Standard",
    finish: "matte",
    palette: { head: "#FFC0CB", body: "#000000", accent: "#00FF00" },
    base: 0,
    seed: 96,
    notes: "GameStop exclusive limited edition Pop! Heroes mold of Professor Pyg from Batman, 9500 pieces, scheduled for November 11 2026. Source: FunkoPOP News and pops.today. Guide average is not a logged sale.",
    size: "Standard",
    production: "In production",
    msrp: 19.99,
    exclusiveKind: "retailer",
    retailer: "GameStop",
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
  {
    id: "supernatural-2026",
    name: "Supernatural 2026",
    blurb: "Funko web exclusive Pop! Television figures of Jack Kline (with glow chase) and Meg Masters from Supernatural, dropping November 9 2026.",
    recordIds: ["F000094", "F000095"],
  },
];

// rest of the file
