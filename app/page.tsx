"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Language } from "@/lib/translations"

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("es")

  return (
    <div className="min-h-screen">
      <Sidebar language={language} onLanguageChange={setLanguage} />
      <main className="ml-64">
        <HeroSection language={language} />
        <ServicesSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </main>
    </div>
  )
}
