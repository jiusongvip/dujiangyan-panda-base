import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// Single-page strategy: every legacy informational URL 301-redirects to
// the matching #section on the homepage, consolidating all ranking
// authority into one page. Legal pages (/privacy, /terms) stay distinct.
export default defineConfig({
  site: "https://www.dujiangyan-panda-base.com",
  trailingSlash: "always",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/about": "/#about",
    "/best-time-to-visit": "/#best-time",
    "/blog": "/#stories",
    "/blog/how-to-book-panda-volunteer": "/#stories",
    "/blog/dujiangyan-panda-volunteer-experience": "/#stories",
    "/closure-updates": "/#alternatives",
    "/contact": "/#about",
    "/dujiangyan-vs-chengdu-panda-base": "/#comparison",
    "/faq": "/#faq",
    "/how-to-get-there": "/#getting-there",
    "/nearby-attractions": "/#nearby",
    "/tickets": "/#tickets",
    "/visit-guide": "/#visit-guide",
    "/volunteer-program": "/#volunteer",
  },
});