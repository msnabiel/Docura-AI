"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { ShopPage } from "@/components/nabiel-ui/shop-page"
import { RecentlyViewedProducts } from "@/components/nabiel-ui/recently-viewed"
import type { Product, Variant, FlattenedVariant } from "@/data/products" // or relative path

export default function StoreShopPage() {
  const { slug } = useParams()
  const [flattened, setFlattened] = useState<FlattenedVariant[]>([])

  useEffect(() => {
    const saved = localStorage.getItem(`site-${slug}`)
    if (saved) {
      const data = JSON.parse(saved)
      const products: Product[] = data?.products || []

      const flat: FlattenedVariant[] = products.flatMap((product) =>
        product.variants.map((variant: Variant) => ({
          ...variant,
          parentName: product.name,
          type: product.type,
        }))
      )

      setFlattened(flat)
    }
  }, [slug])

return (
  <div>
    <ShopPage products={flattened} />
    <div className="pl-8">
      <RecentlyViewedProducts />
    </div>
  </div>
)

}
