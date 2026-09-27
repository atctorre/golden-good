import Link from "next/link";
import GoldPlaceholder from "@/components/GoldPlaceholder";
import WhatsAppButton from "@/components/WhatsAppButton";
import { catalogCategories, collections, products } from "@/data/products";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WA_MESSAGES,
} from "@/lib/whatsapp";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 80% 0%, rgba(201,151,58,0.28), transparent), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(139,105,20,0.12), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
              Guadalajara · Zapopan · México
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-brown sm:text-5xl lg:text-6xl">
              Oro 10k y 14k en Guadalajara
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brown-muted sm:text-lg">
              Joyería Golden Good: piezas en oro de 10 y 14 quilates, catálogo claro y atención
              directa por WhatsApp. Sin depender solo del feed.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brown-soft">
              <li className="flex gap-2">
                <span className="text-gold">✦</span> Especialistas en oro 10k y 14k
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✦</span> +69.000 seguidores en Instagram
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✦</span> Filtros por quilates, pieza y ocasión
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✦</span> Mismo WhatsApp de siempre: {PHONE_DISPLAY}
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-espresso shadow-lg shadow-gold/25 transition hover:bg-gold-rich"
              >
                Ver catálogo
              </Link>
              <WhatsAppButton message={WA_MESSAGES.home} variant="whatsapp">
                Escribir por WhatsApp
              </WhatsAppButton>
              <Link
                href="/catalogo?quilates=14k"
                className="inline-flex items-center justify-center rounded-full border border-gold/40 px-5 py-3 text-sm text-gold-deep transition hover:border-gold hover:bg-gold/5"
              >
                Ver oro 14k
              </Link>
              <Link
                href="/catalogo?quilates=10k"
                className="inline-flex items-center justify-center rounded-full border border-brown/15 px-5 py-3 text-sm text-brown-soft transition hover:border-gold hover:text-gold-deep"
              >
                Ver oro 10k
              </Link>
            </div>
          </div>
          <div className="relative">
            <GoldPlaceholder
              label="Joyería oro 10k y 14k Golden Good"
              gradient="from-amber-100 via-yellow-500 to-amber-900"
              aspect="aspect-[4/5] sm:aspect-square"
              className="shadow-2xl shadow-brown/20"
              karat="10k · 14k"
            />
            <div className="absolute -bottom-4 -left-2 rounded-2xl border border-gold/30 bg-white/95 px-4 py-3 shadow-xl sm:left-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">Instagram</p>
              <p className="font-serif text-lg text-brown">~69k seguidores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-gold/20 bg-cream-deep">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            "Comunidad @golden_good0 — ~69k",
            "Oro 10 quilates y 14 quilates",
            "Pedidos por WhatsApp Business",
            "Guadalajara y envíos [Confirmar cobertura nacional / Jalisco]",
          ].map((t) => (
            <p key={t} className="text-center text-sm text-brown-soft lg:text-left">
              <span className="mr-2 text-gold">◆</span>
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* Valor */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">Tu catálogo</p>
            <h2 className="mt-3 font-serif text-3xl text-brown sm:text-4xl">
              Tu catálogo de oro, siempre a la mano
            </h2>
            <p className="mt-5 leading-relaxed text-brown-muted">
              En Instagram descubres; aquí eliges con calma. Filtra por quilates (10k o 14k), tipo
              de joya y ocasión. Cada pieza tiene su ficha y un botón para pedirnos precio y
              existencia al WhatsApp que ya conoces.
            </p>
            <div className="mt-7">
              <Link
                href="/catalogo"
                className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-espresso shadow-md shadow-gold/20 transition hover:bg-gold-rich"
              >
                Explorar catálogo
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featured.map((p) => (
              <Link key={p.slug} href={`/catalogo/${p.slug}`} className="block">
                <GoldPlaceholder
                  label={p.name}
                  gradient={p.gradient}
                  karat={p.karat}
                  className="h-full"
                />
              </Link>
            ))}
            <Link
              href="/catalogo"
              className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-gold/45 bg-cream-deep text-center text-sm text-gold-deep transition hover:bg-gold/10"
            >
              Ver todo el catálogo →
            </Link>
          </div>
        </div>
      </section>

      {/* ¿Qué estás buscando? */}
      <section className="bg-cream-deep/70 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-brown sm:text-4xl">¿Qué estás buscando?</h2>
              <p className="mt-2 text-sm text-brown-muted">
                Precio por WhatsApp — te cotizamos según peso, talla y disponibilidad.
              </p>
            </div>
            <Link href="/catalogo" className="text-sm text-gold-deep hover:text-gold">
              Filtrar catálogo →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {catalogCategories.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="group rounded-2xl border border-gold/20 bg-white p-5 shadow-sm transition hover:border-gold/55 hover:shadow-md hover:shadow-gold/10"
              >
                <p className="font-serif text-xl text-brown group-hover:text-gold-deep">{c.name}</p>
                <p className="mt-2 text-sm text-brown-muted">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Colecciones */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl text-brown sm:text-4xl">Novedades y colecciones</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <Link
              key={c.id}
              href={c.href}
              className="group overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-sm transition hover:border-gold/45"
            >
              <GoldPlaceholder
                label={c.name}
                gradient={
                  i === 0
                    ? "from-amber-100 via-yellow-500 to-amber-800"
                    : i === 1
                      ? "from-yellow-50 via-amber-400 to-stone-700"
                      : "from-rose-100 via-amber-400 to-yellow-800"
                }
                aspect="aspect-[16/10]"
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl text-brown group-hover:text-gold-deep">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-brown-muted">{c.description}</p>
                <span className="mt-4 inline-block text-sm text-gold-deep">Ver colección →</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-brown-muted">
          [Colección con nombre] — [Confirmar con el cliente]
        </p>
      </section>

      {/* GEO */}
      <section className="border-y border-gold/20 bg-espresso py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Joyería de oro en Guadalajara y zona metro
          </h2>
          <p className="mt-4 text-cream/70">
            Atendemos a quienes buscan oro 10k y 14k en Guadalajara, Zapopan y el área
            metropolitana. [Confirmar si hay recogida local o solo envío.] Si estás en otra ciudad
            de México, pregunta por envío nacional al cotizar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton message={WA_MESSAGES.shipping} variant="whatsapp">
              ¿Envían a mi ciudad?
            </WhatsAppButton>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm text-cream transition hover:border-gold-soft hover:text-gold-soft"
            >
              Seguir en Instagram @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-cream-deep to-white px-6 py-12 text-center shadow-sm sm:px-12">
          <h2 className="font-serif text-3xl text-brown sm:text-4xl">¿Ya viste la pieza ideal?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brown-muted">
            Mándanos un WhatsApp con el nombre de la ficha (o una captura). Te confirmamos quilates,
            peso aproximado, talla y precio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton message={WA_MESSAGES.home} variant="whatsapp">
              WhatsApp {PHONE_DISPLAY}
            </WhatsAppButton>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-full border border-gold/45 px-6 py-3 text-sm text-gold-deep transition hover:bg-gold/10"
            >
              Ir al catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
