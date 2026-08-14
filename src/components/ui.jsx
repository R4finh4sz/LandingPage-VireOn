import React, { useEffect, useRef, useState } from 'react'
import { C } from '../lib/branding'

export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { threshold },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, dark }) {
  return (
    <div
      className="font-mono mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em]"
      style={{ color: dark ? C.blueBright : C.blue }}
    >
      <span className="inline-block h-px w-6" style={{ background: dark ? C.blueBright : C.blue }} />
      {children}
    </div>
  )
}

export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`font-body inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${C.blue}, ${C.blueBright})`,
        color: '#fff',
        boxShadow: `0 8px 24px -8px ${C.blueGlow}`,
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export function GhostButton({ children, dark, className = '', ...props }) {
  return (
    <button
      className={`font-body inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      style={{
        borderColor: dark ? C.lineDark : C.lineLight,
        color: dark ? '#fff' : C.ink,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.blueBright)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = dark ? C.lineDark : C.lineLight)}
      {...props}
    >
      {children}
    </button>
  )
}
