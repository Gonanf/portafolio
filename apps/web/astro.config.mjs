// @ts-check
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
	output: 'server',
	 i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
	 },
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: false,
    },
  },
  integrations: [react()],
  adapter: cloudflare({
    imageService: { build: 'compile', runtime: 'cloudflare-binding' },
  }),
})
