"use client"

import { useParams } from "next/navigation"
import { CartPage } from "@/components/nabiel-ui/cart-page"

export default function StoreCartPage() {
  const slugParam = useParams().slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam

  return <CartPage storeSlug={slug} />
}
