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
      includeAssets: ['covid19.svg', 'favicon.ico', 'icon-192.png', 'icon-512.png', 'icon-maskable-192.png', 'icon-maskable-512.png', 'manifest.json'],
      workbox: {
        // inclui o webp de fundo do #root no precache para o shell funcionar offline
        globPatterns: ['**/*.{js,css,html,webp}'],
        // o dataset da disease.sh é imutável (série encerrada em 2023): cachear é seguro
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/disease\.sh\/v3\/covid-19\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'covid-api',
              networkTimeoutSeconds: 3,
              expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            // bandeiras carregadas por <img> em no-cors: resposta opaca (status 0)
            urlPattern: /^https:\/\/disease\.sh\/assets\/img\/flags\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'covid-flags',
              expiration: { maxEntries: 260, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      commons: fileURLToPath(new URL('./src/commons', import.meta.url)),
      containers: fileURLToPath(new URL('./src/containers', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
