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
