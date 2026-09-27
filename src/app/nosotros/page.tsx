import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Golden Good — oro en Guadalajara",
  description:
    "Somos Golden Good Joyería. Especialistas en oro 10k y 14k en Guadalajara con venta cercana por Instagram y WhatsApp.",
  openGraph: {
    title: "Golden Good — oro en Guadalajara",
    description: "Joyería de oro 10k y 14k con trato cercano en Guadalajara.",
  },
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">Sobre nosotros</p>
      <h1 className="mt-3 font-serif text-4xl text-brown sm:text-5xl">
        Golden Good — oro en Guadalajara
      </h1>
      <div className="mt-8 space-y-5 text-brown-muted leading-relaxed">
        <p>
          Somos Golden Good Joyería. Nos especializamos en piezas de oro de 10 y 14 quilates, con
          venta cercana por Instagram y WhatsApp. Abrimos este sitio para que tengas el catálogo
          completo, filtros útiles y la misma atención de siempre.
        </p>
        <p>
          Instagram:{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-deep hover:underline"
          >
            @{INSTAGRAM_HANDLE}
          </a>
          <br />
          WhatsApp:{" "}
          <a href={`https://wa.me/523327464052`} className="text-gold-deep hover:underline">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="rounded-2xl border border-gold/25 bg-cream-deep px-5 py-4 text-sm text-brown-soft">
          [Confirmar: historia de la marca, si hay showroom/local, años de experiencia, foto de
          equipo.]
        </p>
      </div>

      <section className="mt-14 rounded-2xl border border-gold/25 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-2xl text-brown">Transparencia en quilates y material</h2>
        <ul className="mt-5 space-y-3 text-sm text-brown-muted">
          <li>
            <strong className="text-gold-deep">10k y 14k claros:</strong> en cada ficha indicamos
            los quilates. Si algo no calza, te lo decimos antes de cerrar.
          </li>
          <li>
            <strong className="text-gold-deep">Certificado / factura:</strong> [Confirmar si
            entregan certificado de autenticidad, factura con desglose de quilates y peso.]
          </li>
          <li>
            <strong className="text-gold-deep">Garantía:</strong> [Confirmar qué cubre: mano de obra,
            ajustes de talla, plazos.]
          </li>
          <li>
            <strong className="text-gold-deep">Fotos reales:</strong> las imágenes son de nuestras
            piezas; peso y stock se validan al momento de tu mensaje. (En este sitio usamos
            placeholders elegantes hasta integrar fotos del feed.)
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/catalogo"
          className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-espresso hover:bg-gold-rich"
        >
          Conocer el catálogo
        </Link>
        <WhatsAppButton message={WA_MESSAGES.advisor} variant="whatsapp">
          Contactar
        </WhatsAppButton>
      </div>
    </div>
  );
}
