import type { Microapp } from '../data/microapps';

const usdNumber = new Intl.NumberFormat('es', { maximumFractionDigits: 0 });

const ars = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

/** "USD 12" o "USD 20 / mes" */
export function formatUsd(app: Pick<Microapp, 'priceUsd' | 'model'>): string {
  const base = `USD ${usdNumber.format(app.priceUsd)}`;
  return app.model === 'suscripcion' ? `${base} / mes` : base;
}

/** "$ 14.900" o "$ 24.900 / mes" */
export function formatArs(app: Pick<Microapp, 'priceArs' | 'model'>): string | null {
  if (app.priceArs === undefined) return null;
  const base = ars.format(app.priceArs).replace(/ /g, ' ');
  return app.model === 'suscripcion' ? `${base} / mes` : base;
}

export const modelLabel: Record<Microapp['model'], string> = {
  'pago-unico': 'Pago único',
  suscripcion: 'Suscripción',
};

/** Texto corto para las tarjetas de la biblioteca. */
export function cardPrice(app: Microapp): string {
  return formatUsd(app);
}

/** mailto para las microapps que todavía no salieron. */
export function notifyMailto(app: Microapp, email: string): string {
  const subject = `Avísame cuando salga: ${app.name}`;
  const body = `Hola, quiero que me avisen cuando ${app.name} esté disponible.`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Recorta un texto largo para la meta description, sin cortar palabras. */
export function clampText(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '')}…`;
}
