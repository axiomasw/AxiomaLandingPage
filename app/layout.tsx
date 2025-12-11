import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://axiomasw.com"),
  title: {
    default: "AXIOMA - Desarrollo de Software Personalizado | Custom Software Development",
    template: "%s | AXIOMA",
  },
  description:
    "AXIOMA - La distancia más corta entre el problema y la solución. Empresa especializada en desarrollo de software personalizado, aplicaciones web y móviles escalables. Transformamos ideas en soluciones digitales innovadoras. Custom software development company.",
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
    "consulting tecnológico",
    "transformación digital",
    "innovación tecnológica",
    "software a medida",
    "desarrollo ágil",
    "soluciones empresariales",
    "arquitectura de software",
    "consulting tecnológico",
    "transformación digital",
    "innovación tecnológica",
    "software a medida",
    "desarrollo ágil",
    "soluciones empresariales",
    "arquitectura de software",
  ],
  authors: [{ name: "AXIOMA" }],
  creator: "AXIOMA",
  publisher: "AXIOMA",
  openGraph: {
    title: "AXIOMA - Desarrollo de Software Personalizado",
    description: "La distancia más corta entre el problema y la solución. Transformamos tus ideas en soluciones digitales innovadoras con tecnología de vanguardia",
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
    description: "La distancia más corta entre el problema y la solución. Transformamos tus ideas en soluciones digitales innovadoras",
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
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/images/axima ico.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/axima ico.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/images/axima ico.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/images/axima ico.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/images/axima ico.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/axima ico.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" type="image/png" sizes="512x512" href="/images/axima ico.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/axima ico.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/axima ico.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/axima ico.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/axima ico.png" />
        <link rel="shortcut icon" href="/images/axima ico.png" />
        <link rel="apple-touch-icon" href="/images/axima ico.png" />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MM3RXH22');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM3RXH22"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
