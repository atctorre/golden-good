type Props = {
  label: string;
  gradient?: string;
  className?: string;
  aspect?: string;
  karat?: string;
};

export default function GoldPlaceholder({
  label,
  gradient = "from-amber-100 via-yellow-500 to-amber-800",
  className = "",
  aspect = "aspect-square",
  karat,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-cream-muted ${aspect} ${className}`}
      role="img"
      aria-label={`Placeholder de catálogo: ${label}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`} />
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.55), transparent 42%), radial-gradient(circle at 75% 78%, rgba(42,27,15,0.35), transparent 50%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="88" r="36" stroke="white" strokeWidth="1.5" />
        <path d="M64 118 C64 148, 136 148, 136 118" stroke="white" strokeWidth="1.5" fill="none" />
        <ellipse cx="100" cy="72" rx="14" ry="8" stroke="white" strokeWidth="1.2" />
      </svg>
      {karat && (
        <span className="absolute left-3 top-3 rounded-full bg-espresso/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold-soft backdrop-blur">
          {karat}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent p-4 pt-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold-soft/90">
          Placeholder catálogo
        </p>
        <p className="mt-1 font-serif text-sm text-cream line-clamp-2">{label}</p>
      </div>
    </div>
  );
}
