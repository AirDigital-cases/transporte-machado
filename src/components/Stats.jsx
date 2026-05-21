import { stats } from "../data/siteContent";
import { iconMap } from "./iconLibrary";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Stats() {
  return (
    <section id="numeros" className="shell section-pad scroll-mt-28">
      <div className="panel p-7 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Nossos números"
          title="Escala operacional para atender demandas logísticas com consistência."
          description="Indicadores que reforçam a robustez da operação, a agilidade do time e a confiança construída com clientes em todo o Brasil."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.label} delay={index * 0.05}>
                <div className="panel-soft h-full p-5 sm:p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                    <Icon size={20} />
                  </span>
                  <p className="mt-6 text-3xl font-semibold text-brand-400">
                    {item.value}
                  </p>
                  <p className="mt-3 max-w-[18rem] text-sm leading-7 text-white/66">
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
