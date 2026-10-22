// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://php2shell.tw',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
