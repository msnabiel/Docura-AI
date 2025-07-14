"use client"

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function buttonDoc() {
  const [copied, setCopied] = useState(false)
  const code = `<Button variant="outline">Click me</Button>`

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Button</h1>
      <p className="text-muted-foreground mb-4">Buttons allow users to take actions.</p>

      <div className="mb-6 space-y-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono flex items-center justify-between">
        <span>{code}</span>
        <button onClick={handleCopy} className="ml-4 text-muted-foreground hover:text-foreground">
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}
