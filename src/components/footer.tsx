"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FooterLink {
  label: string
  href: string
}

export interface FooterProps {
  logo?: React.ReactNode
  links?: FooterLink[]
  contactEmail?: string
  social?: {
    facebook?: string
    twitter?: string
    instagram?: string
  }
}

export const Footer: React.FC<FooterProps> = ({
  logo = <span className="font-bold text-xl">Nabiel UI</span>,
  links = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "GitHub", href: "https://github.com/msnabiel/nabiel-ui", external: true },
],
  contactEmail = "msyednabiel@gmail.com",
  social = {
    instagram: "https://instagram.com/nabiel.store",
    twitter: "https://twitter.com/nabiel_store",
    facebook: "https://facebook.com/nabiel.store",
  },
}) => {
  return (
    <footer className="bg-muted border-t text-muted-foreground">
      <div className="container px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="space-y-2">
          <Link href="/" className="text-foreground">
            {logo}
          </Link>
<p className="text-sm">
  Build better, faster. Beautiful, production-ready components for commerce apps.
</p>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2 text-foreground">Quick Links</h3>
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-sm font-semibold mb-2 text-foreground">Contact</h3>
          <ul className="space-y-1">
            <li>
              <a href={`mailto:${contactEmail}`} className="hover:text-foreground transition flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {contactEmail}
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-4">
            {social?.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {social?.twitter && (
              <a href={social.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {social?.facebook && (
              <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t text-center py-4 text-xs">
        &copy; {new Date().getFullYear()} Nabiel. All rights reserved.
      </div>
    </footer>
  )
}
