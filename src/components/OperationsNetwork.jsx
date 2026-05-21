import { CircleDot, Radar } from "lucide-react";
import {
  monitoringHighlights,
  monitoringSignals,
} from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function OperationsNetwork() {
  return (
    <section className="shell section-pad">
      <div className="panel overflow-hidden p-5 sm:p-8 lg:p-10">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Monitoramento operacional"
              title="Conexões leves, leitura premium e sensação de centro de comando."
              description="No lugar do globo 3D, a experiência passa a usar uma animação SVG/CSS elegante, mais estável e mais rápida para representar rotas, hubs e acompanhamento operacional."
            />

            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              {monitoringHighlights.map((item, index) => (
                <Reveal key={item} delay={0.08 + index * 0.05}>
                  <div className="panel-soft flex items-start gap-3 px-4 py-4 sm:px-5">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-brand-500/20 bg-brand-500/10 text-brand-400">
                      <CircleDot size={15} />
                    </span>
                    <p className="text-sm leading-7 text-white/74">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16}>
            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#070707] sm:min-h-[32rem] sm:rounded-[1.85rem]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(213,0,0,0.16),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(255,155,87,0.12),transparent_22%),radial-gradient(circle_at_58%_72%,rgba(213,0,0,0.12),transparent_28%)]" />
              <div className="scan-sweep absolute inset-y-0 left-[-18%] w-[18%]" />

              <svg
                viewBox="0 0 760 560"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="opsStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff9b57" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#d50000" stopOpacity="0.92" />
                  </linearGradient>
                </defs>
                <path
                  d="M94 340C146 274 224 232 294 226C374 220 410 170 500 164C588 158 664 202 706 270"
                  className="route-flow"
                  fill="none"
                  stroke="url(#opsStroke)"
                  strokeWidth="3.3"
                  strokeLinecap="round"
                />
                <path
                  d="M98 420C180 356 260 332 318 332C412 332 458 266 540 266C608 266 660 300 700 370"
                  className="route-flow-delay"
                  fill="none"
                  stroke="url(#opsStroke)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M178 150C236 204 252 282 246 360"
                  className="route-flow-slow"
                  fill="none"
                  stroke="url(#opsStroke)"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                />
                <path
                  d="M472 120C458 198 488 266 574 330"
                  className="route-flow-slow"
                  fill="none"
                  stroke="url(#opsStroke)"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                />

                {[
                  [114, 322, 8],
                  [278, 226, 7],
                  [500, 164, 8],
                  [668, 226, 7],
                  [338, 332, 8],
                  [542, 266, 7],
                  [666, 370, 8],
                ].map(([cx, cy, r], index) => (
                  <g key={`${cx}-${cy}-${index}`}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r * 2.8}
                      className="signal-node-soft"
                      fill="rgba(213,0,0,0.16)"
                    />
                    <circle cx={cx} cy={cy} r={r} className="signal-node" fill="#ff6d3d" />
                  </g>
                ))}
              </svg>

              <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-7">
                <div className="ml-auto flex max-w-[80%] items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl sm:max-w-none sm:px-4 sm:text-[0.68rem] sm:tracking-[0.3em]">
                  <Radar size={15} className="text-brand-400" />
                  Operação em leitura contínua
                </div>

                <div className="grid gap-3 sm:max-w-[16rem]">
                  {monitoringSignals.map((signal) => (
                    <div key={signal.label} className="panel-soft px-3 py-3 sm:px-4 sm:py-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/42">
                        {signal.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-7 text-white/78">
                        {signal.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
