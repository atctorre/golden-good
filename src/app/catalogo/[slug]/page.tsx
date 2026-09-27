import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GoldPlaceholder from "@/components/GoldPlaceholder";
import ProductCard from "@/components/ProductCard";
import StickyProductCTA from "@/components/StickyProductCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AVAILABILITY_LABELS,
  COLLECTION_LABELS,
  GENDER_LABELS,
  KARAT_LABELS,
  OCCASION_LABELS,
  TYPE_LABELS,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { WA_MESSAGES } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Pieza no encontrada" };
  return {
    title: `${product.name} — oro ${product.karat} Guadalajara`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Golden Good`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="text-xs text-brown-muted" aria-label="Migas">
          <Link href="/catalogo" className="hover:text-gold-deep">
            Catálogo
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/catalogo?tipo=${product.type}`} className="hover:text-gold-deep">
            {TYPE_LABELS[product.type]}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brown">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <GoldPlaceholder
              label={product.name}
              gradient={product.gradient}
              aspect="aspect-square"
              className="shadow-xl shadow-brown/15"
              karat={KARAT_LABELS[product.karat]}
            />
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <GoldPlaceholder
                  key={i}
                  label={`${product.name} detalle ${i + 1}`}
                  gradient={product.gradient}
                  aspect="aspect-square"
                  className="opacity-95"
                />
              ))}
            </div>
            <p className="text-center text-[10px] uppercase tracking-[0.2em] text-brown-muted/70">
              Placeholders de catálogo — fotos reales pendientes del cliente
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-wider text-gold-deep">
                {KARAT_LABELS[product.karat]}
              </span>
              <span className="rounded-full bg-cream-deep px-3 py-1 text-[10px] uppercase tracking-wider text-brown-muted">
                {AVAILABILITY_LABELS[product.availability]}
              </span>
              <span className="rounded-full bg-cream-deep px-3 py-1 text-[10px] uppercase tracking-wider text-brown-muted">
                {COLLECTION_LABELS[product.collection]}
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl text-brown sm:text-4xl">
              {product.name} — oro {product.karat}
            </h1>
            <p className="mt-4 leading-relaxed text-brown-muted">{product.shortDescription}</p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gold/25 bg-white">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-gold/15">
                  {[
                    ["Material / quilates", `Oro ${product.karat}`],
                    ["Tipo", TYPE_LABELS[product.type]],
                    ["Peso aprox.", product.weightNote],
                    ["Medidas / talla / largo", product.sizeNote],
                    ["Género", GENDER_LABELS[product.gender]],
                    ["Ocasión", product.occasion.map((o) => OCCASION_LABELS[o]).join(", ")],
                    ["Disponibilidad", AVAILABILITY_LABELS[product.availability]],
                    ["Precio", "Consultar por WhatsApp"],
                  ].map(([label, value]) => (
                    <tr key={label} className="bg-cream/40">
                      <th className="w-44 px-4 py-3 font-medium text-gold-deep">{label}</th>
                      <td className="px-4 py-3 text-brown-soft">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 hidden flex-wrap gap-3 md:flex">
              <WhatsAppButton
                message={WA_MESSAGES.product(product.name, product.karat)}
                variant="whatsapp"
              >
                Consultar precio por WhatsApp
              </WhatsAppButton>
              <Link
                href={`/catalogo?quilates=${product.karat}`}
                className="inline-flex items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm text-gold-deep transition hover:border-gold hover:bg-gold/5"
              >
                Ver más oro {product.karat}
              </Link>
              <Link
                href={`/colecciones#${product.collection}`}
                className="inline-flex items-center justify-center rounded-full border border-brown/15 px-6 py-3 text-sm text-brown-soft transition hover:border-gold hover:text-gold-deep"
              >
                Ver colección
              </Link>
            </div>
            <p className="mt-4 hidden text-xs text-brown-muted md:block">
              Te respondemos por WhatsApp. Horario: [Confirmar horarios].
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 pb-20 md:pb-0">
            <h2 className="font-serif text-2xl text-brown sm:text-3xl">También te puede gustar</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <StickyProductCTA productName={product.name} karat={product.karat} />
    </>
  );
}
