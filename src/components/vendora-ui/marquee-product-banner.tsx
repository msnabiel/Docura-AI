"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import type { FlattenedVariant } from "@/data/products"
import Image from "next/image"
import Link from "next/link"

export function ProductMarqueeBanner({ slug }: { slug: string }) {
  const [products, setProducts] = useState<FlattenedVariant[]>([])
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const key = `site-${slug}`
    const stored = localStorage.getItem(key)
    if (stored) {
      try {
        const data = JSON.parse(stored)
        setProducts(data?.featuredProducts || [])
      } catch (e) {
        console.error("Invalid JSON in localStorage", e)
      }
    }

    controls.start({ x: ["0%", "-100%"] })
  }, [slug, controls])

  if (!products || products.length === 0) return null

  const repeated = Array(10).fill(products).flat()

  return (
    <div
      className="relative w-full overflow-hidden py-4 bg-gradient-to-r from-[#fefefe] to-[#f7f7fa] border-y border-muted/30"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({ x: ["0%", "-100%"] })}
    >
      <motion.div
        className="flex gap-6 px-4 min-w-max"
        animate={controls}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        ref={ref}
      >

{repeated.map((product, i) => (
  <Link
    key={`${product.id}-${i}`}
    href={`/store/${slug}/product/${product.slug || product.id}`}
    className="flex flex-col items-center gap-2 min-w-[160px] bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <Image
      src={product.images?.[0] || "/placeholder.svg"}
      alt={product.name}
      width={90}
      height={90}
      className="rounded-md object-cover border border-gray-100"
    />
    <div className="text-sm font-semibold text-gray-700 text-center line-clamp-1">
      {product.name}
    </div>
    <div className="text-xs text-gray-500 text-center">₹{product.price}</div>
  </Link>
))}

      </motion.div>
    </div>
  )
}
