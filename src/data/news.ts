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

export const pulled = "18 Nov 2026";

export const brief =
  "First looks circulated for Thursday 9AM PT drops covering Halo, Step Brothers, and Talladega Nights. Walmart exclusive Yachiru Unohana from Bleach is now in stock. Funko revealed EU retail locations for the limited edition Doomsday Charles Xavier (9500 pcs worldwide). Naruto Nyanto returned live, with new Apothecary Diaries and Transformers releases plus sale alerts including Stranger Things up to 70% off.";

export const articles: Article[] = [
  {
    id: "xavier-eu-x",
    lane: "limited",
    where: "x",
    title: "EU locations revealed for Doomsday Xavier",
    source: "@FunkoPOPsNews",
    when: "18 Nov 2026",
    text: "Funko reveals the EU locations for Doomsday Xavier ~ The Entertainer, Micromania, ShopForGeek, Smyths Toys, Juguettos, Gamelife, Empik.",
    url: "https://x.com/FunkoPOPsNews/status/2122993619149766780",
  },
  {
    id: "xavier-eu-bsky",
    lane: "limited",
    where: "bluesky",
    title: "EU locations revealed for Doomsday Xavier",
    source: "@funkonews.bsky.social",
    when: "18 Nov 2026",
    text: "Funko reveals the EU locations for Doomsday Xavier ~ The Entertainer, Micromania, ShopForGeek, Smyths Toys, Juguettos, Gamelife, Empik.",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2lchiu5222g",
  },
  {
    id: "xavier-limited-x",
    lane: "limited",
    where: "x",
    title: "Limited edition Doomsday Charles Xavier (9500 pcs)",
    source: "@FunkoEurope",
    when: "18 Nov 2026",
    text: "LIMITED EDITION POP! MARVEL Charles Xavier is limited to 9,500 pcs worldwide. Available at listed EU retailers.",
    url: "https://x.com/FunkoEurope/status/2122993269038555245",
  },
  {
    id: "yachiru-x",
    lane: "drops",
    where: "x",
    title: "Walmart exclusive Yachiru Unohana now in stock",
    source: "@FunkoPOPsNews",
    when: "18 Nov 2026",
    text: "Now in stock! Walmart exclusive Yachiru Unohana POP! Shipping out at the links.",
    url: "https://x.com/FunkoPOPsNews/status/2122966929380094450",
    note: "Affiliate links. Confirm live availability.",
  },
  {
    id: "yachiru-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Walmart exclusive Yachiru Unohana now in stock",
    source: "@funkonews.bsky.social",
    when: "18 Nov 2026",
    text: "Now in stock! Walmart exclusive Yachiru Unohana POP! Shipping out at the links.",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2l4jtpxy22z",
    note: "Affiliate links. Confirm live availability.",
  },
  {
    id: "halo-x",
    lane: "drops",
    where: "x",
    title: "First look: Halo Pops going live Thursday 9AM PT",
    source: "@FunkoPOPsNews",
    when: "18 Nov 2026",
    text: "First Look! Halo Funko POPs! Finish the fight ~ Going live at the links below.. Thursday, 9AM PT!",
    url: "https://x.com/FunkoPOPsNews/status/2122960898629484767",
    note: "Affiliate links. Drop window announced.",
  },
  {
    id: "halo-bsky",
    lane: "drops",
    where: "bluesky",
    title: "First look: Halo Pops going live Thursday 9AM PT",
    source: "@funkonews.bsky.social",
    when: "18 Nov 2026",
    text: "First Look! Halo Funko POPs! Finish the fight ~ Going live at the links below.. Thursday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2l37tkzw22n",
    note: "Affiliate links. Drop window announced.",
  },
  {
    id: "stepbrothers-x",
    lane: "drops",
    where: "x",
    title: "First look: Step Brothers Pops going live Thursday 9AM PT",
    source: "@FunkoPOPsNews",
    when: "18 Nov 2026",
    text: "First Look! Step Brothers Funko POPs! Investors? Possibly you.. Going live at the links below.. Thursday, 9AM PT!",
    url: "https://x.com/FunkoPOPsNews/status/2122962016490881102",
    note: "Affiliate links. Drop window announced.",
  },
  {
    id: "talladega-bsky",
    lane: "drops",
    where: "bluesky",
    title: "First look: Talladega Nights Pops going live Thursday 9AM PT",
    source: "@funkonews.bsky.social",
    when: "18 Nov 2026",
    text: "First Look! Talladega Nights Funko POPs! I wanna go fast.. Going live at the links below.. Thursday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2l3ppezw22n",
    note: "Affiliate links. Drop window announced.",
  },
  {
    id: "st-sale-bsky",
    lane: "trades",
    where: "bluesky",
    title: "Stranger Things sale up to 70% off",
    source: "@funkonews.bsky.social",
    when: "18 Nov 2026",
    text: "Stranger Things sale! Up to 70% off these Funko POPs! And more.. head to the links below.",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2kkjlolic2k",
    note: "Affiliate links. Discount claimed; confirm on site.",
  },
  {
    id: "maomao-dancing-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Web Exclusive Pop! Maomao (Dancing)",
    source: "@funkodrop.bsky.social",
    when: "17 Nov 2026",
    text: "NEW RELEASE [The Apothecary Diaries] Web Exclusive Pop! Maomao (Dancing) Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2jqjrkypc2f",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
  {
    id: "prowl-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Pop! Prowl (40th Anniversary)",
    source: "@funkodrop.bsky.social",
    when: "17 Nov 2026",
    text: "NEW RELEASE [Transformers] New Pop! Prowl (40th Anniversary) Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2jghrg2xu2c",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
];
