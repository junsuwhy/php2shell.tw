import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

// Read relative to the project root: bundled modules lose their source location.
const load = <T>(name: string): T =>
  parse(readFileSync(join(process.cwd(), 'src/data', `${name}.yaml`), 'utf8')) as T;

export interface Facts {
  name: string;
  updated_at: string;
  cves: { id: string; ghsa: string; title: string; title_zh: string; cvss_v4: number; advisory: string }[];
  released_at: string;
  official_advisory: string;
  fixed: { branch: string; version: string; eol?: string }[];
  source_backports: string[];
  unpatched: string;
  affected_since: string;
  sapis: { name: string; risk: 'highest' | 'high' }[];
  discoverers: string[];
  php_share: { value: string; source: string };
}

export interface Site {
  title: string;
  domain: string;
  lang: string;
  contact_email: string;
}

export const facts = load<Facts>('facts');
export const site = load<Site>('site');
export const gaId: string | undefined = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || undefined;

// 修補發布時間（facts.released_at）拆成台灣時間與 UTC 的白話寫法，給非技術區用
const dayPart = (h: number) => (h < 6 ? '凌晨' : h < 12 ? '上午' : h === 12 ? '中午' : h < 18 ? '下午' : '晚上');
const spoken = (d: Date) => {
  const h = d.getUTCHours();
  const m = d.getUTCMinutes();
  return { part: dayPart(h), hour: h > 12 ? h - 12 : h, minute: m };
};
const released = new Date(facts.released_at);
const releasedTaipei = new Date(released.getTime() + 8 * 3600_000);
export const releaseTime = {
  year: releasedTaipei.getUTCFullYear(),
  month: releasedTaipei.getUTCMonth() + 1,
  day: releasedTaipei.getUTCDate(),
  taipei: spoken(releasedTaipei),
  utc: spoken(released),
};
