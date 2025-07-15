"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { RecentlyViewedProducts } from "@/components/nabiel-ui/recently-viewed"

export function recentlyViewedDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">RecentlyViewedProducts</h1>
      <p className="text-muted-foreground mb-6">
        The <code>RecentlyViewedProducts</code> component displays a horizontal list of products that the user recently visited. It uses <code>localStorage</code> to track products and renders on the client side.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Recently Viewed</CardTitle>
            <CardDescription>Shows items the user has viewed recently using localStorage.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentlyViewedProducts />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<RecentlyViewedProducts />`}
        </code>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        💡 On each product page, push the current product to <code>localStorage</code> like this:
      </p>

      <div className="relative mt-2 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
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
        </code>
      </div>
    </div>
  )
}
