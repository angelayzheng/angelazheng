// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

function openMarkdownLinksInNewTab() {
  return (/** @type {any} */ tree) => {
    const visit = (/** @type {any} */ node) => {
      if (node && node.type === "element" && node.tagName === "a") {
        node.properties = node.properties || {};
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
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
    service: passthroughImageService(),
  },

  markdown: {
    processor: unified({
      rehypePlugins: [openMarkdownLinksInNewTab],
    }),
  },

  integrations: [
    icon(),
    mdx({
      rehypePlugins: [openMarkdownLinksInNewTab],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/publications": "/research",
  },

  site: "https://angelazheng.ca",
});
