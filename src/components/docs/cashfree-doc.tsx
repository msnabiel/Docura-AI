"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install axios
npx nabiel-ui add checkout-page`

const clientSnippet = `// Inside your customized CheckoutPage

const handleCashfree = async () => {
  const res = await fetch("/api/cashfree/initiate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderId: "ORDER123",
      amount: 500,
      customerEmail: "user@example.com",
      customerPhone: "9999999999"
    }),
  })

  const data = await res.json()

  const paymentForm = document.createElement("form")
  paymentForm.method = "POST"
  paymentForm.action = data.paymentLink

  document.body.appendChild(paymentForm)
  paymentForm.submit()
}`

const serverSnippet = `// /app/api/cashfree/initiate/route.ts

import { NextRequest, NextResponse } from "next/server"
import axios from "axios"

export async function POST(req: NextRequest) {
  const { orderId, amount, customerEmail, customerPhone } = await req.json()

  try {
    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_email: customerEmail,
          customer_phone: customerPhone,
          customer_name: "Cashfree Buyer"
        }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-09-01",
          "x-client-id": process.env.CASHFREE_APP_ID!,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
        }
      }
    )

    return NextResponse.json({ paymentLink: response.data.payment_link })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to create Cashfree order" }, { status: 500 })
  }
}`

export function cashfreeDoc() {
  return (
    <DocPageLayout
      title="Cashfree Integration with Checkout Page"
      description={
        <>
          Integrate <code>Cashfree</code> with the <code>{"<CheckoutPage />"}</code> component from{" "}
          <code>@nabiel/ui</code> to accept secure UPI, card, wallet, and net banking payments.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This would redirect to Cashfree from your Checkout Page.")}>
            Simulate Cashfree Checkout
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            This simulates integration with the <code>CheckoutPage</code> template.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🛠 Backend: Create Cashfree Order</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            This API route creates an order on Cashfree and returns a <code>paymentLink</code> to redirect the user.
          </p>
          <CodeBlockWithCopy code={serverSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🔌 Connecting to CheckoutPage</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Run <code>npx nabiel-ui add checkout-page</code> to scaffold the page.</li>
            <li>Connect <code>handleCashfree()</code> to your Pay button.</li>
            <li>Send cart total, customer email, and phone in the POST body.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">🔐 Credentials</h3>
          <ul className="text-sm list-disc pl-4 text-muted-foreground">
            <li>
              <code>CASHFREE_APP_ID</code> and <code>CASHFREE_SECRET_KEY</code> can be found in your Cashfree dashboard.
            </li>
            <li>Use test credentials from <code>https://sandbox.cashfree.com</code> for staging.</li>
            <li>Don't forget to set <code>x-api-version: "2022-09-01"</code> in headers.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">🧾 Post-payment Verification</h3>
          <ul className="text-sm list-disc pl-4 text-muted-foreground">
            <li>Cashfree redirects users to your <code>return_url</code> after payment.</li>
            <li>You should verify payment status using their <code>/orders</code> endpoint or Webhooks.</li>
            <li>
              Use <code>order_token</code> or <code>order_id</code> to check final status server-side.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">📚 Helpful Resources</h3>
          <ul className="text-sm list-disc pl-5 text-muted-foreground">
            <li>
              <a
                href="https://docs.cashfree.com/docs"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Cashfree Docs
              </a>
            </li>
            <li>
              <a
                href="https://docs.cashfree.com/docs/payment-gateway/pg-api-reference"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Cashfree API Reference
              </a>
            </li>
          </ul>
        </>
      }
    />
  )
}
