import React from 'react'
import { ArrowRight, CheckCircle2, ScanLine, Users, Zap } from 'lucide-react'
import { C } from '../lib/branding'
import { Eyebrow, GhostButton, PrimaryButton, Reveal } from './ui'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10 md:px-12 md:pb-28" style={{ background: C.ink, color: '#fff' }}>
      <div className="orb pointer-events-none absolute -left-16 -top-24 h-80 w-80 rounded-full blur-3xl opacity-30" style={{ background: C.blue }} />
      <div className="orb pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: C.blueBright, animationDelay: '-6s' }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 pt-6 md:grid-cols-2 md:gap-8 md:pt-10">
        <div className="reveal">
          <Eyebrow dark>Método Raio X Empresarial 360</Eyebrow>
          <h1 className="font-display mb-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Toda empresa perde dinheiro.
            <br />
            <span style={{ background: `linear-gradient(90deg, ${C.blueBright}, #8FE3C0)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              As empresas inteligentes
            </span>
            <br />
            descobrem onde.
          </h1>
          <p className="font-body mb-9 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: C.textDimDark }}>
            Identificamos onde sua empresa perde dinheiro, onde ela pode ganhar mais, redesenhamos processos, aplicamos tecnologia e marketing para transformar empresas em operações lucrativas.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              Falar no WhatsApp agora
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </PrimaryButton>
            <GhostButton dark onClick={() => document.getElementById('processo')?.scrollIntoView({ behavior: 'smooth' })}>
              Como funciona
            </GhostButton>
          </div>
        </div>

        <Reveal delay={150} className="relative">
          <div className="relative overflow-hidden rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-10" style={{ background: `linear-gradient(160deg, ${C.ink3}, ${C.ink2})`, border: `1px solid ${C.lineDark}`, boxShadow: `0 30px 60px -30px ${C.blueGlow}` }}>
            <div className="scanline" />
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.blueBright})` }}>
                <ScanLine size={20} />
              </div>
              <div>
                <div className="font-display text-sm font-semibold">VireOn Scan</div>
                <div className="font-mono text-[11px]" style={{ color: C.textDimDark }}>soluções digitais</div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Aumento de lucro', value: '+47% médio', Icon: Zap },
                { label: 'Atendimento', value: '3x mais rápido', Icon: Users },
                { label: 'Processos automatizados', value: '85% menos erros', Icon: CheckCircle2 },
              ].map(({ label, value, Icon }) => (
                <div key={label} className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors duration-300 hover:bg-white/[0.04]" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.lineDark}` }}>
                  <div className="flex items-center gap-3">
                    <Icon size={16} style={{ color: C.blueBright }} />
                    <span className="font-body text-sm" style={{ color: C.textDimDark }}>{label}</span>
                  </div>
                  <span className="font-mono text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
