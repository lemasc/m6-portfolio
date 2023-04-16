// @ts-check

import { defineConfig } from "astro/config";
import i18n from "astro-i18n";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";

/**
 * @type {import("rehype-external-links").Options}
 */
const externalLinkOptions = {
  target: "_blank",
  rel: ["noreferrer", "noopener"],
};

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, externalLinkOptions]],
  },
  integrations: [
    i18n(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
  ],
  output: "server",
  adapter: vercel(),
});
