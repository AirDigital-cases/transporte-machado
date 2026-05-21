import { Check } from "lucide-react";
import { aboutPillars } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="shell section-pad scroll-mt-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div className="panel overflow-hidden p-7 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Quem somos"
            title="Logística inteligente para empresas que precisam de confiança para crescer."
            description="A Machado Transportadora atua oferecendo soluções inteligentes em transporte e logística para empresas que precisam de agilidade, segurança e compromisso em cada entrega."
          />

          <Reveal delay={0.12} className="mt-8 space-y-6">
            <p className="text-base leading-8 text-mist">
              Com uma operação estruturada e foco em excelência operacional, a
              empresa atende cargas em diferentes segmentos, garantindo
              eficiência logística, comunicação transparente e atendimento
              humanizado.
            </p>
            <p className="text-base leading-8 text-mist">
              Nosso compromisso é conectar empresas ao crescimento através de
              uma logística confiável, moderna e eficiente.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {aboutPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.1 + index * 0.08}>
              <div className="panel flex h-full gap-4 p-6 sm:p-7">
                <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Check size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-mist">
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
