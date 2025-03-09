import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    difficulty: z.number().min(1).max(3),
    description: z.string().optional(),
  })
});

export const collections = {
  projects: projects
};