import { microapps, type Microapp } from '../data/microapps';
import { modelLabel } from './format';

export { categories, relatedMicroapps, sortedMicroapps } from '../data/microapps';

/** Pares [valor, etiqueta] para los chips de forma de pago. */
export const modelLabelList: [Microapp['model'], string][] = (
  ['pago-unico', 'suscripcion'] as const
)
  .filter((model) => microapps.some((app) => app.model === model))
  .map((model) => [model, modelLabel[model]]);
