"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/nabiel-ui/product-card"
import { FlattenedVariant } from "@/data/products"
import { cn } from "@/lib/utils"

interface ShopPageProps {
  products: FlattenedVariant[]
  className?: string
}

export const ShopPage: React.FC<ShopPageProps> = ({ products, className }) => {
  const [query, setQuery] = useState("")

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.parentName.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className={cn("w-full py-10 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Shop</h1>
          <Input
            type="search"
            placeholder="Search candles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-72"
          />
        </div>

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
