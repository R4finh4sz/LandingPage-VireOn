import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { C } from '../lib/branding'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#processo', label: 'Como funciona' },
    { href: '#projetos', label: 'Cases' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <nav className="sticky top-0 z-40 transition-colors duration-300" style={{ background: scrolled ? 'rgba(7,11,20,0.88)' : 'rgba(7,11,20,0.78)', backdropFilter: 'blur(10px)', borderBottom: `1px solid ${C.lineDark}` }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="font-display text-xl font-semibold tracking-tight text-white">
          Vire<span style={{ color: C.blueBright }}>On</span>
        </div>

        <div className="hidden items-center gap-8 font-body text-sm md:flex" style={{ color: C.textDimDark }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative py-1 transition-colors hover:text-white">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" style={{ background: C.blueBright }} />
            </a>
          ))}
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="reveal flex flex-col gap-4 border-t px-6 pb-6 font-body text-sm md:hidden" style={{ color: C.textDimDark, borderTop: `1px solid ${C.lineDark}` }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="pt-4 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
