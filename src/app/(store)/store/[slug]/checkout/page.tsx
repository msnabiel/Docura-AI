"use client"

import { useParams } from "next/navigation"
import { CheckoutPage } from "@/components/vendora-ui/checkout-page"

export default function StoreCheckoutPage() {
  const slugParam = useParams().slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam

  return <CheckoutPage storeSlug={slug} />
}
