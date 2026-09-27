export const WHATSAPP_NUMBER = "523327464052";
export const PHONE_DISPLAY = "33 2746 4052";
export const PHONE_TEL = "+523327464052";
export const INSTAGRAM_HANDLE = "golden_good0";
export const INSTAGRAM_URL = "https://instagram.com/golden_good0";
export const SITE_NAME = "Golden Good Joyería";
export const SITE_URL = "https://golden-good.vercel.app";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  home: "Hola Golden Good, vi su página y quiero consultar una pieza de oro.",
  floating: "Hola Golden Good, vengo de la página web. Quiero asesoría en oro 10k/14k.",
  advisor: "Hola Golden Good, quiero asesoría sobre joyería en oro 10k y 14k.",
  shipping: "Hola Golden Good, quiero preguntar por envío a mi CP / ciudad.",
  oro14k: "Hola Golden Good, me interesa ver piezas en oro 14k. ¿Me orientan?",
  oro10k: "Hola Golden Good, me interesa ver piezas en oro 10k. ¿Me orientan?",
  product: (name: string, karat: string) =>
    `Hola Golden Good, me interesa: ${name} (oro ${karat}). ¿Me confirman disponibilidad, talla/peso y precio? Vi la ficha en la web.`,
  similar: (name: string) =>
    `Hola Golden Good, la pieza "${name}" no está disponible. ¿Me muestran alternativas similares en oro 10k/14k?`,
} as const;
