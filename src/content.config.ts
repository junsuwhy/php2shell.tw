import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const audience = z.enum(['non-technical', 'developer', 'onlooker']);
const precision = z.enum(['exact', 'approximate', 'date-only']);
// YAML may parse unquoted dates as Date objects; normalize to the original string form.
const dateish = z.union([z.string(), z.date()]).transform((v) => (v instanceof Date ? v.toISOString() : v));

// 新聞：直接讀 docs/news/*.md，新增新聞＝新增一個檔案
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './docs/news' }),
  schema: z.object({
    title: z.string(),
    title_zh: z.string().optional(),
    source: z.string(),
    source_type: z.string(),
    url: z.url(),
    author: z.string(),
    published_at: dateish,
    published_at_taipei: z.string(),
    updated_at: dateish.optional(),
    time_precision: precision,
    time_note: z.string().optional(),
    language: z.string(),
    fetched_at: dateish,
    fetch_status: z.literal('failed').optional(),
    tags: z.array(z.string()).default([]),
    audience: z.array(audience).default([]),
  }),
});

// 時間軸：src/data/timeline.yaml
const timeline = defineCollection({
  loader: file('src/data/timeline.yaml'),
  schema: z.object({
    at: dateish,
    precision,
    title: z.string(),
    summary: z.string(),
    sources: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([]),
    importance: z.number().int().min(1).max(3).default(2),
  }),
});

// 名詞表：src/data/glossary.yaml（/dev/ 自動註解、/news/ 與 /basic/ 也可引用白話說明）
const glossary = defineCollection({
  loader: file('src/data/glossary.yaml'),
  schema: z.object({
    term: z.string(),
    aliases: z.array(z.string()).default([]),
    plain: z.string(),
    note: z.string(),
    see: z.array(z.string()).default([]),
  }),
});

const outages = defineCollection({
  loader: file('src/data/outages.yaml'),
  schema: z.object({
    name: z.string(),
    region: z.string(),
    kind: z.enum(['government', 'company', 'community', 'game', 'media', 'other']),
    action: z.string(),
    php_confirmed: z.boolean(),
    sources: z.array(z.string()).min(1),
  }),
});

const quotes = defineCollection({
  loader: file('src/data/quotes.yaml'),
  schema: z.object({
    quote: z.string(),
    quote_original: z.string().optional(),
    speaker: z.string(),
    role: z.string(),
    sources: z.array(z.string()).min(1),
  }),
});

// 說法分歧：src/data/discrepancies.yaml（/news/rumors/ 並列各說法，assessment 只作對照）
const discrepancies = defineCollection({
  loader: file('src/data/discrepancies.yaml'),
  schema: z.object({
    topic: z.string(),
    claims: z.array(z.object({ claim: z.string(), by: z.string() })).min(1),
    assessment: z.string(),
    sources: z.array(z.string()).default([]),
    pending: z.boolean().default(false),
  }),
});

export const collections = { news, timeline, glossary, outages, quotes, discrepancies };
