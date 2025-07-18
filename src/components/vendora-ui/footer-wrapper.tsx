"use client"

import { Footer } from "@/components/vendora-ui/footer"
import { useEffect, useState } from "react"

export function ClientFooter({ slug }: { slug: string }) {
  const [contactEmail, setContactEmail] = useState("")
  const [socials, setSocials] = useState({
    instagram: "",
    twitter: "",
    facebook: "",
  })

  useEffect(() => {
    const data = localStorage.getItem(`site-${slug}`)
    if (data) {
      try {
        const parsed = JSON.parse(data)
        setContactEmail(parsed?.contactEmail || `support@${slug}.store`)
        setSocials(parsed?.socials || {})
      } catch (e) {
        console.error("Invalid localStorage data")
      }
    }
  }, [slug])

  return (
    <Footer
      businessName={slug.toUpperCase()}
      storeSlug={slug}
      logo={<span className="font-bold text-xl">{slug.toUpperCase()}</span>}
      contactEmail={contactEmail}
      social={socials}
      links={[
        { label: "Shop", href: "/shop" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  )
}
