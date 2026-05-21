import { ArrowUpRight, Check } from "lucide-react";
import { services } from "../data/siteContent";
import { iconMap } from "./iconLibrary";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];

  return (
    <Reveal delay={index * 0.06} className={service.layout ?? ""}>
      <article className="panel h-full overflow-hidden p-3.5 sm:p-5">
        {/* Este bloco visual pode ser trocado facilmente por fotos reais da operação de cada serviço. */}
        <div
          className={`relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-gradient-to-br ${service.accent} p-4 sm:rounded-[1.5rem] sm:p-5`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="absolute -right-12 top-6 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-[1rem] border border-brand-500/20 bg-brand-500/10 text-brand-400 sm:h-14 sm:w-14 sm:rounded-2xl">
            <Icon size={22} />
          </span>
          <div className="relative mt-7 flex items-center justify-between sm:mt-10">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/52">
              Machado Transportes
            </span>
            <ArrowUpRight size={18} className="text-white/36" />
          </div>
        </div>

        <div className="px-1 pb-1 pt-4 sm:px-2 sm:pb-2 sm:pt-6">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-mist sm:mt-4 sm:leading-7">
            {service.description}
          </p>
          {service.details ? (
            <p className="mt-3 text-sm leading-6 text-white/64 sm:mt-4 sm:leading-7">
              {service.details}
            </p>
          ) : null}

          <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Check size={13} />
                </span>
                <p className="text-sm leading-6 text-white/72 sm:leading-7">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="servicos" className="shell section-pad scroll-mt-28">
      <SectionHeading
        eyebrow="Capacidades operacionais"
        title="Serviços e estruturas que sustentam uma operação logística de presença premium."
        description="Além do novo portfólio visual, a base operacional continua sendo apresentada com clareza: transporte, equipamentos, organização de carga e apoio logístico para demandas B2B."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
