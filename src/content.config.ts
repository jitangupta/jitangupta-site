import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const article = defineCollection({
    loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        titleTag: z.string().optional(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        articleTag: z.string().optional(),
        previousArticle: z.string().optional(),
        nextArticle: z.string().optional(),
        headings: z.array(z.object({
            depth: z.number(),
            text: z.string(),
        })).optional(),
    }),
});

export const collections = { article };
