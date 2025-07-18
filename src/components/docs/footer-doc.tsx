"use client"

import { Footer } from "@/components/vendora-ui/footer"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function footerDoc() {
  return (
    <DocPageLayout
      title="Footer"
      description={
        <>
          The <code>Footer</code> component provides a responsive e-commerce site footer with links, contact
          info, and social media icons.
        </>
      }
      preview={
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
      }
      addSnippet={`npx nabiel-ui add footer`}
      usageSnippet={`import { Footer } from "@/components/nabiel-ui/footer"

export default function Page() {
  return (
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
  )
}`}
      extraNotes={
        <>
          💡 You can customize the layout, add a newsletter signup, or inject additional links like FAQs, terms, or
          support. The `social` prop is optional and supports Instagram, Twitter, and LinkedIn.
        </>
      }
    />
  )
}
