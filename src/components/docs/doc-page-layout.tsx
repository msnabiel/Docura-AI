"use client"

import { ReactNode } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"

interface DocPageLayoutProps {
  title: string
  description: React.ReactNode // ✅ fix here
  preview: ReactNode
  addSnippet?: string
  usageSnippet?: string
  extraInfo?: ReactNode
  extraNotes?: ReactNode
}

export function DocPageLayout({
  title,
  description,
  preview,
  addSnippet,
  usageSnippet,
  extraInfo,
  extraNotes,
}: DocPageLayoutProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground mb-6">{description}</p>

      {/* Preview */}
      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example {title}</CardTitle>
            <CardDescription>
              A demo of the <code>{title}</code> component in action.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">{preview}</CardContent>
        </Card>
      </div>

      {/* How to add */}
      {addSnippet && (
        <>
          <h2 className="text-xl font-semibold mb-2">How to add</h2>
          <CodeBlockWithCopy code={addSnippet} />
        </>
      )}

      {/* How to use */}
      {usageSnippet && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">How to use</h2>
          <CodeBlockWithCopy code={usageSnippet} />
        </>
      )}

      {/* Extra Info (like tips, notes, etc.) */}
      {extraInfo && <div className="mt-6">{extraInfo}</div>}

      {/* Extra Notes at bottom */}
      {extraNotes && (
        <div className="mt-6 text-sm text-muted-foreground">{extraNotes}</div>
      )}
    </div>
  )
}
