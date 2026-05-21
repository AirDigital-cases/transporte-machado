import { Building2, Quote } from "lucide-react";
import { testimonials } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Trust() {
  return (
    <section className="shell section-pad">
      <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="panel p-7 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Confiança"
            title="Empresas confiam na Machado Transportadora."
            description="Reputação construída com pontualidade, eficiência logística e atendimento transparente para operações que não podem parar."
          />

          <div className="mt-8 space-y-4">
            {[
              "Empresas confiam na Machado Transportadora pela pontualidade e eficiência logística.",
              "Atendimento transparente e suporte rápido.",
              "Operação estruturada para garantir segurança em todas as etapas da entrega.",
            ].map((statement, index) => (
              <Reveal key={statement} delay={0.1 + index * 0.06}>
                <div className="panel-soft flex items-start gap-3 px-5 py-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                    <Building2 size={18} />
                  </span>
                  <p className="text-sm leading-7 text-white/72">{statement}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.company}
              delay={index * 0.06}
              className={index === 2 ? "md:col-span-2" : ""}
            >
              <article className="panel h-full p-6 sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Quote size={20} />
                </span>
                <p className="mt-6 text-lg leading-8 text-white/86">“{item.text}”</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-white/42">
                  {item.company}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
