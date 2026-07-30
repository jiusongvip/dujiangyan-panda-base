import rss from "@astrojs/rss";

const posts = [
  {
    title: "How to Book the Dujiangyan Panda Volunteer Program",
    description: "Step-by-step guide to securing your spot — reliable booking channels, required documents, how far in advance to plan, and red flags to watch for.",
    link: "/blog/how-to-book-panda-volunteer/",
    pubDate: new Date("2026-07-20"),
  },
  {
    title: "Dujiangyan Panda Volunteer: My Honest Experience",
    description: "What a day as a panda keeper really looks like. Cleaning enclosures, preparing bamboo, hand-feeding pandas, and the unforgettable moments.",
    link: "/blog/dujiangyan-panda-volunteer-experience/",
    pubDate: new Date("2026-06-15"),
  },
];

export async function GET(context) {
  return rss({
    title: "Dujiangyan Panda Base Guide",
    description: "Independent travel guide for visiting and volunteering at Dujiangyan Panda Base near Chengdu, China.",
    site: context.site,
    items: posts,
    customData: `<language>en</language>`,
  });
}
