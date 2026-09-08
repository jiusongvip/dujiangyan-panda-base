import rss from "@astrojs/rss";

// Single-page strategy: all content lives on the homepage. Every item links
// to "/" — hash links would be mangled by the RSS lib's trailing-slash
// handling (it appends "/" after the fragment), so keep plain root URLs.
const posts = [
  {
    title: "Dujiangyan Panda Base: The Complete Visitor's Guide",
    description: "Tickets, the volunteer program, how to get there, best time to visit, comparisons, and closure status — all on one page.",
    link: "/",
    pubDate: new Date("2026-07-31"),
  },
  {
    title: "Dujiangyan Panda Base Closure Update",
    description: "Closed April 23, 2026 for renovations. Track reopening status and find the best alternative panda experiences.",
    link: "/",
    pubDate: new Date("2026-04-16"),
  },
  {
    title: "Dujiangyan Panda Volunteer: An Honest Experience",
    description: "What a day as a panda keeper really looks like — cleaning enclosures, preparing bamboo, and hand-feeding pandas.",
    link: "/",
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