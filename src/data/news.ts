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

export const pulled = "27 Nov 2026";

export const brief =
  "New One Piece Pops restocked at Funko Shop while first looks and store sightings of the GameStop exclusive LE 9,500 Red Guardian Avengers Doomsday Pop continue ahead of its November 28 drop. Exclusive T.J. Watt Steelers figure first looks appeared alongside new wave announcements for The Dark Knight Trilogy and Family Guy. Funko Shop listed new releases including Remy with Cooking Spoon and Spice Girls keychains, with ongoing sales on select figures.";

export const articles: Article[] = [
  {
    id: "one-piece-x",
    lane: "drops",
    where: "x",
    title: "New One Piece Pops in stock at Funko",
    source: "@DisTrackers",
    when: "27 Nov 2026",
    text: "New One Piece Pops are in stock at Funko!",
    url: "https://x.com/DisTrackers/status/2126242416722379256",
    note: "Affiliate link. Restock of new One Piece Pops at Funko Shop.",
  },
  {
    id: "red-guardian-spotted-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Doomsday Red Guardian spotted in stores ahead of 11/28",
    source: "@funkonews.bsky.social",
    when: "27 Nov 2026",
    text: "Spotted in stores! Doomsday Red Guardian Funko POP! 🛡️🏎️ Keep an eye out.. official release date is 11/28 ~ Early Linky ~ fnkpp.com/GSRed SKU ~ 443276",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3b2bwrkzs2o",
    note: "Affiliate link. Limited to 9,500 pieces, official drop 11/28 at GameStop.",
  },
  {
    id: "tj-watt-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look at exclusive T.J. Watt 1933 Throwback Pop",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "First Look! Exclusive T.J. Watt (1933 Throwback) Funko POP! 🏈🖤 Here we go, Steelers! Coming soon..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3aucnamqk2o",
  },
  {
    id: "dark-knight-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New The Dark Knight Trilogy Pops landing next week",
    source: "@funkonews.bsky.social",
    when: "27 Nov 2026",
    text: "Why so serious? 🦇🃏 Brand new The Dark Knight Trilogy Funko POPs! Landing next week .. ~ Bank Robber Joker with Chase ~ Deluxe: Batman (Rubble) ~ Deluxe: Joker (UV)",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3bdmgno3c2o",
  },
  {
    id: "family-guy-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New Family Guy Pops landing next week",
    source: "@funkonews.bsky.social",
    when: "27 Nov 2026",
    text: "Freakin' sweet! 🐶🍺 Brand new Family Guy Funko POPs! Landing next week .. ~ Brian Griffin ~ Peter Griffin ~ Glenn Quagmire ~ Meg Griffin",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3bacwgbdk2o",
  },
  {
    id: "remy-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New Pixar Remy with Cooking Spoon Pop",
    source: "@funkodrop.bsky.social",
    when: "27 Nov 2026",
    text: "🆕 NEW RELEASE [Pixar] ✨ New Pop! Remy with Cooking Spoon Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n3bzwtogwj2t",
    note: "Automated bot. Listed retail price $14.99 on Funko.com.",
  },
  {
    id: "dean-sale-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Sale on Supernatural Dean Winchester Pop",
    source: "@funkodrop.bsky.social",
    when: "27 Nov 2026",
    text: "🏷️ SALE [Supernatural] ✨ Pop! Dean Winchester Was: $14.99 → Now: $11.24",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n3bpuupyab2e",
    note: "Automated bot tracking Funko.com. Sale from listed retail $14.99 to $11.24.",
  },
  {
    id: "spice-keychain-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New Spice Girls Sporty Spice keychain Pop",
    source: "@funkodrop.bsky.social",
    when: "27 Nov 2026",
    text: "🆕 NEW RELEASE [Spice Girls] ✨ New Pop! Keychain Sporty Spice Price: $4.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n3bfsvgxo42e",
    note: "Automated bot. Listed retail price $4.99 on Funko.com.",
  },
  {
    id: "red-guardian-glams-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Full glams for LE 9,500 Doomsday Red Guardian",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "Full glams for the new LE 9,500 Doomsday Red Guardian Funko POP! 🛡️🏎️ We are the New Avengerz! Early Linky ~ fnkpp.com/GSRed Exclusively at GameStop land ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3b2bwrkzs2o",
    note: "Affiliate link. Limited edition 9,500 pieces.",
  },
  {
    id: "deku-bsky",
    lane: "drops",
    where: "bluesky",
    title: "In hand look at new Deku My Hero Academia Pop",
    source: "@funkonews.bsky.social",
    when: "27 Nov 2026",
    text: "In hand and OOB with the amazing new Deku Funko POP! Grab this boy at the links below ~ EE ~ fnkpp.com/EEMHA Amzn ~ fnkpp.com/AmMHA FS ~ fnkpp.com/FSMHA",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n3av5aoorc2o",
    note: "Affiliate links. Recent availability at EE, Amazon, Funko Shop.",
  },
];
