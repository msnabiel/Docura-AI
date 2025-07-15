"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install stripe
npx nabiel-ui add checkout-page`

const clientSnippet = `// Inside your customized CheckoutPage (after install)

const handleStripeCheckout = async () => {
  const res = await fetch("/api/create-stripe-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [{ name: "Aura Candle", price: 5000, quantity: 1 }]
    })
  })

  const { sessionId } = await res.json()

  const stripe = await window.Stripe("pk_test_XXXX") // Replace with your key
  stripe.redirectToCheckout({ sessionId })
}`

const serverSnippet = `// /app/api/create-stripe-session/route.ts (Next.js App Router)

import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10"
})

export async function POST(req: NextRequest) {
  const { items } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item: any) => ({
      price_data: {
        currency: "inr",
        product_data: { name: item.name },
        unit_amount: item.price
      },
      quantity: item.quantity
    })),
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/checkout"
  })

  return NextResponse.json({ sessionId: session.id })
}`

export function stripeDoc() {
  return (
    <DocPageLayout
      title="Stripe Integration with Checkout Page"
      description={
        <>
          This guide shows how to connect <code>Stripe</code> with the{" "}
          <code>{"<CheckoutPage />"}</code> template from <code>@nabiel/ui</code> for secure payments.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This would redirect to Stripe Checkout.")}>
            Simulate Stripe Checkout
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            This simulates redirecting users to Stripe’s hosted checkout page.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🛠️ Backend: Create Stripe Session</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            This route creates a Stripe Checkout Session and returns a <code>sessionId</code> to the client.
          </p>
          <CodeBlockWithCopy code={serverSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🧩 How to Integrate into CheckoutPage</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Add the <code>handleStripeCheckout</code> function inside your customized <code>CheckoutPage</code></li>
            <li>Trigger it on the “Pay Now” button click</li>
            <li>Optionally use local cart state or Supabase to generate the <code>items[]</code></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">🔒 Verifying Payment (Optional)</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Use Stripe webhooks to listen for <code>checkout.session.completed</code></li>
            <li>This helps confirm payment on your server</li>
            <li>See <code>/api/stripe-webhook</code> docs for setup (coming soon)</li>
          </ul>
        </>
      }
    />
  )
}
