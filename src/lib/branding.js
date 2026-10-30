export const WHATSAPP_NUMBER = '5511974475770'
export const WHATSAPP_DISPLAY = '(11) 97447-5770'

export const C = {
  ink: '#070B14',
  ink2: '#0E1424',
  ink3: '#161F38',
  paper: '#F5F6F3',
  paper2: '#FFFFFF',
  blue: '#3159FF',
  blueBright: '#5B7CFF',
  blueSoft: 'rgba(49,89,255,0.10)',
  blueGlow: 'rgba(49,89,255,0.35)',
  money: '#3FD69C',
  textDimDark: '#8E96B0',
  textDimLight: '#6B7280',
  lineDark: 'rgba(120,145,255,0.14)',
  lineLight: '#E4E5E0',
}

export function buildWhatsAppLink({ nome, empresa, whatsapp, segmento }) {
  const linhas = [
    'Olá! Vim pelo site da Vireon soluções de tecnologia e marketing e quero agendar um Diagnóstico Estratégico.',
    '',
    `Nome: ${nome || '-'}`,
    `Empresa: ${empresa || '-'}`,
    `WhatsApp: ${whatsapp || '-'}`,
    `Segmento / Maior desafio: ${segmento || '-'}`,
  ]

  const text = encodeURIComponent(linhas.join('\n'))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
