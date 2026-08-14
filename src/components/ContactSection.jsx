import React, { useEffect, useState } from 'react'
import { Calendar, CheckCircle2, MapPin, MessageCircle } from 'lucide-react'
import { C, WHATSAPP_DISPLAY, buildWhatsAppLink } from '../lib/branding'
import { Eyebrow, PrimaryButton, Reveal } from './ui'
import { contactSchema, formatPhone } from '../validation/contactForm'

function Field({ label, name, value, onChange, placeholder, type = 'text', error }) {
  return (
    <div>
      <label className="font-body mb-1.5 block text-xs font-medium" style={{ color: C.textDimLight }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="font-body w-full rounded-md px-3.5 py-2.5 text-sm outline-none transition-colors"
        style={{ border: `1px solid ${error ? '#ff8d8d' : C.lineLight}`, color: C.ink }}
        onFocus={(e) => (e.currentTarget.style.borderColor = C.blue)}
        onBlur={(e) => (e.currentTarget.style.borderColor = C.lineLight)}
      />
      {error && <p className="mt-1.5 font-body text-xs" style={{ color: '#ff8d8d' }}>{error}</p>}
    </div>
  )
}

export default function ContactSection() {
  const [form, setForm] = useState({ nome: '', empresa: '', whatsapp: '', segmento: '' })
  const [errors, setErrors] = useState({})
  const [justSent, setJustSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((f) => ({
      ...f,
      [name]: name === 'whatsapp' ? formatPhone(value) : value,
    }))

    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const result = contactSchema.safeParse(form)

    if (!result.success) {
      const nextErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0]
        if (typeof field === 'string' && !nextErrors[field]) {
          nextErrors[field] = issue.message
        }
      }

      setErrors(nextErrors)
      return
    }

    window.open(buildWhatsAppLink({ ...result.data, whatsapp: form.whatsapp }), '_blank', 'noopener,noreferrer')
    setJustSent(true)
    setErrors({})
  }

  useEffect(() => {
    if (!justSent) return
    const t = setTimeout(() => setJustSent(false), 5000)
    return () => clearTimeout(t)
  }, [justSent])

  return (
    <section id="contato" className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ background: C.ink }}>
      <div className="orb pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full blur-3xl opacity-25" style={{ background: C.blue }} />
      <div className="orb pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full blur-3xl opacity-15" style={{ background: C.blueBright, animationDelay: '-4s' }} />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <Eyebrow dark>Vamos conversar</Eyebrow>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Pronto para virar sua <span style={{ color: C.blueBright }}>empresa digital</span>?
          </h2>
          <p className="font-body mb-4 text-base leading-relaxed" style={{ color: C.textDimDark }}>
            Vamos identificar onde sua empresa está deixando de lucrar e como impulsionar seu negócio?
          </p>
          <p className="font-body mb-10 text-sm leading-relaxed" style={{ color: C.textDimDark }}>
            Preencha os dados e sua mensagem vai direto para o nosso WhatsApp, sem e-mail e sem espera.
          </p>

          <div className="mb-10 space-y-3">
            {['Diagnóstico inicial gratuito','Plano personalizado para sua empresa','Suporte contínuo pós-entrega','Resultados mensuráveis desde o início'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={16} style={{ color: C.blueBright }} />
                <span className="font-body text-sm text-white">{item}</span>
              </div>
            ))}
          </div>

         
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl p-7 sm:p-9" style={{ background: C.paper2, border: `1px solid ${C.lineDark}`, boxShadow: `0 30px 60px -30px ${C.blueGlow}` }}>
            <div className="mb-6 flex items-center gap-2">
              <Calendar size={16} style={{ color: C.blue }} />
              <h3 className="font-display text-sm font-semibold" style={{ color: C.ink }}>Diagnóstico Gratuito</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" error={errors.nome} />
                <Field label="Empresa" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da empresa" error={errors.empresa} />
              </div>
              <Field label="WhatsApp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(11) 97214-5975" type="tel" error={errors.whatsapp} />
              <div>
                <label className="font-body mb-1.5 block text-xs font-medium" style={{ color: C.textDimLight }}>Segmento / Maior desafio</label>
                <textarea
                  name="segmento"
                  value={form.segmento}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ex: Restaurante. Meu maior desafio é o controle de pedidos..."
                  className="font-body w-full resize-none rounded-md px-3.5 py-2.5 text-sm outline-none transition-colors"
                  style={{ border: `1px solid ${errors.segmento ? '#ff8d8d' : C.lineLight}`, color: C.ink }}
                />
                {errors.segmento && <p className="mt-1.5 font-body text-xs" style={{ color: '#ff8d8d' }}>{errors.segmento}</p>}
              </div>
              <PrimaryButton type="submit" className="w-full">
                <MessageCircle size={16} />
                Enviar direto no WhatsApp
              </PrimaryButton>

              {justSent && (
                <div className="reveal flex items-center gap-2 rounded-md px-3.5 py-2.5 text-xs font-body" style={{ background: C.blueSoft, color: C.blue }}>
                  <CheckCircle2 size={14} />
                  Abrimos o WhatsApp em uma nova aba. É só enviar a mensagem por lá.
                </div>
              )}

              <p className="text-center font-body text-[11px]" style={{ color: C.textDimLight }}>
                Sua mensagem vai direto para o nosso time no WhatsApp.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
