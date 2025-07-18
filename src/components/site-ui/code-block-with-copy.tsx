"use client"

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface CodeBlockWithCopyProps {
  code: string
  className?: string
}

export function CodeBlockWithCopy({ code, className }: CodeBlockWithCopyProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        "relative bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto",
        className
      )}
    >
      <pre className="whitespace-pre-wrap">{code}</pre>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleCopy}
        className="absolute top-2 right-2"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </Button>
      {copied && (
        <span className="absolute -top-5 right-2 text-xs text-green-500 animate-fade-in">
          Copied!
        </span>
      )}
    </div>
  )
}
