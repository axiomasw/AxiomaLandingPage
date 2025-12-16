import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Linkedin, User } from "lucide-react"
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
      image: "/LucianaPerfil.png",
      portfolio: t.person1.portfolio,
      github: t.person1.github,
      linkedin: t.person1.linkedin,
      hasLinks: true,
    },
    {
      name: t.person2.name,
      description: t.person2.description,
      image: "/ScacciantePerfil.png",
      portfolio: t.person2.portfolio || "",
      github: t.person2.github || "",
      linkedin: t.person2.linkedin || "",
      hasLinks: !!(t.person2.github || t.person2.linkedin || t.person2.portfolio),
    },
    {
      name: t.person3.name,
      description: t.person3.description,
      image: "/images/Foto jenn.jpeg",
      portfolio: t.person3.portfolio,
      github: t.person3.github,
      linkedin: t.person3.linkedin,
      hasLinks: true,
    },
  ]

  return (
    <section id="about" className="py-12 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-[#754AF2] font-semibold text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((person, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 overflow-hidden group hover:border-[#754AF2]/30">
              <div className="relative w-full h-80 bg-linear-to-br from-[#754AF2]/20 to-[#34D8D6]/20 flex items-center justify-center">
                {person.image && person.image !== "/placeholder-user.jpg" ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <>
                    <User className="h-16 w-16 text-[#754AF2]" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#34D8D6]/30 animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-[#754AF2]/30 animate-pulse delay-500" />
                  </>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-[#754AF2] transition-colors">{person.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty mb-4">{person.description}</p>
                
                {person.hasLinks && (
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {person.portfolio && (
                      <a
                        href={person.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#754AF2]/10 hover:bg-[#754AF2]/20 text-[#754AF2] hover:text-[#754AF2] transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Portfolio
                      </a>
                    )}
                    {person.github && (
                      <a
                        href={person.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#34D8D6]/10 hover:bg-[#34D8D6]/20 text-[#34D8D6] hover:text-[#34D8D6] transition-colors text-sm font-medium"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#754AF2]/10 hover:bg-[#754AF2]/20 text-[#754AF2] hover:text-[#754AF2] transition-colors text-sm font-medium"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

