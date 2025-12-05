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
      icon: Monitor,
      title: t.landingPages.title,
      description: t.landingPages.description,
    },
    {
      icon: ShoppingCart,
      title: t.ecommerce.title,
      description: t.ecommerce.description,
    },
    {
      icon: Settings,
      title: t.customSoftware.title,
      description: t.customSoftware.description,
    },
  ]

  return (
    <section id="services" className="py-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isCenter = index === 1
            return (
              <div 
                key={index} 
                className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isCenter ? 'md:-translate-y-4' : ''
                }`}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#754AF2]/20 via-transparent to-[#34D8D6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Card */}
                <div className="relative bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#754AF2]/50 group-hover:shadow-2xl group-hover:shadow-[#754AF2]/10">
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#754AF2] to-[#34D8D6] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[#34D8D6]/60 animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-[#754AF2]/60 animate-pulse delay-500" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[#754AF2] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#754AF2] to-[#34D8D6] rounded-full group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
