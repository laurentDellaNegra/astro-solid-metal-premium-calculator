// https://astro.build/config
import solidJs from '@astrojs/solid-js'
// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    solidJs(),
  ],
})
