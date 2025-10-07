// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://token-template.deno.dev",
  integrations: [mdx(), sitemap(), tailwind()],

  markdown: {
    shikiConfig: {
      theme: "github-dark-high-contrast",
    },
  },

  adapter: vercel(),
});