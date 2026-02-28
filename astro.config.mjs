
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import robotsTxt from 'astro-robots-txt';
import node from '@astrojs/node';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import astroConsent from "astro-consent";

// Comment out Vercel for local dev
import vercel from '@astrojs/vercel';

export default defineConfig({
    prefetch: true,
  
  site: 'https://stage.skysport.se',

  integrations: [
    astroConsent({
      siteName: "Skysport",
      policyUrl: "https://skysport.se/Om-Oss/integritetspolicy",
      consent: {
        days: 30,
        storageKey: "skysport-cookie-consent"
      },
      categories: {
        analytics: true,
        marketing: false
      }
    }),

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