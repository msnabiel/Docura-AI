"use client"

import { useParams } from "next/navigation"
import { TrackOrder } from "@/components/vendora-ui/track-order"

export default function OrdersPage() {
  const slugParam = useParams().slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam

  return <TrackOrder storeSlug={slug} />
}
