/**
 * ===========================================================================
 * BIBLIOTECA DE MICROAPPS
 * ---------------------------------------------------------------------------
 * Para agregar una microapp nueva: copia un objeto de esta lista, cámbiale
 * los textos y guarda su portada en `src/assets/microapps/<slug>.svg`
 * (o .png / .jpg / .webp). Nada más: la tarjeta de la biblioteca y la landing
 * en /<slug>/ se generan solas.
 * ===========================================================================
 */

export type MicroappModel = 'pago-unico' | 'suscripcion';
export type MicroappStatus = 'disponible' | 'proximamente';

export type Microapp = {
  /** Define la URL: /<slug>/ . Solo minúsculas, números y guiones. */
  slug: string;
  name: string;
  /** Una sola línea: qué hace, en concreto. */
  tagline: string;
  /** 2 o 3 líneas. Se usa también como meta description. */
  description: string;
  /** Ej: "Finanzas", "Ventas", "Turnos", "Stock", "Contenido" */
  category: string;
  /** Para quién es. Ej: "Emprendedores que venden productos hechos a mano" */
  audience: string;
  model: MicroappModel;
  /** En suscripción, es el precio mensual. */
  priceUsd: number;
  /** En suscripción, es el precio mensual. */
  priceArs?: number;
  /** Link de pago de Lemon Squeezy. Si falta, no se muestra el botón en USD. */
  checkoutUsd?: string;
  /** Link de pago de Ualá Bis. Si falta, no se muestra el botón en pesos. */
  checkoutArs?: string;
  /** Dónde se usa la app una vez comprada. */
  appUrl?: string;
  /** Versión de prueba gratis, si existe. */
  demoUrl?: string;
  /** Nombre del archivo dentro de `src/assets/microapps/`. */
  image: string;
  /** Más archivos de `src/assets/microapps/`, en orden. */
  screenshots?: string[];
  problem: { title: string; points: string[] };
  features: { title: string; text: string }[];
  steps?: string[];
  faqs?: { q: string; a: string }[];
  status: MicroappStatus;
  /** Las destacadas aparecen primero en la biblioteca. */
  featured?: boolean;
};

export const microapps: Microapp[] = [
  {
    slug: 'calculadora-de-costos-y-precios',
    name: 'Calculadora de Costos y Precios',
    tagline: 'Descubre cuánto te cuesta cada producto y a qué precio tienes que venderlo.',
    description:
      'Cargas tus materiales, tus horas de trabajo y tus gastos fijos, y la calculadora te dice el costo real de cada producto y el precio de venta que necesitas para ganar lo que te propusiste. Incluye margen, impuestos y comisiones de venta.',
    category: 'Finanzas',
    audience:
      'Emprendedores que fabrican o arman lo que venden: pastelería, cosmética, textil, carpintería, bisutería.',
    model: 'pago-unico',
    priceUsd: 12,
    priceArs: 14900,
    checkoutUsd: 'https://futurislabs.lemonsqueezy.com/buy/00000000-0000-0000-0000-000000000001',
    checkoutArs: 'https://bis.uala.com.ar/futurislabs/calculadora-costos',
    appUrl: 'https://app.futurislabs.net/calculadora-de-costos-y-precios',
    demoUrl: 'https://app.futurislabs.net/calculadora-de-costos-y-precios/demo',
    image: 'calculadora-de-costos-y-precios.svg',
    screenshots: [
      'calculadora-de-costos-y-precios-1.svg',
      'calculadora-de-costos-y-precios-2.svg',
    ],
    status: 'disponible',
    featured: true,
    problem: {
      title: 'Poner precios «a ojo» te está costando dinero',
      points: [
        'Calculas el precio sumando los materiales y nada más, así que tu tiempo de trabajo lo estás regalando.',
        'No tienes repartidos los gastos fijos (luz, alquiler, internet, envases) entre los productos que vendes.',
        'Cuando suben los insumos no sabes cuánto tienes que ajustar cada precio y terminas vendiendo con pérdida.',
        'Das descuentos sin saber a partir de qué punto el producto deja de ser rentable.',
      ],
    },
    features: [
      {
        title: 'Costo real por unidad',
        text: 'Cargas materiales con su precio por kilo, litro o unidad, y la app calcula cuánto entra en cada producto. Nada de reglas de tres a mano.',
      },
      {
        title: 'Tu hora de trabajo, incluida',
        text: 'Defines cuánto vale tu hora y cuánto tardas en producir. El costo de mano de obra entra en el cálculo como corresponde.',
      },
      {
        title: 'Gastos fijos repartidos',
        text: 'Pones tus gastos fijos del mes y tu producción estimada, y la app los distribuye entre tus productos de forma automática.',
      },
      {
        title: 'Precio por margen o por utilidad',
        text: 'Elige si quieres un margen de ganancia en porcentaje o ganar un monto fijo por unidad, y mira el precio final al instante.',
      },
      {
        title: 'Comisiones e impuestos',
        text: 'Suma comisiones de plataformas, costos de medios de pago e impuestos sobre la venta, para que el precio que publicas sea el que te deja ganancia.',
      },
      {
        title: 'Exporta tu lista de precios',
        text: 'Descarga la lista completa en PDF o CSV para compartirla con clientes o usarla en tu tienda.',
      },
    ],
    steps: [
      'Carga tus materiales y el precio al que los compras.',
      'Arma tus productos indicando cuánto material y cuánto tiempo lleva cada uno.',
      'Define tu margen de ganancia, impuestos y comisiones.',
      'Descarga tu lista de precios lista para usar.',
    ],
    faqs: [
      {
        q: '¿Sirve si vendo servicios y no productos?',
        a: 'Sí, pero está pensada para productos. Si vendes servicios, puedes cargar tu hora de trabajo y los insumos que usas, aunque no vas a aprovechar la parte de materiales por unidad.',
      },
      {
        q: '¿Puedo cargar precios en mi moneda?',
        a: 'Sí. Eliges la moneda al empezar y todos los cálculos se hacen con ella. También puedes cambiarla después sin perder tus datos.',
      },
      {
        q: '¿Dónde quedan guardados mis datos?',
        a: 'En tu propio navegador. No se suben a ningún servidor. Puedes exportar un archivo de respaldo cuando quieras y volver a cargarlo en otro dispositivo.',
      },
      {
        q: '¿Qué pasa cuando cambian los precios de mis insumos?',
        a: 'Actualizas el precio del material una sola vez y todos los productos que lo usan se recalculan solos.',
      },
    ],
  },

  {
    slug: 'presupuestos-pdf-para-oficios',
    name: 'Presupuestos PDF para Oficios',
    tagline: 'Arma un presupuesto profesional en PDF desde el celular, en dos minutos.',
    description:
      'Cargas los trabajos y materiales, y la app arma un presupuesto en PDF con tu logo, tus datos y la validez de la oferta. Lo envías por WhatsApp o mail en el momento, mientras todavía estás en la casa del cliente.',
    category: 'Ventas',
    audience:
      'Electricistas, plomeros, gasistas, pintores, albañiles, técnicos y cualquier oficio que presupueste a domicilio.',
    model: 'pago-unico',
    priceUsd: 14,
    priceArs: 17900,
    checkoutUsd: 'https://futurislabs.lemonsqueezy.com/buy/00000000-0000-0000-0000-000000000002',
    checkoutArs: 'https://bis.uala.com.ar/futurislabs/presupuestos-pdf',
    appUrl: 'https://app.futurislabs.net/presupuestos-pdf-para-oficios',
    demoUrl: 'https://app.futurislabs.net/presupuestos-pdf-para-oficios/demo',
    image: 'presupuestos-pdf-para-oficios.svg',
    screenshots: [
      'presupuestos-pdf-para-oficios-1.svg',
      'presupuestos-pdf-para-oficios-2.svg',
    ],
    status: 'disponible',
    featured: true,
    problem: {
      title: 'El presupuesto que tarda tres días es un trabajo que perdiste',
      points: [
        'Anotas la medición en un papel y después, de noche y cansado, tienes que pasarla en limpio.',
        'Mandas el precio por WhatsApp en un mensaje suelto y el cliente lo compara con un presupuesto que se ve profesional.',
        'No te acuerdas qué le cotizaste a quién, ni con qué precios, ni hasta cuándo valía.',
        'Repites a mano los mismos trabajos y materiales en cada presupuesto nuevo.',
      ],
    },
    features: [
      {
        title: 'PDF listo para enviar',
        text: 'Presupuesto con tu logo, tus datos, el detalle de cada ítem, subtotales y total. Se ve igual de ordenado en el celular y en la computadora.',
      },
      {
        title: 'Catálogo de trabajos y materiales',
        text: 'Guarda los ítems que cotizas siempre con su precio, y en el próximo presupuesto los agregas con un toque.',
      },
      {
        title: 'Funciona sin señal',
        text: 'Cargas el presupuesto en el sótano o en una obra sin internet. Cuando vuelves a tener señal, lo envías.',
      },
      {
        title: 'Envío por WhatsApp o mail',
        text: 'Comparte el PDF directo desde el celular con el botón de compartir, sin pasar por la computadora.',
      },
      {
        title: 'Validez y condiciones',
        text: 'Define hasta cuándo vale el precio, la forma de pago y las condiciones del trabajo. Quedan escritas y evitas discusiones después.',
      },
      {
        title: 'Historial de presupuestos',
        text: 'Mira todo lo que cotizaste, busca por cliente y duplica un presupuesto viejo para rehacerlo con precios nuevos.',
      },
    ],
    steps: [
      'Carga una vez tus datos, tu logo y tus precios habituales.',
      'En la casa del cliente, armas el presupuesto eligiendo ítems del catálogo.',
      'Generas el PDF y lo envías por WhatsApp antes de irte.',
    ],
    faqs: [
      {
        q: '¿Puedo poner mi logo?',
        a: 'Sí. Subes tu logo una vez y queda en todos los presupuestos. También puedes poner tu CUIT o identificación fiscal, tu teléfono y tus redes.',
      },
      {
        q: '¿Hace facturas?',
        a: 'No. La app genera presupuestos, no comprobantes fiscales. La factura la sigues haciendo por donde la haces hoy.',
      },
      {
        q: '¿Puedo usarla en la computadora también?',
        a: 'Sí, funciona en cualquier navegador. Está diseñada para el celular, pero en pantalla grande se aprovecha mejor para cargar tu catálogo.',
      },
      {
        q: '¿Cuántos presupuestos puedo hacer?',
        a: 'Todos los que quieras. Es pago único y no hay límite de presupuestos ni de clientes.',
      },
    ],
  },

  {
    slug: 'calculadora-mercado-libre',
    name: 'Calculadora de Comisiones para Mercado Libre',
    tagline: 'Descubre cuánto te queda realmente de cada venta en Mercado Libre.',
    description:
      'Pones tu costo y el precio de venta, y la calculadora descuenta comisión, costo de envío y cargo fijo para mostrarte la ganancia real. También funciona al revés: le dices cuánto quieres ganar y te dice a qué precio publicar.',
    category: 'Ventas',
    audience: 'Vendedores de Mercado Libre, Mercado Shops y marketplaces en general.',
    model: 'pago-unico',
    priceUsd: 10,
    priceArs: 12900,
    checkoutUsd: 'https://futurislabs.lemonsqueezy.com/buy/00000000-0000-0000-0000-000000000003',
    checkoutArs: 'https://bis.uala.com.ar/futurislabs/calculadora-mercado-libre',
    image: 'calculadora-mercado-libre.svg',
    status: 'proximamente',
    problem: {
      title: 'Vendes mucho y no entiendes por qué no te queda nada',
      points: [
        'La comisión, el cargo fijo por unidad y el envío gratis se comen el margen y lo descubres a fin de mes.',
        'Clásica o Premium cambian bastante la cuenta y elegir mal te deja ganando casi nada.',
        'Cuando entras en una promoción con descuento, no sabes si todavía te conviene vender.',
        'Calcular el precio para una ganancia objetivo implica probar números hasta que cierre.',
      ],
    },
    features: [
      {
        title: 'Ganancia real por publicación',
        text: 'Ves el desglose completo: precio, comisión, cargo fijo, envío, costo del producto y lo que te queda en limpio.',
      },
      {
        title: 'Cálculo al revés',
        text: 'Indicas la ganancia que quieres por unidad y la app te dice a qué precio publicar para llegar a ese número.',
      },
      {
        title: 'Clásica frente a Premium',
        text: 'Compara las dos modalidades lado a lado, con y sin cuotas sin interés, y decide con la cuenta a la vista.',
      },
      {
        title: 'Simulador de descuentos',
        text: 'Prueba un 10, 20 o 30 por ciento de descuento y mira hasta dónde puedes bajar el precio sin perder dinero.',
      },
      {
        title: 'Varios productos a la vez',
        text: 'Carga tu lista de publicaciones y detecta de un vistazo cuáles te están dando pérdida.',
      },
      {
        title: 'Porcentajes editables',
        text: 'Las comisiones y los cargos cambian seguido, así que puedes ajustarlos a mano para que la cuenta siempre sea la de hoy.',
      },
    ],
    steps: [
      'Elige la categoría y la modalidad de tu publicación.',
      'Carga tu costo y el precio de venta.',
      'Mira la ganancia real y ajusta el precio hasta que te cierre.',
    ],
    faqs: [
      {
        q: '¿Se conecta con mi cuenta de Mercado Libre?',
        a: 'No. Es una calculadora: cargas los datos a mano y no necesita acceso a tu cuenta ni a tus publicaciones.',
      },
      {
        q: '¿Los porcentajes se actualizan solos?',
        a: 'Vienen con los valores vigentes cargados y puedes editarlos cuando cambien. Las actualizaciones de la app son gratis.',
      },
      {
        q: '¿Sirve para otros países?',
        a: 'Sí. Eliges el país y los porcentajes se ajustan. También puedes editarlos a mano si tu categoría tiene una comisión distinta.',
      },
    ],
  },

  {
    slug: 'control-de-stock-simple',
    name: 'Control de Stock Simple',
    tagline: 'Controla qué te queda y qué tienes que reponer, sin planillas.',
    description:
      'Un control de stock para negocios pequeños: cargas tus productos, registras entradas y salidas, y la app te avisa cuándo cada cosa está por agotarse. Sin módulos que no vas a usar ni configuración de una semana.',
    category: 'Stock',
    audience: 'Kioscos, tiendas de barrio, tiendas de ropa, ferreterías pequeñas y talleres con insumos.',
    model: 'pago-unico',
    priceUsd: 15,
    priceArs: 18900,
    checkoutUsd: 'https://futurislabs.lemonsqueezy.com/buy/00000000-0000-0000-0000-000000000004',
    checkoutArs: 'https://bis.uala.com.ar/futurislabs/control-de-stock-simple',
    image: 'control-de-stock-simple.svg',
    status: 'proximamente',
    problem: {
      title: 'La planilla de stock dejó de servir hace rato',
      points: [
        'Te enteras de que algo se terminó cuando un cliente te lo pide.',
        'Compras de más lo que no rota y te quedas sin lo que vendes todos los días.',
        'La planilla la actualiza una sola persona y cuando no está, nadie sabe cómo va el stock.',
        'Los sistemas de gestión que probaste tienen cincuenta funciones y te piden cargar todo antes de poder empezar.',
      ],
    },
    features: [
      {
        title: 'Alertas de stock mínimo',
        text: 'Defines un mínimo por producto y la app te muestra en una sola pantalla todo lo que tienes que reponer.',
      },
      {
        title: 'Entradas y salidas en dos toques',
        text: 'Registrar una venta o una compra lleva segundos, pensado para hacerlo desde el celular detrás del mostrador.',
      },
      {
        title: 'Búsqueda por código de barras',
        text: 'Usa la cámara del celular para encontrar un producto al instante, sin escribir el nombre.',
      },
      {
        title: 'Valor de tu inventario',
        text: 'Mira cuánto dinero tienes inmovilizado en mercadería y qué productos concentran la mayor parte.',
      },
      {
        title: 'Lista de reposición',
        text: 'Genera la lista de lo que falta para llevársela al proveedor, agrupada por proveedor si lo cargaste.',
      },
      {
        title: 'Importa tu planilla',
        text: 'Si ya tienes un Excel con tus productos, lo subes y empiezas con todo cargado.',
      },
    ],
    steps: [
      'Importa tu planilla o carga tus productos.',
      'Define el stock mínimo de cada uno.',
      'Registra entradas y salidas en el día.',
      'Revisa las alertas antes de comprar.',
    ],
    faqs: [
      {
        q: '¿Funciona para varios usuarios?',
        a: 'Está pensada para un negocio con un equipo chico. Los datos se guardan en el dispositivo y puedes exportarlos para compartirlos, pero no hay cuentas separadas por empleado.',
      },
      {
        q: '¿Es un punto de venta?',
        a: 'No. Lleva el stock, no cobra ni emite comprobantes. Si necesitas facturar, sigue usando el sistema que ya tienes.',
      },
      {
        q: '¿Puedo usarla sin internet?',
        a: 'Sí. Funciona sin conexión y es cómodo si tu local tiene mala señal.',
      },
    ],
  },

  {
    slug: 'turnos-online-para-peluquerias',
    name: 'Turnos Online para Peluquerías',
    tagline: 'Tus clientes reservan solos y los recordatorios salen automáticos.',
    description:
      'Una página de reservas con tu agenda, tus servicios y tus horarios, lista para poner en tu Instagram. Tus clientes eligen día y hora sin escribirte, y la app manda el recordatorio antes del turno para que no falten.',
    category: 'Turnos',
    audience: 'Peluquerías, barberías, centros de estética, manicura, masajes y consultorios pequeños.',
    model: 'suscripcion',
    priceUsd: 20,
    priceArs: 24900,
    checkoutUsd: 'https://futurislabs.lemonsqueezy.com/buy/00000000-0000-0000-0000-000000000005',
    checkoutArs: 'https://bis.uala.com.ar/futurislabs/turnos-online',
    image: 'turnos-online-para-peluquerias.svg',
    status: 'proximamente',
    problem: {
      title: 'Coordinar turnos por WhatsApp te consume el día',
      points: [
        'Contestas mensajes mientras estás atendiendo a alguien y cortas el servicio a cada rato.',
        'Se superponen dos turnos porque uno quedó anotado en un cuaderno y el otro en un chat.',
        'Los clientes que no avisan que no vienen te dejan huecos que podrías haber vendido.',
        'No tienes idea de qué servicio te deja más dinero por hora de trabajo.',
      ],
    },
    features: [
      {
        title: 'Página de reservas propia',
        text: 'Un enlace con tu nombre y tus colores para poner en Instagram, en WhatsApp o en Google. Tus clientes reservan sin descargar nada.',
      },
      {
        title: 'Recordatorios automáticos',
        text: 'La app avisa 24 horas antes del turno y baja mucho la cantidad de personas que no se presentan.',
      },
      {
        title: 'Tus horarios, tus reglas',
        text: 'Defines días, franjas, duración de cada servicio y descansos. Nadie puede reservar donde no hay lugar.',
      },
      {
        title: 'Varias personas en el equipo',
        text: 'Cada profesional tiene su agenda y sus servicios, y el cliente elige con quién quiere atenderse.',
      },
      {
        title: 'Anticipo opcional',
        text: 'Pide un anticipo al reservar para los servicios largos y evita los huecos de último momento.',
      },
      {
        title: 'Números que sirven',
        text: 'Mira tus horas ocupadas, los servicios más pedidos y los clientes que hace tiempo no vuelven.',
      },
    ],
    steps: [
      'Cargas tus servicios, precios y horarios de atención.',
      'Compartes tu enlace de reservas en tus redes.',
      'Tus clientes reservan solos y tú solo miras la agenda del día.',
    ],
    faqs: [
      {
        q: '¿Por qué es por suscripción y no pago único?',
        a: 'Porque tu página de reservas y los recordatorios funcionan todo el tiempo en un servidor, incluso cuando no estás usando la app. Ese costo es mensual.',
      },
      {
        q: '¿Los recordatorios llegan por WhatsApp?',
        a: 'Llegan por mail y por mensaje de texto. La integración con WhatsApp está en camino y entra en la misma suscripción.',
      },
      {
        q: '¿Puedo cancelar cuando quiera?',
        a: 'Sí, cancelas desde tu cuenta y no se vuelve a cobrar. Puedes exportar tu agenda y tus contactos antes de irte.',
      },
      {
        q: '¿Se sincroniza con Google Calendar?',
        a: 'Sí. Cada turno aparece en tu calendario y, si bloqueas una hora ahí, deja de ofrecerse para reservar.',
      },
    ],
  },

  {
    slug: 'generador-de-contenido-para-redes',
    name: 'Generador de Ideas y Guiones para Redes',
    tagline: 'Un mes de contenido para tu negocio, listo en una tarde.',
    description:
      'Le cuentas a qué te dedicas y la app te propone ideas, guiones de video y textos para tus publicaciones, con el tono de tu marca. Te deja un calendario armado para que no empieces cada semana desde una hoja en blanco.',
    category: 'Contenido',
    audience: 'Negocios pequeños que venden por Instagram y TikTok y no tienen quien les haga el contenido.',
    model: 'suscripcion',
    priceUsd: 20,
    priceArs: 24900,
    checkoutUsd: 'https://futurislabs.lemonsqueezy.com/buy/00000000-0000-0000-0000-000000000006',
    checkoutArs: 'https://bis.uala.com.ar/futurislabs/generador-de-contenido',
    image: 'generador-de-contenido-para-redes.svg',
    status: 'proximamente',
    problem: {
      title: 'Sabes que tienes que publicar, pero no sabes qué',
      points: [
        'Abres la aplicación para grabar algo y no se te ocurre nada, así que lo dejas para mañana.',
        'Publicas salteado, una semana sí y tres no, y nunca llegas a tener constancia.',
        'Copias ideas de cuentas grandes que no tienen nada que ver con tu negocio ni con tus clientes.',
        'Lo que publicas suena a folleto y no te genera ni mensajes ni ventas.',
      ],
    },
    features: [
      {
        title: 'Ideas pensadas para tu rubro',
        text: 'Cargas tu negocio, tu público y lo que vendes una sola vez, y las propuestas salen con ese contexto.',
      },
      {
        title: 'Guiones completos de video',
        text: 'No solo el tema: el gancho de los primeros tres segundos, el desarrollo y el cierre con llamado a la acción.',
      },
      {
        title: 'Calendario del mes',
        text: 'Las ideas se acomodan en un calendario con mezcla de formatos, para que no publiques cuatro veces lo mismo.',
      },
      {
        title: 'Tu tono de voz',
        text: 'Eliges cómo quieres sonar: cercano, técnico, divertido o sobrio. Los textos se adaptan a eso.',
      },
      {
        title: 'Textos y hashtags',
        text: 'Cada idea viene con el texto del posteo en tres largos distintos y una tanda de hashtags del rubro.',
      },
      {
        title: 'Banco de ideas',
        text: 'Guarda lo que te gustó y márcalo cuando ya lo publicaste, para no repetirte sin darte cuenta.',
      },
    ],
    steps: [
      'Cuentas a qué se dedica tu negocio y a quién le vendes.',
      'Eliges tu tono y los formatos que quieres usar.',
      'Generas el calendario del mes con ideas y guiones.',
      'Grabas y publicas siguiendo el guion.',
    ],
    faqs: [
      {
        q: '¿Publica por mí en mis redes?',
        a: 'No. Te deja el contenido listo para copiar y grabar, pero publicas tú desde tus cuentas.',
      },
      {
        q: '¿Cuántas ideas puedo generar por mes?',
        a: 'Hasta 120 ideas con guion al mes, que alcanzan de sobra para publicar todos los días.',
      },
      {
        q: '¿Me va a sonar a texto de robot?',
        a: 'Los guiones salen del contexto que cargaste de tu negocio y los editas antes de usarlos. La idea es que no arranques de cero, no que publiques sin leer.',
      },
      {
        q: '¿Sirve si vendo servicios?',
        a: 'Sí. Funciona igual de bien para servicios profesionales, oficios y comercios.',
      },
    ],
  },
];

/* ===========================================================================
   HELPERS
   =========================================================================== */

/** Orden de la biblioteca: destacadas primero, "próximamente" al final. */
export function sortedMicroapps(apps: Microapp[] = microapps): Microapp[] {
  const rank = (app: Microapp) => {
    if (app.status === 'proximamente') return 2;
    return app.featured ? 0 : 1;
  };
  return [...apps].sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name, 'es'));
}

/** Categorías presentes en los datos, ordenadas alfabéticamente. */
export function categories(apps: Microapp[] = microapps): string[] {
  return [...new Set(apps.map((app) => app.category))].sort((a, b) => a.localeCompare(b, 'es'));
}

/** Hasta `limit` microapps de la misma categoría, excluyendo la actual. */
export function relatedMicroapps(app: Microapp, limit = 3): Microapp[] {
  const sameCategory = sortedMicroapps().filter(
    (other) => other.slug !== app.slug && other.category === app.category,
  );
  const rest = sortedMicroapps().filter(
    (other) => other.slug !== app.slug && other.category !== app.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
