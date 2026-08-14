import React from 'react'
import { ArrowRight, ScanLine } from 'lucide-react'
import { C } from '../lib/branding'
import { Eyebrow, Reveal } from './ui'

export default function PainSection() {
  const rows = [
    { pain: 'Enquanto você responde WhatsApp manualmente...', win: 'Seu concorrente automatizou.' },
    { pain: 'Enquanto você faz orçamento no Excel...', win: 'Outro já integra tudo.' },
    { pain: 'Enquanto sua equipe perde tempo e você contrata mais...', win: 'Outra empresa cresce com menos colaboradores.' },
  ]

  return (
    <section className="px-6 py-20 md:px-12 md:py-28" style={{ background: C.paper }}>
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow>O diagnóstico</Eyebrow>
          <h2 className="font-display mb-14 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl" style={{ color: C.ink }}>
            O problema não é a falta de tecnologia. É uma empresa funcionando do mesmo jeito há anos.
          </h2>
        </Reveal>

        <div className="mb-10 space-y-3 text-left">
          {rows.map(({ pain, win }, i) => (
            <Reveal key={pain} delay={i * 100}>
              <div className="grid items-center gap-3 rounded-xl px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 sm:grid-cols-[1fr_auto_1fr] sm:gap-6" style={{ background: C.paper2, border: `1px solid ${C.lineLight}` }}>
                <span className="font-body text-sm sm:text-base" style={{ color: C.textDimLight }}>{pain}</span>
                <ArrowRight size={16} className="mx-auto hidden sm:block" style={{ color: C.blue }} />
                <span className="font-display text-right text-sm font-semibold sm:text-left sm:text-base" style={{ color: C.ink }}>{win}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-display mb-16 text-lg font-medium sm:text-xl" style={{ color: C.ink }}>
            A diferença não está nas pessoas. Está nos processos.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-2xl p-10 sm:p-14" style={{ background: C.ink, border: `1px solid ${C.lineDark}` }}>
            <div className="scanline" />
            <ScanLine className="mx-auto mb-6" size={22} style={{ color: C.blueBright }} />
            <p className="font-display mx-auto max-w-2xl text-xl leading-snug text-white sm:text-2xl">
              Toda empresa possui dinheiro escondido dentro dos seus processos. Nossa missão é encontrá-lo utilizando tecnologia e colocá-lo no seu bolso.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
