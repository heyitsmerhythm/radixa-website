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
    }),
  ],
  compressHTML: true,
});
