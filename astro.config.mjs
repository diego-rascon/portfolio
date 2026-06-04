// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), svelte()],

  image: {
    service: {
      entrypoint: "astro/assets/services/noop"
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});