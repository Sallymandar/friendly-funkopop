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

export const pulled = "7 Nov 2026";

export const brief =
  "Funko flagged a host of drops landing this week, including MCU Archives and Space Jam figures. Doomsday exclusives are landing at Target, with Professor X set for November 8. Collectors hit HMV Event Editions in Newcastle for One Piece exclusives. Harry Potter x Target collab is live, and GameStop saw Luffy chase reports.";

export const articles: Article[] = [
  {
    id: "host-of-drops-x",
    lane: "drops",
    where: "x",
    title: "Host of Funko drops landing this week",
    source: "@FunkoPOPsNews",
    when: "7 Nov 2026",
    text: "There you are.. I’ve been looking for you ~ who could it be? A whole host of Funko drops! Landing this week ..",
    url: "https://x.com/FunkoPOPsNews/status/2118890194812444727",
  },
  {
    id: "host-of-drops-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Host of Funko drops landing this week",
    source: "@funkonews.bsky.social",
    when: "7 Nov 2026",
    text: "There you are.. I’ve been looking for you ~ who could it be? A whole host of Funko drops! Landing this week ..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzotddc27c2x",
  },
  {
    id: "doomsday-target-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Doomsday exclusives landing in Target stores",
    source: "@funkonews.bsky.social",
    when: "6 Nov 2026",
    text: "Doomsday exclusives now landing in stores at Target land ~ you can grab these online below now!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzokbsg7nc25",
    note: "Retail availability; check local stock.",
  },
  {
    id: "event-edition-newcastle",
    lane: "limited",
    where: "x",
    title: "Collectors score Event Edition One Piece exclusives at HMV Newcastle",
    source: "@warpandaradio",
    when: "7 Nov 2026",
    text: "Funko Event Edition Newcastle! ... managed to get everything we wanted. ... She's absolutely One Piece mad!",
    url: "https://x.com/warpandaradio/status/2119050739603460185",
  },
  {
    id: "harry-potter-target",
    lane: "drops",
    where: "x",
    title: "Harry Potter x Target collaboration is live",
    source: "@funkofinderz",
    when: "7 Nov 2026",
    text: "The Harry Potter x Target collaboration is LIVE NOW!",
    url: "https://x.com/funkofinderz/status/2119052239264268622",
    note: "Includes various merch; not all items are Pops.",
  },
  {
    id: "luffy-chases-gs",
    lane: "limited",
    where: "x",
    title: "GameStop reported multiple Luffy chases in one shipment",
    source: "@DisTrackers",
    when: "6 Nov 2026",
    text: "Check your local GameStop for potential Luffy Chases! This one got in 5!",
    url: "https://x.com/DisTrackers/status/2118553755323126010",
  },
  {
    id: "aloe-vera-pops",
    lane: "drops",
    where: "x",
    title: "Two Aloe Vera Funko Pops announced: common and exclusive",
    source: "@DisTrackers",
    when: "6 Nov 2026",
    text: "Funko is releasing 2 Aloe Vera Pops. One is a 4” common and one is a 6” exclusive. No other noticeable difference.",
    url: "https://x.com/DisTrackers/status/2118532906402631856",
  },
  {
    id: "november-exclusives-web",
    lane: "limited",
    where: "web",
    title: "November limited exclusives include Iron Man Mark 3, Professor X, and Professor Pyg",
    source: "ComicBook.com",
    when: "5 Nov 2026",
    text: "Funko has four limited-edition drops scheduled for this month, with exclusives at Hot Topic, Amazon, GameStop, and Target. Iron Man Mark 3 (LE 7,500) released Nov 4; Professor X drops Nov 8 at Target (LE 9,500); Professor Pyg Nov 11 at GameStop (LE 9,500).",
    url: "https://comicbook.com/crate/funko-pop-november-2026-releases/",
    note: "Retail list prices noted in the article; availability varies by store.",
  },
  {
    id: "mcu-archives-look",
    lane: "drops",
    where: "bluesky",
    title: "First look at MCU Archives Funko Pops landing Tuesday",
    source: "@funkonews.bsky.social",
    when: "6 Nov 2026",
    text: "First Look! MCU Archives Funko POPs! 🛡️⚡ Part of the journey is the end ~ Going live at the links below.. Tuesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzohh3cwcc25",
  },
  {
    id: "space-jam-look",
    lane: "drops",
    where: "bluesky",
    title: "First look at Space Jam Michael Jordan Funko Pop landing Tuesday",
    source: "@funkonews.bsky.social",
    when: "6 Nov 2026",
    text: "First Look! Space Jam: Michael Jordan Funko POP! 🏀🐰 It's time to slam now ~ Going live at the links below.. Tuesday, 9AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzoh5ctiu225",
  },
  {
    id: "mystery-items",
    lane: "trades",
    where: "x",
    title: "Funko $5 and Loungefly $10 Mystery items back",
    source: "@DisTrackers",
    when: "6 Nov 2026",
    text: "Funko is back with $5 Funko & $10 Loungefly Mystery items! You’ll see it when you add an item to cart or in cart.",
    url: "https://x.com/DisTrackers/status/2118746608049471679",
    note: "Promotional mystery items; not standard Pops.",
  },
  {
    id: "stitch-chase-sale",
    lane: "trades",
    where: "x",
    title: "Stitch with Mood Chart Chase listed for sale",
    source: "@Frantxu_45",
    when: "7 Nov 2026",
    text: "Vendo Funko Pop Stitch with Mood Chart Chase 1744 en #Wallapop",
    url: "https://x.com/Frantxu_45/status/2119054112905965777",
    note: "Asking price on Wallapop; not a confirmed sale.",
  },
];
