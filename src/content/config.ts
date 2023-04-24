import { z, defineCollection } from "astro:content";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  releaseDate: z.date(),
  tags: z.array(z.string()),
  image: z.string().optional(),
  gitUrl: z.string().optional(),
  publicUrl: z.string().optional(),
  rating: z.number(),
  draft: z.boolean().optional(),
});

const landingCollection = defineCollection({});
const projectsCollection = defineCollection({
  schema: projectSchema,
});

export const collections = {
  landing: landingCollection,
  projects: projectsCollection,
};
