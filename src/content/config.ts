import { z, defineCollection } from "astro:content";

const landingCollection = defineCollection({});
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    releaseDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    gitUrl: z.string().optional(),
    publicUrl: z.string().optional(),
    rating: z.number(),
  }),
});

export const collections = {
  landing: landingCollection,
  projects: projectsCollection,
};
