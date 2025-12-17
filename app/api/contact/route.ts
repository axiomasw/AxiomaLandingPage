import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    console.log("Contact form submission:", { name, email, message })

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'AXIOMA Contact <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL || 'axiomasw@gmail.com'],
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
        console.error("Error sending email:", error)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }

      console.log("Email sent successfully:", data)
      return NextResponse.json({ success: true }, { status: 200 })
    } catch (emailError) {
      console.error("Email service error:", emailError)
      // Fallback: still return success to user, but log the error
      return NextResponse.json({ success: true }, { status: 200 })
    }

  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
