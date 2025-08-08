"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"
const setupSnippet = `# Using the deployed Docura API
BASE_URL = "https://docura-nluj.onrender.com"

# Or run locally for development
git clone https://github.com/msnabiel/docura
cd docura
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
# BASE_URL = "http://localhost:8000"`

const usageSnippet = `# Simple Query (Text Response)
curl -X POST "https://docura-nluj.onrender.com/query" \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
  -d '{
    "query": "How does billing work?",
    "max_results": 5
  }'

# Structured Query (JSON Response with metadata)
curl -X POST "https://docura-nluj.onrender.com/query_json" \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
  -d '{
    "query": "What are the key features?",
    "format": "structured"
  }'

# Example queries for different use cases
curl -X POST "https://docura-nluj.onrender.com/query" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "How to install the software?"}'

curl -X POST "https://docura-nluj.onrender.com/query" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "What are the pricing plans?"}'

curl -X POST "https://docura-nluj.onrender.com/query_json" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "Summarize the main points"}'

# Using PowerShell (Windows)
$body = @{
    query = "How does billing work?"
    max_results = 5
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://docura-nluj.onrender.com/query" \\
  -Method POST \\
  -Body $body \\
  -ContentType "application/json"`

export function DocuraQueryDoc() {
  return (
    <DocPageLayout
      title="Document Querying"
      description={
        <>
          Query your uploaded documents using natural language with <code>Docura AI</code>. Get intelligent answers powered by <strong>hybrid retrieval</strong>, <strong>FAISS</strong>, and <strong>Gemini Flash</strong> for accurate, context-aware responses.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
        <div className="text-center text-muted-foreground text-sm space-y-3">
          <p>Ask questions about your documents in <strong>natural language</strong>.</p>
          <div className="bg-muted/50 p-4 rounded-lg text-xs space-y-3 border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span><strong>POST</strong> /query - Simple text responses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span><strong>POST</strong> /query_json - Structured responses with metadata</span>
            </div>
            <div className="text-left mt-3 text-xs">
              <div><strong>Example queries:</strong></div>
              <div className="mt-1 space-y-1 text-muted-foreground">
                <div>• "How does billing work?"</div>
                <div>• "What are the key features?"</div>
                <div>• "Summarize the main points"</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      }
      
      extraInfo={
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <h2 className="font-semibold mb-3 text-foreground">🔍 Query Endpoints</h2>
            <div className="space-y-3">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">POST</code>
                  <code>/query</code>
                </div>
                <p className="text-xs">Returns simple text responses. Perfect for chatbots and basic Q&A.</p>
              </div>
              
              
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">POST</code>
                  <code>/query_json</code>
                </div>
                <p className="text-xs">Returns structured JSON with sources, confidence scores, and metadata.</p>
              </div>
            </div>
          </div>
<section>
  <h2 className="text-xl font-semibold mb-4 text-foreground">📮 Postman Setup</h2>

  <div className="bg-muted/10 dark:bg-muted/20 rounded-lg p-6 border border-muted dark:border-muted/40">
    <div className="space-y-6">

      <div>
        <h3 className="font-medium mb-1 text-foreground">1. Create New Request</h3>
        <div className="text-sm space-y-1 text-muted-foreground">
          <div>• Method: <code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 rounded">POST</code></div>
          <div>• URL: <code className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-foreground">https://docura-nluj.onrender.com/query</code></div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-1 text-foreground">2. Headers</h3>
        <div className="text-sm bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-foreground">
          Content-Type: application/json<br />
          Accept: application/json
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-1 text-foreground">3. Body (raw JSON)</h3>
        <div className="mt-1 text-sm text-muted-foreground">
          <CodeBlockWithCopy
            code={`{
  "query": "How does billing work?",
  "max_results": 5
}`}
            className="text-xs"
          />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-1 text-foreground">4. Send Request</h3>
        <div className="text-sm text-muted-foreground">
          Hit <strong>Send</strong> to get your answer.
        </div>
      </div>

    </div>
  </div>
</section>


          
<section>
  <h2 className="text-xl font-semibold mb-4 text-foreground">📊 Request Parameters</h2>

  <div className="bg-muted/10 dark:bg-muted/20 rounded-lg p-4 border border-muted dark:border-muted/40 text-sm space-y-3 text-muted-foreground">
    <div>
      <span className="font-medium text-foreground">query</span> <span className="text-xs text-muted-foreground">(required)</span><br />
      Your natural language question
    </div>
    <div>
      <span className="font-medium text-foreground">max_results</span> <span className="text-xs text-muted-foreground">(optional)</span><br />
      Number of document chunks to retrieve <span className="italic">(default: 5)</span>
    </div>
    <div>
      <span className="font-medium text-foreground">format</span> <span className="text-xs text-muted-foreground">(/query_json only)</span><br />
      Response format. Use <code className="px-1 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-foreground">"structured"</code> for JSON with source breakdowns.
    </div>
  </div>
</section>

<div>
  <h2 className="font-semibold mb-4 text-foreground">📋 Response Examples</h2>
  <div className="space-y-3">
    
    <div>
      <strong className="block mb-2">/query Response (Simple):</strong>
      <CodeBlockWithCopy
        code={`// HTTP 200 OK
{
  "answer": "Billing works on a monthly subscription basis..."
}`}
      />
    </div>

    <div>
      <strong className="block mb-2">/query_json Response (Structured):</strong>
      <CodeBlockWithCopy
        code={`// HTTP 200 OK
{
  "answer": "Billing works on a monthly subscription...",
  "sources": [
    {"document": "pricing.pdf", "page": 2}
  ],
  "confidence": 0.95,
  "metadata": {"tokens_used": 150}
}`}
      />
    </div>

  </div>
</div>

          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">🧠 Hybrid Retrieval System</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span><strong>Semantic Search:</strong> Vector similarity using FAISS embeddings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span><strong>Keyword Matching:</strong> Traditional BM25 text search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span><strong>Cross-Encoder Reranking:</strong> Final relevance scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span><strong>LLM Generation:</strong> Gemini Flash for natural responses</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">💡 Query Tips</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Be specific:</strong> "How to install on Windows?" vs "How to install?"</li>
              <li><strong>Ask follow-ups:</strong> Build context with related questions</li>
              <li><strong>Use keywords:</strong> Include relevant terms from your documents</li>
              <li><strong>Try different phrasings:</strong> Rephrase if results aren't relevant</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">🎯 Use Cases</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Customer Support:</strong> Answer FAQ and support questions</li>
              <li><strong>Knowledge Management:</strong> Find information in company docs</li>
              <li><strong>Research:</strong> Analyze and summarize research papers</li>
              <li><strong>Compliance:</strong> Query policy and regulatory documents</li>
            </ul>
          </div>
        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> Make sure to upload documents first using the /upload endpoint. 
          The quality of responses depends on the relevance and quality of your uploaded documents.
          Use /query for simple answers, /query_json for detailed responses with sources.
        </>
      }
    />
  )
}
