import React from 'react'
import { ClipboardList, Hammer, Rocket, ScanLine, Search, Zap } from 'lucide-react'
import { C } from '../lib/branding'
import { Reveal } from './ui'

export default function ProcessSection() {
  const steps = [
    { code: '01', title: 'Raio X Empresarial', copy: 'Analisamos a rotina da empresa, os processos e o trabalho de cada equipe.', Icon: ScanLine },
    { code: '02', title: 'Identificação de gargalos', copy: 'Descobrimos onde a empresa perde dinheiro, onde pode ganhar mais e o que impede o crescimento. O diagnóstico orienta as prioridades.', Icon: Search },
    { code: '03', title: 'Plano de ação', copy: 'Criamos um plano estratégico com soluções, ideias, prioridades e projeção de resultados para apresentar ao cliente.', Icon: ClipboardList },
    { code: '04', title: 'Construção', copy: 'Construção de tecnologia sob medida para sua empresa: apps, sistemas, automações e integrações com foco em eficiência.', Icon: Hammer },
    { code: '05', title: 'Aceleração', copy: 'Estratégias de marketing que elevam o posicionamento da sua marca, atraem o público-alvo ideal e transformam o projeto em um novo ativo de vendas.', Icon: Rocket },
    { code: '06', title: 'Crescimento', copy: 'Com a base sólida construída, aceleramos o crescimento do seu negócio de forma sustentável.', Icon: Zap },
  ]

  return (
    <section id="processo" className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ background: C.ink }}>
      <div className="orb pointer-events-none absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full blur-3xl opacity-10" style={{ background: C.blueBright }} />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center md:mb-12">
          <h2 className="font-display mb-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Primeiro entendemos. Depois construímos.</h2>
          <p className="font-body mx-auto max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: C.textDimDark }}>
            O Método Raio X Empresarial 360 (MRXE 360) organiza o trabalho em seis etapas, do diagnóstico ao acompanhamento dos resultados.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ code, title, copy, Icon }, i) => (
            <Reveal key={code} delay={i * 80}>
              <div className="group relative h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: C.ink2, border: `1px solid ${C.lineDark}` }}>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-body text-base font-medium" style={{ color: C.blueBright }}>Etapa {code}</span>
                  <Icon size={18} className="transition-colors duration-300" style={{ color: C.textDimDark }} />
                </div>
                <h3 className="font-display mb-2 text-xl font-semibold text-white">{title}</h3>
                <p className="font-body text-base leading-relaxed" style={{ color: C.textDimDark }}>{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
