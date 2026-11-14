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

export const pulled = "14 Nov 2026";

export const brief =
  "GameStop’s Limited Edition One Piece Live Action Smoker POP (LE 9,500) went live and sold through quickly. The Apothecary Diaries wave, including a Funko Exclusive Maomao (Dancing) and chase, has a confirmed Monday 11/16 drop. Hazbin Hotel’s latest wave received its official reveal and is available to pre-order, while the Funko Drop Bot flagged several restocks and a deep discount on Ahsoka.";

export const articles: Article[] = [
  {
    id: "smoker-gs-x",
    lane: "limited",
    where: "x",
    title: "Now live! GameStop exclusive LE 9,500 Smoker Funko POP",
    source: "@FunkoPOPsNews",
    when: "13 Nov 2026",
    text: "Now live! GameStop exclusive LE 9,500 Smoker Funko POP! 💨 link below ⬇️",
    url: "https://x.com/FunkoPOPsNews/status/2121308301640265960",
    note: "Affiliate link in original post. Limited to 9,500 pieces.",
  },
  {
    id: "smoker-gs-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Now live! GameStop exclusive LE 9,500 Smoker Funko POP",
    source: "@funkonews.bsky.social",
    when: "13 Nov 2026",
    text: "Now live! GameStop exclusive LE 9,500 Smoker Funko POP! 💨 link below ⬇️",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n27ma3dsbk2e",
    note: "Affiliate link in original post. Limited to 9,500 pieces.",
  },
  {
    id: "apothecary-drop-x",
    lane: "drops",
    where: "x",
    title: "Apothecary Diaries Pops release date set for Monday 11/16",
    source: "@TheeUncleJerry",
    when: "14 Nov 2026",
    text: "Release date SET Monday, 11/16/26 9am PST/12pm EST. The Apothecary Diaries: Pop! Maomao (Dancing) [Funko Exclusive], Pop! Maomao (w/Chase), Pop! Jinshi, Pocket Pop! Maomao & Jinshi 2-Pack. Stock soon.",
    url: "https://x.com/TheeUncleJerry/status/2121555272153870662",
    note: "Affiliate post. Confirmed drop window, not yet live.",
  },
  {
    id: "hazbin-reveal-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Officially reveal for the latest Hazbin Hotel Funko POPs",
    source: "@funkonews.bsky.social",
    when: "13 Nov 2026",
    text: "Officially reveal for the latest Hazbin Hotel Funko POPs! Available below ~ EE / Amzn / FS",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n27qkvupos23",
    note: "Affiliate links in original post. Available to order.",
  },
  {
    id: "kpdh-zoey-bsky",
    lane: "drops",
    where: "bluesky",
    title: "K-Pop Demon Hunters Zoey piece dropping very soon",
    source: "@funkonews.bsky.social",
    when: "13 Nov 2026",
    text: "K-Pop Demon Hunters fans! The final piece of the Puzzle with Zoey should be dropping very soon.. already arrived over seas ~ stay tuned!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2a6p3fzb22c",
    note: "Affiliate links. Not yet confirmed live.",
  },
  {
    id: "talladega-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Brand new Talladega Nights Funko POPs landing next week",
    source: "@funkonews.bsky.social",
    when: "13 Nov 2026",
    text: "Shake and bake! 🏁🏎️ Brand new Talladega Nights Funko POPs! Landing next week .. ~ 2-Pack: Ricky & Cal ~ Jean Girard",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n264ubfx3c2s",
  },
  {
    id: "venger-restock-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Back in stock: D&D Book Covers Venger Pop",
    source: "@funkodrop.bsky.social",
    when: "14 Nov 2026",
    text: "🔄 BACK IN STOCK [Dungeons & Dragons] ✨ Pop! Book Covers 2024 Dungeon Master's Guide - Venger Price: $24.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2bhvyukks24",
    note: "Retail list price from drop bot; confirm current stock.",
  },
  {
    id: "ahsoka-sale-bsky",
    lane: "trades",
    where: "bluesky",
    title: "Sale: Ahsoka with Sabers Pop now $4.50",
    source: "@funkodrop.bsky.social",
    when: "13 Nov 2026",
    text: "🏷️ SALE [Star Wars] ✨ Pop! Ahsoka with Sabers Was: $14.99 → Now: $4.50",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n27ajouor62x",
    note: "Sale price reported by drop bot; confirm on Funko.com before buying.",
  },
  {
    id: "espeon-restock-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Back in stock: Pokémon Espeon Pop",
    source: "@funkodrop.bsky.social",
    when: "13 Nov 2026",
    text: "🔄 BACK IN STOCK [Pokémon] ✨ Pop! Espeon Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n26wcjgrki2m",
    note: "Retail list price from drop bot; confirm current stock.",
  },
  {
    id: "doey-preorder-x",
    lane: "drops",
    where: "x",
    title: "Pre-order open for Pop! Doey the Doughman",
    source: "@ToysTracker",
    when: "14 Nov 2026",
    text: "Funko [$14.99]: Pop! Doey the Doughman [Pre-order]",
    url: "https://x.com/ToysTracker/status/2121587159601742176",
    note: "Affiliate link. Retail list price.",
  },
  {
    id: "hazbin-checkin-x",
    lane: "drops",
    where: "x",
    title: "Original Funko checking in on newest Hazbin Hotel collection",
    source: "@OriginalFunko",
    when: "13 Nov 2026",
    text: "Just checking in! 🛎️ How are we feeling about the newest Hazbin Hotel collection?",
    url: "https://x.com/OriginalFunko/status/2121317321012613584",
    note: "Official account post with link to the collection page.",
  },
];
