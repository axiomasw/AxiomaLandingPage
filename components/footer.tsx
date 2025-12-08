import Image from "next/image"
import { translations, type Language } from "@/lib/translations"

interface FooterProps {
  language: Language
}

export function Footer({ language }: FooterProps) {
  const t = translations[language].footer

  return (
    <footer className="border-t border-border py-12 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/Axioma sin fondo.png"
              alt="AXIOMA Logo"
              width={120}
              height={40}
              className="w-32"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">{t.tagline}</p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AXIOMA. {t.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
