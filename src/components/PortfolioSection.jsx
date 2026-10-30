import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Bot, CheckCircle2, CloudSun, HeartPulse, Home, MonitorSmartphone, Recycle, ShoppingCart, Smartphone, Stethoscope, Wrench } from 'lucide-react'
import { C } from '../lib/branding'
import { Reveal } from './ui'
import costaLandingPage from '../images/costa-landing-page.png'

const PROJECTS = [
  { name: 'Escritório Costa', category: 'Landing page', Icon: MonitorSmartphone, image: costaLandingPage, imageAlt: 'Captura da página inicial da landing page do Escritório Costa', href: 'https://www.escritoriocosta.com.br/', tagline: 'Landing page desenvolvida pela Vireon.', copy: 'Desenvolvemos a landing page da Costa Assessoria Contábil para apresentar o escritório e seus serviços, com acesso ao contato pelo WhatsApp.', impact: [] },
  { name: 'SIATEA', category: 'Sistema Web', Icon: Stethoscope, tagline: 'Transformando o acompanhamento de pacientes em um processo simples e integrado.', copy: 'Em vez de depender de diversos canais de comunicação e processos manuais, desenvolvemos uma plataforma que conecta médicos, pacientes e responsáveis em um único ambiente digital. O resultado é uma rotina mais organizada, informações centralizadas e uma experiência muito mais prática para todos os envolvidos.', impact: ['Centralização de informações', 'Menos retrabalho', 'Comunicação em tempo real', 'Melhor experiência para pacientes e profissionais'] },
  { name: 'AUTOPARTS', category: 'E-commerce', Icon: Wrench, tagline: 'Digitalizando o processo de compra de peças automotivas.', copy: 'Projetamos uma experiência completa de comércio eletrônico focada em facilitar a busca por peças compatíveis, reduzindo dúvidas durante a compra e tornando todo o processo mais rápido. Mais agilidade para quem compra, mais eficiência para quem vende.', impact: ['Busca inteligente', 'Melhor experiência de compra', 'Processo de venda simplificado', 'Redução de erros na escolha das peças'] },
  { name: 'Recicla Online', category: 'App Mobile', Icon: Recycle, tagline: 'Criando um ecossistema digital para incentivar a economia circular.', copy: 'Aplicativo com gamificação e carteira digital para incentivar a participação dos usuários na reciclagem.', impact: ['Gamificação', 'Fidelização', 'Economia circular', 'Plataforma escalável'] },
  { name: 'Estação meteorológica virtual', category: 'Automação', Icon: CloudSun, tagline: 'Dados em tempo real para tomada de decisão.', copy: 'Sensores conectados por MQTT enviam dados para um painel de monitoramento em tempo real. O projeto integra hardware, software e visualização de dados.', impact: [] },
  { name: 'Automação residencial IoT', category: 'Automação', Icon: Home, tagline: 'Inteligência aplicada à automação de ambientes.', copy: 'Estrutura de comunicação e controle de dispositivos conectados para projetos de automação residencial.', impact: [] },
  { name: 'Mentes Vivas', category: 'App Mobile', Icon: HeartPulse, tagline: 'Tecnologia aplicada ao cuidado e à qualidade de vida.', copy: 'Aplicativo com atividades de estímulo cognitivo e acompanhamento da evolução dos pacientes, pensado para apoiar cuidadores na rotina do tratamento.', impact: ['Organização da rotina', 'Estímulo cognitivo', 'Acompanhamento centralizado', 'Mais suporte para cuidadores'] },
]

const FILTERS = [
  { key: 'Todos', label: 'Todos' },
  { key: 'Landing page', label: 'Landing page', Icon: MonitorSmartphone },
  { key: 'App Mobile', label: 'App Mobile', Icon: Smartphone },
  { key: 'Sistema Web', label: 'Sistema Web', Icon: MonitorSmartphone },
  { key: 'Automação', label: 'Automação', Icon: Bot },
  { key: 'E-commerce', label: 'E-commerce', Icon: ShoppingCart },
]

const PAGE_SIZE = 6

function ProjectCard({ project }) {
  const { name, category, Icon, image, imageAlt, href, tagline, copy, impact } = project

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: C.paper2, border: `1px solid ${C.lineLight}` }}>
      <div className={`relative flex items-center justify-center overflow-hidden ${image ? '' : 'h-36'}`} style={{ background: `linear-gradient(135deg, ${C.ink}, ${C.ink3})` }}>
        {image ? (
          <img src={image} alt={imageAlt} width="1280" height="1173" loading="lazy" className="h-auto w-full" />
        ) : (
          <>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-30" style={{ background: C.blueBright }} />
            <Icon size={34} style={{ color: C.blueBright }} className="relative" />
          </>
        )}
        <span className="absolute right-3 top-3 rounded bg-[#0e1424] px-2 py-1 font-body text-sm font-medium text-white">{category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display mb-1 text-xl font-semibold" style={{ color: C.ink }}>{name}</h3>
        <p className="font-body mb-3 text-base font-medium" style={{ color: C.blue }}>{tagline}</p>
        <p className="font-body mb-4 text-base leading-relaxed" style={{ color: C.textDimLight }}>{copy}</p>
        {impact.length > 0 && (
          <div className="mt-auto space-y-1.5 pt-2">
            {impact.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: C.money }} />
                <span className="font-body text-base leading-relaxed" style={{ color: C.textDimLight }}>{item}</span>
              </div>
            ))}
          </div>
        )}
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site de ${name} (abre em nova aba)`} className="mt-auto inline-flex items-center gap-2 self-start pt-4 font-body text-base font-semibold underline-offset-4 hover:underline" style={{ color: C.blue }}>
            Visitar site <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [active, setActive] = useState('Todos')
  const [page, setPage] = useState(0)
  const filtered = active === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === active)
  const pageCount = Math.ceil(PROJECTS.length / PAGE_SIZE)
  const visible = active === 'Todos' ? filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE) : filtered

  return (
    <section id="projetos" className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-14" style={{ background: C.paper }}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: C.ink }}>Projetos que desenvolvemos</h2>
          <p className="font-body mx-auto mt-4 max-w-xl text-base sm:text-lg" style={{ color: C.textDimLight }}>Conheça algumas soluções para saúde, comércio, reciclagem e automação.</p>
        </Reveal>

        <Reveal delay={80} className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map(({ key, label, Icon }) => {
            const isActive = active === key
            return (
              <button aria-pressed={isActive} key={key} onClick={() => { setActive(key); setPage(0) }} className="font-body inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-base transition-all duration-300" style={{ background: isActive ? C.blue : 'transparent', color: isActive ? '#fff' : C.textDimLight, borderColor: isActive ? C.blue : C.lineLight, boxShadow: isActive ? `0 8px 20px -10px ${C.blueGlow}` : 'none' }}>
                {Icon && <Icon size={14} />}
                {label}
              </button>
            )
          })}
        </Reveal>

        <div id="lista-projetos" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        {active === 'Todos' && pageCount > 1 && (
          <nav aria-label="Paginação dos projetos" className="mt-8 flex items-center justify-center gap-4" style={{ color: C.ink }}>
            <button type="button" aria-label="Página anterior" aria-controls="lista-projetos" disabled={page === 0} onClick={() => setPage(page - 1)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-current transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <span role="status" className="font-body text-base">Página {page + 1} de {pageCount}</span>
            <button type="button" aria-label="Próxima página" aria-controls="lista-projetos" disabled={page === pageCount - 1} onClick={() => setPage(page + 1)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-current transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}
