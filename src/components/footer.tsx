// components/footer.tsx
import Link from "next/link"
import { Package } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-6 py-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2 text-foreground">
            <Package className="w-5 h-5 text-primary" />
            <span className="font-semibold">nabiel-ui</span>
          </div>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            Beautiful, accessible components for modern React apps.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-muted-foreground">
          <Link
            href="/docs"
            className="hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/nabiel/nabiel-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.npmjs.com/package/nabiel-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            npm
          </Link>
        </div>
      </div>
    </footer>
  )
}
