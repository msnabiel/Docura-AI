"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { ShopPage } from "@/components/nabiel-ui/shop-page"
import { RecentlyViewedProducts } from "@/components/nabiel-ui/recently-viewed"
import type { Product, Variant, FlattenedVariant } from "@/data/products"

export default function StoreShopPage() {
  const { slug } = useParams()
  const [flattened, setFlattened] = useState<FlattenedVariant[]>([])
  const [searchQuery, setSearchQuery] = useState("") // ✅ declare this
  const [showFilters, setShowFilters] = useState(false) // ✅ declare this

  // Optional: handle categories later
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem(`site-${slug}`)
    if (saved) {
      try {
        const data = JSON.parse(saved)
        const products: Product[] = data?.products || []

        const flat: FlattenedVariant[] = products.flatMap((product) =>
          product.variants.map((variant: Variant) => ({
            ...variant,
            parentName: product.name,
            type: product.type,
            category: product.category,
          }))
        )

        setFlattened(flat)
      } catch (err) {
        console.error("Invalid product data in localStorage", err)
      }
    }
  }, [slug])

  // ✅ filter logic moved here
const filteredProducts = flattened
  .filter((product) =>
    selectedCategories.length === 0 ||
    (product.category && selectedCategories.includes(product.category))
  )
  .filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.parentName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <ShopPage
        products={filteredProducts}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters((prev: boolean) => !prev)}
      />
      <div className="pl-8">
        <RecentlyViewedProducts />
      </div>
    </div>
  )
}
