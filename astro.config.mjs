import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://dujiangyan-panda-base.com",
  trailingSlash: "never",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
