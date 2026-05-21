import { Building2, Instagram, MapPinned, MessageCircle } from "lucide-react";
import {
  buildWhatsAppUrl,
  instagramUrl,
  whatsappNumber,
} from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const company = formData.get("company");
    const origin = formData.get("origin");
    const destination = formData.get("destination");
    const message = formData.get("message");

    const formattedMessage = `Olá! Quero solicitar uma cotação com a Machado Transportes.

Nome: ${name}
Telefone: ${phone}
Empresa: ${company}
Origem: ${origin}
Destino: ${destination}
Mensagem: ${message || "Não informado"}`;

    window.open(
      buildWhatsAppUrl(formattedMessage),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contato" className="shell section-pad scroll-mt-28">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="panel p-7 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Contato"
            title="Transporte seguro, rápido e eficiente de cargas."
            description="Fale com a equipe comercial da Machado Transportes para receber uma proposta alinhada à sua operação."
          />

          <div className="mt-8 space-y-4">
            <Reveal delay={0.08}>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="panel-soft flex items-start gap-4 p-5 hover:border-brand-400/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="text-base font-semibold text-white">WhatsApp</p>
                  <p className="mt-2 text-sm leading-7 text-white/64">
                    Número atual configurado: {whatsappNumber}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-white/46">
                    Atualize este número no arquivo de conteúdo para usar o
                    contato oficial da empresa.
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="panel-soft flex items-start gap-4 p-5 hover:border-brand-400/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Instagram size={20} />
                </span>
                <div>
                  <p className="text-base font-semibold text-white">Instagram</p>
                  <p className="mt-2 text-sm leading-7 text-white/64">
                    @machado.transporte
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="panel-soft flex items-start gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <MapPinned size={20} />
                </span>
                <div>
                  <p className="text-base font-semibold text-white">
                    Atendimento comercial
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/64">
                    Operação nacional com resposta rápida, coletas agendadas e
                    suporte próximo para cada embarque.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="panel-soft flex items-start gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Building2 size={20} />
                </span>
                <div>
                  <p className="text-base font-semibold text-white">
                    Envio da solicitação
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/64">
                    O formulário ao lado abre o WhatsApp com os dados preenchidos,
                    facilitando o contato imediato com o comercial.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12}>
          <form onSubmit={handleSubmit} className="panel p-7 sm:p-8 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white/72">
                  Nome
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="input-field"
                  placeholder="Seu nome"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white/72">
                  Telefone
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="input-field"
                  placeholder="(00) 00000-0000"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white/72">
                  Empresa
                </span>
                <input
                  type="text"
                  name="company"
                  required
                  className="input-field"
                  placeholder="Nome da empresa"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-white/72">
                  Origem
                </span>
                <input
                  type="text"
                  name="origin"
                  required
                  className="input-field"
                  placeholder="Cidade / Estado"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-white/72">
                  Destino
                </span>
                <input
                  type="text"
                  name="destination"
                  required
                  className="input-field"
                  placeholder="Cidade / Estado"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-white/72">
                  Mensagem
                </span>
                <textarea
                  name="message"
                  rows="6"
                  className="input-field resize-none"
                  placeholder="Conte mais sobre a carga, volume, prazo e necessidades da operação."
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-white/48">
                Retorno comercial com foco em agilidade e clareza operacional.
              </p>
              <button type="submit" className="primary-button">
                <MessageCircle size={18} />
                Enviar via WhatsApp
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
