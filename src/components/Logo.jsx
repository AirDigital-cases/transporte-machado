export function Logo({ className = "" }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`}>
      {/* Troque este logotipo textual por um SVG/PNG oficial da marca quando ele estiver disponível. */}
      <span className="relative flex h-10 w-10 items-center justify-center rounded-[1.15rem] border border-white/10 bg-white/5 shadow-glow sm:h-12 sm:w-12 sm:rounded-2xl">
        <span className="absolute inset-1 rounded-[1rem] border border-brand-500/25" />
        <span className="font-display text-xl font-bold tracking-[0.16em] text-white sm:text-2xl">
          M
        </span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-brand-500 shadow-[0_0_20px_rgba(213,0,0,0.95)]" />
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-[0.5rem] uppercase tracking-[0.28em] text-white/45 sm:text-[0.55rem] sm:tracking-[0.38em]">
          Família
        </span>
        <span className="text-base font-black uppercase tracking-[0.18em] text-white sm:text-xl sm:tracking-[0.24em]">
          Machado
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-[0.68rem] sm:tracking-[0.42em]">
          Transportes
        </span>
      </span>
    </a>
  );
}
