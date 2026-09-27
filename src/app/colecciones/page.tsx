import type { Metadata } from "next";
import Link from "next/link";
import GoldPlaceholder from "@/components/GoldPlaceholder";
import ProductCard from "@/components/ProductCard";
import { COLLECTION_LABELS, collections, products, type CollectionId } from "@/data/products";

export const metadata: Metadata = {
  title: "Colecciones Golden Good",
  description:
    "Colecciones de joyería en oro 10k y 14k: recién llegados, clásicos y para regalo. Cotiza por WhatsApp.",
  openGraph: {
    title: "Colecciones Golden Good | Oro 10k y 14k Guadalajara",
    description: "Recién llegados, clásicos de oro y para regalo.",
  },
};

const gradients: Record<CollectionId, string> = {
  recien: "from-amber-100 via-yellow-500 to-amber-800",
  clasicos: "from-yellow-50 via-amber-400 to-stone-700",
  regalo: "from-rose-100 via-amber-400 to-yellow-800",
};

export default function ColeccionesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-4xl text-brown sm:text-5xl">Colecciones Golden Good</h1>
      <p className="mt-4 max-w-2xl text-brown-muted">
        Agrupamos piezas por estilo y momento. Entra, guarda tus favoritas y cotiza cuando quieras.
      </p>

      <div className="mt-12 space-y-20">
        {collections.map((c) => {
          const items = products.filter((p) => p.collection === c.id);
          return (
            <section key={c.id} id={c.id} className="scroll-mt-24">
              <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <GoldPlaceholder
                  label={c.name}
                  gradient={gradients[c.id]}
                  aspect="aspect-[16/10]"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">Colección</p>
                  <h2 className="mt-2 font-serif text-3xl text-brown">{COLLECTION_LABELS[c.id]}</h2>
                  <p className="mt-3 text-brown-muted">{c.description}</p>
                  <Link
                    href="/catalogo"
                    className="mt-5 inline-block text-sm text-gold-deep hover:text-gold"
                  >
                    Ver en catálogo →
                  </Link>
                </div>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <p className="mt-12 text-xs text-brown-muted">
        [Colección con nombre] — [Confirmar con el cliente]
      </p>
    </div>
  );
}
