"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { NavBar } from "@/components/vendora-ui/navbar"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function navbarDoc() {
  return (
    <DocPageLayout
      title="NavBar"
      description={
        <>
          The <code>NavBar</code> component is a responsive and customizable e-commerce navigation bar with support for logo, links, search, cart, account, and mobile drawer.
        </>
      }
      preview={
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
      }
      addSnippet={`npx nabiel-ui add navbar`}
      usageSnippet={`import { NavBar } from "@/components/nabiel-ui/navbar"

export default function Page() {
  return (
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
  )
}`}
      extraNotes={
        <>
          ✅ You can extend the <code>NavBar</code> by adding user auth logic, category dropdowns, or a mini cart preview.
        </>
      }
    />
  )
}
