"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"

const setupSnippet = `# Using the Cache API
BASE_URL="https://docura-api.example.com"

# Or run locally
git clone https://github.com/msnabiel/Docura.git
cd Docura
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
# BASE_URL="http://localhost:9000"
`

const usageSnippet = `# Get cache statistics
curl -X GET "$BASE_URL/cache/stats" \\
  -H "Accept: application/json"

# Clear all cached documents
curl -X POST "$BASE_URL/cache/clear" \\
  -H "Accept: application/json"

# Clear expired cache entries (if applicable)
curl -X POST "$BASE_URL/cache/clear-expired" \\
  -H "Accept: application/json"
`

export function CacheEndpointDoc() {
  return (
    <DocPageLayout
      title="Cache Endpoint"
      description={
        <>
          The <code>Cache</code> API provides utilities for inspecting and managing
          Docura's in-memory document cache. These endpoints are useful for
          developers and admins who want to monitor cache usage, clear stored
          data, or maintain optimal system performance.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
          <div className="text-center text-muted-foreground text-sm space-y-3">
            <p>
              Use the Cache API to check how many documents are cached,
              clear cache entries, or remove expired ones.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg text-xs space-y-2 border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span><strong>GET</strong> /cache/stats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span><strong>POST</strong> /cache/clear</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span><strong>POST</strong> /cache/clear-expired</span>
              </div>
            </div>
          </div>
        </div>
      }
      extraInfo={
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <h2 className="font-semibold mb-3 text-foreground">📡 Endpoint Details</h2>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <strong>GET:</strong>
                  <code className="bg-green-100 text-green-800 px-2 py-1 rounded">/cache/stats</code>
                </div>
                <div className="text-xs text-muted-foreground">
                  Returns a JSON object with current cache statistics, such as number of entries, size, and hit/miss counts.
                </div>
                <div className="flex justify-between mt-3">
                  <strong>POST:</strong>
                  <code className="bg-red-100 text-red-800 px-2 py-1 rounded">/cache/clear</code>
                </div>
                <div className="text-xs text-muted-foreground">
                  Clears <strong>all</strong> documents from the cache. Useful when invalidating stale data.
                </div>
                <div className="flex justify-between mt-3">
                  <strong>POST:</strong>
                  <code className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">/cache/clear-expired</code>
                </div>
                <div className="text-xs text-muted-foreground">
                  Removes expired cache entries. If no expiry mechanism is configured, this returns a success message without clearing any entries.
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2 text-foreground">📋 Response Examples</h2>
            <CodeBlockWithCopy
              code={`# GET /cache/stats
{
  "total_entries": 42,
  "total_size_kb": 512,
  "hit_count": 120,
  "miss_count": 15
}

# POST /cache/clear
{
  "success": true,
  "message": "All cache entries cleared"
}

# POST /cache/clear-expired
{
  "success": true,
  "cleared_entries": 0,
  "message": "No cache expiry configured - no entries to clear"
}`}
              className="text-xs"
            />
          </div>
        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> Clearing the cache will remove all stored documents from memory. 
          If the system depends on cached results for performance, be aware that subsequent queries may take longer until the cache is repopulated.
        </>
      }
    />
  )
}
