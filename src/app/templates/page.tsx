"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  hover: {
    scale: 1.03,
    boxShadow:
      "0 10px 15px rgba(255, 182, 193, 0.3)", // pastel pink shadow
  },
}

export default function TemplatesPage() {
  const [search, setSearch] = useState("")

  const filtered = templates.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleImgError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.src = fallbackImage
  }

  return (
    <main
  className="min-h-screen flex flex-col items-center px-6 py-16 max-w-7xl mx-auto"
  style={{
    background: "linear-gradient(135deg, #FFEFF1 0%, #FFF4E6 50%, #F9F6FF 100%)",
  }}
>

      <h1 className="text-4xl font-extrabold mb-12 text-[#333333] dark:text-[#444444] tracking-tight select-none">
        Vendora Templates
      </h1>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search templates..."
        aria-label="Search templates"
        className="mb-14 w-full max-w-md rounded-lg border border-[#F5C6CB] bg-[#FFEFF1] dark:bg-[#F9F6FF] dark:border-[#D8C6F0] px-5 py-3
          text-lg font-semibold text-[#a6365a] dark:text-[#7d579f] placeholder-[#d299ba]
          focus:outline-none focus:ring-2 focus:ring-[#F5C6CB] focus:ring-offset-1
          transition"
        autoFocus
      />

      {filtered.length === 0 ? (
        <p className="text-[#a98c9e] dark:text-[#9b88a1] text-center text-lg font-medium">
          No templates found.
        </p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {filtered.map(({ id, name, description, thumbnail }) => (
<motion.div
  key={id}
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
  tabIndex={0}
  role="button"
  onClick={() => alert(`Open template: ${name}`)}
  onKeyDown={(e) => e.key === "Enter" && alert(`Open template: ${name}`)}
  className="flex flex-col rounded-xl bg-[#FFF9F7] cursor-pointer select-none border border-[#FFE8E6] shadow-sm hover:shadow-md transition-shadow"
>
  <img
    src={thumbnail}
    alt={`${name} thumbnail`}
    onError={handleImgError}
    className="h-40 w-full rounded-t-xl object-cover transition-transform duration-300"
    loading="lazy"
    draggable={false}
  />
  <div className="p-5 flex flex-col flex-grow">
    <h3 className="text-lg font-semibold text-[#7A5C54]">{name}</h3>
    <p className="mt-2 flex-grow text-sm text-black/80">
  {description}
</p>

    <Button
      variant="outline"
      size="sm"
      className="mt-6 self-start border-[#FFD7D3] text-[#C2857B] hover:bg-[#FFE6E4] hover:text-[#A36257]"
      onClick={(e) => {
        e.stopPropagation()
        alert(`Open template: ${name}`)
      }}
    >
      View Template
    </Button>
  </div>
</motion.div>

            ))}
          </AnimatePresence>
        </div>
      )}
    </main>
  )
}
