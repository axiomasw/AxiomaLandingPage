import React, { useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"
import Link from "next/link"

interface ProjectsSectionProps {
  language: Language
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = translations[language].projects
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: t.ecommerceDaniela.title,
      description: t.ecommerceDaniela.description,
      image: "/images/EcommerceDaniela.png",
      url: "https://tienda.danielakrown.com/",
      demoVideo: undefined,
    },
    {
      title: t.landingDaniela.title,
      description: t.landingDaniela.description,
      image: "/images/LandingDaniela.png",
      url: "https://danielakrown.com/",
      demoVideo: undefined,
    },
    {
      title: t.aluled.title,
      description: t.aluled.description,
      image: "/images/Aluled.png",
      url: "https://www.aluled.com.ar/",
      demoVideo: undefined,
    },
    {
      title: t.sistemaGestion.title,
      description: t.sistemaGestion.description,
      image: "/images/DKGestion.jpeg",
      url: "#",
      demoVideo: "/videos/Video gestion.mp4",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-lg sm:text-xl text-[#754AF2] font-semibold text-pretty">{t.subtitle}</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-[#754AF2]/10 hover:bg-[#754AF2]/20 transition-colors backdrop-blur-sm"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#754AF2]" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-[#754AF2]/10 hover:bg-[#754AF2]/20 transition-colors backdrop-blur-sm"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#754AF2]" />
          </button>

          {/* Project Card */}
          <div className="px-8 sm:px-12 md:px-16 lg:px-20">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-[#754AF2]/20 hover:border-[#754AF2]/40 max-w-6xl mx-auto">
              <div 
                className={`aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-[#754AF2]/10 to-[#34D8D6]/10 ${projects[currentProject].url !== "#" ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (projects[currentProject].url !== "#") {
                    window.open(projects[currentProject].url, '_blank', 'noopener,noreferrer')
                  }
                }}
                role={projects[currentProject].url !== "#" ? "button" : undefined}
                tabIndex={projects[currentProject].url !== "#" ? 0 : undefined}
                onKeyDown={(e) => {
                  if (projects[currentProject].url !== "#" && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault()
                    window.open(projects[currentProject].url, '_blank', 'noopener,noreferrer')
                  }
                }}
                aria-label={projects[currentProject].url !== "#" ? `Visitar ${projects[currentProject].title}` : undefined}
              >
                {projects[currentProject].image && (
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {/* Overlay gradient - solo si hay URL válida */}
                {projects[currentProject].url !== "#" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Click indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#754AF2]/90 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                        <span className="font-semibold">{t.viewProject}</span>
                        <ExternalLink className="h-5 w-5" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-[#754AF2] transition-colors">
                  {projects[currentProject].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-base sm:text-lg max-w-2xl">
                  {projects[currentProject].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {projects[currentProject].url !== "#" && (
                    <Button 
                      variant="outline" 
                      className="border-[#754AF2]/30 text-[#754AF2] hover:bg-[#754AF2] hover:text-white transition-all duration-300 gap-2 group/btn"
                      onClick={() => window.open(projects[currentProject].url, '_blank', 'noopener,noreferrer')}
                    >
                      {t.viewProject}
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                  {projects[currentProject].demoVideo && (
                    <Link href={`/demo?video=${encodeURIComponent(projects[currentProject].demoVideo!)}`}>
                      <Button 
                        variant="outline" 
                        className="w-full sm:w-auto border-[#34D8D6]/30 text-[#34D8D6] hover:bg-[#34D8D6] hover:text-white transition-all duration-300 gap-2 group/btn"
                      >
                        {t.viewDemo}
                        <Play className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-[#754AF2] scale-125'
                    : 'bg-[#754AF2]/30 hover:bg-[#754AF2]/50'
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
