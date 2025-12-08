"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

interface HeroSectionProps {
  language: Language
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language].hero
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 py-12 relative overflow-hidden bg-background">
      {mounted && (
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-16 p-8">
          {Array.from({ length: 144 }).map((_, i) => {
            const delay = (i * 0.1) % 8
            const duration = 6 + (i % 4) * 2
            const isViolet = i % 3 === 0
            const isBlue = i % 3 === 1
            return (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: isViolet ? '#754AF2' : isBlue ? '#34D8D6' : '#ffffff',
                  animation: `gridPulse ${duration}s ease-in-out infinite, fadeInOut ${duration * 1.5}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                  opacity: isViolet ? 0.2 : isBlue ? 0.15 : 0.05,
                }}
              />
            )
          })}
        </div>
      )}

      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight text-balance">{t.title}</h1>
        <p className="text-lg md:text-xl text-[#754AF2] font-semibold mb-8 italic">
          {translations[language].slogan}
        </p>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-pretty">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="gap-2 group bg-[#754AF2] hover:bg-[#6939E8] text-white border-0"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.cta}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            className="border-[#34D8D6] text-[#34D8D6] hover:bg-[#34D8D6] hover:text-black"
            variant="outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
