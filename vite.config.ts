import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'

const base = process.env.BASE_PATH ?? '/RETHorizon_Website/'
const siteUrl = process.env.SITE_URL ?? base
const brand: { name: string; descriptor: string } = JSON.parse(readFileSync('src/data/brand.json', 'utf8'))

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'studio-branding',
      transformIndexHtml(html) {
        return html
          .replaceAll('__BRAND_NAME__', brand.name)
          .replaceAll('__BRAND_DESCRIPTOR__', brand.descriptor)
          .replaceAll('__SITE_URL__', siteUrl)
      },
    },
  ],
})
