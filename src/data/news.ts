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

export const pulled = "23 Nov 2026";

export const brief =
  "Limited Edition drawings opened today for several Black Friday Pops including metallic Power Cosmic Howard the Duck (LE 5,000), Kevin Owens (LE 3,500), and Cyber Corrupted Sonic (LE 1,200). New retail exclusives and pre-orders appeared for Yachiru Unohana, Spider-Man Winter Gear, and Kirisaki Kabuto. Star Wars and other Black Friday sales continue with deep discounts, and a Teddy Riner Pop is available for pre-order at FNAC.";

export const articles: Article[] = [
  {
    id: "howard-le-x",
    lane: "limited",
    where: "x",
    title: "LE 5,000 Power Cosmic Howard the Duck drawing",
    source: "@ToysTracker",
    when: "23 Nov 2026",
    text: "Funko [$24.99]: Pop! Howard the Duck (Power Cosmic) (Metallic) with Pop! Protector [Limited Edition Drawing - Ultra - 5000 pieces]",
    url: "https://x.com/ToysTracker/status/2124849142941753670",
    note: "Affiliate listing. Price is listed retail. Drawing opened today.",
  },
  {
    id: "owens-le-x",
    lane: "limited",
    where: "x",
    title: "LE 3,500 Kevin Owens drawing",
    source: "@ToysTracker",
    when: "23 Nov 2026",
    text: "Funko [$29.99]: Pop! Kevin Owens with Pop! Protector [Limited Edition Drawing - Royalty - 3500 pieces]",
    url: "https://x.com/ToysTracker/status/2124832636958912816",
    note: "Affiliate listing. Price is listed retail. Drawing opened today.",
  },
  {
    id: "sonic-le-x",
    lane: "limited",
    where: "x",
    title: "LE 1,200 Cyber Corrupted Sonic drawing",
    source: "@ToysTracker",
    when: "23 Nov 2026",
    text: "Funko [$39.99]: Pop! Cyber Corrupted Sonic with Pop! Protector [Limited Edition Drawing - Legendary - 1200 pieces]",
    url: "https://x.com/ToysTracker/status/2124856597809954824",
    note: "Affiliate listing. Price is listed retail. Drawing opened today.",
  },
  {
    id: "unohana-x",
    lane: "limited",
    where: "x",
    title: "Yachiru Unohana retail exclusive",
    source: "@ToysTracker",
    when: "23 Nov 2026",
    text: "Funko [$14.99]: Pop! Yachiru Unohana [Retail Exclusive]",
    url: "https://x.com/ToysTracker/status/2124822458465411416",
    note: "Affiliate listing. Price is listed retail.",
  },
  {
    id: "spiderman-x",
    lane: "limited",
    where: "x",
    title: "Spider-Man Winter Gear retail exclusive",
    source: "@ToysTracker",
    when: "23 Nov 2026",
    text: "Funko [$14.99]: Pop! Spider-Man (Winter Gear) [Retail Exclusive]",
    url: "https://x.com/ToysTracker/status/2124797943425188125",
    note: "Affiliate listing. Price is listed retail.",
  },
  {
    id: "kabuto-x",
    lane: "drops",
    where: "x",
    title: "Kirisaki Kabuto pre-order",
    source: "@ToysTracker",
    when: "23 Nov 2026",
    text: "Funko [$14.99]: Pop! Kirisaki Kabuto [Pre-order]",
    url: "https://x.com/ToysTracker/status/2124733565015310392",
    note: "Affiliate listing. Price is listed retail for pre-order.",
  },
  {
    id: "starwars-sale-x",
    lane: "drops",
    where: "x",
    title: "Star Wars Pops sale 50-70% off",
    source: "@FunkoPOPsNews",
    when: "23 Nov 2026",
    text: "Sale! Funko has some great deals on Star Wars POPs! At the links below.. 50-70% off ~",
    url: "https://x.com/FunkoPOPsNews/status/2124680693825274352",
    note: "Affiliate links. Sale prices, not regular retail.",
  },
  {
    id: "le-reminder-x",
    lane: "limited",
    where: "x",
    title: "Limited Edition Pops go live today at 9AM PT",
    source: "@FunkoPOPsNews",
    when: "23 Nov 2026",
    text: "Stay tuned.. Funko’s new Limited Edition POPs! Are going live tomorrow, save the links below ~ 9AM PT",
    url: "https://x.com/FunkoPOPsNews/status/2124667949210579098",
    note: "Affiliate links. Posted just before drawings opened.",
  },
  {
    id: "teddy-x",
    lane: "drops",
    where: "x",
    title: "Teddy Riner Pop pre-order at FNAC",
    source: "@FunkoEurope",
    when: "23 Nov 2026",
    text: "The only thing more impressive than being a nine-time world Judo champion? Having your own collectible 🥋🥇 POP! Teddy Riner has arrived! Pre-order now, only at FNAC.",
    url: "https://x.com/FunkoEurope/status/2124775001177899327",
    note: "Pre-order listed at FNAC. Price not stated in post.",
  },
  {
    id: "solo-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Solo Leveling sale $7.50 each or case with chase",
    source: "@funkonews.bsky.social",
    when: "22 Nov 2026",
    text: "Solo Leveling sale! Just $7.50 each .. or $45 for a case of 6 with chase!",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate link. Sale prices. Profile feed lists this recent post.",
  },
  {
    id: "marvel-sale-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Marvel sale at Funko up to 70% off",
    source: "@funkonews.bsky.social",
    when: "21 Nov 2026",
    text: "Marvel sale at Funko! Up to 70% off these and more, head to the links below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2s2ukkctc2t",
    note: "Affiliate links. Sale prices.",
  },
  {
    id: "pokemon-sale-x",
    lane: "drops",
    where: "x",
    title: "Pokemon Pops Black Friday deals under $11",
    source: "@DailyDealDropUS",
    when: "23 Nov 2026",
    text: "Charizard for under $10! Funko POP! Pokemon Charizard #843 is $9.49, normally $14.99, as a Black Friday deal.",
    url: "https://x.com/DailyDealDropUS/status/2124678177788469355",
    note: "Affiliate listing. Sale price on Amazon, not a confirmed completed public sale.",
  },
];
