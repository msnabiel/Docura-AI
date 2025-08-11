"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"

const setupSnippet = `# Using the HackRx API
BASE_URL="https://hackrx-api.example.com"

# Or run locally
git clone https://github.com/msnabiel/Docura.git
cd hackrx
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
# BASE_URL="http://localhost:9000"
`

const usageSnippet = `# Example: Submit documents and questions for QA
curl -X POST "$BASE_URL/hackrx-run" \\
  -H "Content-Type: application/json" \\
  -d '{
    "documents": ["https://example.com/file1.pdf", "https://example.com/file2.png"],
    "questions": [
      "What medication is prescribed?",
      "What is the dosage frequency?"
    ],
    "search_strategy": "bm25+bge"
  }'

# Expected Success Response:
# {
#   "answers": [
#     "Amoxicillin 500mg is prescribed.",
#     "Take it 3 times a day."
#   ]
# }
`

export function HackRxEndpointDoc() {
  return (
    <DocPageLayout
      title="HackRx Endpoint"
      description={
        <>
          The <code>/hackrx-run</code> endpoint processes documents (PDF, DOCX, CSV, Images, etc.) and answers natural language questions using <strong>OCR + Hybrid Search + Gemini AI</strong>.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
          <div className="text-center text-muted-foreground text-sm space-y-3">
            <p>Upload files and ask questions to receive structured answers using advanced document understanding and QA.</p>
            <div className="bg-muted/50 p-4 rounded-lg text-xs space-y-2 border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span><strong>POST</strong> /hackrx-run</span>
              </div>
              <div className="text-left mt-2">
                <div><strong>Supported formats:</strong></div>
<div className="flex flex-wrap gap-2 mt-2">
  {[
    { type: "PDF (.pdf)", color: "bg-blue-100 text-blue-800" },
    { type: "Text (.txt)", color: "bg-blue-100 text-blue-800" },
    { type: "CSV (.csv)", color: "bg-green-100 text-green-800" },
    { type: "Excel (.xls, .xlsx)", color: "bg-green-100 text-green-800" },
    { type: "PowerPoint (.ppt, .pptx)", color: "bg-orange-100 text-orange-800" },
    { type: "Word (.doc, .docx)", color: "bg-blue-100 text-blue-800" },
    { type: "Email (.eml)", color: "bg-purple-100 text-purple-800" },
    { type: "HTML (.html)", color: "bg-purple-100 text-purple-800" },
    { type: "XML (.xml)", color: "bg-purple-100 text-purple-800" },
    { type: "JSON (.json)", color: "bg-purple-100 text-purple-800" },
    { type: "Markdown (.md)", color: "bg-purple-100 text-purple-800" },
    { type: "RTF (.rtf)", color: "bg-blue-100 text-blue-800" },
    { type: "Images (.jpg, .png, .gif, .svg)", color: "bg-pink-100 text-pink-800" },
    { type: "Archives (.zip, .rar)", color: "bg-red-100 text-red-800" },
  ].map(({ type, color }) => (
    <span key={type} className={`${color} px-2 py-1 rounded text-xs`}>
      {type}
    </span>
  ))}
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
                  <code className="bg-green-100 text-green-800 px-2 py-1 rounded">POST</code>
                </div>
                <div className="flex justify-between">
                  <strong>Path:</strong>
                  <code>/hackrx-run</code>
                </div>
                <div className="flex justify-between">
                  <strong>Content-Type:</strong>
                  <code>application/json</code>
                </div>
                <div className="flex justify-between">
                  <strong>Parameters:</strong>
                  <code>{`{ documents: string[], questions: string[], search_strategy?: string }`}</code>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2 text-foreground">📋 Response Example</h2>
            <CodeBlockWithCopy
              code={`{
  "answers": [
    "Amoxicillin 500mg is prescribed.",
    "Take it 3 times a day."
  ]
}`}
              className="text-xs"
            />
          </div>
        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> HackRx supports OCR + structured parsing. It works well for scanned prescriptions, research PDFs, slides, spreadsheets, and more.
        </>
      }
    />
  )
}
