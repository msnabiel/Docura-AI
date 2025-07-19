"use client"

import { ShopPage } from "@/components/nabiel-ui/shop-page"
import { flattenedVariants } from "@/data/products"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function shopDoc() {
  return (
    <DocPageLayout
      title="ShopPage"
      description={
        <>
          The <code>ShopPage</code> component renders a responsive product listing grid with search
          and category filtering. It works well with your <code>ProductCard</code> and{" "}
          <code>ProductFilters</code> components.
        </>
      }
      preview={<ShopPage products={flattenedVariants.slice(0, 8)} />}
      addSnippet={`npx nabiel-ui add shop-page`}
      usageSnippet={`import { ShopPage } from "@/components/nabiel-ui/shop-page"
import { flattenedVariants } from "@/data/products"

<ShopPage products={flattenedVariants} />`}
      extraNotes={
        <>
          💡 Ideal for collection or shop routes like <code>/shop</code> or{" "}
          <code>/category/[slug]</code>. Supports full client-side filtering and search.
        </>
      }
    />
  )
}
