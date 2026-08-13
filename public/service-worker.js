/*
 * Service worker de autodestruição.
 * Substitui o antigo service worker do create-react-app (registrado nesta
 * mesma URL) para liberar visitantes presos no cache da versão anterior.
 * O PWA atual usa o sw.js gerado pelo vite-plugin-pwa.
 */
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      clients.forEach((client) => client.navigate(client.url))
    })()
  )
})
