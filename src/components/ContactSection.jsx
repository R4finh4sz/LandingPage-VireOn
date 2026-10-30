import React, { useEffect, useState } from 'react'
import { Calendar, CheckCircle2, MessageCircle } from 'lucide-react'
import { C, buildWhatsAppLink } from '../lib/branding'
import { PrimaryButton, Reveal } from './ui'
import { contactSchema, formatPhone } from '../validation/contactForm'

function Field({ label, name, value, onChange, placeholder, type = 'text', error }) {
  return (
    <div>
      <label htmlFor={name} className="font-body mb-1.5 block text-base font-medium" style={{ color: C.textDimLight }}>{label}</label>
      <input
        id={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="font-body w-full rounded-md px-3.5 py-2.5 text-base outline-none transition-colors"
        style={{ border: `1px solid ${error ? '#B42318' : C.lineLight}`, color: C.ink }}
        onFocus={(e) => (e.currentTarget.style.borderColor = C.blue)}
        onBlur={(e) => (e.currentTarget.style.borderColor = C.lineLight)}
      />
      {error && <p id={`${name}-error`} role="alert" className="mt-1.5 font-body text-sm" style={{ color: '#B42318' }}>{error}</p>}
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

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Vamos conversar sobre <span style={{ color: C.blueBright }}>sua empresa?</span>
          </h2>
          <p className="font-body mb-4 text-base leading-relaxed" style={{ color: C.textDimDark }}>
            Conte como sua empresa funciona e o que você gostaria de melhorar. Esse é o primeiro passo do diagnóstico.
          </p>
          <p className="font-body mb-10 text-base leading-relaxed" style={{ color: C.textDimDark }}>
            Preencha os dados para preparar a mensagem. O WhatsApp abrirá em outra aba para você revisar e enviar.
          </p>

          <div className="space-y-3">
            {['Diagnóstico inicial gratuito','Plano personalizado para sua empresa','Suporte contínuo pós-entrega','Resultados mensuráveis desde o início'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={16} style={{ color: C.blueBright }} />
                <span className="font-body text-base text-white">{item}</span>
              </div>
            ))}
          </div>

         
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl p-7 sm:p-9" style={{ background: C.paper2, border: `1px solid ${C.lineDark}`, boxShadow: `0 30px 60px -30px ${C.blueGlow}` }}>
            <div className="mb-6 flex items-center gap-2">
              <Calendar size={16} style={{ color: C.blue }} />
              <h3 className="font-display text-xl font-semibold" style={{ color: C.ink }}>Diagnóstico gratuito</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" error={errors.nome} />
                <Field label="Empresa" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da empresa" error={errors.empresa} />
              </div>
              <Field label="WhatsApp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(11) 97214-5975" type="tel" error={errors.whatsapp} />
              <div>
                <label htmlFor="segmento" className="font-body mb-1.5 block text-base font-medium" style={{ color: C.textDimLight }}>Qual é o seu negócio e o principal desafio?</label>
                <textarea
                  id="segmento"
                  aria-invalid={Boolean(errors.segmento)}
                  aria-describedby={errors.segmento ? "segmento-error" : undefined}
                  name="segmento"
                  value={form.segmento}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ex: Restaurante. Meu maior desafio é o controle de pedidos..."
                  className="font-body w-full resize-none rounded-md px-3.5 py-2.5 text-base outline-none transition-colors"
                  style={{ border: `1px solid ${errors.segmento ? '#B42318' : C.lineLight}`, color: C.ink }}
                />
                {errors.segmento && <p id="segmento-error" role="alert" className="mt-1.5 font-body text-sm" style={{ color: '#B42318' }}>{errors.segmento}</p>}
              </div>
              <PrimaryButton type="submit" className="w-full">
                <MessageCircle size={16} />
                Continuar no WhatsApp
              </PrimaryButton>

              {justSent && (
                <div role="status" className="reveal flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-body" style={{ background: C.blueSoft, color: C.blue }}>
                  <CheckCircle2 size={14} />
                  Abrimos o WhatsApp em uma nova aba. É só enviar a mensagem por lá.
                </div>
              )}

              <p className="text-center font-body text-sm" style={{ color: C.textDimLight }}>
                Sua mensagem vai direto para o nosso time no WhatsApp.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
