"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const t = translations[language]
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      // Cambiar estilo del header al hacer scroll
      setIsScrolled(window.scrollY > 20)

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
    setIsOpen(false)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ]

  return (
    <>
      {/* Overlay para celular cuando el menú está abierto */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-border"
            : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick("home")}
                className="flex items-center focus:outline-none"
              >
                <Image
                  src="/images/Axioma sin fondo.png"
                  alt="AXIOMA Logo"
                  width={140}
                  height={45}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-[#754AF2]"
                      : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Selector */}
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 gap-2"
                onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{language === "es" ? "EN" : "ES"}</span>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-foreground/10 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Con animación */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border bg-background">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-[#754AF2] font-medium"
                      : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center gap-2"
                  onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
                >
                  <Globe className="h-4 w-4" />
                  {language === "es" ? "English" : "Español"}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Spacer para el header fijo */}
      <div className="h-16 md:h-20" />
    </>
  )
}

