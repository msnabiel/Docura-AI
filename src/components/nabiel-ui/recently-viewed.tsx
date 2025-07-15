"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

type ViewedProduct = {
  id: string
  name: string
  slug: string
  image: string
}

interface RecentlyViewedProductsProps {
  className?: string
}

export const RecentlyViewedProducts: React.FC<RecentlyViewedProductsProps> = ({ className }) => {
  const [products, setProducts] = useState<ViewedProduct[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("recentlyViewed")
    if (stored) {
      try {
        setProducts(JSON.parse(stored))
      } catch {
        setProducts([])
      }
    }
  }, [])

  if (products.length === 0) return null

  return (
    <section className={cn("w-full py-8", className)}>
      <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {products.map((product) => (
  <div key={product.slug} className="min-w-[150px] max-w-[160px] flex-shrink-0">
    <Link href={`/product/${product.slug}`}>
      <div className="border rounded-md overflow-hidden shadow-sm">
        <Image
          src={product.image || "/hero.jpeg"}
          alt={product.name || "Recently viewed product"}
          width={160}
          height={160}
          className="w-full h-auto object-cover"
        />
        <div className="p-2 text-sm font-medium text-center">{product.name}</div>
      </div>
    </Link>
  </div>
))}

      </div>
    </section>
  )
}
