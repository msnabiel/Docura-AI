"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { HeroSection } from "@/components/nabiel-ui/hero-section"

export function heroDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">HeroSection</h1>
      <p className="text-muted-foreground mb-6">
        The <code>HeroSection</code> component is a large promotional banner used on landing pages to introduce your brand or product.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Hero Section</CardTitle>
            <CardDescription>
              A responsive 2-column hero section with text and image.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <HeroSection
              title="Discover Aromatherapy"
              subtitle="Soothing scents for every mood. Hand-poured. Natural. Beautiful."
              ctaLabel="Browse Collection"
              ctaHref="/shop"
              imageSrc="/hero.jpeg" // Replace with your own hero image path
            />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<HeroSection
  title="Discover Aromatherapy"
  subtitle="Soothing scents for every mood. Hand-poured. Natural. Beautiful."
  ctaLabel="Browse Collection"
  ctaHref="/shop"
  imageSrc="/hero.jpeg"
/>`}
        </code>
      </div>
    </div>
  )
}
