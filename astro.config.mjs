// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// La URL del sitio. Cámbiala por tu dominio real cuando lo conectes.
const SITE_URL = 'https://futurislabs.net';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  image: {
    // Las portadas de ejemplo son SVG. Esto permite rasterizarlas a JPEG
    // para las imágenes de Open Graph (las redes sociales no leen SVG).
    // En las páginas, los SVG se siguen sirviendo tal cual (ver Cover.astro).
    dangerouslyProcessSVG: true,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  // Tipografías: se descargan en el build y se sirven desde tu dominio.
  // Para cambiarlas, cambia "name" (cualquier familia de Google Fonts)
  // y, si hace falta, los "weights".
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--fl-font-display',
      weights: [500, 600, 700],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--fl-font-sans',
      weights: [400, 500, 600],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
