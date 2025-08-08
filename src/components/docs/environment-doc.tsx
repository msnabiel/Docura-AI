"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import {Button} from "@/components/ui/button"
const installSnippet = `npm install @google/generative-ai`

const envSnippet = `// .env.local
# Gemini
GEMINI_API_KEY=your_gemini_api_key
BEARER_TOKEN=your_secure_bearer_token`

const usageSnippet = `// lib/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
`

export function environmentDoc() {
  return (
    <DocPageLayout
      title="Environment Setup for Docura (Gemini)"
      description={
        <>Add your <code>.env.local</code> with Gemini credentials to power Docura’s intelligent document features.</>
      }
      addSnippet={installSnippet}
      usageSnippet={usageSnippet}
preview={
  <div className="space-y-4 text-sm text-muted-foreground text-center">
        <a
      href="https://ai.google.dev"
      target="_blank"
      rel="noreferrer"
      className="inline-block"
    >
      <Button variant="default" size="sm">
        Visit Gemini Docs
      </Button>
    </a>
    <p>
      This setup powers document enrichment, semantic search, and question answering using Google Gemini.
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
              Use the following command to install the Gemini SDK:
            </p>
            <CodeBlockWithCopy code={installSnippet} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🧠 Why These Keys Matter</h3>
            <ul className="list-disc text-muted-foreground pl-5 text-sm space-y-1">
              <li><strong>GEMINI_API_KEY:</strong> Used to generate embeddings, answer questions, and reason over documents.</li>
              <li><strong>BEARER_TOKEN:</strong> Secures your Docura API endpoints with authentication headers.</li>
            </ul>
          </div>
        </div>
      }
      extraNotes={
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>
            These credentials allow Docura’s intelligent agent to read, analyze, and summarize your documents securely.
          </p>
          <p>
            Learn more from{" "}
            <a href="https://ai.google.dev" target="_blank" rel="noreferrer" className="underline">
              Google Gemini Docs
            </a>.
          </p>
        </div>
      }
    />
  )
}
