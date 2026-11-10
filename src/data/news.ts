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

export const pulled = "10 Nov 2026";

export const brief =
  "Funko Shop exclusive Sanji Wanted Poster from One Piece got an in-hand first peek ahead of its upcoming drop. Beauty and the Beast 35th Anniversary POPs are set to land this Friday at Disney Store. New Finding Nemo figures appeared in-hand and out-of-box at multiple retailers. Amazon cut several exclusive POPs, including the TMNT Last Ronin 4-pack to $19.49 and Transformers Optimus Prime to $9.99.";

export const articles: Article[] = [
  {
    id: "sanji-wanted-poster-x",
    lane: "limited",
    where: "x",
    title: "First peek in hand with Funko Shop exclusive Sanji Wanted Poster POP",
    source: "@FunkoPOPsNews",
    when: "10 Nov 2026",
    text: "First peek in hand with the Funko Shop exclusive Sanji POP! Wanted Poster! Coming soon to the link below ~",
    url: "https://x.com/FunkoPOPsNews/status/2119999892495954071",
    note: "Affiliate link in original post.",
  },
  {
    id: "sanji-wanted-poster-bsky",
    lane: "limited",
    where: "bluesky",
    title: "First peek in hand with Funko Shop exclusive Sanji Wanted Poster POP",
    source: "@funkonews.bsky.social",
    when: "10 Nov 2026",
    text: "First peek in hand with the Funko Shop exclusive Sanji POP! Wanted Poster! Coming soon to the link below ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzwk4dj2d22l",
    note: "Affiliate link in original post.",
  },
  {
    id: "beauty-beast-35th-x",
    lane: "drops",
    where: "x",
    title: "Beauty and the Beast 35th Anniversary collection landing Friday",
    source: "@FunkoPOPsNews",
    when: "10 Nov 2026",
    text: "Peep the full Beauty and the Beast 35th Anniversary collection, landing this Friday.. link below!",
    url: "https://x.com/FunkoPOPsNews/status/2119998424326283367",
    note: "Affiliate link in original post.",
  },
  {
    id: "beauty-beast-35th-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Beauty and the Beast 35th Anniversary collection landing Friday",
    source: "@funkonews.bsky.social",
    when: "10 Nov 2026",
    text: "Peep the full Beauty and the Beast 35th Anniversary collection, landing this Friday.. link below!",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzwjfsni7k2l",
    note: "Affiliate link in original post.",
  },
  {
    id: "finding-nemo-inhand-x",
    lane: "drops",
    where: "x",
    title: "In hand and OOB with new Finding Nemo Funko POPs",
    source: "@FunkoPOPsNews",
    when: "10 Nov 2026",
    text: "Fish are friends ~ in hand and OOB with the cute new Finding Nemo Funko POPs! Available below ..",
    url: "https://x.com/FunkoPOPsNews/status/2119983440225329263",
    note: "Affiliate links in original post.",
  },
  {
    id: "finding-nemo-inhand-bsky",
    lane: "drops",
    where: "bluesky",
    title: "In hand and OOB with new Finding Nemo Funko POPs",
    source: "@funkonews.bsky.social",
    when: "10 Nov 2026",
    text: "Fish are friends ~ in hand and OOB with the cute new Finding Nemo Funko POPs! Available below ..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzwg43advs2t",
    note: "Affiliate links in original post.",
  },
  {
    id: "tmnt-last-ronin-amazon-x",
    lane: "trades",
    where: "x",
    title: "Amazon Exclusive TMNT: The Last Ronin 4-Pack on sale for $19.49",
    source: "@funkofinderz",
    when: "10 Nov 2026",
    text: "The Amazon Exclusive TMNT: The Last Ronin Funko Pop! 4-Pack is on sale for just $19.49 (Reg. $59.99).",
    url: "https://x.com/funkofinderz/status/2120091640878489822",
    note: "Listed sale price; affiliate link in original post. Confirm current price before buying.",
  },
  {
    id: "transformers-optimus-amazon-x",
    lane: "trades",
    where: "x",
    title: "Amazon Exclusive Transformers x MTG Optimus Prime down to $9.99",
    source: "@funkofinderz",
    when: "10 Nov 2026",
    text: "The Amazon Exclusive Transformers x MTG Optimus Prime Funko Pop! Comic Cover is down to just $9.99 (Reg. $24.99)!",
    url: "https://x.com/funkofinderz/status/2120093169672986685",
    note: "Listed sale price; affiliate link in original post. Confirm current price before buying.",
  },
  {
    id: "fairly-oddparents-amazon-x",
    lane: "trades",
    where: "x",
    title: "Amazon Exclusive Fairly OddParents Cosmo & Wanda down to $7.49",
    source: "@funkofinderz",
    when: "10 Nov 2026",
    text: "The Amazon Exclusive Fairly OddParents Cosmo & Wanda (Goldfish) Funko Pop! Moment is down to just $7.49 (Reg. $34.99)!",
    url: "https://x.com/funkofinderz/status/2120092506423730309",
    note: "Listed sale price; affiliate link in original post. Confirm current price before buying.",
  },
  {
    id: "hello-kitty-space-preorder-x",
    lane: "limited",
    where: "x",
    title: "Pop! Mystery Hello Kitty (Space) 6-Pack pre-order at $89.99",
    source: "@ToysTracker",
    when: "10 Nov 2026",
    text: "Funko [89.99]: Pop! Mystery Hello Kitty (Space) 6-Pack [Pre-order]",
    url: "https://x.com/ToysTracker/status/2120068073927409713",
    note: "Retail list/pre-order price on Funko.com; affiliate link in original post.",
  },
];
