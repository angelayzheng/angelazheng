// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

function openMarkdownLinksInNewTab() {
  return (tree) => {
    const visit = (node) => {
      if (node && node.type === 'element' && node.tagName === 'a') {
        node.properties = node.properties || {};
        node.properties.target = '_blank';
        node.properties.rel = 'noopener noreferrer';
      }

      if (node && Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },

  markdown: {
    rehypePlugins: [openMarkdownLinksInNewTab]
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