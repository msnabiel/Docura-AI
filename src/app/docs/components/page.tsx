"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const components = [
  {
    name: "Button",
    slug: "button",
    description: "Flexible, accessible button component.",
  },
  {
    name: "Card",
    slug: "card",
    description: "Composable card layout for content blocks.",
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Status or tag label for highlighting.",
  },
  // Add more components here...
]

export default function ComponentsPage() {
  const [query, setQuery] = useState("")

  const filtered = components.filter((comp) =>
    comp.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Heading */}
      <div className="mb-8 sm:mb-10 text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Browse the <span className="font-medium text-foreground">nabiel-ui</span> component library.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-8 flex justify-center">
        <Input
          type="text"
          placeholder="Search components..."
          className="w-full max-w-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.length > 0 ? (
          filtered.map((component) => (
            <Link key={component.slug} href={`/components/${component.slug}`}>
              <Button
                variant="ghost"
                className="w-full h-16 sm:h-20 text-center text-base font-medium transition hover:shadow-sm"
              >
                {component.name}
              </Button>
            </Link>
          ))
        ) : (
          <p className="text-sm text-muted-foreground col-span-full text-center">
            No components found for <span className="font-semibold text-foreground">{query}</span>.
          </p>
        )}
      </div>
    </div>
  )
}
