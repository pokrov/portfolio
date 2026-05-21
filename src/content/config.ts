import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string()
      })
      .optional(),
    canonicalUrl: z.string().url().optional()
  })
});

export const collections = { articles };
