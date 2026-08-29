// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://radixa.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) =>
        !['/privacy/', '/cookies/', '/terms/'].some((p) => page.endsWith(p)),
      // lastmod tells Google which pages are worth recrawling first. Set from
      // build time, which for this site is the moment a change was published.
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  compressHTML: true,
});
