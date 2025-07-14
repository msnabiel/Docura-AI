"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const [copied, setCopied] = useState(false)
  const command = "npm install nabiel-ui"

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6 space-y-10">
      {/* Title */}
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-muted-foreground text-base">
          Start building fast, beautiful commerce interfaces with{" "}
          <span className="text-foreground font-medium">nabiel-ui</span>.
        </p>
      </div>

      {/* Install Command */}
      <div className="relative w-full flex items-center justify-between bg-muted rounded-md px-4 py-3 text-sm font-mono text-muted-foreground">
        <span>{command}</span>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleCopy}
          className="hover:text-foreground"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        {copied && (
          <span className="absolute -top-6 right-2 text-xs text-green-500 animate-fade-in">
            Copied!
          </span>
        )}
      </div>

      {/* Usage Example */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Usage</h2>
        <pre className="rounded-md bg-muted px-4 py-3 text-sm font-mono text-muted-foreground overflow-x-auto">
{`import { Button } from "nabiel-ui"

export default function Example() {
  return <Button>Add to Cart</Button>
}`}
        </pre>
      </div>

      {/* Next Steps */}
      <div className="flex justify-center">
        <Link href="/components">
          <Button variant="default" size="lg">
            Browse Components
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
