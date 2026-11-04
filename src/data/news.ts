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

export const pulled = "4 Nov 2026";

export const brief =
  "Several new Funko POP waves including Shovel Knight, Amphibia, Ice Age: Boiling Point, Assassin's Creed: Black Flag, Flora, and Ghost Face glammed for drop today at 9AM PT. LE 7,500 Iron Man Mark 3 dropping today exclusive to Hot Topic. Psyren series available soon with chase. Black Friday 70% off exclusives continuing, plus web exclusives like Jonathan Shaw and Doctor Doom with Franklin.";

export const articles: Article[] = [
  {
    id: "shovel-knight-drops",
    lane: "drops",
    where: "bluesky",
    title: "Shovel Knight Funko POPs full glams dropping today",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Full glams for the new Shovel Knight Funko POPs! Prepare for justice! Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzexc3mim22v",
  },
  {
    id: "flora-pops",
    lane: "drops",
    where: "bluesky",
    title: "Flora Funko POPs full glams dropping today",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Full glams for the cute new Flora Funko POPs! No watering required ~ Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzeu47covc26",
  },
  {
    id: "amphibia-pops",
    lane: "drops",
    where: "bluesky",
    title: "Amphibia Funko POPs full glams dropping today",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Full glams for the new Amphibia Funko POPs! Hey, girl, whatcha got there? Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzess3cdmc2k",
  },
  {
    id: "ice-age-pops",
    lane: "drops",
    where: "bluesky",
    title: "Ice Age: Boiling Point Funko POPs full glams",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Full glams for the new Ice Age: Boiling Point Funko POPs! Stay tuned.. landing Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzel3ccyrk2d",
  },
  {
    id: "assassins-creed-pops",
    lane: "drops",
    where: "bluesky",
    title: "Assassin's Creed: Black Flag Funko POPs full glams",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Full glams for the new Assassin's Creed: Black Flag Funko POPs! For a pirate, freedom is the highest prize.. Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzeir67rjk2d",
  },
  {
    id: "ghost-face-dod",
    lane: "drops",
    where: "bluesky",
    title: "Ghost Face Day of the Dead Funko POP full glam",
    source: "@funkonews.bsky.social",
    when: "4 Nov 2026",
    text: "Full glams for the new Ghost Face Day of the Dead Funko POP! Wednesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzekehxpw22d",
  },
  {
    id: "iron-man-ht-today",
    lane: "limited",
    where: "x",
    title: "LE 7,500 PCS Elite Iron Man Mark 3 dropping today at Hot Topic",
    source: "@TheeUncleJerry",
    when: "4 Nov 2026",
    text: "Dropping today.. Marvel: The Infinity Saga Pop! Elite Iron Man Mark 3 [7,500 pcs worldwide] Exclusive to Hot Topic in the 🇺🇸",
    url: "https://x.com/TheeUncleJerry/status/2117895189834707443",
  },
  {
    id: "psyren-pops",
    lane: "drops",
    where: "x",
    title: "New Psyren POPs available soon with chase and exclusive",
    source: "@POPs_Today",
    when: "4 Nov 2026",
    text: "New Psyren POPs! available soon - Yoshina Ageha, Amamiya Sakurako, Amamiya Sakurako (Chase), Asaga Hiryu, Kirisaki Kabuto, Nemesis Q / exclusive",
    url: "https://x.com/POPs_Today/status/2117892889187696715",
  },
  {
    id: "jonathan-shaw-exclusive",
    lane: "drops",
    where: "x",
    title: "Web Exclusive Pop! Jonathan Shaw",
    source: "@ToysTracker",
    when: "4 Nov 2026",
    text: "Funko [$14.99]: Pop! Jonathan Shaw [Web Exclusive]",
    url: "https://x.com/ToysTracker/status/2117951367776006614",
    note: "Retail list price shown; availability may vary.",
  },
  {
    id: "black-friday-sale-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Black Friday sale with 70% off exclusive Funko POPs",
    source: "@funkonews.bsky.social",
    when: "3 Nov 2026",
    text: "Black Friday sale! Link below, these exclusive Funko POPs! Are 70% off ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mze4vl7djs23",
    note: "Sale prices shown are promotional discounts; check retailer for current availability.",
  },
  {
    id: "cal-raleigh-exclusive",
    lane: "drops",
    where: "bluesky",
    title: "Exclusive Mariners Cal Raleigh Funko POP first peek",
    source: "@funkonews.bsky.social",
    when: "3 Nov 2026",
    text: "First peek at the new exclusive Mariners Cal Raleigh Funko POP! Coming soon..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzdws24cv223",
  },
  {
    id: "draco-malfoy-chase",
    lane: "drops",
    where: "x",
    title: "First look at Draco Malfoy 1/72 Mystery Chase Harry Potter",
    source: "@POPs_Today",
    when: "4 Nov 2026",
    text: "First look at Draco Malfoy 1/72 Mystery Chase of Harry Potter POP! Mystery available now!",
    url: "https://x.com/POPs_Today/status/2117773506461261964",
  },
];
