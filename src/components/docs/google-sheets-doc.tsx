"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const backendSnippet = `// /app/api/query/route.ts

import { NextRequest, NextResponse } from "next/server"
import { embed } from "@/lib/embed"
import { getPineconeClient } from "@/lib/pinecone"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: "Missing query param \`q\`" }, { status: 400 })
  }

  const vector = await embed(query)
  const pinecone = await getPineconeClient()
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!)

  const result = await index.query({
    vector,
    topK: 5,
    includeMetadata: true,
  })

  return NextResponse.json({ results: result.matches })
}`

const usageSnippet = `// Example call from frontend

const getResults = async (query: string) => {
  const res = await fetch(\`/api/query?q=\${encodeURIComponent(query)}\`)
  const data = await res.json()
  console.log("Results:", data.results)
}`

export function GoogleSheetsIntegrationDoc() {
  return (
    <DocPageLayout
      title="Query Endpoint for Document Search"
      description={
        <>
          This endpoint lets you search your document index using a natural language query. It returns the top matches from Pinecone.
        </>
      }
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This simulates a search query.")}>
            Simulate Query
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Send a GET request to <code>/api/query?q=your+question</code> to retrieve relevant chunks.
          </p>
        </div>
      }
      addSnippet={`GET /api/query?q=how+do+I+upload+a+PDF`}
      usageSnippet={usageSnippet}
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🔧 Endpoint Logic</h3>
          <CodeBlockWithCopy code={backendSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🧪 Example Usage</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Query your documents by sending a GET request with <code>?q=</code>:
          </p>
          <CodeBlockWithCopy
            code={`fetch("/api/query?q=what is the refund policy")`}
          />
        </>
      }
    />
  )
}
