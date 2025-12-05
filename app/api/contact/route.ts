import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // In a production environment, you would send an email here
    // For now, we'll just log the data and return success
    console.log("Contact form submission:", { name, email, message })

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'AXIOMA <onboarding@resend.dev>',
    //   to: ['your-email@axioma.com'],
    //   subject: `New contact from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    // });

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
