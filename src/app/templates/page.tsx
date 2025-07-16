"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const fallbackImage = "/hero.jpeg"

const templates = [
  {
    id: "shop",
    name: "E-commerce Shop",
    description: "Shop page with filters, variants & product cards.",
    thumbnail: "/templates/shop.png",
  },
  {
    id: "checkout",
    name: "Checkout Flow",
    description: "Secure checkout UI with payment integration.",
    thumbnail: "/templates/checkout.png",
  },
  {
    id: "account",
    name: "User Account",
    description: "Profile and settings with editable forms.",
    thumbnail: "/templates/account.png",
  },
  {
    id: "landing",
    name: "Landing Page",
    description: "Marketing homepage with hero and CTAs.",
    thumbnail: "/templates/landing.png",
  },
  {
    id: "newsletter",
    name: "Newsletter Signup",
    description: "Simple subscription forms with validation.",
    thumbnail: "/templates/newsletter.png",
  },
]

export default function TemplatesPage() {
  const [search, setSearch] = useState("")

  const filtered = templates.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleImgError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.src = fallbackImage
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 bg-background max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-foreground tracking-tight select-none">
        Nabiel UI Templates
      </h1>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search templates..."
        aria-label="Search templates"
        className="mb-10 w-full max-w-md rounded-md border border-border bg-input px-4 py-2
          text-foreground placeholder:text-muted-foreground
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1
          transition"
        autoFocus
      />

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center text-sm">No templates found.</p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map(({ id, name, description, thumbnail }) => (
            <div
              key={id}
              className="flex flex-col rounded-lg border border-border bg-card shadow-sm
                hover:shadow-md transition-shadow cursor-pointer select-none"
              tabIndex={0}
              role="button"
              onClick={() => alert(`Open template: ${name}`)}
              onKeyDown={(e) => e.key === "Enter" && alert(`Open template: ${name}`)}
            >
              <img
                src={thumbnail}
                alt={`${name} thumbnail`}
                onError={handleImgError}
                className="h-36 w-full rounded-t-lg object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-foreground">{name}</h3>
                <p className="mt-1 flex-grow text-xs text-muted-foreground">{description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 self-start"
                  onClick={(e) => {
                    e.stopPropagation()
                    alert(`Open template: ${name}`)
                  }}
                >
                  View Template
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
