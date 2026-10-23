import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection, type CollectionEntry, type DataCollectionKey } from 'astro:content';
import { parse } from 'yaml';

// file() loader 不保證順序；依 src/data/<name>.yaml 的排列順序取出（資料檔本身就是編輯好的順序）。
export async function getOrdered<K extends 'timeline' | 'outages'>(name: K) {
  const raw = parse(readFileSync(join(process.cwd(), 'src/data', `${name}.yaml`), 'utf8')) as { id: string }[];
  const index = new Map(raw.map((r, i) => [r.id, i]));
  const entries = await getCollection(name as DataCollectionKey);
  return (entries as CollectionEntry<K>[]).sort((a, b) => index.get(a.id)! - index.get(b.id)!);
}

export type NewsEntry = CollectionEntry<'news'>;

// 新聞依發布時間由新到舊；只有日期的視為該日 00:00 UTC。
const stamp = (v: string) => {
  const t = Date.parse(v);
  return Number.isNaN(t) ? 0 : t;
};

export async function getNews(): Promise<NewsEntry[]> {
  const news = await getCollection('news');
  return news.sort((a, b) => stamp(b.data.published_at) - stamp(a.data.published_at) || b.id.localeCompare(a.id));
}

export const newsTitle = (entry: NewsEntry) => entry.data.title_zh ?? entry.data.title;
// 中文來源讀者直接看原文就好，不另做摘要頁；其他語言才有 /news/<slug>/。
export const hasSummaryPage = (entry: NewsEntry) => !entry.data.language.startsWith('zh');
export const newsHref = (entry: NewsEntry) => (hasSummaryPage(entry) ? `/news/${entry.id}/` : entry.data.url);

const basename = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');

// YAML 的 sources 欄位寫 docs/news 檔名或網址；轉成可連結的項目。
export interface SourceRef {
  label: string;
  href: string;
  internal: boolean;
}

export function resolveSources(refs: string[], news: NewsEntry[]): SourceRef[] {
  const byFile = new Map(news.map((n) => [basename(n.filePath ?? n.id), n]));
  return refs.map((ref) => {
    const hit = byFile.get(basename(ref));
    if (hit) return { label: hit.data.source, href: newsHref(hit), internal: hasSummaryPage(hit) };
    if (/^https?:\/\//.test(ref)) return { label: new URL(ref).hostname.replace(/^www\./, ''), href: ref, internal: false };
    throw new Error(`找不到來源：${ref}（應為 docs/news 檔名或網址）`);
  });
}

export function findNews(news: NewsEntry[], file: string) {
  const hit = news.find((n) => basename(n.filePath ?? n.id) === basename(file));
  if (!hit) throw new Error(`找不到新聞：${file}`);
  return hit;
}

export function referencesNews(refs: string[], entry: NewsEntry) {
  const file = basename(entry.filePath ?? entry.id);
  return refs.some((r) => basename(r) === file);
}

// source_type 是自由短語；歸成幾大類方便篩選與分組，新類型自動落入最接近的一類。
export const sourceGroups = ['官方與平台公告', '政府與公部門', '研究與資安業者', '新聞媒體', '其他'] as const;
export type SourceGroup = (typeof sourceGroups)[number];

export function sourceGroup(type: string): SourceGroup {
  if (/政府|機構/.test(type)) return '政府與公部門';
  if (/媒體|新聞/.test(type)) return '新聞媒體';
  if (/官方/.test(type)) return '官方與平台公告';
  if (/研究|廠商|情報|部落格|社群|協會|威脅/.test(type)) return '研究與資安業者';
  return '其他';
}

const languages: Record<string, string> = {
  en: '英文',
  'zh-TW': '中文（台灣）',
  'zh-HK': '中文（香港）',
  ja: '日文',
  nl: '荷蘭文',
  fr: '法文',
  de: '德文',
  ko: '韓文',
};
export const languageLabel = (code: string) => languages[code] ?? code;

// 依出現次數排序的值，給篩選選單用
export function countBy(values: string[]) {
  const counts = new Map<string, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

// 時間軸時間：只有年、月或日期的照原樣顯示，不補時分；有時分的同時算出 UTC 與台灣時間。
export interface EventTime {
  hasClock: boolean;
  date: string;
  unit?: '日期' | '月份' | '年份';
  utc?: string;
  taipei?: string;
  approximate: boolean;
}

const pad = (n: number) => String(n).padStart(2, '0');
const fmt = (d: Date) =>
  `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;

export function eventTime(at: string, precision: 'exact' | 'approximate' | 'date-only'): EventTime {
  const approximate = precision === 'approximate';
  const ymd = at.match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?/);
  const clock = precision !== 'date-only' && /T\d{2}:\d{2}/.test(at);
  if (!clock || !ymd) {
    const [, y, m, d] = ymd ?? [, at];
    const date = d ? `${y}-${m}-${d}` : m ? `${y} 年 ${Number(m)} 月` : `${y} 年`;
    const unit = d ? '日期' : m ? '月份' : '年份';
    return { hasClock: false, date, unit, approximate };
  }
  const t = new Date(at);
  return {
    hasClock: true,
    date: fmt(t).slice(0, 10),
    utc: `${fmt(t)} UTC`,
    taipei: `${fmt(new Date(t.getTime() + 8 * 3600_000))} 台灣`,
    approximate,
  };
}
