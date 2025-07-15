"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { NavBar } from "@/components/nabiel-ui/navbar"

export function navbarDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">NavBar</h1>
      <p className="text-muted-foreground mb-6">
        The <code>NavBar</code> component is a responsive and customizable e-commerce navigation bar with support for logo, links, search, cart, account, and mobile drawer.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example NavBar</CardTitle>
            <CardDescription>A responsive e-commerce header with cart and search.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <NavBar
              cartCount={2}
              showSearch
              promoBar={
                <div className="bg-primary text-white text-sm text-center py-1">
                  🎉 Free shipping on orders over ₹999!
                </div>
              }
              links={[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/shop" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<NavBar
  cartCount={2}
  showSearch
  promoBar={
    <div className="bg-primary text-white text-sm text-center py-1">
      🎉 Free shipping on orders over ₹999!
    </div>
  }
  links={[
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
  ]}
/>`}
        </code>
      </div>
    </div>
  )
}
