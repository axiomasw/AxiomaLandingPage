"use client"


import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Language } from "@/lib/translations"
import Link from "next/link"


export default function DemoPage() {
  return (
    <Suspense>
      <DemoPageContent />
    </Suspense>
  )
}

function DemoPageContent() {
  const [language, setLanguage] = useState<Language>("es")
  const searchParams = useSearchParams()
  const videoSrc = searchParams.get("video") || "/videos/demo.mp4"

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="bg-background pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
          {/* Header con botón de volver */}
          <div className="mb-8 sm:mb-12">
            <Link href="/#projects">
              <Button
                variant="ghost"
                className="mb-6 text-muted-foreground hover:text-foreground gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                {language === "es" ? "Volver a proyectos" : "Back to projects"}
              </Button>
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {language === "es" ? "Video Demo" : "Demo Video"}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
              {language === "es"
                ? "Mira nuestro video demo para conocer más sobre nuestros proyectos"
                : "Watch our demo video to learn more about our projects"}
            </p>
          </div>

          {/* Video Container */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-[#754AF2]/10 to-[#34D8D6]/10 rounded-lg overflow-hidden shadow-xl border border-[#754AF2]/20">
            <video
              className="w-full h-full object-contain"
              controls
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              {language === "es"
                ? "Tu navegador no soporta la reproducción de video."
                : "Your browser does not support video playback."}
            </video>
          </div>

          {/* Información adicional */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              {language === "es"
                ? "Si el video no se reproduce, asegúrate de tener una conexión a internet estable."
                : "If the video doesn't play, make sure you have a stable internet connection."}
            </p>
          </div>
        </div>
      </main>
      <Footer language={language} />
      <WhatsAppButton />
    </div>
  )
}

