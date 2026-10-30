import React, { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { C } from '../lib/branding'
import logo from '../images/Logo.png'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#processo', label: 'Como funciona' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className="sticky top-0 z-40 px-6 py-3 md:px-12 md:py-5">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl" style={{ background: C.ink3, border: `1px solid ${C.lineDark}` }}>
        <div className="flex min-h-16 items-center justify-between gap-6 px-5 md:px-6">
          <a href="#inicio" aria-label="Vireon, início" className="my-3 shrink-0 rounded-lg px-3 py-2">
            <img src={logo} alt="Vireon, soluções de tecnologia e marketing" width="2172" height="724" className="h-auto w-40 sm:w-48" />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-7 font-body text-base font-medium lg:flex" style={{ color: C.textDimDark }}>
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="py-3 transition-colors hover:text-white">{label}</a>
            ))}
          </nav>

          <a href="#contato" className="hidden items-center gap-3 rounded-lg px-5 py-3 font-body text-base font-semibold bg-[#3159ff] text-white transition-colors hover:bg-[#2446d4] lg:inline-flex">
            Solicitar diagnóstico <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button type="button" className="flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav id="menu-mobile" aria-label="Navegação no celular" hidden={!open} className="border-t px-5 pb-5 lg:hidden" style={{ borderColor: C.lineDark }}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 font-body text-base text-white hover:underline">{label}</a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-3 rounded-lg px-5 py-3 font-body font-semibold text-white" style={{ background: C.blue }}>
            Solicitar diagnóstico <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
