"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { ShopPage } from "@/components/nabiel-ui/shop-page"
import { flattenedVariants } from "@/data/products"

export function shopDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">ShopPage</h1>
      <p className="text-muted-foreground mb-6">
        The <code>ShopPage</code> component renders a responsive product listing grid with search filtering.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Shop Page</CardTitle>
            <CardDescription>
              A searchable grid of candle products with responsive layout and product cards.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <ShopPage products={flattenedVariants.slice(0, 8)} />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<ShopPage products={flattenedVariants} />`}
        </code>
      </div>
    </div>
  )
}
