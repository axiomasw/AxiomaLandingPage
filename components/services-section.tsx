import React, { useState } from "react"
import { Monitor, ShoppingCart, Settings, Wrench, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section id="services" className="py-12 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-[#754AF2] font-semibold text-pretty">{t.subtitle}</p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 flex flex-col group hover:border-[#754AF2]/30">
                <CardHeader>
                  {/* Icon Container with new style */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-linear-to-br from-[#754AF2] to-[#8b5cf6] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#34D8D6] animate-pulse" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#754AF2]/60 animate-pulse delay-500" />
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-[#754AF2] transition-colors">{service.title}</CardTitle>
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground mr-1">
                      {language === "es" ? "Desde" : "From"}
                    </span>
                    <span className="text-lg font-semibold text-[#754AF2] wrap-break-words">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-[#34D8D6] mt-1 text-sm">✓</span>
                        <span className="text-muted-foreground leading-relaxed text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevService}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-[#754AF2]/10 hover:bg-[#754AF2]/20 transition-colors"
              aria-label="Servicio anterior"
            >
              <ChevronLeft className="h-5 w-5 text-[#754AF2]" />
            </button>
            
            <button
              onClick={nextService}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-[#754AF2]/10 hover:bg-[#754AF2]/20 transition-colors"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="h-5 w-5 text-[#754AF2]" />
            </button>

            {/* Service Card */}
            <div className="px-10">
              <Card className="border-border shadow-lg border-#754AF2/30">
                <CardHeader className="text-center">
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-linear-to-br from-[#754AF2] to-[#8b5cf6] flex items-center justify-center shadow-lg">
                      {React.createElement(services[currentService].icon, { className: "h-10 w-10 text-white" })}
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#34D8D6] animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#754AF2]/60 animate-pulse delay-500" />
                  </div>
                  <CardTitle className="text-xl mb-3 text-[#754AF2]">{services[currentService].title}</CardTitle>
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground mr-1">
                      {language === "es" ? "Desde" : "From"}
                    </span>
                    <span className="text-lg font-semibold text-[#754AF2]">{services[currentService].price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {services[currentService].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-[#34D8D6] mt-1">✓</span>
                        <span className="text-muted-foreground leading-relaxed text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentService
                      ? 'bg-[#754AF2] scale-125'
                      : 'bg-[#754AF2]/30 hover:bg-[#754AF2]/50'
                  }`}
                  aria-label={`Ir al servicio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
