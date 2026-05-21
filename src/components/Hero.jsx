import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroTruck from "../assets/hero-truck.svg";
import {
  buildWhatsAppUrl,
  heroHighlights,
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
  const showVideo = shouldRenderVideo && isVideoReady;

  const handleVideoReady = () => setIsVideoReady(true);
  const handleVideoError = () => {
    setHasVideoError(true);
    setIsVideoReady(false);
  };

  return (
    <section id="home" className="relative">
      <div className="shell section-pad pb-10 pt-28 sm:pt-32">
        <Reveal>
          <div className="panel relative overflow-hidden p-2.5 sm:p-4">
            <div className="relative min-h-[32rem] overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#060606] sm:min-h-[38rem] sm:rounded-[1.9rem] lg:min-h-[42rem]">
              <img
                src={heroTruck}
                alt="Poster operacional da Machado Transportes"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-80 blur-xl"
              />

              {shouldRenderVideo ? (
                <video
                  className={`absolute inset-0 h-full w-full object-cover object-center blur-2xl brightness-[0.34] saturate-[0.92] transition-opacity duration-700 ${
                    showVideo ? "opacity-100" : "opacity-0"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={heroTruck}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <source src={heroVideoSrc} type="video/mp4" />
                </video>
              ) : null}

              <div className="absolute left-3 right-3 top-[4.9rem] z-10 md:left-[45%] md:right-6 md:top-6 md:bottom-6">
                <div className="ml-auto w-full max-w-[29rem] md:flex md:h-full md:max-w-none md:items-center md:justify-center">
                  <div className="w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/20 shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-[2px] md:flex md:h-full md:items-center md:justify-center md:rounded-[1.75rem] md:shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
                    <div className="aspect-video w-full md:h-full md:aspect-auto">
                      {shouldRenderVideo ? (
                        <video
                          className={`h-full w-full object-contain object-center transition-opacity duration-700 ${
                            showVideo ? "opacity-100" : "opacity-0"
                          }`}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          poster={heroTruck}
                          aria-hidden="true"
                          tabIndex={-1}
                          onCanPlay={handleVideoReady}
                          onLoadedData={handleVideoReady}
                          onError={handleVideoError}
                        >
                          <source src={heroVideoSrc} type="video/mp4" />
                        </video>
                      ) : null}

                      {!showVideo ? (
                        <img
                          src={heroTruck}
                          alt=""
                          className="h-full w-full object-contain object-center"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/58 md:bg-black/46" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,2,2,0.64)_0%,rgba(2,2,2,0.18)_34%,rgba(2,2,2,0.58)_58%,rgba(2,2,2,0.92)_100%)] md:bg-[linear-gradient(98deg,rgba(2,2,2,0.94)_0%,rgba(2,2,2,0.84)_34%,rgba(2,2,2,0.22)_62%,rgba(2,2,2,0.74)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(213,0,0,0.28),transparent_24%),radial-gradient(circle_at_78%_14%,rgba(255,155,87,0.14),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.72),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
              <div className="absolute left-0 right-0 bottom-0 z-20 h-[52%] bg-[linear-gradient(180deg,rgba(2,2,2,0)_0%,rgba(2,2,2,0.48)_24%,rgba(2,2,2,0.9)_72%,rgba(2,2,2,0.96)_100%)] md:hidden" />
              <div className="absolute inset-y-0 left-0 z-20 hidden w-[50%] bg-[linear-gradient(90deg,rgba(2,2,2,0.9)_0%,rgba(2,2,2,0.76)_36%,rgba(2,2,2,0.18)_100%)] md:block" />
              <div className="absolute -left-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-brand-500/12 blur-3xl sm:h-56 sm:w-56" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ff9b57]/10 blur-3xl sm:h-56 sm:w-56" />
              <div className="scan-sweep absolute inset-y-0 left-[-20%] hidden w-[20%] md:block" />

              <div className="relative z-30 flex min-h-[32rem] items-end px-5 pb-6 pt-[18.5rem] sm:min-h-[38rem] sm:px-7 sm:pb-8 sm:pt-[23rem] md:pt-28 lg:min-h-[42rem] lg:px-10 lg:pb-10">
                <div className="relative w-full max-w-[41rem] lg:max-w-[43rem]">
                  <div className="pointer-events-none absolute -inset-x-4 -inset-y-5 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(213,0,0,0.16),transparent_28%),linear-gradient(180deg,rgba(2,2,2,0.8)_0%,rgba(2,2,2,0.62)_38%,rgba(2,2,2,0.94)_100%)] backdrop-blur-[2px] md:-inset-x-6 md:-inset-y-6 md:bg-[linear-gradient(90deg,rgba(2,2,2,0.88)_0%,rgba(2,2,2,0.72)_44%,rgba(2,2,2,0.08)_100%)]" />

                  <div className="relative">
                    <span className="eyebrow">Frota • Coletas • Distribuição</span>

                    <h1 className="mt-5 max-w-4xl text-balance text-[2.65rem] font-semibold leading-[0.96] text-white min-[390px]:text-[2.95rem] sm:mt-6 sm:text-6xl xl:text-[5.1rem]">
                      Sua carga no destino certo,
                      <span className="mt-2 block text-brand-500">
                        com segurança, prazo e operação real.
                      </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-mist sm:hidden">
                      Transporte, distribuição e armazenagem para empresas que
                      exigem resposta rápida e operação confiável.
                    </p>
                    <p className="mt-7 hidden max-w-2xl text-base leading-8 text-mist sm:block sm:text-xl">
                      Transporte, distribuição e armazenagem para empresas que
                      exigem resposta rápida, comunicação clara e uma operação
                      preparada para cada etapa da entrega.
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

                    <div className="mt-7 hidden gap-4 sm:mt-10 sm:grid sm:grid-cols-2 xl:grid-cols-4">
                      {heroHighlights.map((item) => (
                        <Highlight key={item.label} {...item} />
                      ))}
                    </div>
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
