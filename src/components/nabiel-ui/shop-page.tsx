"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { ProductCard } from "@/components/nabiel-ui/product-card"
import { FlattenedVariant } from "@/data/products"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/nabiel-ui/product-filters"

interface ShopPageProps {
  products: FlattenedVariant[]
  query?: string
  onQueryChange?: (query: string) => void
  className?: string
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  query = "",
  onQueryChange,
  className,
}) => {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<{
    selectedCategories: string[]
    priceRange: [number, number]
    sortBy: string
  }>({
    selectedCategories: [],
    priceRange: [0, 1000],
    sortBy: "newest",
  })

  const toggleFilters = () => setShowFilters((prev) => !prev)

  const allCategories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  ) as string[]

  const filtered = products
    .filter((p) =>
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(p.category!)
    )
    .filter((p) => {
      const price = p.price ?? 0
      return price >= filters.priceRange[0] && price <= filters.priceRange[1]
    })
    .filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.parentName.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (filters.sortBy === "low-to-high") return (a.price ?? 0) - (b.price ?? 0)
      if (filters.sortBy === "high-to-low") return (b.price ?? 0) - (a.price ?? 0)
      return 0 // "newest" or default (assumes pre-sorted or no sorting)
    })

  return (
    <section className={cn("w-full py-10 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Shop</h1>

          <div className="flex gap-2 w-full sm:w-auto">
            <Input
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => onQueryChange?.(e.target.value)}
              className="w-full sm:w-72"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFilters}
              className="shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4 mr-1" />
              {showFilters ? "Hide Filters" : "Filters"}
            </Button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <ProductFilters
            categories={allCategories}
            onFilterChange={(updated) => setFilters(updated)}
          />
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
