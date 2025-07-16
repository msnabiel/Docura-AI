"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npx nabiel-ui add checkout-page
npm install @paypal/react-paypal-js`

const clientSnippet = `// Inside your customized CheckoutPage.tsx

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

export function PayPalCheckout({ total }: { total: number }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toFixed(2), // Format total as string
                },
              },
            ],
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(\`Transaction completed by \${details.payer.name.given_name}\`)
            // Optional: redirect to /success or trigger Resend
          })
        }}
      />
    </PayPalScriptProvider>
  )
}`
const integrationHint = `// ⬇ Add this inside your CheckoutPage right below total price display
<PayPalCheckout total={total} />`

export function paypalDoc() {
  return (
    <DocPageLayout
      title="PayPal Integration with Checkout Page"
      description={
        <>
          Learn how to use <code>PayPal</code> with the{" "}
          <code>{"<CheckoutPage />"}</code> component in <code>@nabiel/ui</code> to accept fast and secure payments using PayPal buttons.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This will render PayPal smart buttons in your checkout.")}>
            Simulate PayPal Checkout
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            PayPal buttons will appear below your order summary and handle the checkout flow.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">📦 Add to CheckoutPage</h3>
          <CodeBlockWithCopy code={integrationHint} />
          <ul className="text-sm text-muted-foreground list-disc pl-4 mt-2 space-y-2">
            <li>Place the <code>&lt;PayPalCheckout total=... /&gt;</code> inside your <strong>Order Summary</strong></li>
            <li>Make sure <code>total</code> is calculated from your cart and discount logic</li>
            <li>This will replace or sit alongside any existing Stripe/Razorpay buttons</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">🔐 Sandbox Setup</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Visit <a href="https://developer.paypal.com" className="underline" target="_blank">developer.paypal.com</a></li>
            <li>Create a sandbox app to get your <strong>Client ID</strong></li>
            <li>Replace <code>"YOUR_CLIENT_ID"</code> in the example above</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">✅ What Happens on Success?</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li><code>onApprove()</code> is triggered after payment</li>
            <li>You can show a toast, send a Resend email, or redirect to <code>/success</code></li>
            <li>Optionally use a webhook for deeper confirmation (advanced)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">📘 Resources</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <a
                href="https://developer.paypal.com/docs/checkout/standard/integrate/"
                className="underline"
                target="_blank"
              >
                PayPal Checkout Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/paypal/react-paypal-js"
                className="underline"
                target="_blank"
              >
                PayPal React SDK GitHub
              </a>
            </li>
            <li>
              <a
                href="https://developer.paypal.com/dashboard/"
                className="underline"
                target="_blank"
              >
                PayPal Developer Dashboard
              </a>
            </li>
          </ul>
        </>
      }
    />
  )
}
