"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"

const setupSnippet = `# Using the HackRx API
BASE_URL="https://hackrx-api.example.com"

# Or run locally
git clone https://github.com/msnabiel/hackrx
cd hackrx
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 9000
# BASE_URL="http://localhost:9000"
`

const usageSnippet = `# Example: Submit prescription image for parsing
curl -X POST "$BASE_URL/parse-prescription" \\
  -H "Accept: application/json" \\
  -F "file=@/path/to/prescription.jpg"

# Local example
curl -X POST "http://localhost:9000/parse-prescription" \\
  -F "file=@prescription.png"

# Expected Success Response:
# {
#   "status": "success",
#   "medications": [
#       {"name": "Amoxicillin", "dose": "500mg", "frequency": "3 times a day"}
#   ]
# }
`

export function HackRxEndpointDoc() {
  return (
    <DocPageLayout
      title="HackRx Endpoint"
      description={
        <>
          The <code>HackRx</code> API extracts structured prescription data from images. Supports <strong>JPEG</strong>, <strong>PNG</strong>, and <strong>PDF</strong>.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
          <div className="text-center text-muted-foreground text-sm space-y-3">
            <p>Upload prescription images to get structured medication details via AI parsing.</p>
            <div className="bg-muted/50 p-4 rounded-lg text-xs space-y-2 border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span><strong>POST</strong> /parse-prescription</span>
              </div>
              <div className="text-left mt-2">
                <div><strong>Supported formats:</strong></div>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">JPEG</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">PNG</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">PDF</span>
                </div>
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
                  <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">POST</code>
                </div>
                <div className="flex justify-between">
                  <strong>Path:</strong>
                  <code>/parse-prescription</code>
                </div>
                <div className="flex justify-between">
                  <strong>Content-Type:</strong>
                  <code>multipart/form-data</code>
                </div>
                <div className="flex justify-between">
                  <strong>Parameter:</strong>
                  <code>file</code> (binary image or PDF)
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2 text-foreground">📋 Response Example</h2>
            <CodeBlockWithCopy
              code={`{
  "status": "success",
  "medications": [
    {"name": "Amoxicillin", "dose": "500mg", "frequency": "3 times a day"},
    {"name": "Ibuprofen", "dose": "200mg", "frequency": "as needed"}
  ]
}`}
              className="text-xs"
            />
          </div>
        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> HackRx is optimized for prescription handwriting but also works with printed prescriptions.
        </>
      }
    />
  )
}
