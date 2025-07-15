"use client"

import { HeroSection } from "@/components/nabiel-ui/hero-section"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export default function HeroDoc() {
  return (
    <DocPageLayout
      title="HeroSection"
      description="The `HeroSection` component is a large promotional banner used on landing pages to introduce your brand or product."
      preview={
        <HeroSection
          title="Discover Aromatherapy"
          subtitle="Soothing scents for every mood. Hand-poured. Natural. Beautiful."
          ctaLabel="Browse Collection"
          ctaHref="/shop"
          imageSrc="/hero.jpeg" // Replace with your own hero image path
        />
      }
      addSnippet={`npx nabiel-ui add hero-section`}
      usageSnippet={`<HeroSection
  title="Discover Aromatherapy"
  subtitle="Soothing scents for every mood. Hand-poured. Natural. Beautiful."
  ctaLabel="Browse Collection"
  ctaHref="/shop"
  imageSrc="/hero.jpeg"
/>`}
    />
  )
}
