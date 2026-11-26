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

export const pulled = "26 Nov 2026";

export const brief =
  "First looks at the GameStop exclusive LE 9,500 Red Guardian Avengers Doomsday Pop dropping November 28 and a retailer exclusive T.J. Watt Steelers figure. Funko Shop and partner retailers added new drops including Spider-Man vs Hulk Moment, Dark Huntr/x, Pokémon, Stitch with Scratch, and exclusive Frieren packs. Limited Edition Black Friday drawings close today with winners revealed tomorrow, while sales continue on select lines.";

export const articles: Article[] = [
  {
    id: "red-guardian-x",
    lane: "limited",
    where: "x",
    title: "First look at GameStop exclusive LE 9,500 Red Guardian",
    source: "@DisTrackers",
    when: "26 Nov 2026",
    text: "Glam shot look at GameStop exclusive LE 9500 Red Guardian! Available on 11/28.",
    url: "https://x.com/DisTrackers/status/2125899483481555427",
    note: "Affiliate link. Limited to 9,500 pieces, drops 11/28 at GameStop.",
  },
  {
    id: "red-guardian-pops",
    lane: "limited",
    where: "x",
    title: "First look at LE 9,500 GameStop exclusive Red Guardian",
    source: "@POPs_Today",
    when: "26 Nov 2026",
    text: "First look at LE 9,500 GameStop exclusive Red Guardian Avengers Doomsday POP! available Nov 28 (via @DisTrackers)",
    url: "https://x.com/POPs_Today/status/2125908251862802823",
  },
  {
    id: "tj-watt-x",
    lane: "limited",
    where: "x",
    title: "First look at exclusive T.J. Watt Pittsburgh Steelers Pop",
    source: "@DisTrackers",
    when: "26 Nov 2026",
    text: "First look at retailer exclusive TJ Watt!",
    url: "https://x.com/DisTrackers/status/2125898122136322129",
  },
  {
    id: "tj-watt-pops",
    lane: "limited",
    where: "x",
    title: "First look at exclusive T.J. Watt Steelers POP",
    source: "@POPs_Today",
    when: "26 Nov 2026",
    text: "First look at exclusive T.J. Watt Pittsburgh Steelers POP! (via @DisTrackers)",
    url: "https://x.com/POPs_Today/status/2125900772315693418",
  },
  {
    id: "spice-girls-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Five Below exclusive Spice Girl Funko Pocket POPs now live",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "Now live! Five Below exclusive Spice Girl Funko Pocket POPs! Link below ~ Linky ~ fnkpp.com/FSSpice",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate link. Profile post from ~10h ago; Five Below exclusive Pocket Pops.",
  },
  {
    id: "spiderman-hulk-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Full glams for new Spider-Man vs. Hulk Funko POP Moment",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "Full glams for the new Spider-Man vs. Hulk Funko POP! Moment! available below ~ EE ~ fnkpp.com/EESpid Amzn ~ fnkpp.com/AmSpid FS ~ fnkpp.com/FSSpid ~ Spring",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate links. Recent post; retail availability across EE, Amazon, Funko Shop.",
  },
  {
    id: "le-drawings-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Last day to enter Funko Black Friday LE Pops drawings",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "Reminder! Last day to enter for the Funko Black Friday LE POPs! Head to the links below now! Winners revealed in the morning.. Linky ~ fnkpp.com/LMTD",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate link. Drawings close today; winners announced tomorrow morning.",
  },
  {
    id: "kpop-dark-bsky",
    lane: "drops",
    where: "bluesky",
    title: "K-Pop Demon Hunters Dark Huntr/x Pops now live",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "Now live! K-Pop Demon Hunters fans! Head to the link below to snag all 3 Dark Huntr/x Funko POPs! Linky ~ fnkpp.com/FSKPDH",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate link. Funko Shop exclusives for Dark Huntr/x.",
  },
  {
    id: "pokemon-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Pokémon Funko Pops now live",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "Now Live! Pokémon Funko POPs! Are you a Pokémon master? No charge until ship, and free ship $79+ at EE! EE ~ fnkpp.com/EEPoke Amzn ~ fnkpp.com/AmN2",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate links. Recent drop including Chikorita, Vaporeon, Nidoking.",
  },
  {
    id: "frieren-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Exclusive Frieren 2 Pack and Cover now live",
    source: "@funkonews.bsky.social",
    when: "26 Nov 2026",
    text: "Now Live! Exclusive Frieren: Beyond Journey's End Funko POP! 2 Pack and Cover! Linky ~ fnkpp.com/FSFrie",
    url: "https://bsky.app/profile/funkonews.bsky.social",
    note: "Affiliate link. Funko Shop exclusive.",
  },
  {
    id: "sale-crowley-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Sale on Premium Crowley King of Hell Pop",
    source: "@funkodrop.bsky.social",
    when: "26 Nov 2026",
    text: "SALE [Supernatural] Pop! Premium Crowley King of Hell Was: $19.99 → Now: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social",
    note: "Automated bot tracking Funko.com. Sale price from listed retail $19.99 to $14.99.",
  },
  {
    id: "new-spirit-dragon-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New Super Spirit Dragon Pop release",
    source: "@funkodrop.bsky.social",
    when: "25 Nov 2026",
    text: "NEW RELEASE [Dungeons & Dragons] New Pop! Super Spirit Dragon Price: $24.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social",
    note: "Automated bot. Listed retail price $24.99 on Funko.com.",
  },
];
