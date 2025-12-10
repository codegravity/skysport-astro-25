// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import robotsTxt from 'astro-robots-txt';

//import { imageService } from "@unpic/astro/service";

//import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({

  site: 'https://example.com',

  integrations: [
      mdx(), 
      sitemap(), 
      icon(),
      robotsTxt()],
 /*  image: {
      domains: ["strapi-cdn-2.s3.eu-north-1.amazonaws.com"],
      service: imageService({
        placeholder: "blurhash",
        layout: "constrained",
      }),
      
  }, */
  experimental: {
     //
  },
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