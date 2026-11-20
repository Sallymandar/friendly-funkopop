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

export const pulled = "20 Nov 2026";

export const brief =
  "Funko revealed first looks at four limited edition Pops for a November 23 raffle: Endgame Black Widow limited to 7,500 pieces, Power Cosmic Howard the Duck to 5,000, WWE Kevin Owens to 3,500, and Cyber Corrupted Sonic to 1,200. Target listed a limited edition Godzilla Hedorah. Pre-orders opened for Mystery Harry Potter packs and a Badtz-Maru space suit exclusive.";

export const articles: Article[] = [
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
    id: "howard-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look: LE 5,000 Power Cosmic Howard the Duck",
    source: "@funkonews.bsky.social",
    when: "20 Nov 2026",
    text: "First look! LE 5,000 Power Cosmic Howard the Duck Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2q3zq23lk2z",
    note: "Affiliate links. Drawing opens Nov 23.",
  },
  {
    id: "ko-x",
    lane: "limited",
    where: "x",
    title: "First look: LE 3,500 WWE Kevin Owens",
    source: "@FunkoPOPsNews",
    when: "20 Nov 2026",
    text: "First look! LE 3,500 WWE Kevin Owens Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://x.com/FunkoPOPsNews/status/2123684506741719048",
    note: "Affiliate links. Drawing opens Nov 23.",
  },
  {
    id: "ko-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look: LE 3,500 WWE Kevin Owens",
    source: "@funkonews.bsky.social",
    when: "20 Nov 2026",
    text: "First look! LE 3,500 WWE Kevin Owens Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2q3ubmm622z",
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
    id: "sonic-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look: LE 1,200 Cyber Corrupted Sonic",
    source: "@funkonews.bsky.social",
    when: "20 Nov 2026",
    text: "First look! LE 1,200 Corrupted Sonic Funko POP! Landing at the links below .. 11/23 ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2q3p34uuc2z",
    note: "Affiliate links. Drawing opens Nov 23.",
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
  {
    id: "hp-x",
    lane: "drops",
    where: "x",
    title: "Mystery Harry Potter 6-Pack pre-order",
    source: "@ToysTracker",
    when: "20 Nov 2026",
    text: "Funko [$89.99]: Pop! Mystery Harry Potter 6-Pack [Pre-order]",
    url: "https://x.com/ToysTracker/status/2123747630329270330",
    note: "Affiliate listing. Price is listed retail for pre-order.",
  },
  {
    id: "badtz-x",
    lane: "drops",
    where: "x",
    title: "Badtz-Maru Space Suit retail exclusive",
    source: "@ToysTracker",
    when: "20 Nov 2026",
    text: "Funko [$14.99]: Pop! Badtz-Maru (Space Suit) [Retail Exclusive]",
    url: "https://x.com/ToysTracker/status/2123731201164816397",
    note: "Affiliate listing. Price is listed retail.",
  },
  {
    id: "le-summary-x",
    lane: "limited",
    where: "x",
    title: "First look at Nov 23 Funko exclusive LE Pops",
    source: "@POPs_Today",
    when: "20 Nov 2026",
    text: "First look at Funko exclusive LE POPs! available Nov 23 - Black Widow 7,500 - Kevin Owens 3,500 - Howard 5,000 - Sonic 1,200",
    url: "https://x.com/POPs_Today/status/2123705953501753781",
  },
];
