import { Fragment } from "react";
import { MoveRight } from "lucide-react";
import { processSteps } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="processo" className="shell section-pad scroll-mt-28">
      <SectionHeading
        eyebrow="Processo"
        title="Como funciona nossa operação"
        description="Fluxo claro, comercial ágil e execução organizada para transformar a necessidade da carga em entrega concluída com segurança."
      />

      <div className="mt-10 grid gap-5 xl:grid-cols-[1fr_auto_1fr_auto_1fr] xl:items-stretch">
        {processSteps.map((step, index) => (
          <Fragment key={step.title}>
            <Reveal key={step.title} delay={index * 0.07}>
              <div className="panel relative h-full overflow-hidden p-6 sm:p-7">
                <span className="absolute right-5 top-4 text-7xl font-semibold leading-none text-white/[0.05]">
                  0{index + 1}
                </span>
                <span className="eyebrow">Etapa {index + 1}</span>
                <h3 className="mt-6 max-w-xs text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-8 text-mist">
                  {step.text}
                </p>
              </div>
            </Reveal>

            {index < processSteps.length - 1 ? (
              <div
                key={`${step.title}-arrow`}
                className="hidden items-center justify-center xl:flex"
              >
                <MoveRight className="text-brand-400" />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
