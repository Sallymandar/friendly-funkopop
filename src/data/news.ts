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

export const pulled = "25 Nov 2026";

export const brief =
  "Amazon exclusive LE 5,000 Mystique for Avengers: Doomsday drops today. New Pops and Crunchyroll exclusive Frieren figures are in stock at the Funko Shop, with first looks at Stitch with Scratch. Black Friday sales continue up to 70% off on Funko.com through November 29, and Limited Edition drawings for Cyber Corrupted Sonic, Black Widow, metallic Howard the Duck, and Kevin Owens remain open from earlier this week.";

export const articles: Article[] = [
  {
    id: "mystique-le-x",
    lane: "limited",
    where: "x",
    title: "Amazon exclusive LE 5,000 Doomsday Mystique drops today",
    source: "@FunkoPOPsNews",
    when: "24 Nov 2026",
    text: "Full glams! Amazon exclusive LE 5,000 Doomsday Mystique Funko POP! Link below 11/25 ~",
    url: "https://x.com/FunkoPOPsNews/status/2125094114035130533",
    note: "Affiliate link. Amazon exclusive, limited to 5,000 pieces, drops 11/25.",
  },
  {
    id: "new-pops-x",
    lane: "drops",
    where: "x",
    title: "New Pops are in stock at Funko",
    source: "@DisTrackers",
    when: "25 Nov 2026",
    text: "New Pops are in stock at Funko!",
    url: "https://x.com/DisTrackers/status/2125502829515428242",
    note: "Affiliate link to new releases page.",
  },
  {
    id: "frieren-x",
    lane: "limited",
    where: "x",
    title: "Crunchyroll exclusive Frieren Pops in stock at Funko",
    source: "@DisTrackers",
    when: "25 Nov 2026",
    text: "Crunchyroll exclusive Frieren Pops are in stock at Funko!",
    url: "https://x.com/DisTrackers/status/2125498212723413288",
    note: "Affiliate link. Crunchyroll exclusives now available at Funko Shop.",
  },
  {
    id: "stitch-x",
    lane: "drops",
    where: "x",
    title: "First look at Stitch with Scratch Pop",
    source: "@DisTrackers",
    when: "25 Nov 2026",
    text: "First look at Stitch with Scratch Pop!",
    url: "https://x.com/DisTrackers/status/2125500469229605254",
  },
  {
    id: "rumi-x",
    lane: "limited",
    where: "x",
    title: "Pop! Rumi (HUNTR/X) Retail Exclusive",
    source: "@ToysTracker",
    when: "25 Nov 2026",
    text: "Funko [$14.99]: Pop! Rumi (HUNTR/X) [Retail Exclusive]",
    url: "https://x.com/ToysTracker/status/2125535019045130398",
    note: "Affiliate link. Listed retail price $14.99 on Funko.com.",
  },
  {
    id: "frieren-shop-x",
    lane: "limited",
    where: "x",
    title: "Exclusive Frieren Funko Pops available at Funko Shop",
    source: "@pop_holmes",
    when: "25 Nov 2026",
    text: "Available at Funko shop - Exclusive Frieren Funko Pops - VHS Covers Frieren, Frieren & Fern 2-Pack",
    url: "https://x.com/pop_holmes/status/2125507667699355808",
    note: "Affiliate link. Funko Shop exclusives.",
  },
  {
    id: "stock-x",
    lane: "drops",
    where: "x",
    title: "Multiple Pops in stock at Funko Shop including HUNTR/X and others",
    source: "@pop_holmes",
    when: "25 Nov 2026",
    text: "These are also in stock at Funko Shop- Mira (HUNTR/X), Rumi (HUNTR/X), Remy with Cooking Spoon, Pingu (Crying Meme), Premium Spider-Man (Like A Boss Meme), Roz, Lighting McQueen (Kachow), Mater with Jet Pack",
    url: "https://x.com/pop_holmes/status/2125508513724043741",
    note: "Affiliate link.",
  },
  {
    id: "sanji-x",
    lane: "limited",
    where: "x",
    title: "Funko Shop exclusive Wanted Poster Sanji available",
    source: "@OPMerchandise",
    when: "24 Nov 2026",
    text: "Funko Shop exclusive Funko Pop! Wanted Poster Sanji is available at the Funko Shop. Link: ... $24.99. Free shipping on orders $65+",
    url: "https://x.com/OPMerchandise/status/2125046635575349722",
    note: "Affiliate link. Listed price $24.99, free shipping over $65.",
  },
  {
    id: "le-calendar-web",
    lane: "limited",
    where: "web",
    title: "Limited Edition Funko POP! Drop Calendar",
    source: "funko.com",
    when: "25 Nov 2026",
    text: "Funko.com Exclusives drawings open for Cyber Corrupted Sonic ($39.99, 1,200 pieces), Black Widow ($19.99), Howard the Duck Power Cosmic Metallic ($24.99, 5,000), Kevin Owens ($29.99, 3,500). Amazon LE exclusive drops 11/25 (5,000 pieces).",
    url: "https://funko.com/limited-edition-calendar.html",
    note: "Retail list prices. Drawings opened 11/23; Amazon exclusive drops today.",
  },
  {
    id: "bf-sale-web",
    lane: "drops",
    where: "web",
    title: "Black Friday sale up to 70% off on Funko.com",
    source: "Hip2Save / Billboard",
    when: "24 Nov 2026",
    text: "Through November 29th, up to 70% off select Funko Pop! figures including KPop Demon Hunters, Stitch, and A Court of Thorns & Roses on Funko.com.",
    url: "https://hip2save.com/deals/funko-pop-figures/",
    note: "Sale prices. Ends November 29. Some items final sale.",
  },
  {
    id: "funkonews-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Recent Funko POP! News updates on Bluesky",
    source: "@funkonews.bsky.social",
    when: "23 Nov 2026",
    text: "Weekly guides, exclusives like Bon Clay and others, and sales notes from the profile feed covering recent drops and pre-orders.",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Profile aggregates recent posts. Affiliate links common. Check for latest specific drops.",
  },
  {
    id: "funkodrop-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Automated new releases and sales on Drop Bot",
    source: "@funkodrop.bsky.social",
    when: "23 Nov 2026",
    text: "Bot posts new releases (e.g. Art the Clown Mini XL, Ayrton Senna) and sales (e.g. The Rock to $4.50) tracked from Funko.com.",
    url: "https://bsky.app/profile/funkodrop.bsky.social",
    note: "Automated bot. Prices are listed retail or current sale prices from Funko.com. Profile shows recent activity.",
  },
];
