import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import heroTruck from "../assets/hero-truck.svg";
import { buildWhatsAppUrl, heroHighlights } from "../data/siteContent";
import { iconMap } from "./iconLibrary";
import { Reveal } from "./Reveal";

function Highlight({ label, icon }) {
  const Icon = iconMap[icon];

  return (
    <div className="panel-soft flex items-center gap-3 px-4 py-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
        <Icon size={20} />
      </span>
      <span className="text-sm font-medium text-white/82">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="shell section-pad pt-32 sm:pt-36">
        <div className="grid items-center gap-10 xl:grid-cols-[1fr_1.05fr]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Transporte • Logística • Distribuição</span>

            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl xl:text-[5.25rem]">
              Sua carga no destino certo,
              <span className="mt-2 block text-brand-500">
                no prazo e com segurança.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-mist sm:text-xl">
              Soluções completas em transporte e logística, com operações
              estruturadas, atendimento ágil e foco total em segurança,
              pontualidade e confiança.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contato" className="primary-button">
                <ArrowRight size={18} />
                Solicite uma cotação
              </a>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Quero falar com o comercial da Machado Transportes.",
                )}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <MessageCircle size={18} />
                Fale com o comercial
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroHighlights.map((item) => (
                <Highlight key={item.label} {...item} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="panel relative overflow-hidden p-3 sm:p-4">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-hero-glow sm:min-h-[520px]">
                {/* Substitua hero-truck.svg por fotos reais da frota quando quiser evoluir o visual do hero. */}
                <img
                  src={heroTruck}
                  alt="Ilustração premium da frota Machado Transportes"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,5,5,0.78)_8%,rgba(5,5,5,0.16)_58%,rgba(5,5,5,0.74)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,155,87,0.18),transparent_28%)]" />

                <motion.div
                  className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/76 backdrop-blur"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  Operação B2B Estruturada
                </motion.div>

                <div className="absolute bottom-4 left-4 right-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="panel-soft p-5 sm:p-6">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-400">
                      Machado Transportes
                    </span>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-white/76 sm:text-base">
                      Solidez operacional para quem precisa de transporte,
                      distribuição e armazenagem com padrão premium de atendimento.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <div className="panel-soft flex items-center gap-3 px-4 py-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                        <Clock3 size={20} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Atendimento rápido
                        </p>
                        <p className="text-sm text-white/62">
                          Resposta comercial em até 10 minutos
                        </p>
                      </div>
                    </div>
                    <div className="panel-soft flex items-center gap-3 px-4 py-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                        <ShieldCheck size={20} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Segurança de ponta a ponta
                        </p>
                        <p className="text-sm text-white/62">
                          Operações com foco total em controle e confiabilidade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
