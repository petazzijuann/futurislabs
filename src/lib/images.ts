/**
 * Resuelve los nombres de archivo de `src/data/microapps.ts` a imágenes
 * optimizables por Astro. Al importar todo con `import.meta.glob`, agregar
 * una portada nueva es solo copiar el archivo a `src/assets/microapps/`.
 * El glob entra en subcarpetas, así que una microapp con mucho material
 * puede tener la suya (por ejemplo `costos/`). Como la búsqueda es por
 * nombre de archivo, esos nombres tienen que ser únicos en todo el proyecto.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/microapps/**/*.{svg,png,jpg,jpeg,webp,avif,gif}',
  { eager: true },
);

const byName = new Map<string, ImageMetadata>(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
);

/** Devuelve la imagen o lanza un error claro en el build si falta el archivo. */
export function microappImage(fileName: string): ImageMetadata {
  const image = byName.get(fileName);
  if (!image) {
    throw new Error(
      `No se encontró la imagen "${fileName}". Guárdala en src/assets/microapps/ ` +
        `(disponibles: ${[...byName.keys()].join(', ') || 'ninguna'}).`,
    );
  }
  return image;
}

/** Igual que `microappImage`, pero sin romper el build si el archivo no está. */
export function microappImages(fileNames: string[] = []): ImageMetadata[] {
  return fileNames.map((name) => byName.get(name)).filter((img): img is ImageMetadata => !!img);
}
