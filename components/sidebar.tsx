"use client"

import { useState } from "react"
import Image from "next/image"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

interface SidebarProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Sidebar({ language, onLanguageChange }: SidebarProps) {
  const t = translations[language]
  const [activeSection, setActiveSection] = useState("home")

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-50">
      <div className="p-6 border-b border-sidebar-border">
        <Image
          src="/images/dynamic-axioma-logo-with-stylized-arrow.png"
          alt="AXIOMA Logo"
          width={160}
          height={50}
          className="w-40"
          priority
        />
        <p className="text-sm text-sidebar-foreground/70 mt-3 leading-relaxed">{t.hero.tagline}</p>
      </div>

      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {[
            { id: "home", label: t.nav.home },
            { id: "services", label: t.nav.services },
            { id: "projects", label: t.nav.projects },
            { id: "contact", label: t.nav.contact },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-sidebar-border">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start gap-2 bg-transparent"
          onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
        >
          <Globe className="h-4 w-4" />
          {language === "es" ? "English" : "Español"}
        </Button>
      </div>
    </aside>
  )
}
