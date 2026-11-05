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

export const pulled = "5 Nov 2026";

export const brief =
  "Multiple new Funko POP waves went live including Ice Age: Boiling Point, Amphibia, Shovel Knight, Flora, Assassin's Creed: Black Flag, Astro Bot, and Psyren. Limited exclusives like HT LE 7,500 Iron Man, EE Teddy Bear Kuromi, Target Doomsday Bucky and Doctor Doom, and Funko Shop Bailaora are now available. Hollywood exclusive Diamond TARDIS and LE Iron Man are stocking in stores. ACOTAR sets and collabs with KFC and Dunkin also surfaced.";

export const articles: Article[] = [
  {
    id: "le-iron-man-stores",
    lane: "limited",
    where: "bluesky",
    title: "LE Iron Man Funko POPs arriving in stores",
    source: "@funkonews.bsky.social",
    when: "5 Nov 2026",
    text: "Plenty of LE Iron Man Funko POPs! Arriving in stores, keep an eye out if you still need one ~ Thanks to @LVFunkoholics",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzjpi6abgc2x",
  },
  {
    id: "diamond-tardis",
    lane: "limited",
    where: "bluesky",
    title: "Hollywood exclusive Diamond TARDIS Funko POP stocking",
    source: "@funkonews.bsky.social",
    when: "5 Nov 2026",
    text: "Hollywood exclusive Diamond TARDIS Funko POP! Now stocking in stores ~ Thanks to @thepopsvcollectibles503",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzjmche7bs2x",
  },
  {
    id: "symbiote-spiderman-2099",
    lane: "drops",
    where: "bluesky",
    title: "Symbiote Spider-Man 2099 Funko POP unboxing and available",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Mail time! Unboxing the awesome new Symbiote Spider-Man 2099 Funko POP! Available below .. EE, Amzn, FS",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzjief7kgs26",
  },
  {
    id: "doomsday-bucky-doom",
    lane: "limited",
    where: "bluesky",
    title: "Target exclusive Doomsday Bucky and Doctor Doom POPs live at Funko Shop",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Now live at the Funko Shop! Target exclusive Doomsday Bucky and Doctor Doom POPs! Link below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzjaph42sk26",
  },
  {
    id: "bailaora-exclusive",
    lane: "limited",
    where: "bluesky",
    title: "Funko Shop exclusive Bailaora POP now live",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Now live! Funko Shop exclusive Bailaora POP!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzjah33te226",
  },
  {
    id: "acotar-sets",
    lane: "drops",
    where: "bluesky",
    title: "A Court of Thorns and Roses Funko POP and Bitty POP sets live",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Now Live! A Court of Thorns and Roses Funko POP! & Bitty POP! Sets! To the stars who listen, and the dreams that are answered...",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzj43w7ihs27",
  },
  {
    id: "ice-age-live",
    lane: "drops",
    where: "bluesky",
    title: "Ice Age: Boiling Point Funko POPs now live",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Now Live! Ice Age Funko POPs! You know, this whole herd thing is really working out ~ No charge until ship, and free ship $79+ at EE!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzivjtdazk27",
  },
  {
    id: "ht-iron-man-le",
    lane: "limited",
    where: "bluesky",
    title: "HT Exclusive LE 7,500 Iron Man Funko POP now live",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Now live! HT Exclusive LE 7,500 Iron Man Funko POP!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzitextsss27",
  },
  {
    id: "chopper-chase",
    lane: "limited",
    where: "bluesky",
    title: "CC Exclusive Tony Tony Chopper with flocked Chase now live",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Now Live! CC Exclusive Tony Tony Chopper (Kung Fu Point) Funko POP! With flocked Chase!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzisvxvd522m",
  },
  {
    id: "goku-gtd-chase",
    lane: "limited",
    where: "bluesky",
    title: "TT Exclusive Super Saiyan 3 Goku with GITD Chase now live",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Now Live! TT Exclusive Super Saiyan 3 Goku Funko POP! With GITD Chase!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzissrzdsc2m",
  },
  {
    id: "psyren-live",
    lane: "drops",
    where: "bluesky",
    title: "Psyren Funko POPs first look and now live",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "First look! And now live! Psyren Funko POPs!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzirtwm5h22m",
  },

  {
    id: "iron-man-ht-x",
    lane: "limited",
    where: "x",
    title: "LE 7,500 PCS Elite Iron Man Mark 3 dropping today at Hot Topic",
    source: "@TheeUncleJerry",
    when: "4 Nov 2026",
    text: "Dropping today.. Marvel: The Infinity Saga Pop! Elite Iron Man Mark 3 [7,500 pcs worldwide] Exclusive to Hot Topic in the 🇺🇸",
    url: "https://x.com/TheeUncleJerry/status/2117895189834707443",
  },
];
