"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install paytmchecksum axios
npx nabiel-ui add checkout-page`

const clientSnippet = `// Inside your customized CheckoutPage

const handlePaytm = async () => {
  const res = await fetch("/api/paytm/initiate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderId: "ORDER123",
      amount: 500, // INR
      email: "user@example.com"
    }),
  })

  const txnData = await res.json()

  const form = document.createElement("form")
  form.method = "POST"
  form.action = txnData.paymentUrl

  Object.entries(txnData.fields).forEach(([key, value]) => {
    const input = document.createElement("input")
    input.type = "hidden"
    input.name = key
    input.value = value
    form.appendChild(input)
  })

  document.body.appendChild(form)
  form.submit()
}`

const serverSnippet = `// /app/api/paytm/initiate/route.ts

import { NextRequest, NextResponse } from "next/server"
import PaytmChecksum from "paytmchecksum"

export async function POST(req: NextRequest) {
  const { orderId, amount, email } = await req.json()

  const paytmParams = {
    MID: process.env.PAYTM_MID!,
    WEBSITE: "WEBSTAGING",
    INDUSTRY_TYPE_ID: "Retail",
    CHANNEL_ID: "WEB",
    ORDER_ID: orderId,
    CUST_ID: email,
    TXN_AMOUNT: String(amount),
    CALLBACK_URL: "https://yourdomain.com/api/paytm/verify",
    EMAIL: email,
  }

  const checksum = await PaytmChecksum.generateSignature(paytmParams, process.env.PAYTM_MERCHANT_KEY!)

  return NextResponse.json({
    paymentUrl: "https://securegw-stage.paytm.in/order/process",
    fields: {
      ...paytmParams,
      CHECKSUMHASH: checksum,
    },
  })
}`

const verifySnippet = `// /app/api/paytm/verify/route.ts

import { NextRequest, NextResponse } from "next/server"
import PaytmChecksum from "paytmchecksum"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const fields: Record<string, string> = {}

  formData.forEach((value, key) => {
    fields[key] = value.toString()
  })

  const checksum = fields.CHECKSUMHASH
  delete fields.CHECKSUMHASH

  const isValid = PaytmChecksum.verifySignature(fields, process.env.PAYTM_MERCHANT_KEY!, checksum)

  if (isValid) {
    return NextResponse.json({ success: true, message: "Payment Verified", fields })
  } else {
    return NextResponse.json({ success: false, message: "Invalid Checksum" }, { status: 400 })
  }
}`

export function paytmDoc() {
  return (
    <DocPageLayout
      title="Paytm Integration with Checkout Page"
      description={
        <>
          Integrate <code>Paytm</code> into your{" "}
          <code>{"<CheckoutPage />"}</code> from <code>@nabiel/ui</code> to securely accept UPI,
          card, and wallet payments.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This would redirect to Paytm from your Checkout Page.")}>
            Simulate Paytm Checkout
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            This simulates integration with the <code>CheckoutPage</code> component.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🛠️ Backend: Initiate & Verify Transaction</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            First, create a Paytm order and generate a secure checksum. Then verify the result from the callback route.
          </p>
          <CodeBlockWithCopy code={serverSnippet} />
          <h4 className="text-base font-medium mt-4 mb-2">✅ Verify on Callback</h4>
          <CodeBlockWithCopy code={verifySnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🔗 Merchant Keys & Setup</h3>
          <ul className="list-disc text-sm text-muted-foreground pl-5 space-y-1">
            <li>
              Get your <strong>Merchant ID (MID)</strong> and <strong>Merchant Key</strong> from{" "}
              <a
                href="https://dashboard.paytm.com"
                className="underline"
                target="_blank"
              >
                Paytm Dashboard
              </a>
              .
            </li>
            <li>Set <code>PAYTM_MID</code> and <code>PAYTM_MERCHANT_KEY</code> in your <code>.env</code> file.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">🧩 Integration with CheckoutPage</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>
              Run <code>npx nabiel-ui add checkout-page</code> to scaffold your checkout.
            </li>
            <li>
              Hook <code>handlePaytm()</code> into your checkout button.
            </li>
            <li>
              Use your cart context or Supabase logic to calculate <code>amount</code>.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">🔐 Notes on Security</h3>
          <ul className="list-disc text-sm text-muted-foreground pl-5 space-y-2">
            <li>
              Never expose your Merchant Key client-side.
            </li>
            <li>
              Always verify the checksum during <code>/api/paytm/verify</code> to ensure authenticity.
            </li>
            <li>
              (Optional) Enable Paytm <strong>webhooks</strong> for deeper automation.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">📚 Helpful Resources</h3>
          <ul className="list-disc text-sm text-muted-foreground pl-5">
            <li>
              <a
                href="https://developer.paytm.com/docs/"
                target="_blank"
                className="underline"
              >
                Paytm Developer Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Paytm-Payments/Paytm_Node_Checksum"
                target="_blank"
                className="underline"
              >
                Node.js Checksum Generator (GitHub)
              </a>
            </li>
            <li>
              <a
                href="https://dashboard.paytm.com/"
                target="_blank"
                className="underline"
              >
                Paytm Merchant Dashboard
              </a>
            </li>
          </ul>
        </>
      }
    />
  )
}
