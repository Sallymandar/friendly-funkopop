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

export const pulled = "6 Nov 2026";

export const brief =
  "Thrilljoy PIX drops for Mr. Incredible and Jason Voorhees are set for 8AM PT today with chase and super chase variants. GameStop locations reported multiple Luffy chases in recent shipments. New Aloe Vera Flora figures, Kaiju No. 8, and Avengers Doomsday Beast looks circulated among collectors. Psyren pre-orders remain open at retail.";

export const articles: Article[] = [
  {
    id: "mr-incredible-pix",
    lane: "drops",
    where: "bluesky",
    title: "Mr. Incredible PIX with Glory Days Chase and Frozone Super Chase dropping today",
    source: "@funkonews.bsky.social",
    when: "2 Nov 2026",
    text: "First peek at the new Mr. Incredible PIX! With Glory Days Chase and Frozone Super Chase! 💪 Dropping 11/6 .. 8AM PT!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzcdbczk7224",
  },
  {
    id: "jason-pix-ht",
    lane: "limited",
    where: "x",
    title: "HT Exclusive Jason PIX with Unmasked Chase and Bloody Super Chase dropping today",
    source: "@FunkoPOPsNews",
    when: "2 Nov 2026",
    text: "Peek at the new HT Exclusive Jason PIX! With Unmasked Chase and Bloody Super Chase! ⛏️ Dropping 11/6 .. 8AM PT!",
    url: "https://x.com/FunkoPOPsNews/status/2117391968695451724",
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
    id: "kaiju-no-8-look",
    lane: "drops",
    where: "x",
    title: "Closer look at new Kaiju No. 8 Funko Pops",
    source: "@DisTrackers",
    when: "5 Nov 2026",
    text: "Closer look at the new Kaiju No. 8 Pops! 🔥 🔥 🔥 Check out the blood on the box.",
    url: "https://x.com/DisTrackers/status/2118489143181451466",
  },
  {
    id: "doomsday-beast",
    lane: "drops",
    where: "x",
    title: "Closer look at Avengers Doomsday Beast Funko Pop",
    source: "@DisTrackers",
    when: "5 Nov 2026",
    text: "Closer look at Avengers Doomsday - Beast Pop!",
    url: "https://x.com/DisTrackers/status/2118480799154798832",
  },
  {
    id: "uncle-jerry-drop",
    lane: "drops",
    where: "x",
    title: "Uncle Jerry flags today's Funko exclusive drop window",
    source: "@TheeUncleJerry",
    when: "6 Nov 2026",
    text: "Today’s Funko exclusive drop! 9am PT/12pm ET",
    url: "https://x.com/TheeUncleJerry/status/2118648563781755240",
  },
  {
    id: "kirisaki-preorder",
    lane: "drops",
    where: "x",
    title: "Psyren Kirisaki Kabuto Pop available for pre-order",
    source: "@ToysTracker",
    when: "6 Nov 2026",
    text: "Funko [$14.99]: Pop! Kirisaki Kabuto [Pre-order]",
    url: "https://x.com/ToysTracker/status/2118628644465586338",
    note: "Listed retail pre-order price of $14.99; not a confirmed sale price.",
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
    id: "mr-incredible-pix-x",
    lane: "drops",
    where: "x",
    title: "Mr. Incredible PIX drop confirmed for today on X",
    source: "@FunkoPOPsNews",
    when: "2 Nov 2026",
    text: "First peek at the new Mr. Incredible PIX! With Glory Days Chase and Frozone Super Chase! 💪 Dropping 11/6 .. 8AM PT!",
    url: "https://x.com/FunkoPOPsNews/status/2117088365996597487",
  },
];
