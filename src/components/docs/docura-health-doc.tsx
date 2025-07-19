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

const usageSnippet = `# Using cURL
curl -X GET "https://docura-nluj.onrender.com/health" \\
  -H "Accept: application/json"

# For local development
curl -X GET "http://localhost:8000/health" \\
  -H "Accept: application/json"

# Expected Response:
# HTTP/1.1 200 OK
# Content-Type: application/json
# 
# {
#   "message": "Document Query API",
#   "version": "1.0.0",
#   "endpoints": {
#     "health": "/health",
#     "upload": "/upload",
#     "query": "/query",
#     "query_json": "/query_json"
#   }
# }

# Using PowerShell (Windows)
Invoke-RestMethod -Uri "https://docura-nluj.onrender.com/health" -Method GET

# Using wget
wget -qO- "https://docura-nluj.onrender.com/health"`

export function DocuraHealthDoc() {
  return (
    <DocPageLayout
      title="Health Check Endpoint"
      description={
        <>
          Monitor your <code>Docura AI</code> server status and discover available endpoints using the <strong>/health</strong> endpoint. Perfect for monitoring, debugging, and API discovery.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
        <div className="text-center text-muted-foreground text-sm space-y-3">
          <p>Check if your <strong>Docura server</strong> is running and healthy.</p>
          <div className="bg-muted/50 p-4 rounded-lg text-xs space-y-2 border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span><strong>GET</strong> /health</span>
            </div>
            <div className="text-left mt-2">
              <div><strong>Returns:</strong></div>
              <div>• Server status message</div>
              <div>• API version</div>
              <div>• Available endpoints</div>
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
                  <strong>Method:</strong>
                  <code className="bg-green-100 text-green-800 px-2 py-1 rounded">GET</code>
                </div>
                <div className="flex justify-between">
                  <strong>Path:</strong>
                  <code>/health</code>
                </div>
                <div className="flex justify-between">
                  <strong>Authentication:</strong>
                  <span>None required</span>
                </div>
                <div className="flex justify-between">
                  <strong>Rate Limit:</strong>
                  <span>Unlimited</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold mb-3 text-foreground">📮 Postman Setup</h2>
            <div className="bg-muted/20 rounded-lg p-4 space-y-3">
              <div>
                <strong>1. Create New Request:</strong>
                <div className="mt-1 text-xs">
                  • Method: <code>GET</code><br/>
                  • URL: <code>https://docura-nluj.onrender.com/health</code>
                </div>
              </div>
              <div>
                <strong>2. Headers (Optional):</strong>
                <div className="mt-1 text-xs">
                  • <code>Accept: application/json</code>
                </div>
              </div>
              <div>
                <strong>3. Send Request:</strong>
                <div className="mt-1 text-xs">
                  Click "Send" - No authentication needed!
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">✅ Use Cases</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Health Monitoring:</strong> Check if your Docura server is running</li>
              <li><strong>API Discovery:</strong> Get a list of all available endpoints</li>
              <li><strong>Version Checking:</strong> Verify which version of Docura is running</li>
              <li><strong>Load Balancer Health Checks:</strong> Perfect for deployment health checks</li>
            </ul>
          </div>
          
<div>
  <h2 className="font-semibold mb-2 text-foreground">📋 Response Structure</h2>
  <CodeBlockWithCopy
    code={`// Example Response
{
  "message": "Document Query API",
  "version": "1.0.0",
  "endpoints": {
    "health": "/health",
    "upload": "/upload",
    "query": "/query",
    "query_json": "/query_json"
  }
}`}
    className="text-xs"
  />
</div>

          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">🔧 Testing Tools</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Postman:</strong> Perfect for interactive testing and collection management</li>
              <li><strong>cURL:</strong> Command-line testing and scripting</li>
              <li><strong>Browser:</strong> Simply visit the URL for quick checks</li>
              <li><strong>Monitoring Tools:</strong> Use for uptime monitoring (Pingdom, UptimeRobot)</li>
            </ul>
          </div>
        </div>
      }
      extraNotes={
        <>
          <strong>Tip:</strong> Use this endpoint for monitoring dashboards, health checks in CI/CD pipelines, 
          and to verify server connectivity before making other API calls. No authentication required!
        </>
      }
    />
  )
}
