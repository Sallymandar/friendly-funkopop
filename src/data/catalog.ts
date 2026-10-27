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
    msrp: d.msrp ?? (d.size === "10-inch" ? 24.99 : 11.99),
    production: "Vaulted",
    finish: d.finish,
    size: d.size ?? "Standard",
    palette: d.palette,
    notes: d.notes,
    sales: [],
  };
}

export const figures: Figure[] = [
  fig({
    id: "F000001",
    number: "01",
    name: "Batman",
    character: "Batman",
    characterKey: "batman",
    series: "Heroes",
    license: "DC",
    year: 2010,
    familyId: "batman-01",
    variant: "Standard",
    finish: "matte",
    palette: { head: "#1c1c1c", body: "#6d7b89", accent: "#e2b340" },
    boxStyle: "Blue Heroes window",
    base: 48,
    seed: 3,
    notes: "The common #01 from the 2010 Heroes line. Grey suit, yellow belt, black cowl. Vaulted.",
  }),
  fig({
    id: "F000002",
    number: "01",
    name: "Batman",
    character: "Batman",
    characterKey: "batman",
    series: "Heroes",
    license: "DC",
    year: 2010,
    familyId: "batman-01",
    variant: "Metallic Chase",
    finish: "metallic",
    isChase: true,
    chaseRatio: "1/6",
    sticker: "Chase",
    palette: { head: "#2a2a2e", body: "#9aa0a8", accent: "#d4af37" },
    boxStyle: "Blue Heroes window",
    base: 105,
    seed: 8,
    notes: "Metallic chase of #01. Case ratio is the commonly cited 1/6, not a printed factory guarantee. Confirm the chase sticker.",
  }),
  fig({
    id: "F000003",
    number: "01",
    name: "Batman",
    character: "Batman",
    characterKey: "batman",
    series: "Heroes",
    license: "DC",
    year: 2010,
    familyId: "batman-01",
    variant: "Blue Metallic",
    finish: "metallic",
    exclusiveKind: "convention",
    convention: "SDCC 2010",
    retailer: "San Diego Comic-Con",
    editionSize: 480,
    sticker: "SDCC 2010",
    palette: { head: "#16182a", body: "#3c5fbf", accent: "#e2b340" },
    boxStyle: "Blue Heroes window",
    base: 1900,
    seed: 2,
    notes: "SDCC 2010 blue metallic. Most listings cite a 480-piece run. A separate 24-piece blue metallic is sometimes mentioned — read the sticker before you treat it as the same figure.",
  }),
  fig({
    id: "F000004",
    number: "01",
    name: "Batman",
    character: "Batman",
    characterKey: "batman",
    series: "Heroes",
    license: "DC",
    year: 2010,
    familyId: "batman-01",
    variant: "1989 Classic",
    finish: "matte",
    exclusiveKind: "retailer",
    retailer: "GameStop",
    sticker: "GameStop",
    palette: { head: "#111111", body: "#1a1a1a", accent: "#d8d8d8" },
    boxStyle: "Blue Heroes window",
    base: 72,
    seed: 5,
    notes: "Filed on collector checklists as a #01 GameStop exclusive in the 1989 suit. Same number as the standard, different sculpt and sticker.",
  }),
  fig({
    id: "F000010",
    number: "239",
    name: "Godzilla",
    character: "Godzilla",
    characterKey: "godzilla",
    series: "Movies",
    license: "Toho",
    year: 2015,
    familyId: "godzilla-239",
    variant: "Standard",
    finish: "matte",
    palette: { head: "#2f6b3a", body: "#3e8f4c", accent: "#d8d2c4" },
    boxStyle: "Movies window",
    country: "Worldwide",
    base: 36,
    seed: 4,
    notes: "Common green Godzilla from the 2014 film, released November 2015 as Pop! Movies #239. Dorsal fins on the box art run higher than on the figure.",
  }),
  fig({
    id: "F000011",
    number: "239",
    name: "Godzilla",
    character: "Godzilla",
    characterKey: "godzilla",
    series: "Movies",
    license: "Toho",
    year: 2015,
    familyId: "godzilla-239",
    variant: "Original Black & White",
    finish: "matte",
    exclusiveKind: "convention",
    convention: "NYCC 2015",
    retailer: "Toy Tokyo",
    sticker: "NYCC 2015",
    palette: { head: "#d9d4cc", body: "#1c1c1c", accent: "#f3ead7" },
    base: 150,
    seed: 6,
    notes: "Toy Tokyo exclusive sold at New York Comic-Con, October 8–11, 2015. Black and white, no convention-less twin.",
  }),
  fig({
    id: "F000012",
    number: "239",
    name: "Godzilla",
    character: "Godzilla",
    characterKey: "godzilla",
    series: "Movies",
    license: "Toho",
    year: 2015,
    familyId: "godzilla-239",
    variant: "Ghost Glow",
    finish: "glow",
    exclusiveKind: "convention",
    convention: "NYCC 2015",
    retailer: "Toy Tokyo",
    sticker: "NYCC 2015",
    palette: { head: "#d8ffb0", body: "#9dff6a", accent: "#f4fff0" },
    base: 185,
    seed: 7,
    notes: "Same NYCC Toy Tokyo drop as the black and white, distinguished by the glow finish. Do not lump it with a shared-sticker retail glow.",
  }),
  fig({
    id: "F000013",
    number: "239",
    name: "Godzilla",
    character: "Godzilla",
    characterKey: "godzilla",
    series: "Movies",
    license: "Toho",
    year: 2015,
    familyId: "godzilla-239",
    variant: "Burning",
    finish: "matte",
    exclusiveKind: "retailer",
    retailer: "GTS Distribution",
    sticker: "GTS",
    palette: { head: "#8a3018", body: "#c4552a", accent: "#f0c14a" },
    base: 95,
    seed: 1,
    notes: "GTS Distribution exclusive. Retailer-only, no convention. Orange burning paint, not a glow chase.",
  }),
  fig({
    id: "F000014",
    number: "239",
    name: "Godzilla",
    character: "Godzilla",
    characterKey: "godzilla",
    series: "Movies",
    license: "Toho",
    year: 2015,
    familyId: "godzilla-239",
    variant: "Atomic Breath",
    finish: "glow",
    exclusiveKind: "retailer",
    retailer: "PX Previews",
    sticker: "PX",
    palette: { head: "#245c40", body: "#3e8f4c", accent: "#b8ffe0" },
    base: 120,
    seed: 9,
    notes: "PX Previews glow exclusive. Retailer sticker, not the NYCC Toy Tokyo glow. The breath paint is the tell.",
  }),
  fig({
    id: "F000015",
    number: "239",
    name: "Godzilla",
    character: "Godzilla",
    characterKey: "godzilla",
    series: "Movies",
    license: "Toho",
    year: 2015,
    familyId: "godzilla-239",
    variant: "Books-A-Million",
    finish: "matte",
    exclusiveKind: "retailer",
    retailer: "Books-A-Million",
    sticker: "Books-A-Million",
    palette: { head: "#8a8f99", body: "#6e7580", accent: "#7a4ea3" },
    base: 78,
    seed: 11,
    notes: "Grey skin, white eyes, purple dorsal fins. Retailer exclusive with its own sticker — not a shared convention sticker.",
  }),
  fig({
    id: "F000020",
    number: "353",
    name: "Pikachu",
    character: "Pikachu",
    characterKey: "pikachu",
    series: "Games",
    license: "Pokémon",
    year: 2018,
    familyId: "pikachu-353",
    variant: "Standard",
    finish: "matte",
    exclusiveKind: "retailer",
    retailer: "Target",
    sticker: "Only at Target",
    palette: { head: "#f2c14e", body: "#f2c14e", accent: "#e24b3b" },
    base: 22,
    seed: 2,
    notes: "Released July 19, 2018 as a Target exclusive. No convention. The shared sticker is the red Target tab, not a show sticker.",
  }),
  fig({
    id: "F000021",
    number: "353",
    name: "Pikachu",
    character: "Pikachu",
    characterKey: "pikachu",
    series: "Games",
    license: "Pokémon",
    year: 2018,
    familyId: "pikachu-353",
    variant: "Flocked",
    finish: "flocked",
    exclusiveKind: "retailer",
    retailer: "Target",
    sticker: "Only at Target",
    palette: { head: "#e6c36a", body: "#efd48a", accent: "#c4473a" },
    base: 48,
    seed: 6,
    notes: "Flocked #353. Same retailer tab as the smooth vinyl, different surface. Not a 1/6 chase.",
  }),
  fig({
    id: "F000022",
    number: "353",
    name: "Pikachu",
    character: "Pikachu",
    characterKey: "pikachu",
    series: "Games",
    license: "Pokémon",
    year: 2021,
    familyId: "pikachu-353",
    variant: "Silver Metallic",
    finish: "metallic",
    exclusiveKind: "shared",
    sticker: "Pokémon 25",
    palette: { head: "#d5d8df", body: "#c5c9d1", accent: "#c9a227" },
    base: 34,
    seed: 4,
    notes: "Silver metallic with the shared Pokémon 25th sticker. Not a Target-only drop and not a convention piece. The sticker is the shared anniversary tab.",
  }),
  fig({
    id: "F000023",
    number: "353",
    name: "Pikachu",
    character: "Pikachu",
    characterKey: "pikachu",
    series: "Games",
    license: "Pokémon",
    year: 2018,
    familyId: "pikachu-353",
    variant: "10-inch",
    finish: "matte",
    size: "10-inch",
    exclusiveKind: "retailer",
    retailer: "Target",
    sticker: "Only at Target",
    palette: { head: "#f2c14e", body: "#f2c14e", accent: "#e24b3b" },
    base: 55,
    seed: 8,
    notes: "10-inch #353, Target exclusive, November 16, 2018. Same number as the 4-inch. Size is the variant, not a new mold family.",
  }),
  fig({
    id: "F000024",
    number: "353",
    name: "Pikachu",
    character: "Pikachu",
    characterKey: "pikachu",
    series: "Games",
    license: "Pokémon",
    year: 2021,
    familyId: "pikachu-353",
    variant: "10-inch Silver",
    finish: "metallic",
    size: "10-inch",
    exclusiveKind: "convention",
    retailer: "Target",
    convention: "Target Con 2021",
    sticker: "Target Con",
    palette: { head: "#e4e7ee", body: "#cfd3dc", accent: "#d4af37" },
    base: 72,
    seed: 10,
    notes: "10-inch silver metallic, Target Con exclusive, February 26, 2021. Distinguish from the shared Pokémon 25 silver: this one carries the Target Con sticker.",
  }),
  fig({
    id: "F000030",
    number: "593",
    name: "Spider-Man",
    character: "Spider-Man",
    characterKey: "spider-man",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "spidey-593",
    variant: "First Appearance",
    finish: "matte",
    palette: { head: "#b4332a", body: "#2f4ea8", accent: "#111111" },
    base: 28,
    seed: 3,
    notes: "Marvel 80 Years first-appearance Spider-Man, #593. The common of this pair.",
  }),
  fig({
    id: "F000031",
    number: "593",
    name: "Spider-Man",
    character: "Spider-Man",
    characterKey: "spider-man",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "spidey-593",
    variant: "First Appearance Metallic",
    finish: "metallic",
    exclusiveKind: "retailer",
    retailer: "Hot Topic",
    sticker: "Hot Topic",
    palette: { head: "#d4564c", body: "#4d6ed0", accent: "#f3ead7" },
    base: 42,
    seed: 7,
    notes: "Hot Topic metallic of #593. Retailer exclusive, not a convention chase and not the common.",
  }),
  fig({
    id: "F000040",
    number: "546",
    name: "Deadpool",
    character: "Deadpool",
    characterKey: "deadpool",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "deadpool-546",
    variant: "First Appearance",
    finish: "matte",
    palette: { head: "#c4372f", body: "#c4372f", accent: "#1a1a1a" },
    base: 30,
    seed: 5,
    notes: "First-appearance Deadpool, #546. A different number from the BoxLunch metallic.",
  }),
  fig({
    id: "F000041",
    number: "590",
    name: "Deadpool",
    character: "Deadpool",
    characterKey: "deadpool",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "deadpool-590",
    variant: "First Appearance Metallic",
    finish: "metallic",
    exclusiveKind: "retailer",
    retailer: "BoxLunch",
    sticker: "BoxLunch",
    palette: { head: "#e06a62", body: "#d4554e", accent: "#f4efe6" },
    base: 46,
    seed: 9,
    notes: "BoxLunch metallic, #590. Linked by character, not by box number — it is not a variant of #546.",
  }),
  fig({
    id: "F000050",
    number: "547",
    name: "Wolverine",
    character: "Wolverine",
    characterKey: "wolverine",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "wolverine-547",
    variant: "First Appearance",
    finish: "matte",
    palette: { head: "#e6c87a", body: "#c9a24a", accent: "#1c3a6e" },
    base: 32,
    seed: 2,
    notes: "First-appearance Wolverine, #547, from the Marvel 80 Years wave.",
  }),
  fig({
    id: "F000051",
    number: "551",
    name: "Black Widow",
    character: "Black Widow",
    characterKey: "black-widow",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "widow-551",
    variant: "First Appearance",
    finish: "matte",
    palette: { head: "#1a1a1a", body: "#1a1a1a", accent: "#c4372f" },
    base: 26,
    seed: 4,
    notes: "First-appearance Black Widow, #551. Not the gold chrome #380.",
  }),
  fig({
    id: "F000052",
    number: "552",
    name: "Scarlet Witch",
    character: "Scarlet Witch",
    characterKey: "scarlet-witch",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "witch-552",
    variant: "First Appearance",
    finish: "matte",
    palette: { head: "#6b2a3a", body: "#8a3048", accent: "#e24b3b" },
    base: 34,
    seed: 6,
    notes: "First-appearance Scarlet Witch, #552.",
  }),
  fig({
    id: "F000053",
    number: "502",
    name: "Cyclops",
    character: "Cyclops",
    characterKey: "cyclops",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "cyclops-502",
    variant: "First Appearance",
    finish: "matte",
    palette: { head: "#1c3a6e", body: "#c9a24a", accent: "#c4372f" },
    base: 24,
    seed: 1,
    notes: "Common #502. The GameStop bundle glow is the same number with a different sticker.",
  }),
  fig({
    id: "F000054",
    number: "502",
    name: "Cyclops",
    character: "Cyclops",
    characterKey: "cyclops",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "cyclops-502",
    variant: "First Appearance Glow",
    finish: "glow",
    exclusiveKind: "retailer",
    retailer: "GameStop",
    sticker: "GameStop",
    palette: { head: "#9ecbff", body: "#d8c27a", accent: "#ff8a7a" },
    base: 40,
    seed: 8,
    notes: "Glow #502 from the GameStop tee bundle. Same number as the common, different finish and sticker.",
  }),
  fig({
    id: "F000060",
    number: "375",
    name: "Iron Man",
    character: "Iron Man",
    characterKey: "iron-man",
    series: "Marvel",
    license: "Marvel",
    year: 2018,
    familyId: "iron-375",
    variant: "Gold Chrome",
    finish: "chrome",
    sticker: "Marvel 10 Years",
    exclusiveKind: "shared",
    palette: { head: "#e6c56b", body: "#c6a15a", accent: "#f3ead7" },
    base: 18,
    seed: 3,
    notes: "Marvel Studios The First Ten Years gold chrome, #375. Shared anniversary sticker, wide release.",
  }),
  fig({
    id: "F000061",
    number: "377",
    name: "Captain America",
    character: "Captain America",
    characterKey: "captain-america",
    series: "Marvel",
    license: "Marvel",
    year: 2018,
    familyId: "cap-377",
    variant: "Gold Chrome",
    finish: "chrome",
    sticker: "Marvel 10 Years",
    exclusiveKind: "shared",
    palette: { head: "#e6c56b", body: "#3d5ea8", accent: "#f3ead7" },
    base: 16,
    seed: 5,
    notes: "Gold chrome Captain America, #377. Shared 10 Years sticker.",
  }),
  fig({
    id: "F000062",
    number: "379",
    name: "Hulk",
    character: "Hulk",
    characterKey: "hulk",
    series: "Marvel",
    license: "Marvel",
    year: 2018,
    familyId: "hulk-379",
    variant: "Gold Chrome",
    finish: "chrome",
    sticker: "Marvel 10 Years",
    exclusiveKind: "shared",
    palette: { head: "#d6b85a", body: "#7ea35a", accent: "#f3ead7" },
    base: 16,
    seed: 7,
    notes: "Gold chrome Hulk, #379.",
  }),
  fig({
    id: "F000063",
    number: "381",
    name: "Thor",
    character: "Thor",
    characterKey: "thor",
    series: "Marvel",
    license: "Marvel",
    year: 2018,
    familyId: "thor-381",
    variant: "Gold Chrome",
    finish: "chrome",
    sticker: "Marvel 10 Years",
    exclusiveKind: "shared",
    palette: { head: "#e6c56b", body: "#8a3030", accent: "#f3ead7" },
    base: 16,
    seed: 9,
    notes: "Gold chrome Thor, #381.",
  }),
  fig({
    id: "F000064",
    number: "380",
    name: "Black Widow",
    character: "Black Widow",
    characterKey: "black-widow",
    series: "Marvel",
    license: "Marvel",
    year: 2018,
    familyId: "widow-380",
    variant: "Gold Chrome",
    finish: "chrome",
    sticker: "Marvel 10 Years",
    exclusiveKind: "shared",
    palette: { head: "#1c1c1c", body: "#2a2a2a", accent: "#e6c56b" },
    base: 15,
    seed: 2,
    notes: "Gold chrome Black Widow, #380. Same character as #551, different line and number.",
  }),
  fig({
    id: "F000070",
    number: "497",
    name: "Captain America",
    character: "Captain America",
    characterKey: "captain-america",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "cap-497",
    variant: "Patina",
    finish: "matte",
    exclusiveKind: "retailer",
    retailer: "Target",
    sticker: "Only at Target",
    palette: { head: "#6e8f9a", body: "#3d5c6e", accent: "#c4b48a" },
    base: 20,
    seed: 4,
    notes: "Marvel 80 Years patina, Target exclusive, #497. Retailer sticker, no convention.",
  }),
  fig({
    id: "F000071",
    number: "498",
    name: "Iron Man",
    character: "Iron Man",
    characterKey: "iron-man",
    series: "Marvel",
    license: "Marvel",
    year: 2019,
    familyId: "iron-498",
    variant: "Patina",
    finish: "matte",
    exclusiveKind: "retailer",
    retailer: "Target",
    sticker: "Only at Target",
    palette: { head: "#8a7048", body: "#6b4e32", accent: "#d8c7a4" },
    base: 20,
    seed: 6,
    notes: "Patina Iron Man, Target exclusive, #498.",
  }),
];

export const sets: SetList[] = [
  {
    id: "batman-01",
    name: "Batman #01",
    blurb: "Every #01 in this ledger — common, chase, convention, and the GameStop classic.",
    recordIds: ["F000001", "F000002", "F000003", "F000004"],
  },
  {
    id: "godzilla-239",
    name: "Godzilla #239",
    blurb: "The 2015 movie Pop and the retailer and NYCC paints that share the number.",
    recordIds: ["F000010", "F000011", "F000012", "F000013", "F000014", "F000015"],
  },
  {
    id: "pikachu-353",
    name: "Pikachu #353",
    blurb: "Target common, flocked, shared 25th silver, and both 10-inch sizes.",
    recordIds: ["F000020", "F000021", "F000022", "F000023", "F000024"],
  },
  {
    id: "gold-chrome",
    name: "Gold Chrome Ten Years",
    blurb: "The chrome Avengers that are in this ledger. Not the entire real-world wave.",
    recordIds: ["F000060", "F000061", "F000062", "F000063", "F000064"],
  },
  {
    id: "first-appearances",
    name: "Marvel first appearances",
    blurb: "A slice of the 80 Years first-appearance wave, including the metallic and glow twins.",
    recordIds: ["F000030", "F000031", "F000040", "F000041", "F000050", "F000051", "F000052", "F000053", "F000054"],
  },
];

export const sampleShelves: SampleShelf[] = [
  {
    id: "deathmated",
    name: "Deathmated",
    place: "Public sample",
    note: "A sample public shelf so the floor has someone to trade with. Not a real account.",
    items: [
      { recordId: "F000003", qty: 1, box: "Near Mint", paid: 1400, side: "have" },
      { recordId: "F000002", qty: 1, box: "Mint", paid: 80, side: "sale", ask: 120 },
      { recordId: "F000001", qty: 1, box: "Mint", paid: 0, side: "want" },
      { recordId: "F000012", qty: 1, box: "Mint", paid: 160, side: "sale", ask: 210 },
    ],
  },
  {
    id: "window-light",
    name: "Window Light",
    place: "Public sample",
    note: "Hunts commons and sells flocked.",
    items: [
      { recordId: "F000021", qty: 1, box: "Mint", paid: 30, side: "sale", ask: 55 },
      { recordId: "F000010", qty: 1, box: "Mint", paid: 0, side: "want" },
      { recordId: "F000020", qty: 2, box: "Near Mint", paid: 12, side: "have" },
    ],
  },
  {
    id: "case-only",
    name: "Case Only",
    place: "Public sample",
    note: "Chrome set, one piece short.",
    items: [
      { recordId: "F000060", qty: 1, box: "Mint", paid: 14, side: "have" },
      { recordId: "F000061", qty: 1, box: "Mint", paid: 12, side: "have" },
      { recordId: "F000062", qty: 1, box: "Mint", paid: 12, side: "have" },
      { recordId: "F000063", qty: 1, box: "Mint", paid: 11, side: "have" },
      { recordId: "F000064", qty: 1, box: "Mint", paid: 0, side: "want" },
    ],
  },
];

export const byId = new Map(figures.map((f) => [f.id, f]));

export function resolveFigure(id: string, extra: Figure[] = []) {
  return extra.find((f) => f.id === id) ?? byId.get(id);
}

export function getFigure(id: string) {
  return byId.get(id);
}

export function familyOf(figure: Figure, extra: Figure[] = []) {
  return [...extra, ...figures].filter((f) => f.familyId === figure.familyId);
}

export function othersOfCharacter(figure: Figure, extra: Figure[] = []) {
  return [...extra, ...figures].filter((f) => f.characterKey === figure.characterKey && f.familyId !== figure.familyId);
}

export const seriesNames = [...new Set(figures.map((f) => f.series))];
