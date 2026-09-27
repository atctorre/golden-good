import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Header from "@/components/Header";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://golden-good.vercel.app"),
  title: {
    default: "Joyería de oro 10k y 14k en Guadalajara | Golden Good",
    template: "%s | Golden Good",
  },
  description:
    "Golden Good: anillos, cadenas y más en oro 10k y 14k en Guadalajara. Catálogo online y pedido por WhatsApp.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Golden Good Joyería",
    title: "Joyería de oro 10k y 14k en Guadalajara | Golden Good",
    description:
      "Anillos, cadenas y más en oro 10k y 14k. Catálogo online y pedido por WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Good — Oro 10k y 14k Guadalajara",
    description: "Catálogo de joyería en oro 10k y 14k. Consulta por WhatsApp.",
  },
  robots: { index: true, follow: true },
  keywords: [
    "joyería oro 14k Guadalajara",
    "anillos oro 10k Guadalajara",
    "cadenas oro 14 quilates Jalisco",
    "joyería de oro Guadalajara WhatsApp",
    "comprar oro 14k Guadalajara",
    "Zapopan",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-brown">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
