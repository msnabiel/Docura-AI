"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { ProductFilters } from "@/components/nabiel-ui/product-filters"

export function productFiltersDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">ProductFilters</h1>
      <p className="text-muted-foreground mb-6">
        The <code>ProductFilters</code> component provides filtering functionality for your product listing — including category checkboxes, a price range slider, and sorting dropdown.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Filters</CardTitle>
            <CardDescription>Try changing categories, price range, or sort options.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="p-4">
              <ProductFilters
                categories={["aura", "zen", "seasonal"]}
                onFilterChange={(filters) => {
                  console.log("Demo filters:", filters)
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<ProductFilters
  categories={["aura", "zen", "seasonal"]}
  onFilterChange={(filters) => {
    console.log("Filters:", filters)
  }}
/>`}
        </code>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        💡 This component is ideal for shop or collection pages. You can integrate it with your product grid or route-based filtering logic.
      </div>
    </div>
  )
}
