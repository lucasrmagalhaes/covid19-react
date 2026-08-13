import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// O service worker do PWA é gerado e registrado pelo vite-plugin-pwa no build.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
