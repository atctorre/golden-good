import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PHONE_DISPLAY, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | Golden Good Joyería",
  description:
    "Quilates 10k vs 14k, autenticidad, envíos a Guadalajara/Zapopan y cómo pedir por WhatsApp.",
  openGraph: {
    title: "FAQ | Golden Good Joyería",
    description: "10k vs 14k, envíos, tallas y pedidos por WhatsApp.",
  },
};

const faqs = [
  {
    q: "¿Qué diferencia hay entre oro 10k y 14k?",
    a: "Ambos son oro real. El 14k tiene mayor pureza de oro (14 de 24 partes); el 10k suele ser más accesible y resistente al uso diario en muchas piezas. En cada ficha marcamos el quilate; si no sabes cuál te conviene, escríbenos y te orientamos.",
  },
  {
    q: "¿Por qué no veo precios en la página?",
    a: "El precio depende de peso, talla y disponibilidad del día. Por eso cotizamos por WhatsApp: te damos el monto exacto de la pieza que te interesa.",
  },
  {
    q: "¿Envían fuera de Guadalajara?",
    a: `[Confirmar.] Atendemos Guadalajara y zona metro; para el resto de México pregunta al cotizar. WhatsApp: ${PHONE_DISPLAY}.`,
  },
  {
    q: "¿Cómo sé que es oro legítimo?",
    a: "Trabajamos oro 10k y 14k. [Confirmar: factura, certificado, marcaje.] Cualquier duda sobre una pieza concreta, pídenos el detalle por chat antes de pagar.",
  },
  {
    q: "¿Pueden ajustar la talla de un anillo?",
    a: "[Confirmar política y tiempos.] Mándanos la ficha y tu talla; te decimos si aplica y en cuánto tiempo.",
  },
  {
    q: "¿Todavía venden por Instagram?",
    a: "Claro. El sitio no reemplaza Instagram ni WhatsApp: organiza el catálogo y manda tu pedido al mismo número. Síguenos en @golden_good0.",
  },
  {
    q: "¿Hacen piezas bajo pedido?",
    a: "[Confirmar.] Si la referencia está bajo pedido o quieres algo similar, lo platicamos por WhatsApp con tiempos honestos.",
  },
  {
    q: "¿Atienden Zapopan y el área metropolitana?",
    a: "Sí, somos de Guadalajara y buscamos cubrir la zona metro. [Confirmar modalidades de entrega local.] Escríbenos tu colonia o CP y te decimos cómo proceder.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-brown sm:text-5xl">Preguntas frecuentes</h1>
      <p className="mt-4 text-brown-muted">
        Quilates 10k vs 14k, autenticidad, envíos a Guadalajara/Zapopan y cómo pedir por WhatsApp.
      </p>

      <div className="mt-10 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-gold/25 bg-white open:border-gold/50 shadow-sm"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-medium text-brown marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span className="text-gold transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="border-t border-gold/15 px-5 py-4 text-sm leading-relaxed text-brown-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-gold/30 bg-cream-deep px-6 py-8 text-center">
        <p className="font-serif text-2xl text-brown">¿No encontraste tu respuesta?</p>
        <p className="mt-2 text-sm text-brown-muted">Escríbenos y te orientamos.</p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message={WA_MESSAGES.advisor} variant="whatsapp">
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
