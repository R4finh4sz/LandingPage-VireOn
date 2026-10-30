import React from 'react'
import { C } from '../lib/branding'
import logo from '../images/Logo.png'

export default function Footer() {
  return (
    <footer className="px-6 py-8 md:px-12" style={{ background: C.ink, borderTop: `1px solid ${C.lineDark}` }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <a href="#inicio" aria-label="Vireon, início" className="shrink-0 rounded-l px-3 py-2">
          <img src={logo} alt="Vireon, soluções de tecnologia e marketing" width="2172" height="724" className="h-auto w-48" />
        </a>
        <p className="font-body text-xs text-center sm:text-right" style={{ color: C.textDimDark }}>
          © {new Date().getFullYear()} Vireon soluções de tecnologia e marketing | MRXE 360
        </p>
      </div>
    </footer>
  )
}
