import { ArrowUpRight, Check } from "lucide-react";
import { services } from "../data/siteContent";
import { iconMap } from "./iconLibrary";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];

  return (
    <Reveal delay={index * 0.06} className={service.layout ?? ""}>
      <article className="panel h-full overflow-hidden p-4 sm:p-5">
        {/* Este bloco visual pode ser trocado facilmente por fotos reais da operação de cada serviço. */}
        <div
          className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${service.accent} p-5`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="absolute -right-12 top-6 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
            <Icon size={24} />
          </span>
          <div className="relative mt-10 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/52">
              Machado Transportes
            </span>
            <ArrowUpRight size={18} className="text-white/36" />
          </div>
        </div>

        <div className="px-2 pb-2 pt-6">
          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
          <p className="mt-4 text-sm leading-7 text-mist">{service.description}</p>
          {service.details ? (
            <p className="mt-4 text-sm leading-7 text-white/64">{service.details}</p>
          ) : null}

          <div className="mt-6 space-y-3">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Check size={13} />
                </span>
                <p className="text-sm leading-7 text-white/72">{bullet}</p>
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
        eyebrow="Serviços"
        title="Serviços que movem o seu negócio com mais controle, velocidade e eficiência."
        description="Da distribuição regional às operações dedicadas e apoio industrial, a Machado Transportes entrega soluções logísticas completas para diferentes cenários de carga."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
