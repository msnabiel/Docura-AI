"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { ProductCard } from "@/components/nabiel-ui/product-card"
import { FlattenedVariant } from "@/data/products"
import { cn } from "@/lib/utils"

interface ShopPageProps {
  products: FlattenedVariant[]
  query?: string
  onQueryChange?: (query: string) => void
  className?: string
  showFilters?: boolean
  onToggleFilters?: () => void
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  query = "",
  onQueryChange,
  className,
  showFilters,
  onToggleFilters,
}) => {
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.parentName.toLowerCase().includes(query.toLowerCase())
  )

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
            {onToggleFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleFilters}
                className="shrink-0"
              >
                <SlidersHorizontal className="w-4 h-4 mr-1" />
                {showFilters ? "Hide Filters" : "Filters"}
              </Button>
            )}
          </div>
        </div>

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
