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

export const pulled = "19 Nov 2026";

export const brief =
  "DC Comics Funko Pops went on sale claiming up to 70% off. Hot Topic exclusive Diamond Jack Skellington with Zero went live, alongside new releases for Gallade, Yachiru Unohana, and the web exclusive TheBurntPeanut. First peek at Loungefly Bitty Pops Harry Potter edition, and a limited edition Stitch in Bath drawing plus Twilight exclusive Moment pre-order opened.";

export const articles: Article[] = [
  {
    id: "dc-sale-x",
    lane: "trades",
    where: "x",
    title: "DC Comics sale up to 70% off",
    source: "@FunkoPOPsNews",
    when: "19 Nov 2026",
    text: "DC Comics sale! Up to 70% off these Funko POPs! And more.. head to the links below ~",
    url: "https://x.com/FunkoPOPsNews/status/2123245134552953200",
    note: "Affiliate links. Discount claimed; confirm on site.",
  },
  {
    id: "dc-sale-bsky",
    lane: "trades",
    where: "bluesky",
    title: "DC Comics sale up to 70% off",
    source: "@funkonews.bsky.social",
    when: "19 Nov 2026",
    text: "DC Comics sale! Up to 70% off these Funko POPs! And more.. head to the links below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2n2fzwxs22i",
    note: "Affiliate links. Discount claimed; confirm on site.",
  },
  {
    id: "jack-x",
    lane: "drops",
    where: "x",
    title: "Hot Topic exclusive Diamond Jack Skellington w/ Zero now live",
    source: "@FunkoPOPsNews",
    when: "18 Nov 2026",
    text: "Now Live! Hot Topic exclusive Diamond Jack Skellington w/ Zero Funko POP! 💀🎃 What's this? What's this?",
    url: "https://x.com/FunkoPOPsNews/status/2123104712811831583",
    note: "Direct link. Confirm live availability.",
  },
  {
    id: "jack-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Hot Topic exclusive Diamond Jack Skellington w/ Zero now live",
    source: "@funkonews.bsky.social",
    when: "18 Nov 2026",
    text: "Now Live! Hot Topic exclusive Diamond Jack Skellington w/ Zero Funko POP! 💀🎃 What's this? What's this?",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2m34dh3422g",
    note: "Affiliate link. Confirm live availability.",
  },
  {
    id: "burnt-x",
    lane: "drops",
    where: "x",
    title: "The Burnt Peanut Funko POP now live",
    source: "@FunkoPOPsNews",
    when: "18 Nov 2026",
    text: "Now Live! The Burnt Peanut Funko POP! 🥜🔥 LET'S RIDE!!",
    url: "https://x.com/FunkoPOPsNews/status/2123128767942144053",
    note: "Affiliate link.",
  },
  {
    id: "burnt-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Web Exclusive Pop! TheBurntPeanut",
    source: "@funkodrop.bsky.social",
    when: "18 Nov 2026",
    text: "🆕 NEW RELEASE [TheBurntPeanut] ✨ Web Exclusive Pop! TheBurntPeanut Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2mlte7jty2s",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
  {
    id: "gallade-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Pop! Gallade",
    source: "@funkodrop.bsky.social",
    when: "19 Nov 2026",
    text: "🆕 NEW RELEASE [Pokémon] ✨ New Pop! Gallade Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2o65egvrz2o",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
  {
    id: "yachiru-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Retail Exclusive Pop! Yachiru Unohana",
    source: "@funkodrop.bsky.social",
    when: "19 Nov 2026",
    text: "🆕 NEW RELEASE [Bleach] ✨ Retail Exclusive Pop! Yachiru Unohana Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2nu3f33o72v",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
  {
    id: "loungefly-x",
    lane: "limited",
    where: "x",
    title: "First peek at Loungefly Bitty POPs Harry Potter",
    source: "@FunkoPOPsNews",
    when: "19 Nov 2026",
    text: "First peek at the very first Loungefly Bitty POPs! With this Harry Potter edition, landing soon..",
    url: "https://x.com/FunkoPOPsNews/status/2123222984936546575",
  },
  {
    id: "loungefly-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First peek at Loungefly Bitty POPs Harry Potter",
    source: "@funkonews.bsky.social",
    when: "19 Nov 2026",
    text: "First peek at the very first Loungefly Bitty POPs! With this Harry Potter edition, landing soon..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2mvezqaj22t",
  },
  {
    id: "twilight-x",
    lane: "limited",
    where: "x",
    title: "Exclusive Twilight POP! Moment Edward & Bella pre-order",
    source: "@FunkoEurope",
    when: "19 Nov 2026",
    text: "This is the shelf of a collector, Bella. Bring home the exclusive POP! Moment of Edward & Bella from the Twilight Saga to complete your collection! Pre-order now:",
    url: "https://x.com/FunkoEurope/status/2123366177091018925",
  },
  {
    id: "stitch-x",
    lane: "limited",
    where: "x",
    title: "Limited Edition Drawing Stitch in Bath (9500 pcs)",
    source: "@ToysTracker",
    when: "19 Nov 2026",
    text: "Funko [$19.99]: Pop! Stitch in Bath [Limited Edition Drawing - Supreme - 9500 pieces]",
    url: "https://x.com/ToysTracker/status/2123330885562904989",
    note: "Affiliate listing. Price is listed retail.",
  },
];
