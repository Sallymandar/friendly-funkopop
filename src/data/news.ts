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

export const pulled = "16 Nov 2026";

export const brief =
  "The Apothecary Diaries wave, including the Funko Shop exclusive Hanfu Maomao and Chase, dropped this morning at 9AM PT with stock updates circulating. Black Friday exclusives and ornament sales are in their final early-access window. The weekly Funko POP guide summarized the past seven days of releases, while a new Pocket Pop Maomao & Jinshi 2-Pack appeared on the drop bot.";

export const articles: Article[] = [
  {
    id: "apothecary-drop-x",
    lane: "drops",
    where: "x",
    title: "Apothecary Diaries drop live today: Maomao, Jinshi and Chase",
    source: "@TheeUncleJerry",
    when: "16 Nov 2026",
    text: "STOCK/DROP UPDATE!! TODAY.. Monday, 11/16/26 9am PST/12pm EST The Apothecary Diaries • Pop! Maomao (Dancing) [Funko Exclusive] • Pop! Maomao (w/Chase) • Pop! Jinshi • Pocket Pop! Maomao & Jinshi 2-Pack. Current Stock is pictured. Buy 6 MaoMao for a guaranteed CHASE!",
    url: "https://x.com/TheeUncleJerry/status/2122260521420292487",
    note: "Affiliate link. Stock pictured; confirm live availability.",
  },
  {
    id: "weekly-guide-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Weekly Funko POP! Guide covering the past 7 days",
    source: "@funkonews.bsky.social",
    when: "15 Nov 2026",
    text: "Weekly Funko POP! Guide! Here’s everything that released in the past 7 days .. links below! Exclusives.. Jack, Meg, Smoker, Doc ~ OOS, Gizmo, Professor Pyg, Master Chief",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2exsg76sc2d",
    note: "Affiliate links. Guide post; verify individual stock.",
  },
  {
    id: "exclusives-sale-x",
    lane: "limited",
    where: "x",
    title: "Last day of early access for Funko’s Black Friday exclusives sale",
    source: "@FunkoPOPsNews",
    when: "16 Nov 2026",
    text: "Exclusives sale! Last day of early access for Funko’s Black Friday sale .. links below ~",
    url: "https://x.com/FunkoPOPsNews/status/2122178712657690884",
    note: "Affiliate links. Early access reported; confirm discounts.",
  },
  {
    id: "exclusives-sale-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Black Friday exclusives sale last day of early access",
    source: "@funkonews.bsky.social",
    when: "16 Nov 2026",
    text: "Exclusives sale! Last day of early access for Funko’s Black Friday sale .. links below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2fnmfhy3k2x",
    note: "Affiliate links.",
  },
  {
    id: "maomao-pocket-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Pocket Pop! Maomao & Jinshi 2-Pack",
    source: "@funkodrop.bsky.social",
    when: "16 Nov 2026",
    text: "🆕 NEW RELEASE [The Apothecary Diaries] ✨ New Pocket Pop! Maomao & Jinshi 2-Pack Price: $9.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2glvpywhc27",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
  {
    id: "wheeljack-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Transformers Wheeljack 40th Anniversary Pop",
    source: "@funkodrop.bsky.social",
    when: "16 Nov 2026",
    text: "🆕 NEW RELEASE [Transformers] ✨ New Pop! Wheeljack (40th Anniversary) Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2gbtqsq7z2o",
    note: "Retail list price from drop bot.",
  },
  {
    id: "ornament-sale-x",
    lane: "limited",
    where: "x",
    title: "Black Friday discounts on exclusive Funko Hallmark ornaments",
    source: "@FunkoPOPsNews",
    when: "16 Nov 2026",
    text: "Ornament sale! Black Friday discounts on exclusive Funko Hallmark pieces .. head to the link below! Note ~ log in, usa, fan rewards member",
    url: "https://x.com/FunkoPOPsNews/status/2122170590651879728",
    note: "Affiliate links. Fan Rewards required.",
  },
  {
    id: "weekly-guide-x",
    lane: "drops",
    where: "x",
    title: "Weekly Funko POP! Guide with links to recent releases",
    source: "@FunkoPOPsNews",
    when: "15 Nov 2026",
    text: "Weekly Funko POP! Guide! Here’s everything that released in the past 7 days .. links below! Exclusives.. Jack, Meg, Smoker, Doc ~ OOS, Gizmo, Professor Pyg, Master Chief",
    url: "https://x.com/FunkoPOPsNews/status/2122080782818623510",
    note: "Affiliate links.",
  },
  {
    id: "hanfu-maomao-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Funko Shop exclusive Hanfu Maomao going live Monday",
    source: "@funkonews.bsky.social",
    when: "15 Nov 2026",
    text: "Apothecary Diaries fans! Funko Shop exclusive Hanfu Maomao POP! 🌸🌿 Going live Monday.. link below ~ 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2czuu3is22d",
    note: "Affiliate link. Drop window announced.",
  },
  {
    id: "doctor-doom-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Now live: Doctor Doom Funko POPs for Doomsday",
    source: "@funkonews.bsky.social",
    when: "15 Nov 2026",
    text: "Now live! Prepare for Doomsday with some sweet Doctor Doom Funko POPs! And more! Head to the links below..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2cf3r7sik2l",
    note: "Affiliate links.",
  },
  {
    id: "cooper-flagg-x",
    lane: "limited",
    where: "x",
    title: "Target Exclusive Dallas Mavericks Cooper Flagg Funko Pop available now",
    source: "@funkofinderz",
    when: "15 Nov 2026",
    text: "🏀 Target Exclusive Dallas Mavericks Cooper Flagg Funko Pop! is available now online!",
    url: "https://x.com/funkofinderz/status/2121956498414747981",
    note: "Affiliate link. Confirm stock on Target.",
  },
  {
    id: "bttf-exclusive-x",
    lane: "limited",
    where: "x",
    title: "Back to the Future Exclusive Plutonium Glow Doc Brown available",
    source: "@pop_holmes",
    when: "15 Nov 2026",
    text: "Back to the Future Exclusive Plutonium Glow Doc Brown & Einstein Funko Pop is available at Ozzie Collectibles for Europe and US",
    url: "https://x.com/pop_holmes/status/2121909687209639961",
    note: "Affiliate link. Third-party retailer.",
  },
];
