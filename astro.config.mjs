// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },

  integrations: [icon(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    "/publications": "/research"
  },

  site: 'https://angelazheng.ca'
});