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
    <section id="home" className="min-h-screen flex items-center justify-center px-8 py-24 relative overflow-hidden">
      {mounted && (
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-16 p-8">
          {Array.from({ length: 144 }).map((_, i) => {
            const delay = (i * 0.1) % 8
            const duration = 6 + (i % 4) * 2
            return (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                style={{
                  animation: `gridPulse ${duration}s ease-in-out infinite, fadeInOut ${duration * 1.5}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                  opacity: 0.15,
                }}
              />
            )
          })}
        </div>
      )}

      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">{t.title}</h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto text-pretty">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="gap-2 group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.cta}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
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
