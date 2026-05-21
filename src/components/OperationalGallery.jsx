import { galleryItems } from "../data/siteContent";
import { MediaPreview } from "./MediaPreview";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function OperationalGallery() {
  return (
    <section id="galeria" className="shell section-pad scroll-mt-28">
      <div className="panel overflow-hidden p-5 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Galeria operacional"
          title="Uma grade editorial para frota, equipamentos, pátio e bastidores."
          description="Layout inspirado em cases visuais e portfólios de operação premium, pronto para receber imagens reais com leitura forte em desktop e mobile."
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className={item.layout ?? ""}
            >
              <article className="panel-soft group h-full overflow-hidden p-2.5 sm:p-3">
                <MediaPreview item={item} className={item.minHeight} />
                <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4 sm:px-2 sm:pb-2 sm:pt-5">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-400">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
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
