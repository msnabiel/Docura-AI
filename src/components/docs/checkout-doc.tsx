"use client"

import { CheckoutPage } from "@/components/nabiel-ui/checkout-page"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function checkoutDoc() {
  return (
    <DocPageLayout
      title="CheckoutPage"
      description={
        <>
          The <code>CheckoutPage</code> component provides a complete checkout experience including shipping
          address, cart summary, coupon support, and a confirmation message. The cart data is read from{" "}
          <code>localStorage</code>.
        </>
      }
      preview={<CheckoutPage />}
      addSnippet={`npx nabiel-ui add checkout-page`}
      usageSnippet={`import { CheckoutPage } from "@/components/nabiel-ui/checkout-page"

export default function Page() {
  return <CheckoutPage />
}`}
      extraNotes={
        <>
          💡 Coupon logic is built-in. Try these codes at checkout:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li><code>SAVE10</code> – ₹100 off</li>
            <li><code>FREESHIP</code> – ₹50 off (free shipping simulation)</li>
          </ul>
          <p className="mt-2">
            You can extend this flow by integrating Stripe, Razorpay, or custom APIs. It’s also possible to auto-fill
            address fields from a logged-in Supabase user.
          </p>
        </>
      }
    />
  )
}
