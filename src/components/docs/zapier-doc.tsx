"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const serverSnippet = `// app/api/zapier/route.ts
export async function POST(req: Request) {
  const order = await req.json()

  await fetch("https://hooks.zapier.com/hooks/catch/YOUR_ZAP_ID/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })

  return new Response("Zap triggered", { status: 200 })
}`

const clientSnippet = `// Trigger Zapier webhook from client (e.g. after order success)
await fetch("/api/zapier", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    total: 499,
  }),
})`

export function zapierDoc() {
  return (
    <DocPageLayout
      title="Zapier Integration"
      description={
        <>Trigger <code>Zaps</code> automatically from your Nabiel UI components like <code>CheckoutPage</code>, <code>ContactForm</code>, or <code>NewsletterSignup</code>.</>
      }
      addSnippet={`No package install needed. Just use <code>fetch()</code>.`}
      usageSnippet={serverSnippet}
      preview={
        <div className="space-y-4 text-sm text-muted-foreground text-center">
          <a
            href="https://zapier.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <Button>Go to Zapier</Button>
          </a>
          <p>Create a Zap and connect it with your API via Webhooks.</p>
        </div>
      }
      extraInfo={
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">🛠️ Set up API route</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Create a file at <code>app/api/zapier/route.ts</code> in your Next.js app. This API route will handle sending data to Zapier.
            </p>
            <CodeBlockWithCopy code={serverSnippet} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">📦 Trigger from client</h3>
            <p className="text-sm text-muted-foreground mb-2">
              After a checkout is completed or form is submitted, call the API route from your component:
            </p>
            <CodeBlockWithCopy code={clientSnippet} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🔗 Use cases</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Send order data to Google Sheets</li>
              <li>Send confirmation emails via Gmail or Mailchimp</li>
              <li>Create contacts in HubSpot, Notion, or Slack</li>
              <li>Notify team on Discord or Microsoft Teams</li>
            </ul>
          </div>
        </div>
      }
      extraNotes={
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>Make sure to replace <code>YOUR_ZAP_ID</code> in the fetch URL with the webhook URL provided by Zapier when setting up your Zap.</p>
          <a href="https://zapier.com" target="_blank" rel="noreferrer">
            <Button className="mt-2">Create a Zap</Button>
          </a>
        </div>
      }
    />
  )
}