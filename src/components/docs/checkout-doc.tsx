"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { CheckoutPage } from "@/components/nabiel-ui/checkout-page"

export function checkoutDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">CheckoutPage</h1>
      <p className="text-muted-foreground mb-6">
        The <code>CheckoutPage</code> component provides a complete checkout experience including shipping address,
        cart summary, coupon support, and a confirmation message. The cart data is read from <code>localStorage</code>.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Checkout Page</CardTitle>
            <CardDescription>
              Shipping form + cart summary + coupon support. Use <code>SAVE10</code> or <code>FREESHIP</code>.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <CheckoutPage />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<CheckoutPage />`}
        </code>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        💡 Coupon logic is built-in. Use:
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li><code>SAVE10</code> – ₹100 off</li>
          <li><code>FREESHIP</code> – ₹50 off (free shipping simulation)</li>
        </ul>
      </div>
    </div>
  )
}
