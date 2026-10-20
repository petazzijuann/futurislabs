# Futurislabs

Sitio estático de **Futurislabs**, una biblioteca de microapps: herramientas web pequeñas que
resuelven un problema concreto para emprendedores y pymes.

Hecho con [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) y TypeScript.
No tiene backend ni base de datos: todo se genera en el build y se sirve como HTML estático.

---

## Empezar

```bash
npm install
npm run dev      # http://localhost:4321
```

| Comando           | Qué hace                                              |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga automática.        |
| `npm run build`   | Genera el sitio estático en `dist/`.                  |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar.       |
| `npm run check`   | Revisa los tipos de TypeScript y los archivos Astro.  |

Necesitas Node 22 o superior (está fijado en `.nvmrc`).

---

## Cómo está armado

```
src/
├─ assets/microapps/     Portadas y capturas de cada microapp
├─ components/           Piezas reutilizables (tarjeta, botones de pago, FAQ…)
├─ data/
│  ├─ microapps.ts       ← LA BIBLIOTECA: una entrada por microapp
│  └─ site.ts            ← Nombre, URL, mail, redes y preguntas generales
├─ layouts/BaseLayout.astro   <head>, SEO, Open Graph, JSON-LD
├─ lib/                  Helpers de precios, imágenes y orden
├─ pages/
│  ├─ index.astro        Página principal (biblioteca)
│  ├─ [slug].astro       Una landing por microapp, generada desde los datos
│  └─ 404.astro
└─ styles/global.css     ← TODOS LOS COLORES Y TIPOGRAFÍAS
```

---

## Agregar una microapp

Son dos pasos.

### 1. Guardar la portada

Copia la imagen en `src/assets/microapps/`. Lo más cómodo es nombrarla igual que el slug:

```
src/assets/microapps/mi-microapp-nueva.svg
```

Sirven `.svg`, `.png`, `.jpg`, `.jpeg`, `.webp` y `.avif`. La proporción ideal es **1200 × 630**
(la misma que usan las tarjetas de la biblioteca y las vistas previas de redes sociales).

### 2. Agregar el objeto en `src/data/microapps.ts`

Copia una entrada que ya exista, cámbiale los textos y listo. Con eso se generan solas la tarjeta
de la biblioteca, la landing en `/mi-microapp-nueva/`, el sitemap y los datos de SEO.

```ts
{
  slug: 'mi-microapp-nueva',          // define la URL: /mi-microapp-nueva/
  name: 'Mi Microapp Nueva',
  tagline: 'Una línea que diga qué hace, en concreto.',
  description: 'Dos o tres líneas. También se usa como descripción para Google y redes.',
  category: 'Finanzas',               // agrupa y genera el filtro de la biblioteca
  audience: 'Para quién es, con ejemplos de rubros.',
  model: 'pago-unico',                // 'pago-unico' | 'suscripcion'
  priceUsd: 12,                       // en suscripción, es el precio por mes
  priceArs: 14900,                    // opcional, también mensual si es suscripción
  checkoutUsd: 'https://...',         // link de Lemon Squeezy
  checkoutArs: 'https://...',         // link de Ualá Bis
  appUrl: 'https://...',              // opcional: dónde se usa una vez comprada
  demoUrl: 'https://...',             // opcional: agrega el botón "Probar demo gratis"
  image: 'mi-microapp-nueva.svg',     // archivo dentro de src/assets/microapps/
  screenshots: ['mi-microapp-1.png'], // opcional
  problem: {
    title: 'El problema, dicho como lo diría tu cliente',
    points: ['Punto uno.', 'Punto dos.'],
  },
  features: [{ title: 'Una función', text: 'Qué resuelve.' }],
  steps: ['Paso 1', 'Paso 2'],        // opcional
  faqs: [{ q: '¿Pregunta?', a: 'Respuesta.' }],  // opcional
  status: 'disponible',               // 'disponible' | 'proximamente'
  featured: true,                     // opcional: la pone primera en la biblioteca
}
```

### Detalles que conviene saber

- **Orden de la biblioteca:** primero las `featured`, después el resto y al final las
  `proximamente`. Dentro de cada grupo, por orden alfabético.
- **Botones de pago:** si falta `checkoutUsd` o `checkoutArs`, ese botón no se muestra. Si la
  visita parece de Argentina (zona horaria `America/Argentina/...` o idioma `es-AR`), el botón en
  pesos aparece primero. Sin JavaScript se ven los dos, con el de USD adelante.
- **`status: 'proximamente'`:** reemplaza los botones de compra por "Avísame cuando salga", que
  abre un mail al contacto de `src/data/site.ts` con el nombre de la microapp en el asunto.
- **Suscripción:** los precios se muestran como `USD 20 / mes` automáticamente.
- **Categorías:** no hay una lista fija. Si escribes una categoría nueva, aparece sola como filtro.
- Si el archivo de `image` no existe, el build falla con un mensaje que dice qué imagen falta.

---

## Cambiar portadas y capturas

Las imágenes de ejemplo son SVG generados a propósito como **placeholders**: son para reemplazar
por capturas reales de cada herramienta.

1. Guarda la imagen nueva en `src/assets/microapps/`.
2. Actualiza `image` (portada) o `screenshots` (array, en el orden en que se muestran) en
   `src/data/microapps.ts`.

Recomendaciones:

- **Portada:** 1200 × 630 px. Es la que se ve en la tarjeta, en el encabezado de la landing y en
  las vistas previas de WhatsApp, Instagram, X y Google.
- **Capturas:** cualquier proporción, mejor todas iguales entre sí. Se muestran de a dos en
  pantalla grande.
- Astro optimiza y genera varios tamaños de los PNG, JPG y WEBP. Los SVG se sirven tal cual.
- Para Open Graph, la portada se convierte automáticamente a JPEG de 1200 × 630, así que funciona
  aunque el original sea un SVG.

---

## Cambiar colores y tipografías

### Colores

Están todos en `src/styles/global.css`, arriba de todo. Son dos bloques: modo claro (`:root`) y
modo oscuro (`@media (prefers-color-scheme: dark)`). El sitio sigue el modo del sistema.

```css
:root {
  --fl-paper: #f7f6f2;    /* fondo de la página */
  --fl-surface: #ffffff;  /* tarjetas */
  --fl-ink: #14181a;      /* texto principal */
  --fl-muted: #575e63;    /* texto secundario */
  --fl-accent: #07706b;   /* color de acento: botones, links, detalles */
  --fl-signal: #c8e64a;   /* color de señal: badge "Próximamente" */
  ...
}
```

Cambiando `--fl-accent` (y su versión oscura) cambia el color de todo el sitio. Si tocas los
colores, revisa que el contraste siga cumpliendo WCAG AA (4.5:1 para texto) con cualquier medidor
de contraste.

### Tipografías

Se descargan de Google Fonts **en el build** y se sirven desde tu propio dominio, así que no hay
pedidos a servidores de Google en producción. Se configuran en `astro.config.mjs`:

```js
fonts: [
  { provider: fontProviders.google(), name: 'Space Grotesk', cssVariable: '--fl-font-display', weights: [500, 600, 700], ... },
  { provider: fontProviders.google(), name: 'Inter',         cssVariable: '--fl-font-sans',    weights: [400, 500, 600], ... },
]
```

Para cambiarlas, reemplaza `name` por cualquier familia de Google Fonts y ajusta los `weights`.
`--fl-font-display` es la de los títulos y `--fl-font-sans` la del texto.

---

## Deploy en Cloudflare Pages

1. Sube el proyecto a un repositorio de GitHub.
2. En el panel de Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, y elige el
   repositorio.
3. Configura el build así:

   | Campo                  | Valor           |
   | ---------------------- | --------------- |
   | Framework preset       | Astro           |
   | Build command          | `npm run build` |
   | Build output directory | `dist`          |
   | Root directory         | (vacío)         |

4. En **Environment variables**, agrega `NODE_VERSION` con valor `22`.
5. **Save and Deploy**. Cada push a la rama principal vuelve a publicar el sitio solo.

### Conectar el dominio

1. En el proyecto de Pages: **Custom domains → Set up a custom domain** y escribe tu dominio
   (por ejemplo `futurislabs.com`).
2. Si el dominio ya está en Cloudflare, los registros DNS se crean solos. Si está en otro
   proveedor, Cloudflare te muestra el `CNAME` que tienes que cargar allá.
3. El certificado HTTPS se emite solo; puede tardar unos minutos.
4. **Importante:** cambia la URL del sitio en los dos lugares donde está:
   - `astro.config.mjs` → `const SITE_URL = 'https://futurislabs.com'`
   - `src/data/site.ts` → `url: 'https://futurislabs.com'`
   - y también en `public/robots.txt`, en la línea del `Sitemap:`.

   De esa URL salen el canonical, el sitemap y las vistas previas de redes sociales.

---

## SEO

Ya viene resuelto y se actualiza solo cuando agregas microapps:

- `title`, `description` y `canonical` por página.
- Open Graph y Twitter card, con la portada de cada microapp como imagen.
- `sitemap-index.xml` generado en cada build y `robots.txt` en `public/`.
- JSON-LD en cada landing: `SoftwareApplication` con precio y moneda, `BreadcrumbList` y
  `FAQPage`.

Lo único que hay que actualizar a mano es el mail, las redes y el usuario de X en
`src/data/site.ts`.
