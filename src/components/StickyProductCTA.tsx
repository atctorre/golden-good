"use client";

import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

export default function StickyProductCTA({
  productName,
  karat,
}: {
  productName: string;
  karat: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-cream/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={waLink(WA_MESSAGES.product(productName, karat))}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-[#25D366] py-3 text-center text-sm font-medium text-white"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
