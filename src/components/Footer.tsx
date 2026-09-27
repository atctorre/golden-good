import Link from "next/link";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WA_MESSAGES,
  waLink,
} from "@/lib/whatsapp";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/catalogo?quilates=14k", label: "Oro 14k" },
  { href: "/catalogo?quilates=10k", label: "Oro 10k" },
  { href: "/nosotros", label: "Sobre nosotros" },
  { href: "/envios", label: "Envíos" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/20 bg-espresso text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">
            Golden <span className="text-gold-soft">Good</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Golden Good Joyería — Oro 10k y 14k en Guadalajara. Catálogo claro y pedido directo por
            WhatsApp.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={waLink(WA_MESSAGES.home)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-soft"
              >
                WhatsApp: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                Instagram: @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="text-cream/45">
              [Confirmar dirección y horarios]
            </li>
            <li className="text-cream/45">
              Envíos Jalisco y [nacional — confirmar]
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Golden Good Joyería · Guadalajara, Jalisco, México
      </div>
    </footer>
  );
}
