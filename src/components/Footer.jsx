import React from 'react'
import { C } from '../lib/branding'

export default function Footer() {
  return (
    <footer className="px-6 py-8" style={{ background: C.ink, borderTop: `1px solid ${C.lineDark}` }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="font-display text-sm font-semibold text-white">
          Vire<span style={{ color: C.blueBright }}>On</span>
        </div>
        <p className="font-mono text-[11px]" style={{ color: C.textDimDark }}>
          © {new Date().getFullYear()} VireOn Soluções Digitais — MRXE 360
        </p>
      </div>
    </footer>
  )
}
