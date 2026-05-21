export function Logo({ className = "" }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`}>
      {/* Troque este logotipo textual por um SVG/PNG oficial da marca quando ele estiver disponível. */}
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-glow">
        <span className="absolute inset-1 rounded-[1rem] border border-brand-500/25" />
        <span className="font-display text-2xl font-bold tracking-[0.16em] text-white">
          M
        </span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-brand-500 shadow-[0_0_20px_rgba(213,0,0,0.95)]" />
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-[0.55rem] uppercase tracking-[0.38em] text-white/45">
          Família
        </span>
        <span className="text-lg font-black uppercase tracking-[0.24em] text-white sm:text-xl">
          Machado
        </span>
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-white/70">
          Transportes
        </span>
      </span>
    </a>
  );
}
