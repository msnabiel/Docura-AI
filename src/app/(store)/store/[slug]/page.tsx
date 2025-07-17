"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { VendoraTemplate } from "@/components/templates/vendora"

export default function StorePage() {
  const { slug } = useParams()
  const [siteData, setSiteData] = useState<any>(null)

  useEffect(() => {
    const saved = localStorage.getItem(`site-${slug}`)
    if (saved) {
      const data = JSON.parse(saved)
      setSiteData(data)
    }
  }, [slug])

  if (!siteData) {
    return <div className="p-6 text-center">No site data found. Please generate your website first.</div>
  }

  // Add support for multiple templates later
  switch (siteData.template) {
    case "vendora":
    default:
       return <VendoraTemplate data={siteData} />
  }
}
