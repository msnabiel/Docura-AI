"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install @google/generative-ai @pinecone-database/pinecone`

const envSnippet = `// .env.local
# Pinecone
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENV=your_pinecone_environment   # e.g. us-central1-gcp
PINECONE_INDEX=docura-index

# Gemini
GEMINI_API_KEY=your_gemini_api_key`

const usageSnippet = `// lib/pinecone.ts
import { Pinecone } from "@pinecone-database/pinecone"

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
})

export const index = pinecone.index(process.env.PINECONE_INDEX!)
`

export function environmentDoc() {
  return (
    <DocPageLayout
      title="Environment Setup for Docura (Gemini + Pinecone)"
      description={
        <>Add your <code>.env.local</code> with Pinecone and Gemini API keys to use Docura's intelligent document search features.</>
      }
      addSnippet={installSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="space-y-4 text-sm text-muted-foreground text-center">
          <p>
            This setup powers document embedding, indexing, and querying using Google Gemini + Pinecone.
          </p>
        </div>
      }
      extraInfo={
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">🔑 Required Environment Variables</h3>
            <CodeBlockWithCopy code={envSnippet} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">📦 Installation</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Use the following command to install the required SDKs:
            </p>
            <CodeBlockWithCopy code={installSnippet} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🧠 Why These Keys Matter</h3>
            <ul className="list-disc text-muted-foreground pl-5 text-sm space-y-1">
              <li><strong>GEMINI_API_KEY:</strong> Used to generate embeddings and answer queries</li>
              <li><strong>PINECONE_API_KEY:</strong> Powers vector index creation, upserts, and searches</li>
              <li><strong>PINECONE_ENV / PINECONE_INDEX:</strong> Needed to connect to your vector database</li>
            </ul>
          </div>
        </div>
      }
      extraNotes={
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>
            These variables enable Docura’s document intelligence engine. Be sure not to share your API keys publicly.
          </p>
          <p>
            Want a deeper dive? Check the Docs for{" "}
            <a href="https://docs.pinecone.io" target="_blank" rel="noreferrer" className="underline">
              Pinecone
            </a>{" "}
            or{" "}
            <a href="https://ai.google.dev" target="_blank" rel="noreferrer" className="underline">
              Google Gemini
            </a>.
          </p>
        </div>
      }
    />
  )
}
