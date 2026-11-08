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

export const pulled = "8 Nov 2026";

export const brief =
  "Mondo and Funko revealed a new Designer Con exclusive glow-in-the-dark GMK Godzilla. Five Below exclusives for Blue's Clues Minis were shown, and a Walmart exclusive Tigerzord Bitty Bot went live on the Funko Shop. Professor X's Target exclusive, scheduled for November 8, had not appeared by mid-morning. First looks also covered a Funko Shop Teddy Riner, Winter Soldier, Retro My Little Pony Rapunzel, and a Powerpuff Girls x DC collaboration, while GameStop's LE Professor Pyg remains set for the 11th.";

export const articles: Article[] = [
  {
    id: "mondo-godzilla-x",
    lane: "limited",
    where: "x",
    title: "Mondo X Funko shows DCon exclusive GITD GMK Godzilla",
    source: "@FunkoPOPsNews",
    when: "8 Nov 2026",
    text: "Mondo X Funko shoes off this sweet new DCon exclusive GITD GMK Godzilla ~",
    url: "https://x.com/FunkoPOPsNews/status/2119278164664869313",
  },
  {
    id: "mondo-godzilla-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Mondo X Funko shows DCon exclusive GITD GMK Godzilla",
    source: "@funkonews.bsky.social",
    when: "8 Nov 2026",
    text: "Mondo X Funko shoes off this sweet new DCon exclusive GITD GMK Godzilla ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzrjhhadmk25",
  },
  {
    id: "blues-clues-minis-x",
    lane: "limited",
    where: "x",
    title: "First look at Five Below exclusive Blue's Clues Funko Minis",
    source: "@FunkoPOPsNews",
    when: "8 Nov 2026",
    text: "First Look at the new Five Below exclusive Blue's Clues Funko Minis! 🐾💙 Coming soon..",
    url: "https://x.com/FunkoPOPsNews/status/2119272682348777726",
  },
  {
    id: "blues-clues-minis-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look at Five Below exclusive Blue's Clues Funko Minis",
    source: "@funkonews.bsky.social",
    when: "8 Nov 2026",
    text: "First Look at the new Five Below exclusive Blue's Clues Funko Minis! 🐾💙 Coming soon..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzriamaeks2d",
  },
  {
    id: "tigerzord-bitty-x",
    lane: "drops",
    where: "x",
    title: "Walmart exclusive Tigerzord Funko Bitty Bot now live",
    source: "@FunkoPOPsNews",
    when: "8 Nov 2026",
    text: "Now live @ FS! Walmart exclusive Tigerzord Funko Bitty Bot! Link below ~",
    url: "https://x.com/FunkoPOPsNews/status/2119262877139816572",
    note: "Affiliate link in original post; retail availability.",
  },
  {
    id: "tigerzord-bitty-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Walmart exclusive Tigerzord Funko Bitty Bot now live",
    source: "@funkonews.bsky.social",
    when: "8 Nov 2026",
    text: "Now live @ FS! Walmart exclusive Tigerzord Funko Bitty Bot! Link below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzrg3ty3522q",
    note: "Affiliate link in original post; retail availability.",
  },
  {
    id: "teddy-riner-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look at Funko Shop exclusive Teddy Riner Pop",
    source: "@funkonews.bsky.social",
    when: "8 Nov 2026",
    text: "First Look! Funko Shop exclusive Teddy Riner POP! 🥋🥇 The greatest judoka.. coming soon ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzrbnsdyi22d",
  },
  {
    id: "art-clown-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Doodle Bloody Art the Clown dropping in stores",
    source: "@funkonews.bsky.social",
    when: "8 Nov 2026",
    text: "Doodle Bloody Art the Clown now dropping in stores, in stock online below too!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzra7bd2u22d",
    note: "Hot Topic exclusive; check local stock.",
  },
  {
    id: "winter-soldier-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Closer look at new Winter Soldier / Bucky Barnes Funko Pop",
    source: "@funkonews.bsky.social",
    when: "8 Nov 2026",
    text: "Closer look at the new Winter Soldier / Bucky Barnes Funko POP! Links below Tuesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzr4davpoc2f",
  },
  {
    id: "mlp-rapunzel-bsky",
    lane: "drops",
    where: "bluesky",
    title: "First look at Retro My Little Pony Rapunzel Funko Pop",
    source: "@funkonews.bsky.social",
    when: "7 Nov 2026",
    text: "First Look! Retro My Little Pony Rapunzel Funko POP! 🐴🎀 Going live at the links below.. Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzr2vdwn4c2q",
  },
  {
    id: "professor-pyg-bsky",
    lane: "limited",
    where: "bluesky",
    title: "GameStop exclusive LE 9,500 Professor Pyg Funko Pop",
    source: "@funkonews.bsky.social",
    when: "7 Nov 2026",
    text: "Full glams! GameStop exclusive LE 9,500 Professor Pyg Funko POP! 🐷🔪 Early link below..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzqvkwwoyk2w",
    note: "Scheduled for Nov 11; early link provided.",
  },
  {
    id: "professor-x-delay-x",
    lane: "limited",
    where: "x",
    title: "Professor X Target exclusive expected but not yet live",
    source: "@DisTrackers",
    when: "8 Nov 2026",
    text: "Professor X should’ve gone live but did not. Funko’s calendar states today and usually it’s a 12AM drop for Target.",
    url: "https://x.com/DisTrackers/status/2119340064849408383",
    note: "Scheduled Nov 8 LE 9,500; status as of morning report.",
  },
];
