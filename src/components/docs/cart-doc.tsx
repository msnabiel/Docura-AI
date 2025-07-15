"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { CartPage } from "@/components/nabiel-ui/cart-page"

export function cartDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">CartPage</h1>
      <p className="text-muted-foreground mb-6">
        The <code>CartPage</code> component displays the list of items added to cart from localStorage,
        with support for remove and checkout.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Cart Page</CardTitle>
            <CardDescription>
              Responsive cart with image, name, price, quantity, total and remove functionality.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <CartPage />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<CartPage />`}
        </code>
      </div>
    </div>
  )
}
