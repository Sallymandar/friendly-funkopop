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

export const pulled = "15 Nov 2026";

export const brief =
  "Target’s exclusive Dallas Mavericks Cooper Flagg Pop is available online again. Funko Shop exclusive Hanfu Maomao from The Apothecary Diaries is set to go live Monday at 9AM PT, with the Chase already shown in-hand. Doctor Doom and Jeff the Landshark collections went live, while a Catwoman with Candy Cane restock and One Piece Black Friday sale were flagged.";

export const articles: Article[] = [
  {
    id: "cooper-flagg-x",
    lane: "limited",
    where: "x",
    title: "Target Exclusive Dallas Mavericks Cooper Flagg Funko Pop available now",
    source: "@funkofinderz",
    when: "15 Nov 2026",
    text: "🏀 Target Exclusive Dallas Mavericks Cooper Flagg Funko Pop! is available now online!",
    url: "https://x.com/funkofinderz/status/2121956498414747981",
    note: "Affiliate link in original post. Confirm stock on Target.",
  },
  {
    id: "cooper-flagg-back-x",
    lane: "limited",
    where: "x",
    title: "Target exclusive Cooper Flagg is back up",
    source: "@DisTrackers",
    when: "15 Nov 2026",
    text: "Target exclusive Cooper Flagg is back up!",
    url: "https://x.com/DisTrackers/status/2121925742934258105",
    note: "Affiliate link. Restock report; confirm current availability.",
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
    note: "Affiliate link. Confirmed drop window, not yet live.",
  },
  {
    id: "chase-maomao-bsky",
    lane: "limited",
    where: "bluesky",
    title: "In-hand look at the new Chase Maomao from Apothecary Diaries",
    source: "@funkonews.bsky.social",
    when: "14 Nov 2026",
    text: "In hand and OOB with the cute new Chase Maomao Funko POP! From Apothecary Diaries.. available below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2c6u66zyk2j",
    note: "Affiliate links. FS exclusive drops Monday.",
  },
  {
    id: "doctor-doom-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Now live: Doctor Doom Funko POPs and more for Doomsday",
    source: "@funkonews.bsky.social",
    when: "14 Nov 2026",
    text: "Now live! Prepare for Doomsday with some sweet Doctor Doom Funko POPs! And more! Head to the links below..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2cf3r7sik2l",
    note: "Affiliate links in original post.",
  },
  {
    id: "jeff-landshark-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Now live: Jeff the Landshark collection",
    source: "@funkonews.bsky.social",
    when: "14 Nov 2026",
    text: "Now live! Jeff the Landshark collection at the links below.. make sure to feed him ~ 🦈",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2bwcsxznk2v",
    note: "Affiliate links.",
  },
  {
    id: "catwoman-restock-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Back in stock: DC Comics Catwoman with Candy Cane Pop",
    source: "@funkodrop.bsky.social",
    when: "14 Nov 2026",
    text: "🔄 BACK IN STOCK [DC Comics] ✨ Pop! Catwoman with Candy Cane Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2brxyfqt522",
    note: "Retail list price from drop bot; confirm current stock on Funko.com.",
  },
  {
    id: "one-piece-sale-x",
    lane: "trades",
    where: "x",
    title: "One Piece Black Friday sale live",
    source: "@FunkoPOPsNews",
    when: "15 Nov 2026",
    text: "One Piece sale! Be sure to take advantage of the Black Friday sale.. while you can ~ Links below!",
    url: "https://x.com/FunkoPOPsNews/status/2121795966940455207",
    note: "Affiliate links. Sale reported; confirm discounts on site.",
  },
  {
    id: "hello-kitty-preorder-x",
    lane: "drops",
    where: "x",
    title: "Pre-order open for Pop! Mystery Hello Kitty (Space) 6-Pack",
    source: "@ToysTracker",
    when: "15 Nov 2026",
    text: "Funko [$89.99]: Pop! Mystery Hello Kitty (Space) 6-Pack [Pre-order]",
    url: "https://x.com/ToysTracker/status/2121951220516499919",
    note: "Affiliate link. Retail list price.",
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
    note: "Affiliate link. Third-party retailer availability.",
  },
  {
    id: "nemesis-q-x",
    lane: "drops",
    where: "x",
    title: "Web Exclusive Pop! Nemesis Q listed",
    source: "@ToysTracker",
    when: "15 Nov 2026",
    text: "Funko [$14.99]: Pop! Nemesis Q [Web Exclusive]",
    url: "https://x.com/ToysTracker/status/2121904459190005876",
    note: "Affiliate link. Retail list price.",
  },
  {
    id: "bitty-tigerzord-x",
    lane: "drops",
    where: "x",
    title: "Retail Exclusive Bitty Pop Tigerzord with White Ranger",
    source: "@ToysTracker",
    when: "15 Nov 2026",
    text: "Funko [$19.99]: Bitty Pop! Bitty Bot Tigerzord with White Ranger [Retail Exclusive]",
    url: "https://x.com/ToysTracker/status/2121939255555703025",
    note: "Affiliate link. Retail list price.",
  },
];
