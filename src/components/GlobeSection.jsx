import { lazy, Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import { CircleDot, Route } from "lucide-react";
import { coverageHighlights } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GlobeCanvas = lazy(() => import("./GlobeCanvas"));

function GlobeFallback() {
  return (
    <div className="relative flex h-full min-h-[380px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] sm:min-h-[520px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute h-[62%] w-[62%] rounded-full border border-white/10" />
      <div className="absolute h-[62%] w-[62%] animate-pulse-soft rounded-full bg-[radial-gradient(circle,rgba(213,0,0,0.18),transparent_62%)]" />
      <div className="absolute h-[48%] w-[48%] rounded-full border border-brand-500/20" />
      <div className="absolute h-[68%] w-[68%] rounded-full border border-brand-500/10" />
    </div>
  );
}

export function GlobeSection() {
  const globeRef = useRef(null);
  const isInView = useInView(globeRef, { once: true, amount: 0.25 });

  return (
    <section className="shell section-pad">
      <div className="panel overflow-hidden p-7 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Atuação nacional"
              title="Conectando destinos com inteligência logística e cobertura nacional."
              description="Uma operação estruturada que alcança empresas em todo o Brasil com eficiência, segurança e compromisso."
            />

            <div className="mt-8 grid gap-4">
              {coverageHighlights.map((item, index) => (
                <Reveal key={item} delay={0.08 + index * 0.05}>
                  <div className="panel-soft flex items-start gap-3 px-5 py-4">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-400">
                      <CircleDot size={15} />
                    </span>
                    <p className="text-sm leading-7 text-white/74">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.26} className="mt-6">
              <div className="panel-soft flex items-center gap-3 px-5 py-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Route size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Visualização dinâmica da operação
                  </p>
                  <p className="mt-1 text-sm text-white/62">
                    Rotas e hubs logísticos ilustrativos representados em 3D.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="w-full">
            <div ref={globeRef} className="relative">
              {isInView ? (
                <Suspense fallback={<GlobeFallback />}>
                  <GlobeCanvas />
                </Suspense>
              ) : (
                <GlobeFallback />
              )}
              <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-full bg-black/40 px-4 py-2 text-center text-[0.7rem] uppercase tracking-[0.28em] text-white/52 backdrop-blur">
                Rotas pelo Brasil com rotação contínua
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
