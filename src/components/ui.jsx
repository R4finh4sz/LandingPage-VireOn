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
      className={`motion-reduce:!transition-none motion-reduce:!transform-none motion-reduce:!opacity-100 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`font-body inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      style={{
        background: C.blue,
        color: '#fff',
        boxShadow: `0 8px 24px -8px ${C.blueGlow}`,
      }}
      {...props}
    >
      {children}
    </button>
  )
}
