import { differentials } from "../data/siteContent";
import { iconMap } from "./iconLibrary";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="shell section-pad scroll-mt-28"
    >
      <div className="panel p-7 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a Machado?"
          description="Uma operação preparada para sustentar prazos, segurança e uma relação comercial mais previsível para a sua empresa."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="panel-soft h-full p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {item.text}
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
