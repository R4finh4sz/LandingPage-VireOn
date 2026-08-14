import React from 'react'
import { AlertTriangle, Users, Zap } from 'lucide-react'
import { C } from '../lib/branding'
import { Eyebrow, Reveal } from './ui'

export default function ResultsSection() {
  const cards = [
    { Icon: Users, title: 'Funcionários Menos Sobrecarregados', copy: 'Automatizamos tarefas repetitivas para que sua equipe foque no que realmente importa: crescer.' },
    { Icon: AlertTriangle, title: 'Menos Erros', copy: 'Processos digitais reduzem falhas humanas e garantem consistência em cada operação da empresa.' },
    { Icon: Zap, title: 'Atendimento Mais Rápido', copy: 'Clientes atendidos em segundos, não em horas. Sistemas integrados que aceleram cada interação.' },
  ]

  return (
    <section className="px-6 py-20 md:px-12 md:py-28" style={{ background: C.paper }}>
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <Eyebrow>O que seu negócio ganha</Eyebrow>
          <h2 className="font-display mb-5 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: C.ink }}>
            Você não compra um app. <span style={{ color: C.blue }}>Você compra resultados.</span>
          </h2>
          <p className="font-body mx-auto mb-16 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: C.textDimLight }}>
            Empresas não crescem porque têm mais tecnologia. Crescem porque eliminam desperdícios, automatizam processos e tomam decisões melhores. É exatamente isso que fazemos.
          </p>
        </Reveal>

        <div className="grid gap-6 text-left sm:grid-cols-3">
          {cards.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="h-full rounded-xl p-7 transition-all duration-300 hover:-translate-y-1" style={{ background: C.paper2, border: `1px solid ${C.lineLight}` }}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: C.blueSoft }}>
                  <Icon size={18} style={{ color: C.blue }} />
                </div>
                <h3 className="font-display mb-2 text-base font-semibold" style={{ color: C.ink }}>{title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: C.textDimLight }}>{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
