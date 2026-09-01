import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap' // <-- Removed the curly braces { }

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://youngexplorersnepal.com',
      // If you have routes like /about, /contact, add them here:
      // routes: ['/', '/about', '/programs', '/contact']
    })
  ],
})