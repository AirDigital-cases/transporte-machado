import { Clapperboard, RefreshCw } from "lucide-react";
import { mediaCenterItems } from "../data/siteContent";
import { MediaPreview } from "./MediaPreview";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function MediaCenter() {
  return (
    <section id="midia" className="shell section-pad scroll-mt-28">
      <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="panel p-5 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Central de mídia"
            title="Uma base pronta para vídeos, reels, imagens e futuras atualizações."
            description="A Machado Transportes passa a ter um núcleo visual preparado para alimentar o site com novos materiais operacionais sem perder a unidade estética."
          />

          <Reveal delay={0.14} className="mt-8">
            <div className="panel-soft flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                <Clapperboard size={20} />
              </span>
              <div>
                <p className="text-base font-semibold text-white">
                  Estrutura para atualização contínua
                </p>
                <p className="mt-2 text-sm leading-7 text-white/64">
                  Os cards podem receber novos MP4, cortes, fotos, campanhas e
                  conteúdos de bastidor conforme a operação cresce.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-4">
            <div className="panel-soft flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                <RefreshCw size={20} />
              </span>
              <div>
                <p className="text-base font-semibold text-white">
                  Portfólio vivo e comercial
                </p>
                <p className="mt-2 text-sm leading-7 text-white/64">
                  Ideal para propostas, apresentações comerciais, branding
                  institucional e reforço visual de credibilidade.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mediaCenterItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="panel h-full overflow-hidden p-3.5 sm:p-5">
                <MediaPreview item={item} className={item.minHeight} />
                <div className="px-1 pb-1 pt-4 sm:px-2 sm:pb-2 sm:pt-6">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-mist sm:mt-4 sm:leading-7">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-white/58"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
