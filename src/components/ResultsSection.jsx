import React from 'react'
import { AlertTriangle, Users, Zap } from 'lucide-react'
import { C } from '../lib/branding'
import { Reveal } from './ui'

export default function ResultsSection() {
  const cards = [
    { Icon: Users, title: 'Equipe menos sobrecarregada', copy: 'Automatizamos tarefas repetitivas para que sua equipe tenha mais tempo para atender clientes e cuidar da operação.' },
    { Icon: AlertTriangle, title: 'Menos erros', copy: 'Processos digitais reduzem falhas humanas e garantem consistência em cada operação da empresa.' },
    { Icon: Zap, title: 'Atendimento mais rápido', copy: 'Clientes atendidos em segundos, não em horas. Sistemas integrados que aceleram cada interação.' },
  ]

  return (
    <section className="px-6 py-20 md:px-12 md:py-28" style={{ background: C.paper }}>
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h2 className="font-display mb-5 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: C.ink }}>
            Tecnologia que <span style={{ color: C.blue }}>facilita o trabalho.</span>
          </h2>
          <p className="font-body mx-auto mb-10 max-w-2xl md:mb-12 text-base leading-relaxed sm:text-lg" style={{ color: C.textDimLight }}>
            Sistemas e automações fazem sentido quando resolvem problemas da rotina. Nosso trabalho começa por entender o que precisa melhorar na sua empresa.
          </p>
        </Reveal>

        <div className="grid gap-6 text-left md:grid-cols-3">
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
