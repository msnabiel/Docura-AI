"use client"

import { RecentlyViewedProducts } from "@/components/nabiel-ui/recently-viewed"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function recentlyViewedDoc() {
  return (
    <DocPageLayout
      title="RecentlyViewedProducts"
      description={
        <>
          The <code>RecentlyViewedProducts</code> component displays a horizontal list of products
          that the user recently visited. It uses <code>localStorage</code> to track products and
          renders on the client side.
        </>
      }
      
      preview={
  <div className="px-4">
    <RecentlyViewedProducts />
  </div>
}

      addSnippet={`npx nabiel-ui add recently-viewed`}
      usageSnippet={`import { RecentlyViewedProducts } from "@/components/nabiel-ui/recently-viewed"

<RecentlyViewedProducts />`}
      extraNotes={
        <>
          💡 On each product page, push the current product to{" "}
          <code>localStorage</code> like this:
          <pre className="mt-2 rounded-md bg-muted px-4 py-3 text-sm font-mono text-muted-foreground overflow-auto">
{`useEffect(() => {
  const viewed = {
    id: variant.id,
    name: variant.name,
    slug: variant.slug,
    image: variant.images[0],
  }

  const stored = localStorage.getItem("recentlyViewed")
  const prev = stored ? JSON.parse(stored) : []

  const updated = [
    viewed,
    ...prev.filter((p) => p.id !== viewed.id),
  ].slice(0, 10)

  localStorage.setItem("recentlyViewed", JSON.stringify(updated))
}, [variant])`}
          </pre>
        </>
      }
    />
  )
}
