"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"

const installSnippet = `npm install @mailchimp/mailchimp_marketing
npx nabiel-ui add newsletter-signup`

const apiSnippet = `// app/api/newsletter/route.ts

import mailchimp from "@mailchimp/mailchimp_marketing"
import { NextRequest, NextResponse } from "next/server"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX // e.g. "us21"
})

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: "subscribed"
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 })
  }
}`

const usageSnippet = `// Anywhere in your app (e.g. app/page.tsx or Footer)

import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <section className="max-w-md mx-auto py-8">
      <h2 className="text-xl font-semibold mb-4">Join our newsletter</h2>
      <NewsletterSignup />
    </section>
  )
}`
 
export function mailchimpDoc() {
  return (
    <DocPageLayout
      title="Mailchimp Newsletter Integration"
      description={
        <>
          Use the prebuilt <code>{"<NewsletterSignup />"}</code> component to collect subscriber emails
          and send them directly to your Mailchimp audience using a simple API route.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={usageSnippet}
      preview={
  <div className="max-w-md w-full mx-auto space-y-2">
    <NewsletterSignup />
    <p className="text-sm text-muted-foreground text-center">
    Preview of your Mailchimp-connected newsletter form.
    </p>
  </div>
}

      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🧩 Backend: Create the API Route</h3>
          <CodeBlockWithCopy code={apiSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🔐 Required Environment Variables</h3>
          <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
            <li><code>MAILCHIMP_API_KEY</code> — your API key from Mailchimp</li>
            <li><code>MAILCHIMP_SERVER_PREFIX</code> — e.g. <code>us21</code></li>
            <li><code>MAILCHIMP_AUDIENCE_ID</code> — the List ID from your audience settings</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">💡 Best Practices</h3>
          <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
            <li>Use reCAPTCHA or a hidden honeypot field to prevent spam</li>
            <li>Trigger a welcome email via Mailchimp’s automation (recommended)</li>
            <li>Optional: Store subscribers in Supabase for marketing analytics</li>
          </ul>
        </>
      }
    />
  )
}
