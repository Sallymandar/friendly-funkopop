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

export const pulled = "21 Nov 2026";

export const brief =
  "Stock loaded for the November 23 Funko Limited Edition Black Friday drawing covering Endgame Black Widow, Power Cosmic Howard the Duck, WWE Kevin Owens, and Cyber Corrupted Sonic. Pre-order opened for a Mystery Hello Kitty (Space) Pop. Funko is running a Marvel sale with up to 70% off selected figures. Collector WTS posts appeared for older Pops including Shuri and BTS figures.";

export const articles: Article[] = [
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
    id: "bw-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look: LE 7,500 Endgame Black Widow",
    source: "@funkonews.bsky.social",
    when: "20 Nov 2026",
    text: "First look! LE 7,500 Endgame Black Widow Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2q3wwtorc2z",
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
  {
    id: "shuri-trade-x",
    lane: "trades",
    where: "x",
    title: "WTS Black Panther Shuri Pops",
    source: "@pkxpkk",
    when: "21 Nov 2026",
    text: "พร้อมส่ง / wts Funko Pop – Black Panther — Shuri (1173) — Shuri (1103) — Shuri Keyring ราคาตามภาพ ส่งฟรี (เหมา 3 ชิ้น 650 บาท ส่งฟรี)",
    url: "https://x.com/pkxpkk/status/2124075509235806423",
    note: "Asking prices listed in image; individual seller post.",
  },
  {
    id: "bts-trade-x",
    lane: "trades",
    where: "x",
    title: "WTS BTS Jin Funko Pop and merch",
    source: "@pauuu_jeonx",
    when: "21 Nov 2026",
    text: "WTS LFB BTS BT21 TINY TAN MERCH Decluttering~ All for 1.5K (w/ FREE RANDOM BTS PC) - Army Bomb SE - Jin Funko Pop - BT21 and Tiny Tan Merch",
    url: "https://x.com/pauuu_jeonx/status/2124070515510051141",
    note: "Asking price for bundle; individual seller.",
  },
  {
    id: "godzilla-x",
    lane: "limited",
    where: "x",
    title: "Target limited edition Godzilla Hedorah",
    source: "@ToysTracker",
    when: "20 Nov 2026",
    text: "Target [$19.99]: Funko POP! Limited Edition: Godzilla • Hedorah (Flying Stage) Vinyl Figure #2125",
    url: "https://x.com/ToysTracker/status/2123765960309952865",
    note: "Affiliate listing. Price is listed retail.",
  },
];
