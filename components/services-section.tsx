import { Code, Smartphone, Lightbulb, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

interface ServicesSectionProps {
  language: Language
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language].services

  const services = [
    {
      icon: Code,
      title: t.webDev.title,
      description: t.webDev.description,
    },
    {
      icon: Smartphone,
      title: t.mobileDev.title,
      description: t.mobileDev.description,
    },
    {
      icon: Lightbulb,
      title: t.consulting.title,
      description: t.consulting.description,
    },
    {
      icon: Wrench,
      title: t.maintenance.title,
      description: t.maintenance.description,
    },
  ]

  return (
    <section id="services" className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
