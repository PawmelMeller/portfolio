import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { htmlPrerender } from 'vite-plugin-html-prerender'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/strony-www',
        '/sklepy-internetowe',
        '/aplikacje-webowe',
        '/portfolio',
        '/kontakt',
        '/cennik',
        '/o-mnie',
        '/blog',
        '/faq',
        // Blog Routes
        '/blog/wlasny-sklep-vs-allegro',
        '/blog/koszt-stworzenia-strony-internetowej',
        '/blog/strona-internetowa-react-krok-po-kroku',
        '/blog/nextjs-od-podstaw-przewodnik',
        '/blog/mvp-startup-nextjs',
        '/blog/system-rezerwacji-online-nextjs',
        '/blog/crm-nextjs-dedykowany',
        '/blog/wordpress-vs-nextjs-wybor',
        '/blog/wordpress-czy-dedykowana-strona',
        '/blog/wady-wordpressa-5-powodow',
        '/blog/alternatywy-dla-wordpressa',
        '/blog/seo-react-nextjs',
        '/blog/aplikacja-webowa-vs-gotowe',
        '/blog/sklep-woocommerce-vs-nextjs',
        '/blog/technologia-strony-2026',
        '/blog/strona-od-podstaw-vs-kreator'
      ],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: '/',
})
