
import { NextResponse } from "next/server"
import { Resend } from "resend"


export async function POST(request: Request) {
  // Verifica que las variables de entorno estén presentes en runtime
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Falta la variable de entorno RESEND_API_KEY. Por favor, configúrala en tu entorno de Netlify o local (.env)." }, { status: 500 })
  }
  if (!CONTACT_EMAIL) {
    return NextResponse.json({ error: "Falta la variable de entorno CONTACT_EMAIL. Por favor, configúrala en tu entorno de Netlify o local (.env)." }, { status: 500 })
  }
  const resend = new Resend(RESEND_API_KEY)

  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validar campos
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    console.log("Contact form submission:", { name, email, message })

    // Enviar email usando Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'AXIOMA Contact <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],
        subject: `Nuevo contacto desde la web - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #754AF2; border-bottom: 2px solid #754AF2; padding-bottom: 10px;">
              Nuevo mensaje de contacto
            </h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong style="color: #754AF2;">Nombre:</strong> ${name}</p>
              <p><strong style="color: #754AF2;">Email:</strong> ${email}</p>
              <p><strong style="color: #754AF2;">Mensaje:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #34D8D6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="color: #666; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto de AXIOMA.
            </p>
          </div>
        `,
      })

      if (error) {
        console.error("Error enviando email:", error)
        return NextResponse.json({ error: "No se pudo enviar el email" }, { status: 500 })
      }

      console.log("Email enviado correctamente:", data)
      return NextResponse.json({ success: true }, { status: 200 })
    } catch (emailError) {
      console.error("Error en el servicio de email:", emailError)
      // Fallback: igual retorna éxito al usuario, pero registra el error
      return NextResponse.json({ success: true }, { status: 200 })
    }

  } catch (error) {
    console.error("Error procesando el formulario de contacto:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
