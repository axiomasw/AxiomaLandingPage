"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  // Reemplaza este número con tu número de WhatsApp (formato: código de país + número sin espacios ni símbolos)
  const phoneNumber = "2635034144" // Ejemplo: Argentina +54 9 11 2345-6789
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-16 h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
      style={{ 
        boxShadow: '0 4px 20px rgba(117, 74, 242, 0.4)',
      }}
    >
      <MessageCircle className="w-8 h-8" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  )
}

