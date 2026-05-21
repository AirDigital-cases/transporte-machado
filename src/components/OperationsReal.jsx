import { ArrowUpRight } from "lucide-react";
import { operationalCases } from "../data/siteContent";
import { MediaPreview } from "./MediaPreview";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function OperationCard({ item, index }) {
  if (item.featured) {
    return (
      <Reveal delay={index * 0.06} className={item.layout ?? ""}>
        <article className="panel group relative overflow-hidden p-3">
          <MediaPreview item={item} className={item.minHeight} />
          <div className="relative z-20 mt-4 rounded-[1.2rem] border border-white/10 bg-black/38 p-4 backdrop-blur-xl sm:absolute sm:inset-x-7 sm:bottom-7 sm:mt-0 sm:rounded-[1.6rem] sm:p-6">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-400">
              {item.eyebrow}
            </span>
            <h3 className="mt-3 max-w-2xl text-[1.65rem] font-semibold leading-tight text-white sm:mt-4 sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72 sm:mt-4 sm:text-base sm:leading-8">
              {item.description}
            </p>
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.06} className={item.layout ?? ""}>
      <article className="panel h-full overflow-hidden p-3.5 sm:p-5">
        <MediaPreview item={item} className={item.minHeight} />
        <div className="px-1 pb-1 pt-4 sm:px-2 sm:pb-2 sm:pt-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-400">
              {item.eyebrow}
            </span>
            <ArrowUpRight size={18} className="text-white/34" />
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white sm:mt-4 sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-mist sm:mt-4 sm:leading-7">
            {item.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export function OperationsReal() {
  return (
    <section id="operacoes" className="shell section-pad scroll-mt-28">
      <SectionHeading
        eyebrow="Operações reais"
        title="Vídeos, fotos e cenas de operação apresentados como cases premium."
        description="A seção foi desenhada para suportar MP4, imagens grandes, autoplay silencioso e uma composição editorial mais cinematográfica para mostrar a operação como ativo comercial."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
        {operationalCases.map((item, index) => (
          <OperationCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
