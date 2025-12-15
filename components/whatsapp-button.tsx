"use client"

export function WhatsAppButton() {
  // Reemplaza este número con tu número de WhatsApp (formato: código de país + número sin espacios ni símbolos)
  const phoneNumber = "2617543866" // Ejemplo: Argentina +54 9 11 2345-6789
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-100 flex items-center justify-center w-16 h-16 bg-[#754AF2] hover:bg-[#6939E8] text-white rounded-full shadow-2xl hover:shadow-[#754AF2]/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
      style={{
        boxShadow: '0 4px 20px rgba(117, 74, 242, 0.4)',
      }}
    >
      {/* Icono de WhatsApp oficial */}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="white">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.637 1.934 6.627L4 29l7.627-1.934A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.982 0-3.918-.521-5.604-1.507l-.4-.233-4.527 1.148 1.148-4.527-.233-.4A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.263-7.263c-.289-.144-1.707-.844-1.972-.94-.265-.096-.458-.144-.651.144-.192.289-.744.94-.911 1.133-.168.192-.336.216-.625.072-.289-.144-1.223-.451-2.33-1.438-.861-.768-1.443-1.715-1.613-2.004-.168-.289-.018-.445.126-.589.13-.13.289-.336.433-.504.144-.168.192-.289.289-.481.096-.192.048-.361-.024-.505-.072-.144-.651-1.572-.892-2.154-.235-.565-.474-.488-.651-.497-.168-.008-.361-.01-.554-.01-.192 0-.505.072-.772.361-.265.289-1.012.989-1.012 2.409 0 1.42 1.033 2.797 1.177 2.992.144.192 2.033 3.109 4.926 4.232.689.297 1.226.474 1.646.606.691.221 1.32.19 1.818.115.554-.082 1.707-.697 1.949-1.37.241-.673.241-1.25.168-1.37-.072-.12-.265-.192-.554-.336z" />
      </svg>
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  )
}

