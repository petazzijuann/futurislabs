/**
 * Datos generales del sitio.
 * Reemplaza los placeholders por tus datos reales.
 */
export const site = {
  name: 'Futurislabs',
  /** Se usa en los títulos: "Microapp — Futurislabs" */
  shortName: 'Futurislabs',
  /** Debe coincidir con `site` en astro.config.mjs */
  url: 'https://futurislabs.com',
  tagline: 'Herramientas web simples para problemas concretos de tu negocio.',
  description:
    'Futurislabs es una biblioteca de microapps: herramientas online chicas y directas para emprendedores y pymes. Las abres en el navegador, sin instalar nada.',
  /** Mail de contacto y destino de los avisos de "Avísame cuando salga" */
  email: 'hola@futurislabs.com',
  locale: 'es',
  /** Para la Twitter card */
  twitterHandle: '@futurislabs',
  social: [
    { label: 'Instagram', url: 'https://instagram.com/futurislabs' },
    { label: 'X', url: 'https://x.com/futurislabs' },
    { label: 'YouTube', url: 'https://youtube.com/@futurislabs' },
    { label: 'LinkedIn', url: 'https://linkedin.com/company/futurislabs' },
  ],
  nav: [
    { label: 'Microapps', href: '/#microapps' },
    { label: 'Cómo funciona', href: '/#como-funciona' },
    { label: 'Preguntas', href: '/#preguntas' },
  ],
} as const;

/** Preguntas frecuentes generales (se muestran en la página principal). */
export const generalFaqs: { q: string; a: string }[] = [
  {
    q: '¿Qué es exactamente una microapp?',
    a: 'Es una herramienta web chica que resuelve un solo problema y lo resuelve bien. No es un sistema de gestión completo ni algo que tengas que aprender: abres el enlace, la usas y listo.',
  },
  {
    q: '¿Necesito instalar algo?',
    a: 'No. Todas las microapps funcionan en el navegador de tu computadora o tu celular. No hay descargas, ni extensiones, ni cuentas que configurar durante horas.',
  },
  {
    q: '¿Qué diferencia hay entre pago único y suscripción?',
    a: 'Las de pago único las compras una vez y las usas siempre, sin cargos mensuales. Las de suscripción se cobran por mes porque dependen de servicios que corren de forma continua, como recordatorios automáticos o generación de contenido.',
  },
  {
    q: '¿Puedo pagar en pesos argentinos?',
    a: 'Sí. Cuando una microapp tiene precio en pesos, vas a ver el botón "Pagar en pesos argentinos", que usa Ualá Bis. Si estás fuera de Argentina, el pago en dólares se hace con tarjeta a través de Lemon Squeezy.',
  },
  {
    q: '¿Mis datos quedan guardados en algún servidor?',
    a: 'En las microapps que funcionan por completo en tu navegador, los datos que escribes quedan en tu dispositivo y no se envían a ningún lado. Si alguna necesita guardar información en la nube para funcionar, lo aclaramos en su página.',
  },
  {
    q: '¿Puedo pedir una herramienta que no está en la biblioteca?',
    a: `Sí, nos interesa mucho. Escríbenos a ${site.email} y cuéntanos qué problema necesitas resolver. Varias microapps de la biblioteca salieron de pedidos así.`,
  },
  {
    q: '¿Hay reembolsos?',
    a: 'Si una microapp de pago único no te sirve, escríbenos dentro de los 14 días de la compra y te devolvemos el dinero. Las suscripciones se cancelan cuando quieras y no se renuevan.',
  },
  {
    q: '¿Sirven si no sé nada de tecnología?',
    a: 'Están pensadas justamente para eso. Si sabes usar WhatsApp y llenar un formulario, puedes usar cualquier microapp de la biblioteca.',
  },
];
