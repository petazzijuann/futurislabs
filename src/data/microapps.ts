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
  /**
   * Versión apaisada de la portada, para la tarjeta de la biblioteca y las
   * vistas previas de redes. Si falta, se usa `image`. Conviene definirla
   * cuando `image` es vertical: esos recuadros recortan al centro.
   */
  cardImage?: string;
  /** Más archivos de `src/assets/microapps/`, en orden. */
  screenshots?: string[];
  /** Galería de la landing: capturas y piezas con su texto alternativo. */
  gallery?: { src: string; alt: string }[];
  /**
   * Video de presentación del hero. Las rutas salen de `public/`.
   * Se reproduce en bucle y sin sonido; `hasAudio` agrega el botón para
   * activarlo. Con `prefers-reduced-motion` solo se muestra el póster.
   */
  video?: {
    webm: string;
    mp4: string;
    poster: string;
    /** Relación de aspecto del archivo, para reservar el espacio. */
    width: number;
    height: number;
    hasAudio?: boolean;
    /** Archivo .vtt en `public/`, si hay subtítulos aparte. */
    captions?: string;
    /** Texto para quien no puede ver el video. */
    description: string;
  };
  /** Bloque "Funciona en tu celular". */
  mobile?: { title: string; text: string; image: string; alt: string };
  /** Guía de uso propia, si la microapp tiene una. */
  guideUrl?: string;
  /**
   * Días de prueba gratis. En las de suscripción que la ofrecen, el botón
   * principal invita a probar en vez de mandar al checkout: la suscripción
   * se arranca desde la propia app.
   */
  trialDays?: number;
  /** Texto del botón de demo, cuando "Probar demo gratis" no describe bien. */
  demoLabel?: string;
  /** Línea debajo del precio. Si falta, se arma según el modelo de cobro. */
  priceNote?: string;
  /** Bloque de precio con el detalle de lo que incluye. */
  includes?: { title: string; items: string[] };
  /** Sección "Así lo ven tus clientes": el otro lado de la herramienta. */
  clientView?: {
    title: string;
    text: string;
    ctaLabel: string;
    images: { src: string; alt: string }[];
  };
  problem: { title: string; points: string[] };
  features: { title: string; text: string }[];
  steps?: string[];
  faqs?: { q: string; a: string; link?: { href: string; label: string } }[];
  status: MicroappStatus;
  /** Las destacadas aparecen primero en la biblioteca. */
  featured?: boolean;
};

export const microapps: Microapp[] = [
  {
    slug: 'costos',
    name: 'Calculadora de Costos y Precios',
    tagline: 'Descubre cuánto te cuesta cada producto y a qué precio tienes que venderlo.',
    description:
      'Cargas tus insumos con el precio del envase entero, los minutos de trabajo que lleva cada unidad y tus costos fijos del mes. La app reparte todo y te dice el costo real por unidad y el precio que necesitas para ganar lo que te propusiste, canal de venta por canal de venta.',
    category: 'Finanzas',
    audience:
      'Emprendedores que fabrican o arman lo que venden: pastelería, cosmética, textil, carpintería, bisutería.',
    model: 'pago-unico',
    priceUsd: 12,
    priceArs: 17900,
    checkoutUsd:
      'https://futurislabs.lemonsqueezy.com/checkout/buy/e9985b8c-1fe2-49fe-a0cb-f14b0c6efaf2',
    appUrl: 'https://costos.futurislabs.net',
    demoUrl: 'https://costos.futurislabs.net/?demo',
    image: 'costos-mk-1-costo.webp',
    cardImage: 'costos-mk-1-costo-wide.webp',
    guideUrl: '/costos/guia/',
    video: {
      webm: '/media/costos/costos-demo.webm',
      mp4: '/media/costos/costos-demo.mp4',
      poster: '/media/costos/poster.jpg',
      width: 540,
      height: 960,
      hasAudio: true,
      description:
        'Video de presentación de la Calculadora de Costos: cómo se arma el costo real de un producto y cómo sale el precio de venta.',
    },
    gallery: [
      {
        src: 'costos-mk-1-costo.webp',
        alt: 'Pantalla de costo unitario: $ 11.290 repartidos en materiales, mano de obra, otros costos y costos fijos.',
      },
      {
        src: 'costos-mk-2-precio.webp',
        alt: 'Pantalla de precio de venta con un margen deseado del 40 % y un precio sugerido de $ 18.900.',
      },
      {
        src: 'costos-mk-3-canales.webp',
        alt: 'Tabla de canales de venta con el precio necesario en venta directa, Mercado Libre, tarjeta e Instagram.',
      },
      {
        src: 'costos-mk-4-equilibrio.webp',
        alt: 'Punto de equilibrio: 20 unidades por mes para cubrir $ 200.000 de costos fijos.',
      },
      {
        src: 'costos-pc-1-detalle.webp',
        alt: 'La calculadora abierta en una computadora, con el detalle del costo y el precio de venta juntos en pantalla.',
      },
      {
        src: 'costos-pc-2-pdf.webp',
        alt: 'Ficha del producto lista para descargar en PDF, con el desglose del costo y el precio por canal.',
      },
    ],
    mobile: {
      title: 'Funciona en tu celular',
      text: 'Se instala como una app más: queda en la pantalla de inicio y abre sin navegador. Después de la primera vez funciona sin internet, así que puedes usarla en el taller, en la feria o donde no haya señal. Tus datos quedan guardados en el teléfono.',
      image: 'costos-cel-6-inicio.webp',
      alt: 'La app Costos instalada en la pantalla de inicio de un iPhone, junto al resto de las aplicaciones.',
    },
    status: 'disponible',
    featured: true,
    problem: {
      title: 'Poner precios «a ojo» te está costando dinero',
      points: [
        'Calculas el precio sumando los materiales y nada más, así que tu tiempo de trabajo lo estás regalando.',
        'No tienes repartidos los gastos fijos (luz, alquiler, internet, envases) entre los productos que vendes.',
        'Publicas el mismo precio en Mercado Libre y en Instagram, sin descontar la comisión que se lleva cada canal.',
        'Cuando suben los insumos no sabes cuánto tienes que ajustar cada precio y terminas vendiendo con pérdida.',
      ],
    },
    features: [
      {
        title: 'Insumos con costo proporcional',
        text: 'Cargas el envase como lo compras —el kilo de harina, el litro de esencia, el rollo de tela— y le indicas cuánto entra en cada unidad. La app saca la parte proporcional sola.',
      },
      {
        title: 'Mano de obra por minutos',
        text: 'Defines cuánto vale tu hora y cuántos minutos te lleva producir una unidad. Tu trabajo deja de ser invisible dentro del costo.',
      },
      {
        title: 'Costos fijos prorrateados',
        text: 'Pones los gastos fijos del mes y tu producción estimada, y la app reparte esa carga entre las unidades que vas a hacer.',
      },
      {
        title: 'Precio por margen o margen por precio',
        text: 'Funciona en los dos sentidos: indicas el margen que quieres y ves el precio, o escribes el precio al que te gustaría vender y ves qué margen te deja.',
      },
      {
        title: 'Canales de venta con su comisión',
        text: 'Cargas los canales por los que vendes —Mercado Libre, tarjeta, Instagram— con su comisión, y ves cuánto te queda realmente en cada uno con el mismo precio publicado.',
      },
      {
        title: 'Punto de equilibrio',
        text: 'Te dice cuántas unidades necesitas vender para cubrir los costos fijos del mes y a partir de cuál empiezas a ganar.',
      },
      {
        title: 'Ficha del producto en PDF',
        text: 'Descargas una ficha con el desglose completo del costo, el precio por canal y el margen, para guardarla o mostrársela a alguien.',
      },
      {
        title: 'Offline y en tu celular',
        text: 'Funciona sin internet y se instala como app en el celular o la computadora, así la tienes a mano en el taller o en la feria. Trabaja en 8 monedas.',
      },
    ],
    steps: [
      'Carga tus insumos con el precio del envase y cuánto usas por unidad.',
      'Suma los minutos de trabajo y tus costos fijos del mes.',
      'Elige el margen que quieres, o escribe un precio y mira qué margen te deja.',
      'Compara tus canales de venta y descarga la ficha en PDF.',
    ],
    faqs: [
      {
        q: '¿Hay una guía de uso?',
        a: 'Sí. Está todo explicado paso a paso, con capturas: activar la licencia, instalarla en el celular, cargar un producto, elegir el precio y pasar tus datos de un dispositivo a otro.',
        link: { href: '/costos/guia/', label: 'Ver la guía de uso →' },
      },
      {
        q: '¿Mis datos se pasan solos entre la compu y el celu?',
        a: 'No, se guardan en cada dispositivo. Usa Exportar e Importar para pasarlos.',
      },
      {
        q: '¿En cuántos dispositivos puedo usarla?',
        a: 'La licencia te habilita hasta 3 dispositivos. Por ejemplo, la computadora del taller, tu celular y una tablet.',
      },
      {
        q: '¿Necesito internet para usarla?',
        a: 'No. Después de abrirla la primera vez funciona sin conexión, y puedes instalarla como app en el celular o la computadora.',
      },
      {
        q: '¿Puedo cargar precios en mi moneda?',
        a: 'Sí. Trabaja con 8 monedas y eliges la tuya al empezar. También puedes cambiarla después sin perder tus datos.',
      },
      {
        q: '¿Dónde quedan guardados mis datos?',
        a: 'En tu propio dispositivo. No se suben a ningún servidor ni los vemos nosotros. Puedes exportar un archivo de respaldo cuando quieras y volver a cargarlo donde lo necesites.',
      },
      {
        q: '¿Qué pasa cuando cambian los precios de mis insumos?',
        a: 'Actualizas el precio del insumo una sola vez y todos los productos que lo usan se recalculan solos.',
      },
      {
        q: '¿Sirve si vendo servicios y no productos?',
        a: 'Sí, pero está pensada para productos. Si vendes servicios, puedes cargar tu hora de trabajo y los insumos que usas, aunque no vas a aprovechar la parte de costo proporcional por unidad.',
      },
    ],
  },

  {
    slug: 'recetas',
    name: 'Recetas',
    tagline: 'Calcula cuánto te cuesta cada torta y cuánto cobrarla.',
    description:
      'Cargas tus ingredientes una vez con el precio del paquete, armas tus recetas con medidas caseras o en gramos, y la app te dice cuánto te cuesta cada torta y cada porción. Incluye tu hora de trabajo, el horno, el packaging y los costos fijos, y te deja el presupuesto listo para mandar por WhatsApp.',
    category: 'Finanzas',
    audience:
      'Pasteleros, reposteros y emprendedores gastronómicos que venden por encargo: tortas, mesas dulces, catering y viandas.',
    model: 'pago-unico',
    priceUsd: 12,
    priceArs: 17900,
    checkoutUsd:
      'https://futurislabs.lemonsqueezy.com/checkout/buy/3746a744-2619-4481-b336-052444de8cc1',
    appUrl: 'https://recetas.futurislabs.net',
    demoUrl: 'https://recetas.futurislabs.net/?demo',
    image: 'recetas-mk-1-costo.webp',
    cardImage: 'recetas-mk-1-costo-wide.webp',
    guideUrl: '/recetas/guia/',
    gallery: [
      {
        src: 'recetas-mk-1-costo.webp',
        alt: 'Costo de una torta: $ 14.500 en total y $ 906 por porción, repartidos entre ingredientes, packaging, mano de obra, horno y costos fijos.',
      },
      {
        src: 'recetas-mk-2-despensa.webp',
        alt: 'La despensa con los ingredientes cargados y el botón Actualizar precios para subirlos todos por porcentaje.',
      },
      {
        src: 'recetas-mk-3-presupuesto.webp',
        alt: 'Presupuesto con total, seña y saldo, y los botones para descargar el PDF o copiar el texto para WhatsApp.',
      },
      {
        src: 'recetas-mk-4-molde.webp',
        alt: 'Escalado de molde: la misma receta pasada de 20 cm a 24 cm multiplicando los ingredientes por 1,44.',
      },
      {
        src: 'recetas-cel-6-whatsapp.webp',
        alt: 'El presupuesto ya pegado en un chat de WhatsApp, con la fecha de entrega, las porciones, el total y la seña.',
      },
      {
        src: 'recetas-cel-7-compras.webp',
        alt: 'Lista de compras con la cantidad de paquetes a comprar, el total comprando paquetes enteros y el costo de lo que vas a usar.',
      },
    ],
    mobile: {
      title: 'Funciona en tu celular',
      text: 'Se instala como una app más y queda en la pantalla de inicio, al lado de WhatsApp. Después de la primera vez funciona sin internet, así que puedes consultar una receta o armar un presupuesto en plena producción, con las manos llenas de harina. Tus datos quedan guardados en el teléfono.',
      image: 'recetas-cel-8-inicio.webp',
      alt: 'La app Recetas instalada en la pantalla de inicio del celular, junto a la app Costos.',
    },
    status: 'disponible',
    featured: true,
    problem: {
      title: 'Cobrar «lo que cobran todos» te puede estar costando dinero',
      points: [
        'Miras lo que cobra la competencia y copias ese precio, sin saber si a ti te cuesta lo mismo hacerlo.',
        'En la cuenta entran los ingredientes, pero no el gas del horno, el packaging ni las horas que le pusiste.',
        'Los precios de los insumos suben todos los meses y las recetas siguen costeadas con los valores del año pasado.',
        'Los presupuestos salen a mano por WhatsApp, cada uno distinto, y después no te acuerdas qué le cotizaste a quién.',
      ],
    },
    features: [
      {
        title: 'Una despensa, todas las recetas',
        text: 'Cargas cada ingrediente una sola vez con el precio del paquete que compras. Cuando aumenta, lo actualizas ahí y todas las recetas que lo usan se recalculan solas.',
      },
      {
        title: 'Actualizar precios por porcentaje',
        text: 'Si aumentó todo, no hace falta tocar ingrediente por ingrediente: seleccionas los que quieras, pones el porcentaje y listo.',
      },
      {
        title: 'Medidas caseras y merma',
        text: 'Mides en gramos, mililitros, unidades o en tazas y cucharadas, con la equivalencia de cada ingrediente. Y si algo se descarta —la frutilla que se pasó, la cáscara— lo cargas como merma y entra en el costo.',
      },
      {
        title: 'Escalado por molde',
        text: 'Tienes la receta para un molde de 20 cm y te piden una de 26: cambias el diámetro y la app escala todos los ingredientes por superficie, sin reglas de tres.',
      },
      {
        title: 'Costo por torta y por porción',
        text: 'Suma las preparaciones, el packaging y la decoración, tu mano de obra y las horas de horno, y le reparte los costos fijos del mes. Ves el total y cuánto sale cada porción.',
      },
      {
        title: 'Precio por margen y por canal',
        text: 'Indicas el margen que quieres y te da el precio, o al revés. Cargas la comisión de cada canal —PedidosYa, Rappi, Mercado Libre, tarjeta— y ves cuánto tienes que cobrar en cada uno para que el margen no se te escape.',
      },
      {
        title: 'Presupuestos listos para mandar',
        text: 'El presupuesto sale en PDF con tu nombre y tu logo, o como texto listo para pegar en WhatsApp, con la fecha de entrega, las porciones, el total, la seña y el saldo.',
      },
      {
        title: 'Lista de compras automática',
        text: 'De los pedidos que tienes armados sale la lista de lo que hay que comprar, en la presentación en la que se compra, con el total de los paquetes enteros y el costo de lo que realmente vas a usar.',
      },
    ],
    steps: [
      'Carga tus ingredientes con el precio del paquete y lo que trae.',
      'Arma tus preparaciones y productos con las cantidades de cada uno.',
      'Suma tu mano de obra, el horno y el packaging.',
      'Elige el margen, mira el precio por canal y manda el presupuesto.',
    ],
    faqs: [
      {
        q: '¿Hay una guía de uso?',
        a: 'Sí. Está todo explicado paso a paso, con capturas: activar la licencia, cargar la despensa, armar una receta, escalarla a otro molde, poner el precio y mandar el presupuesto.',
        link: { href: '/recetas/guia/', label: 'Ver la guía de uso →' },
      },
      {
        q: '¿Puedo usar tazas y cucharadas?',
        a: 'Sí. Cada ingrediente tiene su propia equivalencia, porque una taza de harina y una taza de azúcar no pesan lo mismo. Cargas cuántos gramos o mililitros son una taza, una cucharada y una cucharadita, y después mides como estás acostumbrado.',
      },
      {
        q: '¿Qué pasa cuando aumentan los precios?',
        a: 'No tienes que rehacer nada. Vas a la despensa, seleccionas los ingredientes que aumentaron, pones el porcentaje y se actualizan todos juntos. Todas las recetas que los usan quedan recalculadas al instante.',
      },
      {
        q: '¿Sirve si no hago tortas?',
        a: 'Sí. Está pensada para pastelería, pero funciona igual para cualquier cosa que se arme con una receta: panadería, catering, viandas, conservas, bombones. Lo único propio de las tortas es el escalado por molde.',
      },
      {
        q: '¿Mis datos se pasan solos entre la compu y el celu?',
        a: 'No, se guardan en cada dispositivo. Usa Exportar e Importar para pasarlos.',
      },
      {
        q: '¿En cuántos dispositivos puedo usarla?',
        a: 'La licencia te habilita hasta 3 dispositivos. Por ejemplo, la computadora de tu casa, el celular que usas en la cocina y una tablet.',
      },
      {
        q: '¿Necesito internet para usarla?',
        a: 'No. Después de abrirla la primera vez funciona sin conexión, y puedes instalarla como app en el celular o la computadora.',
      },
      {
        q: '¿Dónde quedan guardados mis datos?',
        a: 'En tu propio dispositivo. No se suben a ningún servidor ni los vemos nosotros. Puedes exportar un archivo de respaldo cuando quieras y volver a cargarlo donde lo necesites.',
      },
    ],
  },

  {
    slug: 'presupuestos',
    name: 'Presupuestos',
    tagline: 'Presupuestos profesionales desde el celular, listos para WhatsApp.',
    description:
      'Cargas los ítems de tu oficio, la app arma el presupuesto con tu logo, tus datos y tus condiciones, y lo manda por WhatsApp en PDF. Calcula el total, el descuento, la seña y el saldo, y te avisa cuáles quedaron sin respuesta.',
    category: 'Ventas',
    audience:
      'Electricistas, plomeros, gasistas, pintores, técnicos de aire acondicionado y cualquier oficio que presupueste a domicilio.',
    model: 'pago-unico',
    priceUsd: 15,
    priceArs: 18900,
    checkoutUsd:
      'https://futurislabs.lemonsqueezy.com/checkout/buy/1ee355eb-526e-4e51-ab58-52d3079b4a5d',
    appUrl: 'https://presupuestos.futurislabs.net',
    demoUrl: 'https://presupuestos.futurislabs.net/?demo',
    image: 'presupuestos-mk-1-pdf.webp',
    cardImage: 'presupuestos-mk-1-pdf-wide.webp',
    guideUrl: '/presupuestos/guia/',
    gallery: [
      {
        src: 'presupuestos-mk-1-pdf.webp',
        alt: 'El presupuesto en PDF con el encabezado del negocio, el detalle de los ítems, el total, la seña y las condiciones.',
      },
      {
        src: 'presupuestos-mk-2-whatsapp.webp',
        alt: 'El PDF del presupuesto enviado en un chat de WhatsApp, con el mensaje que lo acompaña.',
      },
      {
        src: 'presupuestos-mk-3-seguimiento.webp',
        alt: 'Lista de presupuestos con el resumen del mes: presupuestado, aceptado, porcentaje de aceptación y por cobrar.',
      },
      {
        src: 'presupuestos-mk-4-catalogo.webp',
        alt: 'El catálogo de ítems con la ventana para subir todos los precios un porcentaje de una vez.',
      },
      {
        src: 'presupuestos-cel-1-items.webp',
        alt: 'Carga de ítems del presupuesto: boca de luz y llave térmica, con el subtotal de mano de obra y materiales.',
      },
      {
        src: 'presupuestos-pc-1-pdf.webp',
        alt: 'El mismo presupuesto abierto en una computadora, con el detalle completo en una hoja.',
      },
    ],
    mobile: {
      title: 'Funciona en tu celular',
      text: 'Se instala como una app más y queda en la pantalla de inicio. Después de la primera vez funciona sin internet, así que puedes armar el presupuesto en el sótano, en la obra o donde no haya señal, y mandarlo cuando salgas. Tus datos quedan guardados en el teléfono.',
      image: 'presupuestos-cel-7-inicio.webp',
      alt: 'La app Presupuestos instalada en la pantalla de inicio del celular, junto a Costos y Recetas.',
    },
    status: 'disponible',
    featured: true,
    problem: {
      title: 'El que manda el presupuesto más prolijo se queda con el trabajo',
      points: [
        'Pasas el presupuesto por audio o en un mensaje largo de WhatsApp, y el cliente no termina de entender qué incluye ni por qué sale eso.',
        'Lo armas de memoria y después te das cuenta de que te olvidaste de un material o de media jornada de trabajo.',
        'El cliente pide tres presupuestos y el otro manda un PDF con logo: parece más serio aunque cobre lo mismo.',
        'Mandas el presupuesto, el cliente no responde y a los diez días ya no te acuerdas de quién te quedó colgado.',
      ],
    },
    features: [
      {
        title: 'PDF con tu logo y tus datos',
        text: 'El presupuesto sale con el nombre de tu negocio, tu teléfono, tu zona de trabajo y tu logo. Con el detalle de los ítems, la validez de la oferta y tus condiciones escritas abajo.',
      },
      {
        title: 'Lo mandas por WhatsApp',
        text: 'Un toque y el PDF se va al chat del cliente como documento, con un mensaje armado que ya dice el número de presupuesto, el total y hasta cuándo vale.',
      },
      {
        title: 'Tu catálogo de ítems',
        text: 'Viene con los ítems típicos de tu oficio cargados, y le agregas los tuyos. Cada uno con su unidad y su precio, separados en mano de obra y materiales.',
      },
      {
        title: 'Actualizar precios por porcentaje',
        text: 'Cuando aumenta todo, subes el catálogo entero un porcentaje de una sola vez, o solo una categoría. No hay que tocar ítem por ítem.',
      },
      {
        title: 'Totales, descuento, seña y saldo',
        text: 'La app suma la mano de obra y los materiales, aplica el descuento y el IVA si lo usas, y calcula sola la seña y el saldo contra entrega.',
      },
      {
        title: 'Seguimiento de los que no contestan',
        text: 'Cada presupuesto tiene su estado: borrador, enviado, aceptado, rechazado, terminado o cobrado. La app te muestra aparte los que llevan tres días o más sin respuesta, para que no se te pierda ninguno.',
      },
      {
        title: 'Plantillas y fotos del trabajo',
        text: 'Guardas los trabajos que haces siempre como plantilla y los duplicas en segundos. Y le sumas hasta tres fotos al presupuesto, para que el cliente vea de qué estás hablando.',
      },
      {
        title: 'Resumen del mes y comprobante',
        text: 'Ves cuánto presupuestaste, cuánto te aceptaron, qué porcentaje de aceptación tienes y cuánto te queda por cobrar. Al terminar el trabajo sale el comprobante para el cliente.',
      },
    ],
    steps: [
      'Carga una vez los datos de tu negocio y tus condiciones.',
      'Arma el presupuesto eligiendo ítems de tu catálogo.',
      'Suma el descuento, la seña y las fotos del trabajo.',
      'Mándalo por WhatsApp en PDF y sigue quién te contesta.',
    ],
    faqs: [
      {
        q: '¿Hay una guía de uso?',
        a: 'Sí. Está todo explicado paso a paso, con capturas: activar la licencia, configurar tu negocio, cargar el catálogo, armar un presupuesto y mandarlo por WhatsApp.',
        link: { href: '/presupuestos/guia/', label: 'Ver la guía de uso →' },
      },
      {
        q: '¿Sirve como factura?',
        a: 'No. Es un presupuesto, no un comprobante fiscal. El comprobante de trabajo que genera la app lo aclara: dice que no es válido como factura. Lo tuyo lo facturas como lo hagas hoy.',
      },
      {
        q: '¿Puedo poner IVA?',
        a: 'Sí, es opcional. Lo activas si lo necesitas y se calcula sobre el subtotal. Si no lo usas, el presupuesto sale sin ninguna línea de impuestos.',
      },
      {
        q: '¿Qué oficios incluye?',
        a: 'Trae ítems precargados para electricidad, plomería, gas, pintura, refrigeración y albañilería. Y sea cual sea tu oficio, puedes cargar todos los ítems propios que quieras: la app no te limita a una lista.',
      },
      {
        q: '¿Mis datos se pasan solos entre la compu y el celu?',
        a: 'No, se guardan en cada dispositivo. Usa Exportar e Importar para pasarlos.',
      },
      {
        q: '¿En cuántos dispositivos puedo usarla?',
        a: 'La licencia te habilita hasta 3 dispositivos. Por ejemplo, el celular que llevas a la obra, la computadora de tu casa y una tablet.',
      },
      {
        q: '¿Necesito internet para usarla?',
        a: 'No. Después de abrirla la primera vez funciona sin conexión, y puedes instalarla como app en el celular o la computadora.',
      },
      {
        q: '¿Dónde quedan guardados mis datos?',
        a: 'En tu propio dispositivo. No se suben a ningún servidor ni los vemos nosotros. Puedes exportar un archivo de respaldo cuando quieras y volver a cargarlo donde lo necesites.',
      },
    ],
  },

  {
    slug: 'turnos',
    name: 'Turnos',
    tagline: 'Tu agenda de turnos online, con recordatorios por WhatsApp.',
    description:
      'Tus clientes entran a tu página de reservas, eligen el servicio, con quién y a qué hora, y el turno te entra solo en la agenda. Ves el día completo desde el celular y les mandas el recordatorio por WhatsApp con un toque.',
    category: 'Turnos',
    audience:
      'Peluquerías, barberías, salones de uñas, centros de estética, masajistas y consultorios que trabajan con turno previo.',
    model: 'suscripcion',
    priceUsd: 15,
    checkoutUsd:
      'https://futurislabs.lemonsqueezy.com/checkout/buy/577b8827-29db-49b7-b1cd-4365d3cac4fa',
    appUrl: 'https://turnos.futurislabs.net',
    demoUrl: 'https://turnos.futurislabs.net/r/demo',
    trialDays: 14,
    demoLabel: 'Ver una página de reservas de ejemplo',
    priceNote: '14 días gratis · Cancelas cuando quieras · Sin permanencia',
    image: 'turnos-mk-1-reserva.webp',
    cardImage: 'turnos-mk-1-reserva-wide.webp',
    guideUrl: '/turnos/guia/',
    includes: {
      title: 'Todo incluido, sin extras ni comisiones',
      items: [
        'Tu página de reservas con link y QR',
        'Turnos ilimitados, sin tope mensual',
        'Todo el equipo, cada uno con sus horarios',
        'Recordatorios por WhatsApp',
        'Agenda por día y por semana',
        'Clientes con historial y ausencias',
        'Resumen del mes',
        'Vacaciones, feriados y bloqueos',
        'Funciona en el celular y sin internet',
        'Soporte por mail, te contestamos nosotros',
      ],
    },
    clientView: {
      title: 'Así lo ven tus clientes',
      text: 'Le mandas tu link o le muestras el QR del mostrador. Entra, elige y reserva en tres pantallas. No se descarga nada ni se crea ninguna cuenta.',
      ctaLabel: 'Ver una página de reservas de ejemplo',
      images: [
        {
          src: 'turnos-cel-1-servicio.webp',
          alt: 'La página de reservas del negocio con la lista de servicios, cada uno con su precio y su duración.',
        },
        {
          src: 'turnos-cel-2-horario.webp',
          alt: 'Elección del día y del horario, con los turnos libres de cada jornada.',
        },
        {
          src: 'turnos-cel-3-confirmado.webp',
          alt: 'Pantalla de turno confirmado, con el botón para agregarlo al calendario y el link para cancelarlo.',
        },
      ],
    },
    gallery: [
      {
        src: 'turnos-mk-1-reserva.webp',
        alt: 'La página de reservas mostrando los días disponibles y los horarios libres de cada uno.',
      },
      {
        src: 'turnos-mk-2-recordatorios.webp',
        alt: 'Pantalla de recordatorios con los turnos del día y un botón Recordar al lado de cada cliente.',
      },
      {
        src: 'turnos-mk-3-agenda.webp',
        alt: 'La agenda del día en el celular, con los turnos ubicados en su franja horaria.',
      },
      {
        src: 'turnos-mk-4-qr.webp',
        alt: 'El link de la página de reservas junto a su código QR, listo para descargar o imprimir.',
      },
      {
        src: 'turnos-cel-8-resumen.webp',
        alt: 'Inicio con los turnos de hoy, los del mes, los ingresos y el porcentaje de ausencias.',
      },
      {
        src: 'turnos-pc-1-semana.webp',
        alt: 'La agenda de la semana completa en una computadora, con todo el equipo en pantalla.',
      },
    ],
    mobile: {
      title: 'Funciona en tu celular',
      text: 'Se instala como una app más y queda en la pantalla de inicio. Mientras estás trabajando ves el día sin cortar lo que estás haciendo, y los recordatorios salen de ahí mismo. Después de la primera vez abre sin internet.',
      image: 'turnos-cel-4-agenda.webp',
      alt: 'La agenda de Turnos abierta en el celular, con los turnos del día.',
    },
    status: 'disponible',
    featured: true,
    problem: {
      title: 'El celular no para mientras estás trabajando',
      points: [
        'Estás con un cliente en la silla y el teléfono suena con alguien que quiere sacar turno.',
        'Te escriben a las once de la noche y a las siete de la mañana, y si no contestas rápido se van a otro lado.',
        'Reservan, no vienen y el horario queda vacío: nadie les recordó que tenían turno.',
        'Anotas dos turnos a la misma hora y te das cuenta cuando ya están los dos en la puerta.',
        'La agenda de papel se queda en el local y no tienes idea de cómo viene mañana hasta que llegas.',
      ],
    },
    features: [
      {
        title: 'Tu propia página de reservas',
        text: 'Tenés un link con el nombre de tu negocio y un QR para pegar en el mostrador o la vidriera. Lo pones en tu bio de Instagram y listo.',
      },
      {
        title: 'Reservan solos, a cualquier hora',
        text: 'El cliente elige el servicio, con quién lo quiere, el día y la hora entre los que están libres. A las dos de la mañana también, sin que hagas nada.',
      },
      {
        title: 'Tu agenda, por día y por semana',
        text: 'Ves el día completo en el celular y la semana entera en la computadora, con todo el equipo junto. Y cargas turnos a mano cuando alguien reserva por teléfono.',
      },
      {
        title: 'Recordatorios por WhatsApp',
        text: 'Un toque y se abre WhatsApp con el mensaje escrito, incluido el link para que el cliente confirme o cancele. Tú solo le das enviar.',
      },
      {
        title: 'Te avisa cuando entra un turno',
        text: 'Cada reserva nueva aparece en el momento, con el nombre, el servicio y el horario. Sin recargar nada ni estar mirando.',
      },
      {
        title: 'Nunca dos turnos a la misma hora',
        text: 'La página solo ofrece los horarios realmente libres, calculados con la duración de cada servicio y la agenda de cada persona.',
      },
      {
        title: 'Clientes con historial',
        text: 'Cada cliente guarda sus turnos anteriores y cuántas veces faltó. Así sabes a quién conviene confirmarle el día antes.',
      },
      {
        title: 'Resumen, vacaciones y bloqueos',
        text: 'Miras cómo viene el mes en turnos e ingresos, y cierras días por vacaciones, feriados o un rato que no atiendes, sin tocar tus horarios habituales.',
      },
    ],
    steps: [
      'Creas tu cuenta y arrancas la prueba de 14 días.',
      'Cargas tus servicios, tu equipo y tus horarios.',
      'Compartes tu link y tu QR con los clientes.',
      'Ves los turnos entrar y mandas los recordatorios.',
    ],
    faqs: [
      {
        q: '¿Hay una guía de uso?',
        a: 'Sí. Está todo explicado paso a paso, con capturas: crear la cuenta, configurar horarios, compartir tu link, manejar la agenda y mandar los recordatorios.',
        link: { href: '/turnos/guia/', label: 'Ver la guía de uso →' },
      },
      {
        q: '¿Mis clientes tienen que descargar algo?',
        a: 'No. Abren tu link en el navegador del celular y reservan ahí mismo. No se instalan nada, no crean ninguna cuenta y no tienen que poner contraseña.',
      },
      {
        q: '¿Cómo funcionan los recordatorios?',
        a: 'Con un toque se abre WhatsApp con el mensaje ya escrito y el turno adentro, y tú le das enviar. No se mandan solos: sale de tu WhatsApp de siempre, con tu número, así el cliente te reconoce y te puede contestar.',
      },
      {
        q: '¿Cobran seña o pagos online?',
        a: 'No. Turnos organiza la agenda, no el cobro. Tu cliente te paga en el local como siempre, en efectivo, con transferencia o con tarjeta.',
      },
      {
        q: '¿Puedo cancelar?',
        a: 'Sí, cuando quieras, desde Mi plan dentro de la app. No hay permanencia ni costo de cancelación: dejas de pagar el mes siguiente.',
      },
      {
        q: '¿Qué pasa cuando termina la prueba?',
        a: 'A los 14 días se cobra USD 15 por mes a la tarjeta que cargaste, salvo que canceles antes. Si cancelas durante la prueba no se te cobra nada.',
      },
      {
        q: '¿Funciona si somos varias personas?',
        a: 'Sí. Cargas a cada una con sus propios horarios y los servicios que hace, y el cliente elige con quién se quiere atender. En la agenda los ves a todos juntos.',
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
