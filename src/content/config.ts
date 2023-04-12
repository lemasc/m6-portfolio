import { z, defineCollection } from "astro:content";
const landingCollection = defineCollection({});
export const collections = {
  landing: landingCollection,
};
