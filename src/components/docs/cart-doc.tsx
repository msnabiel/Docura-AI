"use client"

import { CartPage } from "@/components/vendora-ui/cart-page"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function cartDoc() {
  return (
    <DocPageLayout
      title="CartPage"
      description={
        <>
          The <code>CartPage</code> component displays the list of items added to cart from{" "}
          <code>localStorage</code>, with support for removing items and proceeding to checkout.
        </>
      }
      preview={<CartPage />}
      addSnippet={`npx nabiel-ui add cart-page`}
      usageSnippet={`import { CartPage } from "@/components/nabiel-ui/cart-page"

export default function Page() {
  return <CartPage />
}`}
      extraNotes={
        <>
          🛒 Make sure your product cards or detail pages correctly push to <code>localStorage</code>{" "}
          using the expected format (id, name, price, image, etc). Checkout button can be connected
          to Stripe, Razorpay, or a custom flow.
        </>
      }
    />
  )
}
