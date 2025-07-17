"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, ShoppingCart, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import clsx from "clsx"

interface NavLink {
  label: string
  href: string
  external?: boolean
}

interface NavBarProps {
  logo?: React.ReactNode
  links?: NavLink[]
  cartCount?: number
  showSearch?: boolean
  sticky?: boolean
  promoBar?: React.ReactNode
  storeSlug?: string
  searchPlaceholder?: string
  searchRedirectBase?: string // e.g. "/components"
}

const defaultLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
]

const components = [
  { name: "Button", slug: "button" },
  { name: "Card", slug: "card" },
  { name: "Badge", slug: "badge" }
]

export function NavBar({
  logo = <span className="font-bold text-xl tracking-tight">▨ Vendora</span>,
  links = defaultLinks,
  cartCount = 0,
  showSearch = true,
  sticky = true,
  promoBar,
  storeSlug,
  searchPlaceholder = "Search components...",
  searchRedirectBase = "/components",
}: NavBarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  const prefix = storeSlug ? `/store/${storeSlug}` : ""

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const match = components.find(
      (comp) => comp.name.toLowerCase() === query.trim().toLowerCase()
    )
    if (match) {
      window.location.href = `${searchRedirectBase}/${match.slug}`
    }
  }

  return (
    <>
      {promoBar}

      <nav
        className={clsx(
          "border-b bg-background/80 backdrop-blur-sm px-4 py-3 shadow-sm z-50 transition-all",
          sticky && "sticky top-0"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={prefix || "/"} className="text-xl font-bold tracking-tight">
            {logo}
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {links.map(({ label, href, external }) => {
              const fullHref = external ? href : `${prefix}${href}`
              return external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={fullHref}
                  className={clsx(
                    "relative text-sm font-medium transition-colors hover:text-primary",
                    pathname === fullHref && "text-primary"
                  )}
                >
                  {label}
                  {pathname === fullHref && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {showSearch && (
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <Input
                  placeholder={searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-[200px]"
                />
                <Button type="submit" variant="ghost">
                  Go
                </Button>
              </form>
            )}
            <Link href={`${prefix}/cart`} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full bg-primary text-white text-xs px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href={`${prefix}/account`}>
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 space-y-4 md:hidden">
            {showSearch && (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <Input
                  placeholder={searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit" variant="ghost">
                  Go
                </Button>
              </form>
            )}
            {links.map(({ label, href, external }) => {
              const fullHref = external ? href : `${prefix}${href}`
              return external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={fullHref}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block text-sm font-medium",
                    pathname === fullHref && "text-primary"
                  )}
                >
                  {label}
                </Link>
              )
            })}
            <div className="flex gap-4 pt-2">
              <Link href={`${prefix}/cart`} className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 rounded-full bg-primary text-white text-xs px-1">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href={`${prefix}/account`}>
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
