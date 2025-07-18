"use client"

import { ProductDetailPage } from "@/components/vendora-ui/ProductDetailPage"
import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { flattenedVariants } from "@/data/products"

export function productDetailDoc() {
  return (
    <DocPageLayout
      title="ProductDetailPage"
      description={
        <>
          The <code>ProductDetailPage</code> component renders a full product detail layout with image
          gallery, price, description, and "Add to Cart" button. It also stores recently viewed products
          in <code>localStorage</code>.
        </>
      }
      preview={<ProductDetailPage variant={flattenedVariants[0]} />}
      addSnippet={`npx nabiel-ui add product-detail-page`}
      usageSnippet={`import { ProductDetailPage } from "@/components/nabiel-ui/product-detail-page"
import { flattenedVariants } from "@/data/products"

<ProductDetailPage variant={flattenedVariants[0]} />`}
      extraNotes={
        <>
          💡 This component expects a single <code>variant</code> object with <code>id</code>,{" "}
          <code>name</code>, <code>slug</code>, <code>description</code>, <code>price</code>, and{" "}
          <code>images</code> fields.

          <div className="mt-4" />

          ✅ It automatically:
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Tracks recently viewed products via <code>localStorage</code></li>
            <li>Adds item to cart using <code>localStorage</code></li>
            <li>Provides thumbnail image switching</li>
            <li>Is fully responsive and mobile-friendly</li>
          </ul>

          <div className="mt-4" />

          🧪 Sample structure:
          <pre className="mt-2 rounded-md bg-muted px-4 py-3 text-sm font-mono text-muted-foreground overflow-auto">
{`const variant = {
  id: "abc123",
  name: "Aura Candle - Rose",
  slug: "aura-rose",
  description: "A soft, floral scent with calming effects.",
  price: 399,
  images: ["/candles/rose1.jpg", "/candles/rose2.jpg"]
}`}
          </pre>
        </>
      }
    />
  )
}
