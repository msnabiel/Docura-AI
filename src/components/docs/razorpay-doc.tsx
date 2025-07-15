"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install razorpay
npx nabiel-ui add checkout-page`

const clientSnippet = `// Inside your customized CheckoutPage (after install)

const handlePayment = async () => {
  const res = await fetch("/api/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: 50000 }) // amount in paise
  })

  const order = await res.json()

  const options = {
    key: "RAZORPAY_KEY_ID",
    amount: order.amount,
    currency: "INR",
    name: "Nabiel Store",
    description: "Checkout Payment",
    image: "/logo.png",
    order_id: order.id,
    handler: function (response) {
      console.log("✅ Payment success", response)
      // Send response.razorpay_payment_id to your backend to verify
    },
    prefill: {
      name: "Customer Name",
      email: "customer@example.com",
      contact: "9999999999"
    },
    theme: { color: "#6366f1" }
  }

  const rzp = new window.Razorpay(options)
  rzp.open()
}`

const serverSnippet = `// /app/api/create-order/route.ts (Next.js App Router)

import Razorpay from "razorpay"
import { NextRequest, NextResponse } from "next/server"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!
})

export async function POST(req: NextRequest) {
  const { amount } = await req.json()

  try {
    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: "rcpt_checkout"
    })
    return NextResponse.json(order)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}`

export function razorpayDoc() {
  return (
    <DocPageLayout
      title="Razorpay Integration with Checkout Page"
      description={
        <>
          Learn how to integrate <code>Razorpay</code> into the{" "}
          <code>{"<CheckoutPage />"}</code> component provided by <code>@nabiel/ui</code>.
          This guide walks through both frontend and backend setup.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This would open Razorpay from your Checkout Page.")}>
            Simulate Razorpay Checkout
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            This simulates integration with the <code>CheckoutPage</code> template.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🛠️ Backend: Create Razorpay Order</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            Add this <code>/api/create-order</code> route to generate Razorpay orders.
            It's required before opening the Razorpay Checkout UI.
          </p>
          <CodeBlockWithCopy code={serverSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🧩 Connecting to the CheckoutPage</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>After running <code>npx nabiel-ui add checkout-page</code>, locate the checkout logic.</li>
            <li>Insert <code>handlePayment()</code> into your “Pay Now” button.</li>
            <li>Use local cart state or Supabase to calculate the total.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">⚠️ Payment Verification</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Razorpay response must be verified on the server using <code>razorpay_payment_id</code>.</li>
            <li>Use Razorpay’s signature validation or webhooks for production verification.</li>
            <li>Never trust client-side success alone.</li>
          </ul>
        </>
      }
    />
  )
}
