// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import robotsTxt from 'astro-robots-txt';

//import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({

  site: 'https://example.com',

  integrations: [
      mdx(), 
      sitemap(), 
      icon(),
      robotsTxt()],

  vite: {
      plugins: [tailwindcss()],
      optimizeDeps: {
        include: ['leaflet'],
      },
  },

/*   adapter: node({
    mode: 'standalone',
  }), */
});