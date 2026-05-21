import { Check } from "lucide-react";
import { aboutPillars } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="shell section-pad scroll-mt-28">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div className="panel overflow-hidden p-5 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Quem somos"
            title="Logística inteligente para empresas que precisam de confiança para crescer."
            description="A Machado Transportadora atua oferecendo soluções inteligentes em transporte e logística para empresas que precisam de agilidade, segurança e compromisso em cada entrega."
          />

          <Reveal delay={0.12} className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
            <p className="text-[0.98rem] leading-7 text-mist sm:text-base sm:leading-8">
              Com uma operação estruturada e foco em excelência operacional, a
              empresa atende cargas em diferentes segmentos, garantindo
              eficiência logística, comunicação transparente e atendimento
              humanizado.
            </p>
            <p className="text-[0.98rem] leading-7 text-mist sm:text-base sm:leading-8">
              Nosso compromisso é conectar empresas ao crescimento através de
              uma logística confiável, moderna e eficiente.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5">
          {aboutPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.1 + index * 0.08}>
              <div className="panel flex h-full gap-3 p-4 sm:gap-4 sm:p-7">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[1rem] border border-brand-500/20 bg-brand-500/10 text-brand-400 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Check size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-mist sm:mt-3 sm:text-base sm:leading-7">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
