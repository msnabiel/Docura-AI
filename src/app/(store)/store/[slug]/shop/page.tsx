"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { ShopPage } from "@/components/vendora-ui/shop-page"
import { RecentlyViewedProducts } from "@/components/vendora-ui/recently-viewed"
import { ProductFilters } from "@/components/vendora-ui/product-filters"
import type { Product, Variant, FlattenedVariant } from "@/data/products"

export default function StoreShopPage() {
  const { slug } = useParams()
  const [formData, setFormData] = useState<any>(null)
  const [flattened, setFlattened] = useState<FlattenedVariant[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
const [sortBy, setSortBy] = useState<string>("newest")

useEffect(() => {
  const saved = localStorage.getItem(`site-${slug}`)
  if (saved) {
    try {
      const data = JSON.parse(saved)
      setFormData(data)

      const variants = data?.featuredProducts || []
      setFlattened(variants)
    } catch (err) {
      console.error("Invalid product data in localStorage", err)
    }
  }
}, [slug])


  const filteredProducts = flattened
    .filter((product) =>
      selectedCategories.length === 0 ||
      (product.category && selectedCategories.includes(product.category))
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.parentName.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const allCategories = formData?.categories || []

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      {showFilters && (
        <div className="mb-10">
<ProductFilters
  categories={allCategories.length > 0 ? allCategories : ["Books", "Electronics", "Clothing", "Home"]}
  onFilterChange={({ selectedCategories, priceRange, sortBy }) => {
    setSelectedCategories(selectedCategories)
    setPriceRange(priceRange)
    setSortBy(sortBy)
  }}
/>

        </div>
      )}

      <ShopPage
        products={filteredProducts}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters((prev) => !prev)}
      />

      <div className="pl-4 pb-4">
        <RecentlyViewedProducts />
      </div>
    </div>
  )
}
