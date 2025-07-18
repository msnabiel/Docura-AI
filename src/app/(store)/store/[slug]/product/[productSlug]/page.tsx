"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { ProductDetailPage } from "@/components/vendora-ui/ProductDetailPage"

export default function ProductPage() {
  const { slug, productSlug } = useParams() as {
    slug: string
    productSlug: string
  }

  const [variant, setVariant] = useState<any | null>(null)

  useEffect(() => {
    const siteDataRaw =
      localStorage.getItem(`site-${slug}`) || localStorage.getItem("site-default")
    if (!siteDataRaw) return

    try {
      const parsed = JSON.parse(siteDataRaw)
      const match = parsed.featuredProducts?.find(
        (p: any) =>
          p.slug === productSlug || // match by slug
          p.id === productSlug || // OR fallback by ID
          p.name.toLowerCase().replace(/\s+/g, "-") === productSlug // OR slugified name
      )

      if (match) {
        // inject .slug if it was missing
        if (!match.slug) {
          match.slug =
            match.name.toLowerCase().replace(/\s+/g, "-") || match.id || productSlug
        }
        setVariant(match)
      }
    } catch (err) {
      console.error("Invalid store data", err)
    }
  }, [slug, productSlug])

  if (!variant) {
    return <p className="p-10 text-muted-foreground">Loading or product not found.</p>
  }

  return <ProductDetailPage variant={variant} />
}
