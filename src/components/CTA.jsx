import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../data/siteContent";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="shell section-pad pt-4">
      <Reveal>
        <div className="panel relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,0,0,0.18),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(255,155,87,0.12),transparent_24%)]" />
          <div className="relative grid gap-8 xl:grid-cols-[1fr_auto] xl:items-center">
            <div>
              <span className="eyebrow">Crescimento logístico</span>
              <h2 className="mt-6 max-w-4xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3rem]">
                Sua logística precisa de uma transportadora preparada para
                crescer junto com sua empresa.
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row xl:flex-col">
              <a href="#contato" className="primary-button">
                <ArrowRight size={18} />
                Solicite uma cotação
              </a>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Gostaria de falar com o comercial da Machado Transportes.",
                )}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <MessageCircle size={18} />
                Fale com nosso comercial
              </a>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Quero atendimento rápido via WhatsApp com a Machado Transportes.",
                )}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <MessageCircle size={18} />
                Atendimento rápido via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
