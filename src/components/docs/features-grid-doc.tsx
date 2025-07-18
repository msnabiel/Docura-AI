"use client"

import { FeaturesGrid } from "@/components/vendora-ui/FeaturesGrid"
import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { LayoutDashboard, ShoppingCart, Zap } from "lucide-react"

export function featuresGridDoc() {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast",
      description:
        "Optimized for performance and instant load times with Tailwind and Framer Motion.",
    },
    {
      icon: ShoppingCart,
      title: "Commerce-Ready",
      description:
        "Prebuilt components for carts, checkouts, and product listings.",
    },
    {
      icon: LayoutDashboard,
      title: "Beautiful Defaults",
      description:
        "Thoughtful UI design straight out of the box, no extra configuration.",
    },
  ]

  const usageSnippet = `import { FeaturesGrid } from "@/components/features-grid"
import { Zap, ShoppingCart, LayoutDashboard } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized for performance and instant load times with Tailwind and Framer Motion.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce-Ready",
    description: "Prebuilt components for carts, checkouts, and product listings.",
  },
  {
    icon: LayoutDashboard,
    title: "Beautiful Defaults",
    description: "Thoughtful UI design straight out of the box, no extra configuration.",
  },
]

<FeaturesGrid features={features} />
`

  return (
    <DocPageLayout
      title="FeaturesGrid"
      description={
        <>
          The <code>FeaturesGrid</code> component helps you highlight your product's benefits in a
          responsive 1–3 column layout using icons, titles, and descriptions.
        </>
      }
      preview={ <div className="max-w-4xl mx-auto">
      <FeaturesGrid features={features} />
      </div> }
      addSnippet={`npx nabiel-ui add features-grid`}
      usageSnippet={usageSnippet}
      extraNotes={
        <>
          💡 You can pass any <code>LucideIcon</code> as the icon. This layout works great for
          homepages, pricing pages, or landing pages.
        </>
      }
    />
  )
}
