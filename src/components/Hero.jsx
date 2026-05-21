import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CirclePlay,
  MessageCircle,
  Radar,
  ShieldCheck,
} from "lucide-react";
import heroTruck from "../assets/hero-truck.svg";
import {
  buildWhatsAppUrl,
  heroHighlights,
  heroSignals,
  heroVideoPath,
} from "../data/siteContent";
import { iconMap } from "./iconLibrary";
import { Reveal } from "./Reveal";

function Highlight({ label, icon }) {
  const Icon = iconMap[icon];

  return (
    <div className="panel-soft flex items-center gap-3 px-3 py-3 sm:px-4 sm:py-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-[1rem] border border-brand-500/20 bg-brand-500/10 text-brand-400 sm:h-11 sm:w-11 sm:rounded-2xl">
        <Icon size={18} />
      </span>
      <span className="text-sm font-medium leading-5 text-white/82">{label}</span>
    </div>
  );
}

export function Hero() {
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const heroVideoSrc = heroVideoPath
    ? /^https?:\/\//.test(heroVideoPath)
      ? heroVideoPath
      : `${import.meta.env.BASE_URL}${heroVideoPath.replace(/^\/+/, "")}`
    : "";
  const shouldRenderVideo = Boolean(heroVideoSrc) && !hasVideoError;

  return (
    <section id="home" className="relative">
      <div className="shell section-pad pb-10 pt-24 sm:pt-32">
        <Reveal>
          <div className="panel relative overflow-hidden p-2.5 sm:p-4">
            <div className="relative min-h-[34rem] overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#060606] sm:min-h-[42rem] sm:rounded-[1.9rem]">
              <img
                src={heroTruck}
                alt="Poster operacional da Machado Transportes"
                className="absolute inset-0 h-full w-full object-cover object-[center_40%] sm:object-center"
              />

              {shouldRenderVideo ? (
                <video
                  className={`absolute inset-0 h-full w-full object-cover object-[center_40%] transition-opacity duration-700 sm:object-center ${
                    isVideoReady ? "opacity-100" : "opacity-0"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={heroTruck}
                  aria-hidden="true"
                  onCanPlay={() => setIsVideoReady(true)}
                  onError={() => {
                    setHasVideoError(true);
                    setIsVideoReady(false);
                  }}
                >
                  <source src={heroVideoSrc} type="video/mp4" />
                </video>
              ) : null}

              <div className="absolute inset-0 bg-black/52" />
              <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(2,2,2,0.92)_0%,rgba(2,2,2,0.86)_34%,rgba(2,2,2,0.48)_58%,rgba(2,2,2,0.74)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(213,0,0,0.34),transparent_24%),radial-gradient(circle_at_78%_14%,rgba(255,155,87,0.16),transparent_18%),radial-gradient(circle_at_52%_100%,rgba(0,0,0,0.66),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
              <div className="absolute -left-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-brand-500/12 blur-3xl sm:h-56 sm:w-56" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ff9b57]/10 blur-3xl sm:h-56 sm:w-56" />
              <div className="scan-sweep absolute inset-y-0 left-[-20%] w-[20%]" />

              <motion.div
                className="absolute left-4 top-4 z-20 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/74 backdrop-blur-xl sm:left-5 sm:top-5 sm:px-4 sm:text-[0.68rem] sm:tracking-[0.3em]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CirclePlay size={15} className="text-brand-400" />
                Portfólio Operacional Premium
              </motion.div>

              <div className="relative z-10 grid min-h-[34rem] gap-6 px-5 pb-5 pt-20 sm:min-h-[42rem] sm:gap-12 sm:px-7 sm:pb-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-10">
                <div className="flex flex-col justify-end">
                  <span className="eyebrow">Frota • Pátio • Distribuição</span>

                  <h1 className="mt-5 max-w-4xl text-balance text-[2.75rem] font-semibold leading-[0.96] text-white min-[390px]:text-[3rem] sm:mt-6 sm:text-6xl xl:text-[5.25rem]">
                    Operação em movimento,
                    <span className="mt-2 block text-brand-500">
                      presença real e linguagem premium.
                    </span>
                  </h1>

                  <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-mist sm:hidden">
                    Caminhões, carregamentos e bastidores com leitura rápida,
                    estética premium e foco comercial.
                  </p>
                  <p className="mt-8 hidden max-w-2xl text-base leading-8 text-mist sm:block sm:text-xl">
                    Um portfólio operacional pensado para mostrar caminhões,
                    empilhadeiras, carregamentos, distribuição, armazenagem e
                    bastidores da Machado Transportes com estética cinematográfica,
                    estabilidade e performance.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                    <a href="#operacoes" className="primary-button w-full sm:w-auto">
                      <ArrowRight size={18} />
                      Ver operações reais
                    </a>
                    <a
                      href={buildWhatsAppUrl(
                        "Olá! Quero falar com o comercial da Machado Transportes.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button w-full sm:w-auto"
                    >
                      <MessageCircle size={18} />
                      Fale com o comercial
                    </a>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3 sm:hidden">
                    {heroHighlights.slice(0, 2).map((item) => (
                      <Highlight key={item.label} {...item} />
                    ))}
                  </div>

                  <div className="mt-7 hidden gap-4 sm:mt-12 sm:grid sm:grid-cols-2 xl:grid-cols-4">
                    {heroHighlights.map((item) => (
                      <Highlight key={item.label} {...item} />
                    ))}
                  </div>

                  <div className="panel-soft mt-6 p-4 lg:hidden">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-400">
                        Hero cinematográfico
                      </span>
                      <Radar size={16} className="text-white/38" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/66">
                      Vídeo operacional com fallback visual, leitura limpa e
                      estabilidade mobile.
                    </p>
                  </div>
                </div>

                <div className="hidden flex-col justify-between gap-4 lg:flex">
                  <div className="panel-soft ml-auto w-full max-w-md p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-400">
                        Hero cinematográfico
                      </span>
                      <Radar size={18} className="text-white/38" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                      Banner com vídeo real da operação, overlay premium e fallback
                      visual para manter legibilidade e estabilidade.
                    </p>
                  </div>

                  <div className="grid gap-4 xl:pl-16">
                    {heroSignals.map((signal) => (
                      <div
                        key={signal.value}
                        className="panel-soft flex items-start gap-4 px-5 py-4"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                          <ShieldCheck size={18} />
                        </span>
                        <div>
                          <p className="text-lg font-semibold text-white">
                            {signal.value}
                          </p>
                          <p className="mt-1 text-sm leading-7 text-white/60">
                            {signal.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
