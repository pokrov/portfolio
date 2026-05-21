import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saad-boukhrouf.netlify.app',
  integrations: [sitemap()],
  output: 'static'
});
