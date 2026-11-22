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

export const pulled = "22 Nov 2026";

export const brief =
  "Pre-orders opened for a Michael Jordan Tune Squad Uniform Pop and a Mystery Hello Kitty (Space) 6-pack. A retail exclusive Mr. Whatsit / Vecna Pop is listed. Solo Leveling figures are on sale at $7.50 each or $45 for a case of six including the chase. Limited Edition Black Friday drawings remain scheduled for November 23.";

export const articles: Article[] = [
  {
    id: "jordan-x",
    lane: "drops",
    where: "x",
    title: "Michael Jordan Tune Squad Uniform pre-order",
    source: "@ToysTracker",
    when: "22 Nov 2026",
    text: "Funko [$14.99]: Pop! Michael Jordan (Tune Squad Uniform) [Pre-order]",
    url: "https://x.com/ToysTracker/status/2124455982944178665",
    note: "Affiliate listing. Price is listed retail for pre-order.",
  },
  {
    id: "vecna-x",
    lane: "limited",
    where: "x",
    title: "Mr. Whatsit / Vecna retail exclusive",
    source: "@ToysTracker",
    when: "22 Nov 2026",
    text: "Funko [$14.99]: Pop! Mr. Whatsit / Vecna [Retail Exclusive]",
    url: "https://x.com/ToysTracker/status/2124446811565727945",
    note: "Affiliate listing. Price is listed retail.",
  },
  {
    id: "hello-kitty-6pack-x",
    lane: "drops",
    where: "x",
    title: "Mystery Hello Kitty (Space) 6-Pack pre-order",
    source: "@ToysTracker",
    when: "22 Nov 2026",
    text: "Funko [$89.99]: Pop! Mystery Hello Kitty (Space) 6-Pack [Pre-order]",
    url: "https://x.com/ToysTracker/status/2124352966035378183",
    note: "Affiliate listing. Price is listed retail for pre-order.",
  },
  {
    id: "solo-leveling-sale-x",
    lane: "drops",
    where: "x",
    title: "Solo Leveling sale $7.50 each or case with chase",
    source: "@FunkoPOPsNews",
    when: "22 Nov 2026",
    text: "Solo Leveling sale! Just $7.50 each .. or $45 for a case of 6 with chase!",
    url: "https://x.com/FunkoPOPsNews/status/2124347095117451314",
    note: "Affiliate link. Sale prices.",
  },
  {
    id: "le-stock-x",
    lane: "limited",
    where: "x",
    title: "Stock loaded for Nov 23 LE Black Friday drop",
    source: "@TheeUncleJerry",
    when: "21 Nov 2026",
    text: "STOCK LOADED!! FUNKO LIMITED EDITION Black Friday drop. Drawing Opens 11/23/26 9am PT/12pm ET/5pm GMT. Current stock is pictured. NO Howard the Duck showing in EU draw.",
    url: "https://x.com/TheeUncleJerry/status/2124047728762097991",
    note: "Affiliate links. Drawing opens Nov 23.",
  },
  {
    id: "hello-kitty-x",
    lane: "drops",
    where: "x",
    title: "Mystery Hello Kitty (Space) pre-order",
    source: "@ToysTracker",
    when: "21 Nov 2026",
    text: "Funko [$14.99]: Pop! Mystery Hello Kitty (Space) [Pre-order]",
    url: "https://x.com/ToysTracker/status/2124083216986583135",
    note: "Affiliate listing. Price is listed retail for pre-order.",
  },
  {
    id: "marvel-sale-x",
    lane: "drops",
    where: "x",
    title: "Marvel sale at Funko up to 70% off",
    source: "@FunkoPOPsNews",
    when: "21 Nov 2026",
    text: "Marvel sale at Funko! Up to 70% off these and more, head to the links below ~",
    url: "https://x.com/FunkoPOPsNews/status/2123968233137111211",
    note: "Affiliate links. Sale prices, not regular retail.",
  },
  {
    id: "marvel-sale-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Marvel sale at Funko up to 70% off",
    source: "@funkonews.bsky.social",
    when: "21 Nov 2026",
    text: "Marvel sale at Funko! Up to 70% off these and more, head to the links below ~ Anime ~ fnkpp.com/FSMarv All ~ fnkpp.com/FSS Exclusives ~ fnkpp.com/FSExS",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2s2ukkctc2t",
    note: "Affiliate links. Sale prices.",
  },
  {
    id: "halo-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Halo Funko Pops now live",
    source: "@funkonews.bsky.social",
    when: "20 Nov 2026",
    text: "Now Live! Halo Funko POPs! 🎮💥 Wake me, when you need me ~ No charge until ship, and free ship $79+ at EE!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2r32r7vl22e",
    note: "Affiliate links.",
  },
  {
    id: "bw-x",
    lane: "limited",
    where: "x",
    title: "First look: LE 7,500 Endgame Black Widow",
    source: "@FunkoPOPsNews",
    when: "20 Nov 2026",
    text: "First look! LE 7,500 Endgame Black Widow Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://x.com/FunkoPOPsNews/status/2123684898896523394",
    note: "Affiliate links. Drawing opens Nov 23.",
  },
  {
    id: "howard-x",
    lane: "limited",
    where: "x",
    title: "First look: LE 5,000 Power Cosmic Howard the Duck",
    source: "@FunkoPOPsNews",
    when: "20 Nov 2026",
    text: "First look! LE 5,000 Power Cosmic Howard the Duck Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://x.com/FunkoPOPsNews/status/2123685276035747966",
    note: "Affiliate links. Drawing opens Nov 23.",
  },
  {
    id: "sonic-x",
    lane: "limited",
    where: "x",
    title: "First look: LE 1,200 Cyber Corrupted Sonic",
    source: "@FunkoPOPsNews",
    when: "20 Nov 2026",
    text: "First look! LE 1,200 Corrupted Sonic Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://x.com/FunkoPOPsNews/status/2123683785581408411",
    note: "Affiliate links. Drawing opens Nov 23.",
  },
];
