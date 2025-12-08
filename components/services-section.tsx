import { Monitor, ShoppingCart, Settings } from "lucide-react"
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
      price: t.webDev.price,
      features: t.webDev.features,
    },
    {
      icon: Smartphone,
      title: t.mobileDev.title,
      price: t.mobileDev.price,
      features: t.mobileDev.features,
    },
    {
      icon: Lightbulb,
      title: t.consulting.title,
      price: t.consulting.price,
      features: t.consulting.features,
    },
    {
      icon: Wrench,
      title: t.maintenance.title,
      price: t.maintenance.price,
      features: t.maintenance.features,
    },
  ]

  return (
    <section id="services" className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isCenter = index === 1
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <div className="mb-2">
                    <span className="text-lg text-muted-foreground mr-1">
                      {language === "es" ? "Desde" : "From"}
                    </span>
                    <span className="text-lg font-semibold text-primary break-words">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
