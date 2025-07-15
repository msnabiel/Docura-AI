"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Footer } from "@/components/nabiel-ui/footer"

export function footerDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Footer</h1>
      <p className="text-muted-foreground mb-6">
        The <code>Footer</code> component provides a responsive e-commerce site footer with links, contact info, and social media icons.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Footer</CardTitle>
            <CardDescription>A clean footer with branding, quick links, and social links.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <Footer
              contactEmail="hello@nabiel.store"
              links={[
                { label: "Shop", href: "/shop" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ]}
              social={{
                instagram: "https://instagram.com/nabiel.store",
                twitter: "https://twitter.com/nabiel_store",
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<Footer
  contactEmail="hello@nabiel.store"
  links={[
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
  social={{
    instagram: "https://instagram.com/nabiel.store",
    twitter: "https://twitter.com/nabiel_store",
  }}
/>`}
        </code>
      </div>
    </div>
  )
}
