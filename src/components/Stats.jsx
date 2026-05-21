import { stats } from "../data/siteContent";
import { iconMap } from "./iconLibrary";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Stats() {
  return (
    <section id="numeros" className="shell section-pad scroll-mt-28">
      <div className="panel p-5 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Nossos números"
          title="Escala operacional para atender demandas logísticas com consistência."
          description="Indicadores que reforçam a robustez da operação, a agilidade do time e a confiança construída com clientes em todo o Brasil."
        />

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.label} delay={index * 0.05}>
                <div className="panel-soft h-full p-4 sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[1rem] border border-brand-500/20 bg-brand-500/10 text-brand-400 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon size={20} />
                  </span>
                  <p className="mt-4 text-[1.85rem] font-semibold text-brand-400 sm:mt-6 sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 max-w-[18rem] text-sm leading-6 text-white/66 sm:mt-3 sm:leading-7">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
