"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install resend
npx nabiel-ui add contact-form`

const clientSnippet = `// example: send contact form or order confirmation

const handleSendEmail = async () => {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: "customer@example.com",
      subject: "Thanks for your order",
      html: "<p>Your payment was successful. 🎉</p>"
    })
  })

  if (res.ok) {
    console.log("✅ Email sent")
  } else {
    console.error("❌ Email failed")
  }
}`

const serverSnippet = `// /app/api/send-email/route.ts (App Router)

import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { to, subject, html } = await req.json()

  try {
    const data = await resend.emails.send({
      from: process.env.BUSINESS_MAIL || "noreply@yourdomain.com",
      to,
      subject,
      html
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}`

export function resendDoc() {
  return (
    <DocPageLayout
      title="Email Notifications with Resend"
      description={
        <>
          Learn how to use <code>Resend</code> to send transactional emails like order confirmations or contact replies
          in your Nabiel UI app.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This would trigger an email via /api/send-email")}>
            Simulate Sending Email
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            This simulates sending a transactional email using Resend from your backend route.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">📤 Backend: Send Email Route</h3>
          <p className="text-sm text-muted-foreground mb-2">
            This API route calls Resend and sends an email using data from your form or checkout.
          </p>
          <CodeBlockWithCopy code={serverSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🧩 Use with Nabiel UI Components</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Use in <code>ContactForm</code> to send messages to your inbox</li>
            <li>Use in <code>CheckoutPage</code> to confirm orders to customers</li>
            <li>Use with Supabase to look up user email from session</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">⚙️ Environment Variables</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li><code>RESEND_API_KEY</code> – from https://resend.com/api-keys</li>
            <li><code>BUSINESS_MAIL</code> – e.g. <code>orders@yourdomain.com</code></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">✅ Tips</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Use <code>html</code> for branding — logos, colors, etc.</li>
            <li>Test with your personal email and Gmail spam filters</li>
            <li>Resend supports custom domains via DNS verification</li>
          </ul>
        </>
      }
    />
  )
}
