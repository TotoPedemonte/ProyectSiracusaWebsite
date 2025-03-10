import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://example.com',
  integrations: [tailwind()],
  adapter: vercel()
})
