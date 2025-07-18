"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Shield, LucideIcon } from "lucide-react"

const icons: Record<string, LucideIcon> = {
  Star,
  Shield,
}

export default function StoreAboutPage() {
  const { slug } = useParams()
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const raw = localStorage.getItem(`site-${slug}`)
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        setData(parsed)
      } catch (e) {
        console.error("Invalid localStorage data", e)
      }
    }
  }, [slug])

  const storeName = data?.storeName || "Our Store"
  const description = data?.description || "Welcome to our online store. We bring you handpicked products crafted for everyday convenience."
  const tagline = data?.tagline || "Quality and comfort, delivered."
  const logoUrl = data?.logoUrl || "/placeholder-logo.png"
  const themeColor = data?.themeColor || "#F4F4F5"
  const features = data?.features || []
  const contactEmail = data?.contactEmail || "support@example.com"
  const socials = data?.socials || {}

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-4">
        <img
          src={logoUrl}
          alt={storeName}
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />
        <h1 className="text-3xl font-bold tracking-tight">{storeName}</h1>
        <p className="text-muted-foreground text-sm">{tagline}</p>
      </div>

      <div
        className="rounded-lg p-6 text-center text-muted-foreground text-base leading-relaxed"
        style={{ backgroundColor: themeColor + "22" }}
      >
        {description}
      </div>

      {features.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature: any, i: number) => {
            const Icon = icons[feature.icon] || Star
            return (
              <div
                key={i}
                className="rounded-xl border bg-muted/30 p-6 hover:shadow transition-all"
              >
                <Icon className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      )}

      <div className="border-t pt-6 text-center space-y-3">
        <p className="text-sm">
          Contact us at <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
        </p>
        <div className="flex justify-center gap-3">
          {socials.facebook && (
            <Badge variant="outline">
              <a href={socials.facebook} target="_blank">Facebook</a>
            </Badge>
          )}
          {socials.twitter && (
            <Badge variant="outline">
              <a href={socials.twitter} target="_blank">Twitter</a>
            </Badge>
          )}
          {socials.instagram && (
            <Badge variant="outline">
              <a href={socials.instagram} target="_blank">Instagram</a>
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
