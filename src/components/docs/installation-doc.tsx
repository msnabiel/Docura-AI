"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"

const installSnippet = `// Using pip
pip install docura

// Or clone and run locally
git clone https://github.com/your-org/docura
cd docura
pip install -r requirements.txt
uvicorn app.main:app --reload`

const usageSnippet = `# Example: app/main.py (FastAPI entrypoint)
from docura.pipeline import load_documents, query_engine

# Load your data
load_documents("path/to/your/docs")

# Run a query
response = query_engine("How does billing work?")
print(response)`

export function NabielUiInstallationDoc() {
  return (
    <DocPageLayout
      title="Installing Docura"
      description={
        <>
          Get started with <code>Docura</code>, a blazing-fast RAG framework for building <strong>private</strong>, <strong>real-time</strong> document-aware applications using <strong>FastAPI</strong>, <strong>ChromaDB</strong>, and <strong>Gemini Flash</strong>.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="text-center text-muted-foreground text-sm space-y-2">
          <p>Install via <strong>pip</strong> or clone the repo. Start ingesting documents and querying in minutes.</p>
        </div>
      }
      extraInfo={
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <h2 className="font-semibold mb-2">⚡ Quick Start</h2>
            <p>
              Docura runs on <strong>FastAPI</strong> with support for <strong>local vector databases</strong> and offline models — perfect for both development and deployment.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">🧠 Hybrid Retrieval</h2>
            <p>
              Combines <strong>semantic search</strong> (via cosine similarity) with <strong>keyword matching</strong> and <strong>cross-encoder reranking</strong> for highly relevant responses.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">📂 Supported Formats</h2>
            <p>
              Ingest a variety of file types including <code>PDF</code>, <code>DOCX</code>, <code>PPTX</code>, <code>HTML</code>, and <code>email</code>. Bulk ingestion with auto-indexing and <code>system_cache</code> folder support.
            </p>
          </div>
        </div>
      }
    />
  )
}
