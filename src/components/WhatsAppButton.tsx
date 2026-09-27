import { waLink } from "@/lib/whatsapp";

type Props = {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-gold text-espresso hover:bg-gold-rich shadow-lg shadow-gold/25",
  secondary:
    "bg-cream text-brown border border-gold/50 hover:border-gold hover:bg-white",
  ghost:
    "bg-transparent text-brown border border-brown/20 hover:border-gold hover:text-gold-deep",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-lg shadow-brown/10",
};

export default function WhatsAppButton({
  message,
  children,
  className = "",
  variant = "whatsapp",
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
