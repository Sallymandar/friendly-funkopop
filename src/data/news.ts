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

export const pulled = "17 Nov 2026";

export const brief =
  "First looks circulated for Wednesday 9AM PT drops including the EE Exclusive Bon Clay, Naruto Shippuden wave, SpongeBob SquarePants with flowers, Disney x Formula 1 Mickey Mouse Ride, and Manchester City FC Pops. A Target exclusive Doomsday Professor Xavier is expected to land this week. Black Friday exclusives sale added a new 50% off batch, alongside a K-Pop Demon Hunters sale, while the drop bot listed new Apothecary Diaries Jinshi and Transformers Optimus Prime and Grimlock. Vision Quest Tommy (Speed) restocked.";

export const articles: Article[] = [
  {
    id: "prof-xavier-x",
    lane: "limited",
    where: "x",
    title: "Target exclusive Doomsday Professor Xavier expected this week",
    source: "@FunkoPOPsNews",
    when: "17 Nov 2026",
    text: "He’s coming.. full glams for the Target exclusive Doomsday Professor Xavier Funko POP! Expected to land this week..",
    url: "https://x.com/FunkoPOPsNews/status/2122617093757562945",
    note: "Affiliate link. Expected window; confirm on Target.",
  },
  {
    id: "prof-xavier-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Target exclusive Doomsday Professor Xavier expected this week",
    source: "@funkonews.bsky.social",
    when: "17 Nov 2026",
    text: "He’s coming.. full glams for the Target exclusive Doomsday Professor Xavier Funko POP! Expected to land this week..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2iotl54z22j",
    note: "Affiliate link. Expected window; confirm on Target.",
  },
  {
    id: "bon-clay-x",
    lane: "limited",
    where: "x",
    title: "First look: EE Exclusive Bon Clay going live Wednesday 9AM PT",
    source: "@FunkoPOPsNews",
    when: "17 Nov 2026",
    text: "First Look! EE Exclusive Bon Clay Funko POP! 🦅🩰 Un, deux, trois ~ Going live at the link below.. Wednesday, 9AM PT!",
    url: "https://x.com/FunkoPOPsNews/status/2122608937077768278",
    note: "Affiliate link. Drop window announced.",
  },
  {
    id: "bon-clay-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First look: EE Exclusive Bon Clay going live Wednesday 9AM PT",
    source: "@funkonews.bsky.social",
    when: "17 Nov 2026",
    text: "First Look! EE Exclusive Bon Clay Funko POP! 🦅🩰 Un, deux, trois ~ Going live at the link below.. Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2imzouhgc2j",
    note: "Affiliate link. Drop window announced.",
  },
  {
    id: "naruto-bsky",
    lane: "drops",
    where: "bluesky",
    title: "First look: Naruto Shippuden Pops going live Wednesday 9AM PT",
    source: "@funkonews.bsky.social",
    when: "17 Nov 2026",
    text: "First Look! Naruto Shippuden Funko POPs! 🍥🍃 Dattebayo ~ Going live at the links below.. Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2hu2unrbk2g",
    note: "Affiliate links. Drop window announced.",
  },
  {
    id: "spongebob-bsky",
    lane: "drops",
    where: "bluesky",
    title: "First look: SpongeBob with flowers and Bitty Pops Wednesday 9AM PT",
    source: "@funkonews.bsky.social",
    when: "17 Nov 2026",
    text: "First Look! SpongeBob SquarePants w/ Flowers Funko POP! And Bitty POPs! 🍍🌸 Going live at the links below.. Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2htm5ijls2g",
    note: "Affiliate links. Drop window announced.",
  },
  {
    id: "mickey-f1-bsky",
    lane: "drops",
    where: "bluesky",
    title: "First look: Disney x Formula 1 Mickey Mouse Ride Wednesday 9AM PT",
    source: "@funkonews.bsky.social",
    when: "17 Nov 2026",
    text: "First Look! Disney x Formula 1 Mickey Mouse Funko POP! Ride! 🏎️🐭 Hot dog! Going live at the links below.. Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2ht6nv2sc2g",
    note: "Affiliate links. Drop window announced.",
  },
  {
    id: "kpop-sale-x",
    lane: "limited",
    where: "x",
    title: "K-Pop Demon Hunters sale with Huntr/x goodies",
    source: "@FunkoPOPsNews",
    when: "17 Nov 2026",
    text: "K-Pop Demon Hunters sale! Head to the link below for all your Huntr/x goodies, and more ~",
    url: "https://x.com/FunkoPOPsNews/status/2122543493113401708",
    note: "Affiliate links. Sale reported; confirm discounts.",
  },
  {
    id: "exclusives-sale-bsky",
    lane: "limited",
    where: "bluesky",
    title: "New batch of Black Friday exclusives sale with 50% off",
    source: "@funkonews.bsky.social",
    when: "16 Nov 2026",
    text: "Exclusives sale! A new batch of POPs! For Funko’s Black Friday sale .. links below ~ 50% off these and more 🏷️",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3n2hjhhltos2g",
    note: "Affiliate links. Discount claimed; confirm on site.",
  },
  {
    id: "jinshi-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Pop! Jinshi from The Apothecary Diaries",
    source: "@funkodrop.bsky.social",
    when: "17 Nov 2026",
    text: "🆕 NEW RELEASE [The Apothecary Diaries] ✨ New Pop! Jinshi Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2j4frikse2g",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
  {
    id: "optimus-bsky",
    lane: "drops",
    where: "bluesky",
    title: "New release: Transformers Optimus Prime 40th Anniversary",
    source: "@funkodrop.bsky.social",
    when: "17 Nov 2026",
    text: "🆕 NEW RELEASE [Transformers] ✨ New Pop! Optimus Prime (40th Anniversary) Price: $14.99",
    url: "https://bsky.app/profile/funkodrop.bsky.social/post/3n2isdsefmm2d",
    note: "Retail list price from drop bot; confirm on Funko.com.",
  },
  {
    id: "tommy-restock-x",
    lane: "drops",
    where: "x",
    title: "Restock: Vision Quest Tommy (Speed) Pop back in stock",
    source: "@FunkoPOPsNews",
    when: "17 Nov 2026",
    text: "Restock! Vision Quest Tommy (Speed) POP! ⚡🏃‍♂️ Is back in stock below ~",
    url: "https://x.com/FunkoPOPsNews/status/2122532535217672400",
    note: "Affiliate links. Restock reported; confirm live availability.",
  },
];
