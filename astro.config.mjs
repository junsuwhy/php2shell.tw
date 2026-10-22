// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import glossaryAnnotation from './src/plugins/glossary/index.mjs';

export default defineConfig({
  // 正式網址；換網域時在 Cloudflare Pages 設 SITE_URL，sitemap 與分享圖網址會跟著變
  site: process.env.SITE_URL || 'https://php2shell.tw',
  // 事件始末已併入首頁
  redirects: { '/news/': '/#what-happened' },
  trailingSlash: 'always',
  integrations: [
    // 名詞自動註解只掛在 MDX，且外掛自己只處理 src/pages/dev/、src/content/dev/；/basic/ 不啟用。
    mdx({ processor: satteri({ mdastPlugins: [glossaryAnnotation()] }) }),
    sitemap(),
  ],
});
