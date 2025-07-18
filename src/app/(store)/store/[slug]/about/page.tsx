"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Mail, Facebook, Twitter, Instagram, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { slug } = useParams()
  const [store, setStore] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem(`site-${slug}`)
    if (data) {
      try {
        setStore(JSON.parse(data))
      } catch {
        console.warn("Invalid store data")
      }
    }
  }, [slug])

  const name = store?.storeName || "Our Store"
  const tagline = store?.tagline || "Comfort. Quality. Convenience."
  const description =
    store?.description ||
    "Welcome to our store — thoughtfully selected products made to make everyday life better."

  const extended = `At ${name || "hi"}, we keep things simple: great products, smooth service, and a touch of joy. Our goal is to bring delight to your everyday shopping experience.`

  const email = store?.contactEmail || "hello@example.com"
  const socials = store?.socials || {}
  const theme = store?.themeColor || "#f4f4f5"
  const ctaText = "Shop Now"
  const ctaLink = store?.ctaLink || "#"

  return (
    <main className="max-w-xl mx-auto px-4 py-10 space-y-8">
      {/* Title & Tagline */}
      <section className="text-center space-y-1">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </section>

      {/* Description */}
      <section
        className="rounded-xl p-4 text-sm text-muted-foreground border"
        style={{ backgroundColor: `${theme}22` }}
      >
        <p className="mb-3">{description}</p>
        <p>{extended}</p>
      </section>

      {/* Contact & Socials */}
      <section className="text-center space-y-4">
        <div className="text-sm">
          <p className="inline-flex items-center gap-1 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-muted-foreground">
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-foreground" />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 hover:text-foreground" />
            </a>
          )}
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-foreground" />
            </a>
          )}
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center">
        <Link href={ctaLink}>
          <Button className="mx-auto text-sm px-4 py-2">
            <ShoppingBag className="w-4 h-4 mr-2" />
            {ctaText}
          </Button>
        </Link>
      </div>
    </main>
  )
}
