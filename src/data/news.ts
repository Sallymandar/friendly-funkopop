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

export const pulled = "11 Nov 2026";

export const brief =
  "First looks arrived for the Hatsune Miku Diner Version Funko Pop with Diamond Chase and the Funko Shop exclusive Hazbin Hotel Emily, both heading to pre-order Thursday. A Target exclusive Winter Spider-Man landed in stock at the Funko Shop. Professor Pyg Limited Edition is out at European retailers, and Funko Shop has a 70% off sale on many exclusives.";

export const articles: Article[] = [
  {
    id: "hatsune-miku-diner-x",
    lane: "limited",
    where: "x",
    title: "First look at Hatsune Miku (Diner Version) Funko Pop with Diamond Chase",
    source: "@pop_holmes",
    when: "11 Nov 2026",
    text: "First look at Hatsune Miku (Diner Version) Funko Pop w/ Diamond Chase Available Thursday 11/12 9AM PT at links below",
    url: "https://x.com/pop_holmes/status/2120461631813550400",
    note: "Affiliate links in original post. Pre-order opening Thursday.",
  },
  {
    id: "hatsune-miku-diner-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First Look! Diner Hatsune Miku Funko POP with Diamond Chase",
    source: "@funkonews.bsky.social",
    when: "11 Nov 2026",
    text: "First Look! Diner Hatsune Miku Funko POP! 🛼🍔 With Diamond Chase ~ World is Mine.. live at the links below, Thursday! 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzypzfifc22n",
    note: "Affiliate links in original post.",
  },
  {
    id: "hazbin-emily-x",
    lane: "limited",
    where: "x",
    title: "First look! Funko Shop exclusive Hazbin Hotel Emily POP",
    source: "@FunkoPOPsNews",
    when: "11 Nov 2026",
    text: "First look! Funko Shop exclusive Hazbin Hotel Emily POP! Coming soon ..",
    url: "https://x.com/FunkoPOPsNews/status/2120381514126856199",
    note: "Affiliate link in original post.",
  },
  {
    id: "hazbin-emily-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look! Funko Shop exclusive Hazbin Hotel Emily POP",
    source: "@funkonews.bsky.social",
    when: "11 Nov 2026",
    text: "First look! Funko Shop exclusive Hazbin Hotel Emily POP! Coming soon ..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzz6hhds3k2q",
    note: "Affiliate link in original post.",
  },
  {
    id: "hazbin-wave-bsky",
    lane: "drops",
    where: "bluesky",
    title: "First Look! New Hazbin Hotel Funko POPs going live Thursday",
    source: "@funkonews.bsky.social",
    when: "11 Nov 2026",
    text: "First Look! New Hazbin Hotel Funko POPs! 🏨😈 Hell is forever whether you like it or not.. Going live at the links below.. Thursday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzyrleh5a22u",
    note: "Affiliate links in original post.",
  },
  {
    id: "professor-pyg-europe-x",
    lane: "limited",
    where: "x",
    title: "POP! Professor Pyg Limited Edition available at European retailers",
    source: "@FunkoEurope",
    when: "11 Nov 2026",
    text: "POP! Professor Pyg™ is just concerned about you and your LIMITED EDITION collection’s health…that’s all. 🔪 Available at Forbidden Planet Int., Micromania, Smyths Toys, and more.",
    url: "https://x.com/FunkoEurope/status/2120456538405876113",
  },
  {
    id: "winter-spiderman-x",
    lane: "drops",
    where: "x",
    title: "Target exclusive Winter Spider-Man POP now live at Funko Shop",
    source: "@FunkoPOPsNews",
    when: "11 Nov 2026",
    text: "Now live! Target exclusive Winter Spider-Man POP! Has landed in stock at the Funko Shop! ❄️",
    url: "https://x.com/FunkoPOPsNews/status/2120424071712342033",
    note: "Affiliate links in original post.",
  },
  {
    id: "winter-spiderman-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New Release: Retail Exclusive Spider-Man (Winter Gear)",
    source: "@funkodrop.bsky.social",
    when: "11 Nov 2026",
    text: "🆕 NEW RELEASE [Marvel] ✨ Retail Exclusive Pop! Spider-Man (Winter Gear) Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3mzzscgapqa2i",
    note: "Retail list price from drop bot; confirm availability.",
  },
  {
    id: "exclusives-sale-x",
    lane: "trades",
    where: "x",
    title: "70% off exclusive Funko POPs at Funko Shop",
    source: "@FunkoPOPsNews",
    when: "10 Nov 2026",
    text: "More exclusive Funko POPs! On sale! 70% off these and more.. head to the links below ~",
    url: "https://x.com/FunkoPOPsNews/status/2120303998372659406",
    note: "Sale claim from post; affiliate links. Confirm current discounts before buying.",
  },
  {
    id: "exclusives-sale-bsky",
    lane: "trades",
    where: "bluesky",
    title: "70% off exclusive Funko POPs in Black Friday sale",
    source: "@funkonews.bsky.social",
    when: "11 Nov 2026",
    text: "70% off exclusive Funko POPs! In the big Black Friday sale! Head to the link below for these and more ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzygeh6rys2s",
    note: "Sale claim from post; affiliate link. Confirm current discounts before buying.",
  },
  {
    id: "bttf-doc-glow-x",
    lane: "limited",
    where: "x",
    title: "First look at Plastic Empire Back to the Future Doc Brown & Einstein (Glow)",
    source: "@pop_holmes",
    when: "11 Nov 2026",
    text: "First look at Plastic Empire Back to the Future Doc Brown & Einstein (Glow) (Green Deco) Available Thursday",
    url: "https://x.com/pop_holmes/status/2120462989174222936",
  },
  {
    id: "vecna-funkoshop-x",
    lane: "drops",
    where: "x",
    title: "Stranger Things Mr. Whatsit / Vecna Funko Pop available at Funko Shop",
    source: "@pop_holmes",
    when: "11 Nov 2026",
    text: "Stranger Things Mr. Whatsit / Vecna Funko Pop is available at Funko Shop",
    url: "https://x.com/pop_holmes/status/2120453500983263360",
    note: "Affiliate link in original post.",
  },
];
