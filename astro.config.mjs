import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
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
