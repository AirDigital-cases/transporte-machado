import { lazy, Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import { CircleDot, Route } from "lucide-react";
import { coverageHighlights } from "../data/siteContent";
import { ErrorBoundary } from "./ErrorBoundary";
import { GlobeVisualFallback } from "./GlobeVisualFallback";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GlobeCanvas = lazy(() => import("./GlobeCanvas"));

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
                <ErrorBoundary fallback={<GlobeVisualFallback mode="error" />}>
                  <Suspense fallback={<GlobeVisualFallback mode="loading" />}>
                    <GlobeCanvas />
                  </Suspense>
                </ErrorBoundary>
              ) : (
                <GlobeVisualFallback mode="idle" />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
