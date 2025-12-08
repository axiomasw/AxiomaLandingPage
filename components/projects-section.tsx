import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { translations, type Language } from "@/lib/translations"

interface ProjectsSectionProps {
  language: Language
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = translations[language].projects

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

  return (
    <section id="projects" className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{project.description}</p>
                <Button variant="link" className="p-0 h-auto gap-2 group/btn">
                  {t.viewProject}
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
