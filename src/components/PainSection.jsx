import React from 'react'
import { ArrowRight, ScanLine } from 'lucide-react'
import { C } from '../lib/branding'
import { Reveal } from './ui'

export default function PainSection() {
  const rows = [
    { pain: 'Mensagens respondidas uma a uma', win: 'Automação de respostas frequentes' },
    { pain: 'Orçamentos espalhados em planilhas', win: 'Informações reunidas em um sistema' },
    { pain: 'Equipe ocupada com tarefas repetitivas', win: 'Mais tempo para tarefas que exigem atenção' },
  ]

  return (
    <section className="px-6 pb-10 pt-20 md:px-12 md:pb-14 md:pt-28" style={{ background: C.paper }}>
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display mb-10 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: C.ink }}>
            Onde sua rotina pode melhorar?
          </h2>
        </Reveal>

        <div className="mb-10 space-y-3 text-left">
          {rows.map(({ pain, win }, i) => (
            <Reveal key={pain} delay={i * 100}>
              <div className="grid items-center gap-3 rounded-xl px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 sm:grid-cols-[1fr_auto_1fr] sm:gap-6" style={{ background: C.paper2, border: `1px solid ${C.lineLight}` }}>
                <span className="font-body text-sm sm:text-base" style={{ color: C.textDimLight }}>{pain}</span>
                <ArrowRight size={16} className="mx-auto hidden sm:block" style={{ color: C.blue }} />
                <span className="font-display text-left text-sm font-semibold sm:text-left sm:text-base" style={{ color: C.ink }}>{win}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-display mb-10 text-lg font-medium sm:text-xl" style={{ color: C.ink }}>
            Começamos pelos processos que mais consomem tempo da equipe.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-2xl p-10 sm:p-14" style={{ background: C.ink, border: `1px solid ${C.lineDark}` }}>
            <div className="scanline" />
            <ScanLine className="mx-auto mb-6" size={22} style={{ color: C.blueBright }} />
            <p className="font-display mx-auto max-w-2xl text-xl leading-snug text-white sm:text-2xl">
              Uma mensagem respondida mais rápido, um pedido sem retrabalho, uma informação fácil de encontrar. É nesses detalhes que a tecnologia precisa ajudar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
