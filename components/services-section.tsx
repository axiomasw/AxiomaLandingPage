import { Globe, ShoppingCart, Code, Lightbulb, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

interface ServicesSectionProps {
  language: Language
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language].services

  const services = [
    {
      icon: Globe,
      title: t.landingPage.title,
      price: t.landingPage.price,
      description: t.landingPage.description,
    },
    {
      icon: ShoppingCart,
      title: t.ecommerce.title,
      price: t.ecommerce.price,
      description: t.ecommerce.description,
    },
    {
      icon: Code,
      title: t.customSoftware.title,
      price: t.customSoftware.price,
      description: t.customSoftware.description,
    },
    {
      icon: Lightbulb,
      title: t.consulting.title,
      price: t.consulting.price,
      description: t.consulting.description,
    },
    {
      icon: Wrench,
      title: t.maintenance.title,
      price: t.maintenance.price,
      description: t.maintenance.description,
    },
  ]

  return (
    <section id="services" className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance px-2">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty px-4 sm:px-6 md:px-0">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow flex flex-col group hover:border-[#754AF2]/30 h-full">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#754AF2]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#754AF2]/20 transition-colors">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#754AF2]" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-[#754AF2] transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="mb-3 sm:mb-4">
                    <span className="mr-1 text-base sm:text-lg text-muted-foreground">
                      {language === "es" ? "Desde" : "From"}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-[#754AF2] break-words">
                      {service.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0 pb-4 sm:pb-6">
                  <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
