import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { translations, type Language } from "@/lib/translations"

interface AboutSectionProps {
  language: Language
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language].about

  const people = [
    {
      name: t.person1.name,
      description: t.person1.description,
      image: "/placeholder-user.jpg", // Reemplazar foto real
    },
    {
      name: t.person2.name,
      description: t.person2.description,
      image: "/placeholder-user.jpg", // Reemplazar foto real
    },
  ]

  return (
    <section id="about" className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {people.map((person, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full h-64 bg-muted">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{person.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{person.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

