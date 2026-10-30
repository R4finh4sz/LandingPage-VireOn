import React, { useState } from 'react'
import { Bot, CheckCircle2, CloudSun, HeartPulse, Home, MonitorSmartphone, Recycle, ShoppingCart, Smartphone, Stethoscope, Wrench } from 'lucide-react'
import { C } from '../lib/branding'
import { Reveal } from './ui'

const PROJECTS = [
  { name: 'SIATEA', category: 'Sistema Web', Icon: Stethoscope, tagline: 'Transformando o acompanhamento de pacientes em um processo simples e integrado.', copy: 'Em vez de depender de diversos canais de comunicação e processos manuais, desenvolvemos uma plataforma que conecta médicos, pacientes e responsáveis em um único ambiente digital. O resultado é uma rotina mais organizada, informações centralizadas e uma experiência muito mais prática para todos os envolvidos.', impact: ['Centralização de informações', 'Menos retrabalho', 'Comunicação em tempo real', 'Melhor experiência para pacientes e profissionais'] },
  { name: 'AUTOPARTS', category: 'E-commerce', Icon: Wrench, tagline: 'Digitalizando o processo de compra de peças automotivas.', copy: 'Projetamos uma experiência completa de comércio eletrônico focada em facilitar a busca por peças compatíveis, reduzindo dúvidas durante a compra e tornando todo o processo mais rápido. Mais agilidade para quem compra, mais eficiência para quem vende.', impact: ['Busca inteligente', 'Melhor experiência de compra', 'Processo de venda simplificado', 'Redução de erros na escolha das peças'] },
  { name: 'Recicla Online', category: 'App Mobile', Icon: Recycle, tagline: 'Criando um ecossistema digital para incentivar a economia circular.', copy: 'Aplicativo com gamificação e carteira digital para incentivar a participação dos usuários na reciclagem.', impact: ['Gamificação', 'Fidelização', 'Economia circular', 'Plataforma escalável'] },
  { name: 'Estação meteorológica virtual', category: 'Automação', Icon: CloudSun, tagline: 'Dados em tempo real para tomada de decisão.', copy: 'Sensores conectados por MQTT enviam dados para um painel de monitoramento em tempo real. O projeto integra hardware, software e visualização de dados.', impact: [] },
  { name: 'Automação residencial IoT', category: 'Automação', Icon: Home, tagline: 'Inteligência aplicada à automação de ambientes.', copy: 'Estrutura de comunicação e controle de dispositivos conectados para projetos de automação residencial.', impact: [] },
  { name: 'Mentes Vivas', category: 'App Mobile', Icon: HeartPulse, tagline: 'Tecnologia aplicada ao cuidado e à qualidade de vida.', copy: 'Aplicativo com atividades de estímulo cognitivo e acompanhamento da evolução dos pacientes, pensado para apoiar cuidadores na rotina do tratamento.', impact: ['Organização da rotina', 'Estímulo cognitivo', 'Acompanhamento centralizado', 'Mais suporte para cuidadores'] },
]

const FILTERS = [
  { key: 'Todos', label: 'Todos' },
  { key: 'App Mobile', label: 'App Mobile', Icon: Smartphone },
  { key: 'Sistema Web', label: 'Sistema Web', Icon: MonitorSmartphone },
  { key: 'Automação', label: 'Automação', Icon: Bot },
  { key: 'E-commerce', label: 'E-commerce', Icon: ShoppingCart },
]

function ProjectCard({ project }) {
  const { name, category, Icon, tagline, copy, impact } = project

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: C.paper2, border: `1px solid ${C.lineLight}` }}>
      <div className="relative flex h-36 items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.ink}, ${C.ink3})` }}>
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-30" style={{ background: C.blueBright }} />
        <Icon size={34} style={{ color: C.blueBright }} className="relative" />
        <span className="absolute right-3 top-3 rounded bg-white/10 px-2 py-1 font-body text-xs font-medium text-white">{category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display mb-1 text-base font-semibold" style={{ color: C.ink }}>{name}</h3>
        <p className="font-body mb-3 text-sm font-medium" style={{ color: C.blue }}>{tagline}</p>
        <p className="font-body mb-4 text-sm leading-relaxed" style={{ color: C.textDimLight }}>{copy}</p>
        {impact.length > 0 && (
          <div className="mt-auto space-y-1.5 pt-2">
            {impact.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: C.money }} />
                <span className="font-body text-xs" style={{ color: C.textDimLight }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="projetos" className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-14" style={{ background: C.paper }}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight" style={{ color: C.ink }}>Projetos que desenvolvemos</h2>
          <p className="font-body mx-auto mt-4 max-w-xl text-base sm:text-lg" style={{ color: C.textDimLight }}>Conheça algumas soluções para saúde, comércio, reciclagem e automação.</p>
        </Reveal>

        <Reveal delay={80} className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map(({ key, label, Icon }) => {
            const isActive = active === key
            return (
              <button aria-pressed={isActive} key={key} onClick={() => setActive(key)} className="font-body inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-all duration-300" style={{ background: isActive ? C.blue : 'transparent', color: isActive ? '#fff' : C.textDimLight, borderColor: isActive ? C.blue : C.lineLight, boxShadow: isActive ? `0 8px 20px -10px ${C.blueGlow}` : 'none' }}>
                {Icon && <Icon size={14} />}
                {label}
              </button>
            )
          })}
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
