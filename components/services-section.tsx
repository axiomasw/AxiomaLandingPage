import { useState } from "react"
import { Monitor, ShoppingCart, Settings, Code, Smartphone, Lightbulb, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

interface ServicesSectionProps {
  language: Language
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language].services
  const [currentService, setCurrentService] = useState(0)

  const services = [
    {
      icon: Monitor,
      title: t.webDev.title,
      price: t.webDev.price,
      features: t.webDev.features,
    },
    {
      icon: ShoppingCart,
      title: t.mobileDev.title,
      price: t.mobileDev.price,
      features: t.mobileDev.features,
    },
    {
      icon: Settings,
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

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section id="services" className="px-8 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-foreground text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow flex flex-col group hover:border-[#754AF2]/30">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-[#754AF2]/10 flex items-center justify-center mb-4 group-hover:bg-[#754AF2]/20 transition-colors">
                    <Icon className="h-6 w-6 text-[#754AF2]" />
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-[#754AF2] transition-colors">{service.title}</CardTitle>
                  <div className="mb-2">
                    <span className="mr-1 text-lg text-muted-foreground">
                      {language === "es" ? "Desde" : "From"}
                    </span>
                    <span className="text-lg font-semibold text-[#754AF2] wrap-break-words">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-[#34D8D6] mt-1">✓</span>
                        <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
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
