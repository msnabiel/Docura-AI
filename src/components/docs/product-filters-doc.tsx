"use client"

import { ProductFilters } from "@/components/nabiel-ui/product-filters"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function productFiltersDoc() {
  return (
    <DocPageLayout
      title="ProductFilters"
      description={
        <>
          The <code>ProductFilters</code> component provides filtering functionality for your product
          listing — including category checkboxes, a price range slider, and sorting dropdown.
        </>
      }
      preview={
        <div className="p-4">
          <ProductFilters
            categories={["aura", "zen", "seasonal"]}
            onFilterChange={(filters) => {
              console.log("Demo filters:", filters)
            }}
          />
        </div>
      }
      addSnippet={`npx nabiel-ui add product-filters`}
      usageSnippet={`import { ProductFilters } from "@/components/nabiel-ui/product-filters"

<ProductFilters
  categories={["aura", "zen", "seasonal"]}
  onFilterChange={(filters) => {
    console.log("Filters:", filters)
  }}
/>`}
      extraNotes={
        <>
          💡 This component is ideal for shop or collection pages. You can integrate it with your
          product grid or URL-based filtering logic for dynamic updates.
        </>
      }
    />
  )
}
