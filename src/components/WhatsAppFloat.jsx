import React from 'react'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink, C } from '../lib/branding'

export default function WhatsAppFloat() {
  return (
    <a href={buildWhatsAppLink({})} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="pulse-ring fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110" style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.blueBright})`, boxShadow: `0 12px 30px -8px ${C.blueGlow}` }}>
      <MessageCircle size={24} color="#fff" />
    </a>
  )
}
