export type Karat = "10k" | "14k";
export type ProductType = "anillos" | "cadenas" | "aretes" | "pulseras" | "dijes" | "sets";
export type Occasion = "diario" | "compromiso" | "regalo" | "fiesta";
export type Gender = "dama" | "caballero" | "unisex";
export type Availability = "disponible" | "bajo-pedido" | "consultar";
export type CollectionId = "recien" | "clasicos" | "regalo";

export interface Product {
  slug: string;
  name: string;
  karat: Karat;
  type: ProductType;
  occasion: Occasion[];
  gender: Gender;
  collection: CollectionId;
  availability: Availability;
  weightNote: string;
  sizeNote: string;
  shortDescription: string;
  gradient: string;
}

export const KARAT_LABELS: Record<Karat, string> = {
  "10k": "Oro 10k",
  "14k": "Oro 14k",
};

export const TYPE_LABELS: Record<ProductType, string> = {
  anillos: "Anillos",
  cadenas: "Cadenas",
  aretes: "Aretes",
  pulseras: "Pulseras",
  dijes: "Dijes",
  sets: "Juegos / sets",
};

export const OCCASION_LABELS: Record<Occasion, string> = {
  diario: "Diario",
  compromiso: "Compromiso",
  regalo: "Regalo",
  fiesta: "Fiesta",
};

export const GENDER_LABELS: Record<Gender, string> = {
  dama: "Dama",
  caballero: "Caballero",
  unisex: "Unisex",
};

export const COLLECTION_LABELS: Record<CollectionId, string> = {
  recien: "Recién llegados",
  clasicos: "Clásicos de oro",
  regalo: "Para regalo",
};

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  disponible: "Disponible",
  "bajo-pedido": "Bajo pedido",
  consultar: "Consultar",
};

export const products: Product[] = [
  {
    slug: "anillo-solitario-oro-14k",
    name: "Anillo solitario oro 14k",
    karat: "14k",
    type: "anillos",
    occasion: ["compromiso", "diario"],
    gender: "dama",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Indica tu talla al escribirnos",
    shortDescription:
      "Anillo solitario en oro 14 quilates, líneas limpias para compromiso o uso diario. Peso y talla se confirman según existencia.",
    gradient: "from-amber-100 via-yellow-500 to-amber-800",
  },
  {
    slug: "anillo-alianza-lisa-oro-10k",
    name: "Anillo alianza lisa oro 10k",
    karat: "10k",
    type: "anillos",
    occasion: ["compromiso", "diario"],
    gender: "unisex",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Indica tu talla al escribirnos",
    shortDescription:
      "Alianza lisa en oro 10k: cómoda, resistente y con buen balance calidad-precio. Ideal para diario o para sellar un sí.",
    gradient: "from-yellow-50 via-amber-400 to-yellow-800",
  },
  {
    slug: "anillo-sello-caballero-oro-14k",
    name: "Anillo sello caballero oro 14k",
    karat: "14k",
    type: "anillos",
    occasion: ["diario", "regalo"],
    gender: "caballero",
    collection: "recien",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Indica tu talla al escribirnos",
    shortDescription:
      "Anillo sello en oro 14 quilates con presencia sobria. Pieza fuerte para uso diario o como regalo significativo.",
    gradient: "from-stone-300 via-amber-600 to-stone-900",
  },
  {
    slug: "cadena-cartier-oro-14k",
    name: "Cadena cartier oro 14k",
    karat: "14k",
    type: "cadenas",
    occasion: ["diario", "regalo"],
    gender: "unisex",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo a confirmar al escribirnos",
    shortDescription:
      "Cadena en oro 14 quilates, eslabón clásico para diario o regalo. Largo y peso se confirman según existencia. Cotiza por WhatsApp.",
    gradient: "from-amber-200 via-yellow-500 to-amber-900",
  },
  {
    slug: "cadena-eslabon-oro-10k",
    name: "Cadena eslabón oro 10k",
    karat: "10k",
    type: "cadenas",
    occasion: ["diario", "regalo"],
    gender: "unisex",
    collection: "recien",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo a confirmar al escribirnos",
    shortDescription:
      "Cadena de eslabones en oro 10k, versátil para diario o para acompañar un dije. Largo y peso se confirman por WhatsApp.",
    gradient: "from-yellow-100 via-amber-500 to-yellow-900",
  },
  {
    slug: "gargantilla-fina-oro-14k",
    name: "Gargantilla fina oro 14k",
    karat: "14k",
    type: "cadenas",
    occasion: ["diario", "fiesta", "regalo"],
    gender: "dama",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo a confirmar al escribirnos",
    shortDescription:
      "Gargantilla fina en oro 14 quilates: brillo discreto que luce sola o con dije. Ideal para diario y ocasiones especiales.",
    gradient: "from-amber-50 via-yellow-400 to-amber-700",
  },
  {
    slug: "aretes-argolla-mediana-oro-14k",
    name: "Aretes argolla mediana oro 14k",
    karat: "14k",
    type: "aretes",
    occasion: ["diario", "fiesta"],
    gender: "dama",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Tamaño medio — confirma detalle al escribirnos",
    shortDescription:
      "Argollas medianas en oro 14k con brillo limpio. Un básico que no pasa de moda, listo para elevar cualquier look. [Confirmar líneas de aretes.]",
    gradient: "from-amber-100 via-yellow-400 to-amber-800",
  },
  {
    slug: "aretes-topos-oro-10k",
    name: "Aretes topos oro 10k",
    karat: "10k",
    type: "aretes",
    occasion: ["diario", "regalo"],
    gender: "dama",
    collection: "regalo",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Diseño compacto",
    shortDescription:
      "Topos clásicos en oro 10 quilates: cómodos y perfectos para el uso diario o un primer regalo en oro. [Confirmar líneas.]",
    gradient: "from-yellow-50 via-amber-400 to-yellow-800",
  },
  {
    slug: "pulsera-eslabones-oro-14k",
    name: "Pulsera de eslabones oro 14k",
    karat: "14k",
    type: "pulseras",
    occasion: ["diario", "regalo", "fiesta"],
    gender: "dama",
    collection: "recien",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Medida de muñeca a confirmar",
    shortDescription:
      "Pulsera de eslabones en oro 14k con caída elegante. Combina con reloj o sola; peso y medida se confirman al cotizar. [Confirmar.]",
    gradient: "from-amber-200 via-yellow-500 to-stone-700",
  },
  {
    slug: "dije-corazon-oro-10k",
    name: "Dije corazón oro 10k",
    karat: "10k",
    type: "dijes",
    occasion: ["regalo", "diario"],
    gender: "dama",
    collection: "regalo",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Tamaño compacto — combina con cadena",
    shortDescription:
      "Dije corazón en oro 10 quilates, ideal para regalo o para llevar cerca. Combínalo con tu cadena favorita en 10k o 14k.",
    gradient: "from-rose-100 via-amber-400 to-yellow-700",
  },
  {
    slug: "set-cadena-dije-oro-14k",
    name: "Set cadena + dije oro 14k",
    karat: "14k",
    type: "sets",
    occasion: ["regalo", "fiesta"],
    gender: "dama",
    collection: "regalo",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo de cadena a confirmar",
    shortDescription:
      "Set en oro 14k: cadena y dije pensados para regalar sin complicaciones. Confirmamos disponibilidad y peso por WhatsApp.",
    gradient: "from-yellow-100 via-amber-500 to-amber-900",
  },
  {
    slug: "cadena-caballero-gruesa-oro-10k",
    name: "Cadena caballero gruesa oro 10k",
    karat: "10k",
    type: "cadenas",
    occasion: ["diario", "regalo"],
    gender: "caballero",
    collection: "clasicos",
    availability: "consultar",
    weightNote: "Consultar por WhatsApp",
    sizeNote: "Largo y grosor a confirmar",
    shortDescription:
      "Cadena de mayor presencia en oro 10 quilates para caballero. Peso y largo se cotizan según disponibilidad del momento.",
    gradient: "from-stone-400 via-amber-600 to-yellow-900",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.type === product.type || p.karat === product.karat || p.collection === product.collection)
    )
    .slice(0, limit);
}

export const collections = [
  {
    id: "recien" as CollectionId,
    name: "Recién llegados",
    description: "Lo último que subimos al catálogo: piezas nuevas en oro 10k y 14k.",
    href: "/colecciones#recien",
  },
  {
    id: "clasicos" as CollectionId,
    name: "Clásicos de oro",
    description: "Piezas que no pasan de moda: cadenas, anillos y aretes atemporales.",
    href: "/colecciones#clasicos",
  },
  {
    id: "regalo" as CollectionId,
    name: "Para regalo",
    description: "Opciones listas para sorprender: dijes, sets y piezas con mensaje claro.",
    href: "/colecciones#regalo",
  },
];

export const catalogCategories = [
  {
    slug: "anillos",
    name: "Anillos",
    description: "Compromiso, matrimonio y uso diario",
    href: "/catalogo?tipo=anillos",
  },
  {
    slug: "cadenas",
    name: "Cadenas y gargantillas",
    description: "Eslabones y dijes",
    href: "/catalogo?tipo=cadenas",
  },
  {
    slug: "aretes",
    name: "Aretes",
    description: "Líneas a confirmar — cotiza por WhatsApp",
    href: "/catalogo?tipo=aretes",
  },
  {
    slug: "pulseras",
    name: "Pulseras",
    description: "Eslabones para muñeca — confirmar",
    href: "/catalogo?tipo=pulseras",
  },
  {
    slug: "oro-14k",
    name: "Oro 14k",
    description: "Mayor pureza de oro",
    href: "/catalogo?quilates=14k",
  },
  {
    slug: "oro-10k",
    name: "Oro 10k",
    description: "Balance calidad-precio",
    href: "/catalogo?quilates=10k",
  },
];
