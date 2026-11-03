export type Lane = "drops" | "limited" | "trades";
export type Where = "x" | "bluesky" | "web";

export type Article = {
  id: string;
  lane: Lane;
  where: Where;
  title: string;
  source: string;
  when: string;
  text: string;
  url: string;
  note?: string;
};

export const pulled = "3 Nov 2026";

export const brief =
  "Thrilljoy PIX exclusives for Mr. Incredible and Jason Voorhees revealed with chase variants, both set to drop on November 6. Mystery series for Harry Potter and Hello Kitty & Friends announced with rare chase odds including 1/1 worldwide. Black Friday sales started with 70% off on Funko exclusives. Early looks at Terrifier and Ghost of Y\u014dtei waves landing in summer 2027, plus limited Iron Man and One Piece exclusives.";

export const articles: Article[] = [
  {
    id: "incredibles-pix",
    lane: "drops",
    where: "bluesky",
    title: "Mr. Incredible PIX with Glory Days Chase and Frozone Super Chase",
    source: "@funkonews.bsky.social",
    when: "1 Nov 2026",
    text: "First peek at the new Mr. Incredible PIX! With Glory Days Chase and Frozone Super Chase! Dropping 11/6 .. 8AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzcdbczk7224",
  },
  {
    id: "jason-pix",
    lane: "drops",
    where: "x",
    title: "HT Exclusive Jason PIX with Unmasked Chase and Bloody Super Chase",
    source: "@FunkoPOPsNews",
    when: "2 Nov 2026",
    text: "Peek at the new HT Exclusive Jason PIX! With Unmasked Chase and Bloody Super Chase! Dropping 11/6 .. 8AM PT!",
    url: "https://x.com/FunkoPOPsNews/status/2117391968695451724",
  },
  {
    id: "black-friday-sale",
    lane: "limited",
    where: "x",
    title: "Black Friday sale with 70% off exclusive Funko POPs",
    source: "@FunkoPOPsNews",
    when: "2 Nov 2026",
    text: "Black Friday sale! These exclusive Funko POPs are 70% off.",
    url: "https://x.com/FunkoPOPsNews/status/2117347857258922059",
    note: "Sale prices shown are promotional discounts; check retailer for current availability.",
  },
  {
    id: "hp-mystery",
    lane: "drops",
    where: "x",
    title: "Harry Potter Pop Mystery with 1/72 Chase and 1/1 Worldwide Chase",
    source: "@ScarletJokerTWT",
    when: "2 Nov 2026",
    text: "First look at new Harry Potter Pop Mystery! Featuring a 1/72 Chase and 1/1 Worldwide Chase! Available for pre-order on Tuesday, 11/3 at 9 AM PT!",
    url: "https://x.com/ScarletJokerTWT/status/2117104417506050379",
  },
  {
    id: "hello-kitty-mystery",
    lane: "drops",
    where: "x",
    title: "Hello Kitty & Friends Pop Mystery with 1/72 Chase and 1 of 1",
    source: "@DisTrackers",
    when: "2 Nov 2026",
    text: "First look at Hello Kitty & Friends Pop Mystery! Available on Tuesday at 9AM PT. Chance at 1/72 Chase & 1 of 1.",
    url: "https://x.com/DisTrackers/status/2117105680545132776",
  },
  {
    id: "terrifier-pops",
    lane: "drops",
    where: "bluesky",
    title: "New Terrifier Funko POPs landing Summer 2027",
    source: "@funkonews.bsky.social",
    when: "1 Nov 2026",
    text: "Dinner is served. Brand new Terrifier Funko POPs! Landing this Summer 2027. Art the Clown w/ Apron, Art the Clown w/ Eyeball Chase, Jumbo: Art the Clown.",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzcalm2bm22g",
  },
  {
    id: "ghost-yotei",
    lane: "drops",
    where: "bluesky",
    title: "Ghost of Y\u014dtei Funko POPs landing Summer 2027",
    source: "@funkonews.bsky.social",
    when: "1 Nov 2026",
    text: "Vengeance is my only guide. Brand new Ghost of Y\u014dtei Funko POPs! Landing Summer 2027. Dragon, Lord Saito, Spider.",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzbzeiyqck2l",
  },
  {
    id: "iron-man-le",
    lane: "limited",
    where: "x",
    title: "LE 7,500 PCS Funko exclusive Iron Man Mark 3 POP",
    source: "@POPs_Today",
    when: "2 Nov 2026",
    text: "Better look at LE 7,500 PCS Funko exclusive Iron Man Mark 3 POP! available Nov 04th.",
    url: "https://x.com/POPs_Today/status/2117095512952488053",
  },
  {
    id: "one-piece-chopper",
    lane: "limited",
    where: "x",
    title: "CC exclusive Tony Tony Chopper and Flocked Chase One Piece POPs",
    source: "@POPs_Today",
    when: "2 Nov 2026",
    text: "First look at CC exclusive Tony Tony Chopper and Flocked Chase One Piece POPs!",
    url: "https://x.com/POPs_Today/status/2117084370544853394",
  },
  {
    id: "gogeta-sale",
    lane: "trades",
    where: "x",
    title: "Gogeta Chase and Invincible Bloody listed for sale",
    source: "@poplord169",
    when: "2 Nov 2026",
    text: "Funko Pop! Sale Free Shipping/ Protector. Gogeta Chase 35. Invincible Bloody 18.",
    url: "https://x.com/poplord169/status/2117082640427913522",
    note: "Prices are asking prices posted by the seller, not confirmed sales.",
  },
  {
    id: "thor-exclusive",
    lane: "drops",
    where: "x",
    title: "Web Exclusive Pop! Thor (God of War Ragnar\u00f6k)",
    source: "@ToysTracker",
    when: "3 Nov 2026",
    text: "Funko [$14.99]: Pop! Thor (God of War Ragnar\u00f6k) [Web Exclusive]",
    url: "https://x.com/ToysTracker/status/2117532614047252802",
    note: "Retail list price shown; availability may vary.",
  },
  {
    id: "exclusive-first-looks",
    lane: "drops",
    where: "x",
    title: "First look at exclusive POPs including Aloe Vera and Keldor",
    source: "@POPs_Today",
    when: "2 Nov 2026",
    text: "First look at exclusive POPs! - Aloe Vera (6\" inch) / Funko - Keldor / AE - Cal Raleigh / Funko HQ - Director Freddy / Funko - Kuromi / EE",
    url: "https://x.com/POPs_Today/status/2117091587515949085",
  },
];
