"use client"

import { OrderSuccess } from "@/components/vendora-ui/order-success"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function orderSuccessDoc() {
  return (
    <DocPageLayout
      title="OrderSuccess"
      description={
        <>
          The <code>OrderSuccess</code> component displays a confirmation screen after a successful
          checkout. It includes a fake order ID, item summary, total amount, and a continue
          shopping button.
        </>
      }
      preview={<OrderSuccess />}
      addSnippet={`npx nabiel-ui add order-success`}
      usageSnippet={`import { OrderSuccess } from "@/components/nabiel-ui/order-success"

export default function Page() {
  return <OrderSuccess />
}`}
      extraNotes={
        <>
          🧪 The cart is cleared using{" "}
          <code>localStorage.removeItem("cart")</code>, and a fake order ID is shown. You can
          integrate this with a real backend or email flow using Resend or Supabase.
        </>
      }
    />
  )
}
