"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { translations, type Language } from "@/lib/translations"

interface ContactSectionProps {
  language: Language
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language].contact
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{t.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input name="name" placeholder={t.form.name} required className="bg-background border-border" />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder={t.form.email}
              required
              className="bg-background border-border"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder={t.form.message}
              required
              rows={6}
              className="bg-background border-border resize-none"
            />
          </div>
          <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
            {isSubmitting ? t.form.sending : t.form.send}
            <Send className="h-4 w-4" />
          </Button>
          {submitted && <p className="text-center text-sm text-green-500">{t.form.success}</p>}
        </form>
      </div>
    </section>
  )
}
