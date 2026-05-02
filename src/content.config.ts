import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const learn = defineCollection({
    loader: glob({ base: './src/content/learn', pattern: '**/*.{md,mdx}' }),
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
        draft: z.boolean().optional(),
        targetQuery: z.string().optional(),
        faq: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })).optional(),
        videos: z.array(z.object({
            youtubeId: z.string(),
            name: z.string(),
            description: z.string().optional(),
            uploadDate: z.string().optional(),
        })).optional(),
    }),
});

const caseStudies = defineCollection({
    loader: glob({ base: './src/content/caseStudies', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        pageTitle: z.string(),
        seoTitle: z.string(),
        summary: z.string().optional(),
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
        draft: z.boolean().optional(),
        testimonial: z.string().optional(),
        testimonialAuthor: z.string().optional(),
        testimonialAuthorTitle: z.string().optional(),
        testimonialAuthorCompany: z.string().optional(),
        testimonialAuthorImage: z.string().optional(),
        stats: z.array(z.object({
            percentage: z.string(),
            description: z.string(),
        })).optional(),
        aiBridge: z.string().optional(),
    }),
});

const notes = defineCollection({
    loader: glob({ base: './src/content/self-notes', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
        draft: z.boolean().optional(),
    }),
});

export const collections = { learn, caseStudies, notes };
