// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import glossaryAnnotation from './src/plugins/glossary/index.mjs';

export default defineConfig({
  site: 'https://php2shell.tw',
  trailingSlash: 'always',
  integrations: [
    // 名詞自動註解只掛在 MDX，且外掛自己只處理 src/pages/dev/、src/content/dev/；/basic/ 不啟用。
    mdx({ processor: satteri({ mdastPlugins: [glossaryAnnotation()] }) }),
    sitemap(),
  ],
});
