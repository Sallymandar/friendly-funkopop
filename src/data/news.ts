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

export const pulled = "9 Nov 2026";

export const brief =
  "Funko's Black Friday member sale went live with discounts up to 70% on select Pops. New Step Brothers figures were announced for next week, along with Naruto Shippuden POPs. In-hand photos of the GameStop LE Professor Pyg circulated ahead of its Wednesday drop, while an early link for the delayed Target Professor X exclusive appeared. Retail exclusive Doctor Doom with Franklin listed on Funko.com, and first looks included an EE flocked Gizmo.";

export const articles: Article[] = [
  {
    id: "black-friday-sale-x",
    lane: "drops",
    where: "x",
    title: "Funko Black Friday Sale live for Fan Rewards members",
    source: "@funkofinderz",
    when: "9 Nov 2026",
    text: "Funko's Black Friday Sale is now LIVE for all Fan Rewards members! Save up to 70% off on select Funko Pop! and collectibles.",
    url: "https://x.com/funkofinderz/status/2119722847111372973",
    note: "Member preview; affiliate link in original post.",
  },
  {
    id: "step-brothers-x",
    lane: "drops",
    where: "x",
    title: "Brand new Step Brothers Funko POPs landing next week",
    source: "@FunkoPOPsNews",
    when: "9 Nov 2026",
    text: "Did we just become best friends? 🥁🛥️ Brand new Step Brothers Funko POPs! Landing next week .. ~ 2-Pack: Prestige Worldwide ~ Brennan Huff ~ Dale Doback",
    url: "https://x.com/FunkoPOPsNews/status/2119659868441506025",
  },
  {
    id: "step-brothers-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Brand new Step Brothers Funko POPs landing next week",
    source: "@funkonews.bsky.social",
    when: "9 Nov 2026",
    text: "Did we just become best friends? 🥁🛥️ Brand new Step Brothers Funko POPs! Landing next week .. ~ 2-Pack: Prestige Worldwide ~ Brennan Huff ~ Dale Doback",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzu6byrqys2h",
  },
  {
    id: "professor-pyg-inhand-x",
    lane: "limited",
    where: "x",
    title: "In hand with the new Professor Pyg Funko POP",
    source: "@FunkoPOPsNews",
    when: "9 Nov 2026",
    text: "In hand with the new Professor Pyg Funko POP! Keep an eye out at GameStop, official drop date this Wednesday..",
    url: "https://x.com/FunkoPOPsNews/status/2119608462061502476",
    note: "Official drop Nov 11; early GameStop link in post.",
  },
  {
    id: "professor-pyg-inhand-bsky",
    lane: "limited",
    where: "bluesky",
    title: "In hand with the new Professor Pyg Funko POP",
    source: "@funkonews.bsky.social",
    when: "9 Nov 2026",
    text: "In hand with the new Professor Pyg Funko POP! Keep an eye out at GameStop, official drop date this Wednesday..",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mztssis4ic2g",
    note: "Official drop Nov 11; early link in post.",
  },
  {
    id: "le-reveals-delayed-x",
    lane: "limited",
    where: "x",
    title: "Funko delaying LE reveals for the month",
    source: "@FunkoPOPsNews",
    when: "9 Nov 2026",
    text: "Funko is teasing us by delaying their LE reveals for this month, I wonder if we’ll get something for Black Friday 😳",
    url: "https://x.com/FunkoPOPsNews/status/2119645511921865059",
  },
  {
    id: "le-reveals-delayed-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Funko delaying LE reveals for the month",
    source: "@funkonews.bsky.social",
    when: "9 Nov 2026",
    text: "Funko is teasing us by delaying their LE reveals for this month, I wonder if we’ll get something for Black Friday 😳",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzu337q6oc2h",
  },
  {
    id: "doctor-doom-x",
    lane: "drops",
    where: "x",
    title: "Retail exclusive Doctor Doom with Franklin (Doomsday)",
    source: "@ToysTracker",
    when: "9 Nov 2026",
    text: "Funko [14.99]: Pop! Doctor Doom with Franklin (Doomsday) [Retail Exclusive]",
    url: "https://x.com/ToysTracker/status/2119740214151102761",
    note: "Retail list price $14.99 on Funko.com.",
  },
  {
    id: "gizmo-flocked-x",
    lane: "limited",
    where: "x",
    title: "First look at EE exclusive Gizmo (Flocked) Gremlins POP",
    source: "@POPs_Today",
    when: "9 Nov 2026",
    text: "First look at EE exclusive Gizmo (Flocked) Gremlins POP! available for pre-order Tuesday",
    url: "https://x.com/POPs_Today/status/2119592938883964958",
  },
  {
    id: "naruto-pops-bsky",
    lane: "drops",
    where: "bluesky",
    title: "Brand new Naruto Shippuden Funko POPs landing next week",
    source: "@funkonews.bsky.social",
    when: "9 Nov 2026",
    text: "Shadow Clone Jutsu! 🍥🍃 Brand new Naruto Shippuden Funko POPs! Landing next week .. ~ POP Moment: Naruto Clones ~ Premium: Sakura Earth Break ~ Premium: Sasuke",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mztoxorwcs2q",
  },
  {
    id: "professor-x-early-bsky",
    lane: "limited",
    where: "bluesky",
    title: "Early link for delayed Target exclusive Professor X",
    source: "@funkonews.bsky.social",
    when: "8 Nov 2026",
    text: "Early link for the Target exclusive LE 9,500 Doomsday Xavier Funko POP! Stay tuned .. seems delayed slightly ~",
    url: "https://bsky.app/profile/funkonews.bsky.social/post/3mzsx6ue3ak2k",
    note: "Scheduled for Nov 8; noted as delayed slightly.",
  },
  {
    id: "knicks-statue-x",
    lane: "drops",
    where: "x",
    title: "Funko exclusive Statue of Liberty (NY Knicks 2026 NBA Champions) preorder",
    source: "@JonFunkos",
    when: "9 Nov 2026",
    text: "Funko exclusive Statue of Liberty (New York Knicks 2026 NBA Champions - Ring Night) is available to preorder!",
    url: "https://x.com/JonFunkos/status/2119581680906146131",
  },
];
