import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://axiomasw.com"),
  title: {
    default: "AXIOMA - Desarrollo de Software Personalizado | Custom Software Development",
    template: "%s | AXIOMA",
  },
  description:
    "Empresa especializada en desarrollo de software personalizado, aplicaciones web y móviles. Transformamos ideas en soluciones digitales innovadoras. Custom software development company specializing in web and mobile applications.",
  keywords: [
    "desarrollo de software",
    "software personalizado",
    "desarrollo web",
    "aplicaciones móviles",
    "custom software development",
    "web development",
    "mobile apps",
    "desarrollo páginas web",
    "programación a medida",
    "soluciones digitales",
    "empresa desarrollo software",
    "desarrolladores web",
    "crear aplicaciones",
    "desarrollo aplicaciones personalizadas",
    "software development company",
    "web design",
    "app development",
    "AXIOMA",
    "React",
    "Next.js",
    "TypeScript",
    "desarrollo frontend",
    "desarrollo backend",
    "full stack development",
  ],
  authors: [{ name: "AXIOMA" }],
  creator: "AXIOMA",
  publisher: "AXIOMA",
  openGraph: {
    title: "AXIOMA - Desarrollo de Software Personalizado",
    description: "Transformamos tus ideas en soluciones digitales innovadoras con tecnología de vanguardia",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    siteName: "AXIOMA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIOMA - Desarrollo de Software Personalizado",
    description: "Transformamos tus ideas en soluciones digitales innovadoras",
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
    },
  },
  category: "technology",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/axima ico.png",
      },
      
    ],
    apple: "/images/axima ico.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
