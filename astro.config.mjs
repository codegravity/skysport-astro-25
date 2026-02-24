// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import robotsTxt from 'astro-robots-txt';
import node from '@astrojs/node';
import react from '@astrojs/react';
// Comment out Vercel for local dev
import vercel from '@astrojs/vercel';


import partytown from '@astrojs/partytown';


export default defineConfig({
  //  prefetch: true,
  
  site: 'https://stage.skysport.se',

  integrations: [
    mdx(),
    sitemap(),
    icon(),
    robotsTxt(),
    react(),
    partytown({
      config: { 
        debug: false,
        forward: ['dataLayer.push'],
       },
    }),
  ],
  experimental: {
    //
  },
  vite: {
    plugins: [tailwindcss()],
    
    optimizeDeps: {
      include: ['leaflet'],
    },
  },

  //comment out  Vercel  for local dev
     output: 'server',
  adapter: vercel(),   

// use node for local dev

//   output: 'server',

  
  
  /* adapter: node({
      mode: 'standalone'
    }) */
});