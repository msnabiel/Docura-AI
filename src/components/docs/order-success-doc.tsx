"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { OrderSuccess } from "@/components/nabiel-ui/order-success"

export function orderSuccessDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">OrderSuccess</h1>
      <p className="text-muted-foreground mb-6">
        The <code>OrderSuccess</code> component displays a confirmation screen after a successful checkout. It includes
        a fake order ID, item summary, total amount, and a continue shopping button.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Order Success</CardTitle>
            <CardDescription>
              Confirms order placement and summarizes what the customer bought.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <OrderSuccess />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<OrderSuccess />`}
        </code>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        🧪 The cart is cleared using <code>localStorage.removeItem("cart")</code>, and a fake order ID is shown. You can integrate this with a real backend or email flow using Resend or Supabase.
      </div>
    </div>
  )
}
