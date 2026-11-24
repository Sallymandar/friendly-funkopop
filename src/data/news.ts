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

export const pulled = "24 Nov 2026";

export const brief =
  "First looks dropped today for Wednesday releases including Voltron Lions, new Pokémon (Vaporeon, Nidoqueen, Nidoking, Chikorita), Winnie the Pooh with Flowers, Black Torch Funko Shop exclusives, Pen Toppers, and a Pokémon Premium Bundle. An Amazon exclusive LE 5,000 Mystique for Doomsday and a retailer exclusive flocked Hello Kitty Year of the Goat appeared. Black Friday Limited Edition drawings from yesterday remain open, with ongoing deep-discount sales across Star Wars, Marvel, Sanrio, and other lines.";

export const articles: Article[] = [
  {
    id: "pen-toppers-x",
    lane: "drops",
    where: "x",
    title: "First look at Funko Pop Pen Toppers",
    source: "@DisTrackers",
    when: "24 Nov 2026",
    text: "First look at the Funko Pop Pen Toppers! Available Wednesday at 9AM PT.",
    url: "https://x.com/DisTrackers/status/2125217790718316730",
    note: "Affiliate links. Available Wednesday 9AM PT.",
  },
  {
    id: "pokemon-bundle-x",
    lane: "drops",
    where: "x",
    title: "First look at Pokémon Pop Premium Bundle",
    source: "@DisTrackers",
    when: "24 Nov 2026",
    text: "First look at the Pokémon Pop Premium Bundle! Available Wednesday at 9AM PT.",
    url: "https://x.com/DisTrackers/status/2125216397156569097",
    note: "Affiliate links. Available Wednesday 9AM PT.",
  },
  {
    id: "hellokitty-flocked-x",
    lane: "limited",
    where: "x",
    title: "First look at retailer exclusive Hello Kitty Flocked Goat",
    source: "@DisTrackers",
    when: "24 Nov 2026",
    text: "First look at Retailer exclusive Hello Kitty Flocked Goat!",
    url: "https://x.com/DisTrackers/status/2125214885177123211",
  },
  {
    id: "mystique-le-x",
    lane: "limited",
    where: "x",
    title: "Amazon exclusive LE 5,000 Mystique",
    source: "@FunkoPOPsNews",
    when: "24 Nov 2026",
    text: "Prepare for Doomsday ~ Full glams with the Amazon exclusive LE 5,000 Mystique Funko POP! Link below 11/25 ~",
    url: "https://x.com/FunkoPOPsNews/status/2125099797983969435",
    note: "Affiliate link. Amazon exclusive, LE 5,000, available 11/25.",
  },
  {
    id: "voltron-x",
    lane: "drops",
    where: "x",
    title: "First look at Voltron Lions Funko Pops",
    source: "@pop_holmes",
    when: "24 Nov 2026",
    text: "First look at Voltron Funko Pops - Black Lion, Blue Lion, Green Lion, Red Lion, Yellow Lion Available Wednesday 11/25 9AM PT",
    url: "https://x.com/pop_holmes/status/2125147716413960378",
    note: "Affiliate links. Available Wednesday 9AM PT.",
  },
  {
    id: "pokemon-new-x",
    lane: "drops",
    where: "x",
    title: "First look at new Pokémon Funko Pops",
    source: "@pop_holmes",
    when: "24 Nov 2026",
    text: "First look at new Pokemon Funko Pops - Vaporeon, Nidoqueen, Nidoking, Chikorita Available Wednesday 11/25 9AM PT",
    url: "https://x.com/pop_holmes/status/2125143592091971716",
    note: "Affiliate links. Available Wednesday 9AM PT.",
  },
  {
    id: "blacktorch-x",
    lane: "limited",
    where: "x",
    title: "First look at Black Torch Funko Shop exclusives",
    source: "@pop_holmes",
    when: "24 Nov 2026",
    text: "First look at Black Torch Funko Pops - Funko shop Exclusive Amagi, Reiji Kirihara, Rago, Jiro Azuma, Ichika Kishimojin Available Wednesday 11/25 9AM PT",
    url: "https://x.com/pop_holmes/status/2125142420140495189",
    note: "Affiliate links. Funko Shop exclusives, available Wednesday 9AM PT.",
  },
  {
    id: "winnie-x",
    lane: "drops",
    where: "x",
    title: "First look at Winnie the Pooh with Flowers",
    source: "@pop_holmes",
    when: "24 Nov 2026",
    text: "First look at Winnie the Pooh with Flowers Funko Pops Available Wednesday 11/25 9AM PT",
    url: "https://x.com/pop_holmes/status/2125146699479789751",
    note: "Affiliate links. Available Wednesday 9AM PT.",
  },
  {
    id: "sanji-x",
    lane: "limited",
    where: "x",
    title: "Funko Shop exclusive Sanji Wanted Poster now live",
    source: "@FunkoPOPsNews",
    when: "24 Nov 2026",
    text: "Now live! Funko Shop exclusive Sanji Wanted Poster ~",
    url: "https://x.com/FunkoPOPsNews/status/2125042774290448428",
    note: "Affiliate link. Funko Shop exclusive, now live.",
  },
  {
    id: "amazon-sale-x",
    lane: "drops",
    where: "x",
    title: "Amazon Funko Black Friday sale now live",
    source: "@FunkoPOPsNews",
    when: "24 Nov 2026",
    text: "Amazon Funko Black Friday sale is now live! Head to the link below ~ 30-80% off!",
    url: "https://x.com/FunkoPOPsNews/status/2125039680978620599",
    note: "Affiliate links. Sale prices, 30-80% off.",
  },
  {
    id: "le-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Limited Edition drawings reminder and Star Wars sale",
    source: "@funkonews.bsky.social",
    when: "23 Nov 2026",
    text: "Stay tuned.. Funko’s new Limited Edition POPs! Are going live tomorrow, save the links below ~ 9AM PT. Sale! Funko has some great deals on Star Wars POPs! At the links below.. 50-70% off ~",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate links. Profile feed lists these recent posts from 23 Nov. Sale prices.",
  },
  {
    id: "drops-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New releases and sales on Drop Bot",
    source: "@funkodrop.bsky.social",
    when: "23 Nov 2026",
    text: "New releases including Jumbo Wartortle ($39.99), Ghost Face Bling Mask Glitter ($14.99), Ayrton Senna with Flag ($14.99), and sales such as The Rock to $4.50, Hello Kitty Classic to $7.49, Darth Vader to $7.49.",
    url: "https://bsky.app/profile/funkodrop.bsky.social",
    note: "Automated bot posts. Prices are listed retail or sale prices from Funko.com. Profile feed shows recent updates.",
  },
];
