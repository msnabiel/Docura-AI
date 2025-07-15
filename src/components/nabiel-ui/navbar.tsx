"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface NavLink {
  label: string
  href: string
}

interface NavBarProps {
  logo?: React.ReactNode
  links?: NavLink[]
  cartCount?: number
  showSearch?: boolean
  sticky?: boolean
  promoBar?: React.ReactNode
}

export const NavBar: React.FC<NavBarProps> = ({
  logo = <span className="font-bold text-xl tracking-tight">Nabiel</span>,
  links = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
  ],
  cartCount = 0,
  showSearch = true,
  sticky = true,
  promoBar,
}) => {
  const pathname = usePathname()

  return (
    <>
      {promoBar}

      <header
        className={cn(
          "z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 transition-all",
          sticky ? "sticky top-0" : ""
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground text-muted-foreground",
                  pathname === link.href && "text-foreground font-semibold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {showSearch && (
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[200px] lg:w-[300px]"
              />
            )}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full bg-primary text-white text-xs px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/account">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Sheet Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-lg">Menu</span>
                    <Button variant="ghost" size="icon" aria-label="Close">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <ScrollArea className="flex-1">
                    <nav className="flex flex-col gap-3 text-sm">
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "text-muted-foreground hover:text-foreground transition",
                            pathname === link.href && "text-foreground font-semibold"
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>

                    {showSearch && (
                      <div className="mt-4">
                        <Input placeholder="Search..." />
                      </div>
                    )}

                    <div className="flex items-center gap-4 mt-6">
                      <Link href="/cart" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                          <span className="absolute -top-2 -right-2 rounded-full bg-primary text-white text-xs px-1">
                            {cartCount}
                          </span>
                        )}
                      </Link>
                      <Link href="/account">
                        <User className="h-5 w-5" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
