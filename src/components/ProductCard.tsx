import Link from "next/link";
import GoldPlaceholder from "@/components/GoldPlaceholder";
import {
  AVAILABILITY_LABELS,
  KARAT_LABELS,
  TYPE_LABELS,
  type Product,
} from "@/data/products";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-sm shadow-brown/5 transition hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10">
      <Link href={`/catalogo/${product.slug}`} className="block">
        <GoldPlaceholder
          label={product.name}
          gradient={product.gradient}
          karat={KARAT_LABELS[product.karat]}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-gold-deep">
            {KARAT_LABELS[product.karat]}
          </span>
          <span className="rounded-full bg-cream-deep px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-brown-muted">
            {TYPE_LABELS[product.type]}
          </span>
          <span className="rounded-full bg-cream-deep px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-brown-muted">
            {AVAILABILITY_LABELS[product.availability]}
          </span>
        </div>
        <h3 className="font-serif text-lg text-brown">
          <Link href={`/catalogo/${product.slug}`} className="hover:text-gold-deep">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-brown-muted">{product.shortDescription}</p>
        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <a
            href={waLink(WA_MESSAGES.product(product.name, product.karat))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#1ebe57]"
          >
            Consultar por WhatsApp
          </a>
          <Link
            href={`/catalogo/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-gold/40 px-4 py-2.5 text-xs text-gold-deep transition hover:border-gold hover:bg-gold/5"
          >
            Ver ficha
          </Link>
        </div>
      </div>
    </article>
  );
}
