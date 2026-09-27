"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  KARAT_LABELS,
  OCCASION_LABELS,
  TYPE_LABELS,
  type Karat,
  type Occasion,
  type Product,
  type ProductType,
} from "@/data/products";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

type Props = {
  products: Product[];
  initialKarat?: string;
  initialType?: string;
  initialOccasion?: string;
};

const karats = Object.keys(KARAT_LABELS) as Karat[];
const types = Object.keys(TYPE_LABELS) as ProductType[];
const occasions = Object.keys(OCCASION_LABELS) as Occasion[];

export default function CatalogFilters({
  products,
  initialKarat,
  initialType,
  initialOccasion,
}: Props) {
  const [quilates, setQuilates] = useState<string>(
    initialKarat && initialKarat in KARAT_LABELS ? initialKarat : "todos"
  );
  const [tipo, setTipo] = useState<string>(
    initialType && initialType in TYPE_LABELS ? initialType : "todos"
  );
  const [ocasion, setOcasion] = useState<string>(
    initialOccasion && initialOccasion in OCCASION_LABELS ? initialOccasion : "todas"
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const karatOk = quilates === "todos" || p.karat === quilates;
      const typeOk = tipo === "todos" || p.type === tipo;
      const occOk = ocasion === "todas" || p.occasion.includes(ocasion as Occasion);
      return karatOk && typeOk && occOk;
    });
  }, [products, quilates, tipo, ocasion]);

  return (
    <div>
      <div className="rounded-2xl border border-gold/25 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-4">
          <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-gold-deep">
            Quilates
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "todos", label: "Todos" },
              ...karats.map((k) => ({ value: k, label: KARAT_LABELS[k] })),
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setQuilates(opt.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  quilates === opt.value
                    ? "bg-gold text-espresso shadow-md shadow-gold/30"
                    : "border border-gold/30 bg-cream text-brown-soft hover:border-gold"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gold-deep">
              Tipo
            </span>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full rounded-xl border border-gold/25 bg-cream px-3 py-2.5 text-brown outline-none focus:border-gold"
            >
              <option value="todos">Todos</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {TYPE_LABELS[t]}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gold-deep">
              Ocasión
            </span>
            <select
              value={ocasion}
              onChange={(e) => setOcasion(e.target.value)}
              className="w-full rounded-xl border border-gold/25 bg-cream px-3 py-2.5 text-brown outline-none focus:border-gold"
            >
              <option value="todas">Todas</option>
              {occasions.map((o) => (
                <option key={o} value={o}>
                  {OCCASION_LABELS[o]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-4 text-xs text-brown-muted">
          {filtered.length} pieza{filtered.length === 1 ? "" : "s"} · Precio por WhatsApp
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-gold/35 bg-cream-deep/50 px-6 py-12 text-center">
          <p className="font-serif text-xl text-brown">No hay piezas con esos filtros.</p>
          <p className="mt-2 text-sm text-brown-muted">
            Cambia quilates o tipo, o escríbenos al WhatsApp.
          </p>
          <a
            href={waLink(WA_MESSAGES.advisor)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1ebe57]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
