"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const components = [
  { name: "Button", slug: "button" },
  { name: "Card", slug: "card" },
  { name: "Badge", slug: "badge" },
  // Add more here...
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const match = components.find(
      (comp) => comp.name.toLowerCase() === query.trim().toLowerCase()
    )
    if (match) {
      window.location.href = `/components/${match.slug}`
    }
  }

  return (
    <nav className="border-b px-4 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <Link href="/" className="text-xl font-bold tracking-tight">
        ▨ Vendora
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
        <Link href="/" className="text-sm font-medium hover:underline">
          Get Started
        </Link>
        <Link href="/templates" className="text-sm font-medium hover:underline">
          Templates
        </Link>
        <Link href="/components" className="text-sm font-medium hover:underline">
          Nabiel UI
        </Link>
        
        <Link href="/donations" className="text-sm font-medium hover:underline">
          Donations
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline">
          Contact Us
        </Link>
        <a
          href="https://github.com/msnabiel/nabiel-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:underline"
        >
          GitHub
        </a>
      </div>

      {/* Right: Search */}
      <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
        <Input
          placeholder="Search components..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[200px]"
        />
        <Button type="submit" variant="ghost">
          Go
        </Button>
      </form>

      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t shadow-md px-4 py-3 space-y-3 md:hidden z-50">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input
              placeholder="Search components..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost">
              Go
            </Button>
          </form>
          <Link href="/" className="block text-sm font-medium">Get Started</Link>
          <Link href="/templates" className="block text-sm font-medium">Templates</Link>
                  <Link href="/components" className="text-sm font-medium hover:underline">
          Vendora
        </Link>
          <Link href="/donations" className="block text-sm font-medium">Donations</Link>
          <Link href="/contact" className="block text-sm font-medium">Contact Us</Link>
          <a
            href="https://github.com/msnabiel/nabiel-ui"
            className="block text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  )
}
