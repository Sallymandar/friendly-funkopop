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

export const pulled = "28 Nov 2026";

export const brief =
  "Funko Europe highlighted the limited edition Red Guardian Pop limited to 9,500 pieces now available at various European retailers. NYCC and ECCC Dragon Wrymling LE Pops restocked at Funko Shop with a chance at a con sticker. New releases including Pingu Crying Meme and Spice Girls Posh Spice keychain listed on Funko.com, while Black Friday sales continue through Sunday and Marvel Archives Wave 2 went live.";

export const articles: Article[] = [
  {
    id: "red-guardian-europe-x",
    lane: "limited",
    where: "x",
    title: "LE 9,500 Red Guardian available at European retailers",
    source: "@FunkoEurope",
    when: "28 Nov 2026",
    text: "Maybe our latest LIMITED EDITION does a little too much, but he’s doing his best. POP! MARVEL Red Guardian is limited to 9,500 pcs worldwide.",
    url: "https://x.com/FunkoEurope/status/2126617119576010791",
    note: "Limited to 9,500 pieces worldwide. Available at listed European stores and events.",
  },
  {
    id: "wrymling-restock-x",
    lane: "limited",
    where: "x",
    title: "NYCC & ECCC Dragon Wrymling LE Pops in stock at Funko",
    source: "@DisTrackers",
    when: "28 Nov 2026",
    text: "NYCC & ECCC Dragon Wrymling LE Pops are in stock at Funko! Chance at con sticker for Brass.",
    url: "https://x.com/DisTrackers/status/2126532547790454914",
    note: "Affiliate link. Restock of limited edition convention Pops.",
  },
  {
    id: "black-friday-sale-x",
    lane: "drops",
    where: "x",
    title: "Funko Black Friday sale ends Sunday Night",
    source: "@FunkoPOPsNews",
    when: "28 Nov 2026",
    text: "Funko’s Black Friday sale ends Sunday Night! Grab those deals while you can.. links below ~",
    url: "https://x.com/FunkoPOPsNews/status/2126531673617506410",
    note: "Affiliate links to Funko Shop category sales.",
  },
  {
    id: "doctor-doom-diecast-x",
    lane: "limited",
    where: "x",
    title: "Web Exclusive Die-Cast Doctor Doom (Doomsday) listed",
    source: "@ToysTracker",
    when: "28 Nov 2026",
    text: "Funko [$49.99]: Pop! Die-Cast Doctor Doom (Doomsday) [Web Exclusive]",
    url: "https://x.com/ToysTracker/status/2126592751491842123",
    note: "Affiliate. Listed retail price $49.99 on Funko.com as web exclusive.",
  },
  {
    id: "kirisaki-kabuto-x",
    lane: "drops",
    where: "x",
    title: "Pre-order for Pop! Kirisaki Kabuto",
    source: "@ToysTracker",
    when: "28 Nov 2026",
    text: "Funko [$14.99]: Pop! Kirisaki Kabuto [Pre-order]",
    url: "https://x.com/ToysTracker/status/2126645490380898466",
    note: "Affiliate. Listed retail price $14.99 on Funko.com for pre-order.",
  },
  {
    id: "black-friday-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Black Friday sale ends Sunday Night",
    source: "@funkonews.bsky.social",
    when: "28 Nov 2026",
    text: "Funko’s Black Friday sale ends Sunday Night! Grab those deals while you can.. links below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3du3a57rc2m",
    note: "Affiliate links to Funko Shop sales categories.",
  },
  {
    id: "marvel-archives-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Wave 2 Marvel Archives Pops now live",
    source: "@funkonews.bsky.social",
    when: "27 Nov 2026",
    text: "Now Live! Wave 2 of the Marvel Archives Funko POPs! 🤖⚡ Are in stock and shipping out below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3d67tmfks2s",
    note: "Affiliate links. Available at Funko Shop (later date), EE, Amazon.",
  },
  {
    id: "pingu-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New Pingu Crying Meme Pop released",
    source: "@funkodrop.bsky.social",
    when: "28 Nov 2026",
    text: "🆕 NEW RELEASE [Pingu] ✨ New Pop! Pingu (Crying Meme) Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n3ekgyqyfw2e",
    note: "Automated bot. Listed retail price $14.99 on Funko.com.",
  },
  {
    id: "posh-spice-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Retail Exclusive Posh Spice keychain Pop",
    source: "@funkodrop.bsky.social",
    when: "28 Nov 2026",
    text: "🆕 NEW RELEASE [Spice Girls] ✨ Retail Exclusive Pop! Keychain Posh Spice Price: $4.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n3eaeznlkk2t",
    note: "Automated bot. Listed retail price $4.99 on Funko.com as retail exclusive.",
  },
  {
    id: "fast-furious-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Fast & Furious Pop Rides now live",
    source: "@funkonews.bsky.social",
    when: "27 Nov 2026",
    text: "Now Live! Fast & Furious Funko POP! Rides! 🏎️💨 I don't have friends. I got family ~ No charge until ship, and free ship $79+ at EE!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3crxzp2g22m",
    note: "Affiliate links. Available at EE, Amazon later.",
  },
];
