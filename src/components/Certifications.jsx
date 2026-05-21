import { BadgeCheck, LockKeyhole } from "lucide-react";
import { certifications } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="seguranca" className="shell section-pad scroll-mt-28">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-7 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Segurança"
            title="Segurança, regularidade e credibilidade para operações de alto nível."
            description="A Machado Transportes opera com documentação regular, gestão responsável e estrutura pensada para preservar cargas, prazos e relacionamento comercial."
          />

          <Reveal delay={0.16} className="mt-8">
            <div className="panel-soft flex items-start gap-4 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                <LockKeyhole size={20} />
              </span>
              <div>
                <p className="text-base font-semibold text-white">
                  Compliance e proteção operacional
                </p>
                <p className="mt-2 text-sm leading-7 text-white/64">
                  Transparência documental, cobertura de seguro e controles que
                  reforçam a confiança em toda a jornada logística.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="panel-soft flex h-full items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <BadgeCheck size={20} />
                </span>
                <p className="text-sm leading-7 text-white/78">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
