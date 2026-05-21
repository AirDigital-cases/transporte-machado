const fallbackNodes = [
  { x: 162, y: 130, size: 7 },
  { x: 235, y: 110, size: 5 },
  { x: 308, y: 154, size: 6 },
  { x: 268, y: 232, size: 6 },
  { x: 352, y: 236, size: 7 },
  { x: 246, y: 304, size: 7 },
  { x: 322, y: 325, size: 5 },
  { x: 282, y: 394, size: 6 },
];

const fallbackRoutes = [
  "M162 130C190 116 214 108 235 110",
  "M235 110C260 116 290 132 308 154",
  "M308 154C297 184 280 206 268 232",
  "M308 154C331 176 346 202 352 236",
  "M268 232C255 258 248 280 246 304",
  "M246 304C266 308 294 315 322 325",
  "M322 325C316 348 302 371 282 394",
  "M352 236C344 264 335 296 322 325",
  "M235 110C225 162 230 228 246 304",
];

const modeCopy = {
  idle: {
    eyebrow: "Mapa logístico",
    text: "A visualização tecnológica entra em cena assim que a seção aparece.",
  },
  loading: {
    eyebrow: "Carregando visual 3D",
    text: "Preparando rotas e pontos de atuação com segurança.",
  },
  error: {
    eyebrow: "Visual alternativo ativo",
    text: "O site segue estável enquanto exibimos uma versão segura do mapa logístico.",
  },
  unsupported: {
    eyebrow: "Modo compatível",
    text: "Seu navegador recebeu uma versão otimizada desta visualização.",
  },
};

export function GlobeVisualFallback({ mode = "loading", embedded = false }) {
  const copy = modeCopy[mode] ?? modeCopy.loading;
  const containerClass = embedded
    ? "relative flex min-h-[380px] items-center justify-center overflow-hidden sm:min-h-[520px]"
    : "relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] sm:min-h-[520px]";

  return (
    <div className={containerClass}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_26%,rgba(213,0,0,0.16),transparent_26%),radial-gradient(circle_at_70%_62%,rgba(255,155,87,0.14),transparent_24%),radial-gradient(circle_at_50%_50%,rgba(213,0,0,0.12),transparent_40%)]" />
      <div className="absolute h-[72%] w-[72%] rounded-full border border-white/10" />
      <div className="absolute h-[58%] w-[58%] rounded-full border border-brand-500/20" />
      <div className="absolute h-[86%] w-[86%] rounded-full border border-brand-500/10" />
      <div className="absolute h-[44%] w-[44%] animate-pulse-soft rounded-full bg-[radial-gradient(circle,rgba(213,0,0,0.22),transparent_65%)] blur-2xl" />

      <svg
        viewBox="0 0 520 520"
        className="relative z-10 h-[82%] w-[82%] max-w-[34rem] animate-float"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff9b57" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#d50000" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.22">
          <circle
            cx="260"
            cy="260"
            r="188"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.2"
          />
          <circle
            cx="260"
            cy="260"
            r="146"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        </g>

        <g filter="url(#glow)">
          {fallbackRoutes.map((path) => (
            <path
              key={path}
              d={path}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2.1"
              strokeLinecap="round"
              opacity="0.95"
              strokeDasharray="5 10"
            />
          ))}
        </g>

        <g fill="#ff6d3d">
          {fallbackNodes.map((node) => (
            <g key={`${node.x}-${node.y}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 2.8}
                fill="rgba(213,0,0,0.14)"
              />
              <circle cx={node.x} cy={node.y} r={node.size} />
              <circle cx={node.x} cy={node.y} r={node.size * 0.45} fill="#fff4ea" />
            </g>
          ))}
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-6 bottom-6 z-20 rounded-[1.4rem] border border-white/10 bg-black/42 px-5 py-4 backdrop-blur-xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-400">
          {copy.eyebrow}
        </p>
        <p className="mt-2 max-w-md text-sm leading-7 text-white/66">
          {copy.text}
        </p>
      </div>
    </div>
  );
}
