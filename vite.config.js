import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // usa o public/manifest.json existente
      includeAssets: ['covid19.svg', 'favicon.ico', 'logo192.png', 'logo512.png', 'manifest.json'],
      workbox: {
        // inclui o jpg de fundo do #root no precache para o app funcionar offline
        globPatterns: ['**/*.{js,css,html,jpg}'],
      },
    }),
  ],
  resolve: {
    alias: {
      commons: fileURLToPath(new URL('./src/commons', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      containers: fileURLToPath(new URL('./src/containers', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
})
