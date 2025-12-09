"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Language } from "@/lib/translations"

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("es")

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="bg-background">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ServicesSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </main>
      <WhatsAppButton />
    </div>
  )
}
