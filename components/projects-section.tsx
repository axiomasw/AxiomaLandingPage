import React, { useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

interface ProjectsSectionProps {
  language: Language
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = translations[language].projects
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        language === "es"
          ? "Plataforma completa de comercio electrónico con gestión de inventario y pagos en línea"
          : "Complete e-commerce platform with inventory management and online payments",
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: "Healthcare Management System",
      description:
        language === "es"
          ? "Sistema integral para gestión de pacientes, citas y registros médicos electrónicos"
          : "Comprehensive system for patient management, appointments and electronic medical records",
      image: "/healthcare-management-interface.jpg",
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        language === "es"
          ? "Dashboard interactivo con análisis en tiempo real y visualización de datos financieros"
          : "Interactive dashboard with real-time analytics and financial data visualization",
      image: "/financial-analytics-dashboard.png",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-12 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-[#754AF2] font-semibold text-pretty">{t.subtitle}</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-[#754AF2]/10 hover:bg-[#754AF2]/20 transition-colors backdrop-blur-sm"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="h-6 w-6 text-[#754AF2]" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-[#754AF2]/10 hover:bg-[#754AF2]/20 transition-colors backdrop-blur-sm"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight className="h-6 w-6 text-[#754AF2]" />
          </button>

          {/* Project Card */}
          <div className="px-16">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-[#754AF2]/20 hover:border-[#754AF2]/40 max-w-4xl mx-auto">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#754AF2]/10 to-[#34D8D6]/10">
                <img
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-[#754AF2] transition-colors">
                  {projects[currentProject].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg max-w-2xl">
                  {projects[currentProject].description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-[#754AF2]/30 text-[#754AF2] hover:bg-[#754AF2] hover:text-white transition-all duration-300 gap-2 group/btn"
                >
                  {t.viewProject}
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
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
