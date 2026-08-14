import { z } from 'zod'

export const contactSchema = z.object({
  nome: z.string().trim().min(3, 'Informe seu nome'),
  empresa: z.string().trim().min(3, 'Informe sua empresa'),
  whatsapp: z
    .string()
    .transform((value) => value.replace(/\D/g, ''))
    .refine((value) => value.length === 11, 'Digite um WhatsApp válido com DDD'),
  segmento: z.string().trim().min(10, 'Descreva melhor seu desafio'),
})

export function onlyDigits(value) {
  return value.replace(/\D/g, '')
}

export function formatPhone(value) {
  const digits = onlyDigits(value).slice(0, 11)

  if (!digits) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}
