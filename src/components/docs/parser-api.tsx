"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"
import { DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const setupSnippet = `# Using the deployed Docura Parser API
BASE_URL = "https://docura-parser.onrender.com"

# Or run locally for development
https://yourapi.example.com-parser
cd docura-parser
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
# BASE_URL = "http://localhost:8000"`

const usageSnippet = `# Single File Parsing
curl -X POST "https://docura-parser.onrender.com/parse" \\
  -F "file=@/path/to/your/document.pdf"

# Batch Parsing (Multiple Files)
curl -X POST "https://docura-parser.onrender.com/parse-batch" \\
  -F "files=@/path/to/file1.pdf" \\
  -F "files=@/path/to/file2.docx"

# Using PowerShell (Windows)
$files = @{ files = Get-Item "C:\\docs\\sample.pdf" }
Invoke-RestMethod -Uri "https://docura-parser.onrender.com/parse" \\
  -Method POST \\
  -Form $files`
const downloadButtons = (
  <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
    <Link href="/downloads/docura-extractor.py" download>
      <Button variant="outline" className="flex items-center gap-2">
        <DownloadIcon className="w-4 h-4" />
        Download Python Extractor
      </Button>
    </Link>
    <Link href="/downloads/docura-parser.zip" download>
      <Button variant="default" className="flex items-center gap-2">
        <DownloadIcon className="w-4 h-4" />
        Download Full Tool (.zip)
      </Button>
    </Link>
  </div>
)
export function DocuraParserDoc() {
  return (
      <>
    {downloadButtons}
    <DocPageLayout
      title="Text Extraction API"
      description={
        <>
          Extract clean, structured text from PDFs, Word files, Excel sheets, images and more using the <code>Text Extraction API</code>. Automatically applies layout analysis, OCR fallback, and text cleaning for robust document processing.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
        <div className="text-center text-muted-foreground text-sm space-y-3">
          <p>Parse your documents to get clean, searchable content.</p>
          <div className="bg-muted/50 p-4 rounded-lg text-xs space-y-3 border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span><strong>POST</strong> /parse - Single document</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span><strong>POST</strong> /parse-batch - Multiple documents</span>
            </div>
            <div className="text-left mt-3 text-xs">
              <div><strong>Supported formats:</strong></div>
<div className="mt-1 space-y-1 text-muted-foreground">
  <div>• PDF, DOCX, PPTX, XLSX, CSV, TXT, JSON</div>
  <div>• PNG, JPG, JPEG, TIFF, BMP (OCR enabled)</div>
  <div>• HTML, EML (email), plain text</div>
</div>

            </div>
          </div>
        </div>
        </div>
      }
      extraInfo={
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <h2 className="font-semibold mb-3 text-foreground">📤 Parser Endpoints</h2>
            <div className="space-y-3">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">POST</code>
                  <code>/parse</code>
                </div>
                <p className="text-xs">Parses a single document and returns clean, extracted text.</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">POST</code>
                  <code>/parse-batch</code>
                </div>
                <p className="text-xs">Parses multiple files in a single request and returns a JSON with filename-text mappings.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">⚙️ How It Works</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Auto Detection:</strong> Selects the best parsing method for each file type</li>
              <li><strong>OCR Fallback:</strong> Applies EasyOCR or Tesseract if text is not found</li>
              <li><strong>Table Extraction:</strong> Uses Camelot for PDFs with structured tables</li>
              <li><strong>Cleaning Pipeline:</strong> Removes junk characters and standardizes output</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">📂 Use Cases</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Document Ingestion:</strong> Prepare files for vector database indexing</li>
              <li><strong>Search Enablement:</strong> Turn PDFs and scans into searchable text</li>
              <li><strong>OCR Automation:</strong> Extract text from scanned invoices, reports</li>
              <li><strong>AI Preprocessing:</strong> Feed cleaned text into downstream LLMs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">📬 Postman Setup</h2>
            <div className="bg-muted/10 dark:bg-muted/20 rounded-lg p-6 border border-muted dark:border-muted/40">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-1 text-foreground">1. New Request</h3>
                  <div className="text-sm space-y-1 text-muted-foreground">
                    <div>• Method: <code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 rounded">POST</code></div>
                    <div>• URL: <code className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-foreground">https://docura-parser.onrender.com/parse</code></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-1 text-foreground">2. Body (Form Data)</h3>
                  <CodeBlockWithCopy
                    code={`Key: file\nValue: [Select a file to upload]`}
                    className="text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> Large scanned files may take longer due to OCR. Ensure high-resolution inputs for best accuracy. Tables in PDFs work best when they have visible lines.
        </>
      }
    />
    </>
  )
}
