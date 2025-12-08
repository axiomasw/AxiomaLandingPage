"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

interface SidebarProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Sidebar({ language, onLanguageChange }: SidebarProps) {
  const t = translations[language]
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"]
      const scrollPosition = window.scrollY + 200 

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() 
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setIsOpen(false) // Cerrar menu en móvil al navegar
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Botón hamburguesa para móvil */}
      <button
        className="md:hidden fixed top-4 left-4 z-60 p-2 rounded-lg transition-all duration-200"
        style={{ backgroundColor: '#16191E', color: '#a78bfa' }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-screen w-64 flex flex-col z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } bg-background`}
      >
      <div className="p-6 border-b border-gray-800">
        <Image
          src="/images/Axioma sin fondo.png"
          alt="AXIOMA Logo"
          width={160}
          height={50}
          className="w-40"
          priority
        />
        <p className="text-sm mt-3 leading-relaxed" style={{ color: '#a78bfa' }}>{t.hero.tagline}</p>
      </div>

      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {[
            { id: "home", label: t.nav.home },
            { id: "about", label: t.nav.about },
            { id: "services", label: t.nav.services },
            { id: "projects", label: t.nav.projects },
            { id: "contact", label: t.nav.contact },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground/80 hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-800 space-y-3">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start gap-2 bg-transparent hover:text-white transition-all duration-200"
          style={{
            borderColor: '#475569',
            color: '#94a3b8',
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'rgba(167, 139, 250, 0.05)';
            target.style.borderColor = '#a78bfa';
            target.style.color = '#cbd5e1';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'transparent';
            target.style.borderColor = '#475569';
            target.style.color = '#94a3b8';
          }}
          onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
        >
          <Globe className="h-4 w-4" />
          {language === "es" ? "English" : "Español"}
        </Button>
        <div className="flex gap-3 justify-center mt-2">
          {/* Mail icon */}
          <a href="mailto:axiomasw@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="transition-colors duration-200" style={{ color: '#64748b' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a78bfa'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#64748b'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01l8 5.99 8-5.99V6H4zm16 2.236-7.447 5.577a2 2 0 0 1-2.106 0L4 8.236V18h16V8.236z"/></svg>
          </a>
          {/* GitHub icon */}
          <a href="https://github.com/axiomasw" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors duration-200" style={{ color: '#64748b' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#a78bfa'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#64748b'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.525.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
        </div>
      </div>
      </aside>
    </>
  )
}
