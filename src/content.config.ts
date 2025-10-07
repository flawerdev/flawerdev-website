import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    link: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { 
  blog: blogCollection,
  projects: projectsCollection };
