import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Envíos y cuidados del oro | Golden Good",
  description:
    "Envíos en Jalisco y a todo México [confirmar]. Cambios y cuidado de tus piezas.",
  openGraph: {
    title: "Envíos y cuidados del oro | Golden Good",
    description: "Cómo enviar o recibir tu pieza en oro 10k/14k. Cotiza por WhatsApp.",
  },
};

export default function EnviosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-brown sm:text-5xl">Envíos, cambios y cuidados</h1>
      <p className="mt-4 text-brown-muted">
        Coordinamos entrega o envío al cotizar tu pieza. Los detalles logísticos se confirman por
        WhatsApp según tu ciudad y el valor del pedido.
      </p>

      <div className="mt-10 space-y-6">
        <article className="rounded-2xl border border-gold/25 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-brown">Guadalajara / Zapopan / área metro</h2>
          <p className="mt-3 text-sm leading-relaxed text-brown-muted">
            [Confirmar: envío local, paquetería, o recolección con cita. Dirección: Confirmar
            dirección.]
          </p>
        </article>

        <article className="rounded-2xl border border-gold/25 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-brown">Envío nacional México</h2>
          <p className="mt-3 text-sm leading-relaxed text-brown-muted">
            [Confirmar si envían a todo el país y con qué paqueterías.]
          </p>
        </article>

        <article className="rounded-2xl border border-gold/25 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-brown">Costo de envío</h2>
          <p className="mt-3 text-sm leading-relaxed text-brown-muted">
            Se confirma al cotizar por WhatsApp según destino y valor de la pieza.
          </p>
        </article>

        <article className="rounded-2xl border border-gold/25 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-brown">Cambios y devoluciones</h2>
          <p className="mt-3 text-sm leading-relaxed text-brown-muted">
            [Confirmar política — sobre todo en anillos por talla.]
          </p>
        </article>

        <article className="rounded-2xl border border-gold/25 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl text-brown">Empaque</h2>
          <p className="mt-3 text-sm leading-relaxed text-brown-muted">
            [Confirmar estuche / presentación de regalo.]
          </p>
        </article>
      </div>

      <section className="mt-14">
        <h2 className="font-serif text-2xl text-brown">Así compras con Golden Good</h2>
        <ol className="mt-6 space-y-4">
          {[
            "Filtra el catálogo (10k / 14k, tipo de pieza).",
            "Abre la ficha que te gustó.",
            "Toca Consultar por WhatsApp.",
            "Te confirmamos existencia, talla/peso y precio.",
            "Coordinamos pago y entrega o envío.",
          ].map((step, i) => (
            <li key={step} className="flex gap-4 text-sm text-brown-soft">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 font-serif text-gold-deep">
                {i + 1}
              </span>
              <span className="pt-1.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 rounded-2xl border border-gold/25 bg-cream-deep p-6">
        <h2 className="font-serif text-2xl text-brown">Cuida tus piezas de oro 10k y 14k</h2>
        <ul className="mt-4 space-y-2 text-sm text-brown-muted">
          <li>• Guárdalas separadas, en lugar seco.</li>
          <li>• Evita cloro, químicos fuertes y perfume directo sobre la joya.</li>
          <li>
            • Limpieza: paño suave; para limpieza profunda [confirmar si ofrecen servicio].
          </li>
          <li>
            • Quítatelas para nadar o entrenar si la pieza es delicada o tiene detalles finos.
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.shipping} variant="whatsapp">
          Preguntar envío a mi CP / ciudad
        </WhatsAppButton>
        <Link
          href="/faq"
          className="inline-flex items-center rounded-full border border-gold/40 px-6 py-3 text-sm text-gold-deep hover:border-gold hover:bg-gold/5"
        >
          Ver FAQ
        </Link>
      </div>
      <p className="mt-4 text-xs text-brown-muted">WhatsApp: {PHONE_DISPLAY}</p>
    </div>
  );
}
