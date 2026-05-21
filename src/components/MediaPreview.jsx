import { useState } from "react";
import {
  Boxes,
  Camera,
  Factory,
  PackageOpen,
  Play,
  Route,
  Truck,
  Warehouse,
} from "lucide-react";

const themeMap = {
  haul: {
    gradient: "from-[#220707] via-[#101010] to-[#050505]",
    glow: "bg-brand-500/20",
    icon: Truck,
    accent: "Frota",
  },
  forklift: {
    gradient: "from-[#2b1206] via-[#111111] to-[#050505]",
    glow: "bg-[#ff9b57]/18",
    icon: Factory,
    accent: "Equipamentos",
  },
  loading: {
    gradient: "from-[#1f0909] via-[#121212] to-[#050505]",
    glow: "bg-brand-500/18",
    icon: PackageOpen,
    accent: "Carregamento",
  },
  distribution: {
    gradient: "from-[#1a0808] via-[#121212] to-[#060606]",
    glow: "bg-[#ff9b57]/16",
    icon: Route,
    accent: "Distribuição",
  },
  warehouse: {
    gradient: "from-[#140b0b] via-[#121212] to-[#050505]",
    glow: "bg-brand-500/15",
    icon: Warehouse,
    accent: "Armazenagem",
  },
  backstage: {
    gradient: "from-[#160606] via-[#101010] to-[#050505]",
    glow: "bg-[#ff9b57]/14",
    icon: Camera,
    accent: "Bastidores",
  },
};

function PlaceholderArtwork({ theme, type }) {
  const config = themeMap[theme] ?? themeMap.haul;
  const Icon = config.icon;

  return (
    <>
      <div className={`absolute -right-16 top-8 h-40 w-40 rounded-full blur-3xl ${config.glow}`} />
      <div className="absolute left-8 top-10 h-28 w-28 rounded-full bg-white/[0.04] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <svg
        viewBox="0 0 640 480"
        className="absolute inset-0 h-full w-full opacity-90"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="placeholderStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff9b57" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#d50000" stopOpacity="0.92" />
          </linearGradient>
        </defs>
        <path
          d="M40 310C120 246 194 216 262 220C332 224 378 168 440 166C498 164 550 182 600 236"
          className="route-flow"
          fill="none"
          stroke="url(#placeholderStroke)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M74 370C144 320 202 300 250 300C320 300 370 256 430 258C482 260 530 278 584 338"
          className="route-flow-delay"
          fill="none"
          stroke="url(#placeholderStroke)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="118" cy="258" r="7" className="signal-node" fill="#ff6d3d" />
        <circle cx="256" cy="220" r="6" className="signal-node" fill="#ff6d3d" />
        <circle cx="430" cy="166" r="8" className="signal-node" fill="#ff6d3d" />
        <circle cx="530" cy="278" r="6" className="signal-node" fill="#ff6d3d" />
      </svg>

      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/62">
            {config.accent}
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/62">
            {type === "video" ? "MP4 pronto" : "Imagem pronta"}
          </span>
        </div>

        <div className="space-y-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
            <Icon size={24} />
          </span>
          <p className="max-w-[15rem] text-sm leading-7 text-white/62">
            Estrutura visual premium pronta para substituir por mídia real da
            operação.
          </p>
        </div>
      </div>
    </>
  );
}

export function MediaPreview({ item, className = "" }) {
  const [hasError, setHasError] = useState(false);
  const theme = themeMap[item.theme] ?? themeMap.haul;
  const Icon = item.type === "video" ? Play : Boxes;
  const hasVideoSource = item.type === "video" && item.src && !hasError;
  const hasImageSource = item.type === "image" && item.src && !hasError;

  return (
    <div
      className={`group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#090909] bg-gradient-to-br ${theme.gradient} sm:rounded-[1.6rem] ${className}`}
    >
      {hasVideoSource ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.poster || undefined}
          onError={() => setHasError(true)}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : null}

      {hasImageSource ? (
        <img
          src={item.src}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
          onError={() => setHasError(true)}
        />
      ) : null}

      {!hasVideoSource && !hasImageSource ? (
        <PlaceholderArtwork theme={item.theme} type={item.type} />
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0.78)_100%)]" />

      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/72 backdrop-blur-xl">
        <Icon size={14} className="text-brand-400" />
        {item.type === "video" ? "Vídeo" : "Imagem"}
      </div>

      {item.tags?.length ? (
        <div className="absolute inset-x-4 bottom-4 z-20 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/66 backdrop-blur-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
