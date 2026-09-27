import type { Metadata } from "next";
import CatalogFilters from "@/components/CatalogFilters";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo oro 10k y 14k | Golden Good Guadalajara",
  description:
    "Filtra por quilates, tipo de joya y ocasión. Precio y disponibilidad por WhatsApp.",
  openGraph: {
    title: "Catálogo oro 10k y 14k | Golden Good Guadalajara",
    description: "Filtra por quilates, tipo de joya y ocasión. Precio por WhatsApp.",
  },
};

type Props = {
  searchParams: Promise<{ quilates?: string; tipo?: string; ocasion?: string }>;
};

export default async function CatalogoPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">Oro 10k · Oro 14k</p>
      <h1 className="mt-3 font-serif text-4xl text-brown sm:text-5xl">
        Catálogo de oro 10k y 14k
      </h1>
      <p className="mt-4 max-w-2xl text-brown-muted">
        Filtra por quilates, tipo de pieza, género u ocasión. Abre la ficha y consulta precio por
        WhatsApp — sin listas eternas en el chat.
      </p>
      <div className="mt-10">
        <CatalogFilters
          products={products}
          initialKarat={params.quilates}
          initialType={params.tipo}
          initialOccasion={params.ocasion}
        />
      </div>
    </div>
  );
}
