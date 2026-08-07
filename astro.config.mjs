import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://crepeincasa.it',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/richiedi-valutazione/grazie/'),
    }),
  ],
});
