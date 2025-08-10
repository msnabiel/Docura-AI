"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"
const setupSnippet = `# Using the deployed Docura API
BASE_URL = "https://yourapi.example.com"

# Or run locally for development
https://yourapi.example.com
cd docura
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
# BASE_URL = "http://localhost:8000"`

const usageSnippet = `# Upload a document using cURL
curl -X POST "https://yourapi.example.com/upload" \\
  -H "Accept: application/json" \\
  -F "file=@/path/to/your/document.pdf"

# For local development
curl -X POST "http://localhost:8000/upload" \\
  -H "Accept: application/json" \\
  -F "file=@document.pdf"

# Upload different file types
curl -X POST "https://yourapi.example.com/upload" \\
  -F "file=@presentation.pptx"

curl -X POST "https://yourapi.example.com/upload" \\
  -F "file=@document.docx"

curl -X POST "https://yourapi.example.com/upload" \\
  -F "file=@webpage.html"

# Expected Success Response:
# HTTP/1.1 200 OK
# Content-Type: application/json
# 
# {
#   "status": "success",
#   "message": "Document uploaded and processed successfully",
#   "filename": "document.pdf",
#   "file_size": 2048576,
#   "processing_time": "3.2s"
# }

# Using PowerShell (Windows)
$form = @{
    file = Get-Item -Path "C:\\path\\to\\document.pdf"
}
Invoke-RestMethod -Uri "https://yourapi.example.com/upload" -Method POST -Form $form`

export function DocuraUploadDoc() {
  return (
    <DocPageLayout
      title="Document Upload"
      description={
        <>
          Upload and ingest documents into <code>Docura AI</code> for processing. Supports <strong>PDF</strong>, <strong>DOCX</strong>, <strong>PPTX</strong>, <strong>HTML</strong>, and email files with automatic indexing using <strong>FAISS</strong>.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
        <div className="text-center text-muted-foreground text-sm space-y-3">
          <p>Upload documents to make them <strong>searchable and queryable</strong> with AI.</p>
          <div className="bg-muted/50 p-4 rounded-lg text-xs space-y-2 border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span><strong>POST</strong> /upload</span>
            </div>
            <div className="text-left mt-2">
              <div><strong>Supported formats:</strong></div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">PDF</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">DOCX</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">PPTX</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">HTML</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Email</span>
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
                  <code>/upload</code>
                </div>
                <div className="flex justify-between">
                  <strong>Content-Type:</strong>
                  <code>multipart/form-data</code>
                </div>
                <div className="flex justify-between">
                  <strong>Parameter:</strong>
                  <code>file</code> (binary file data)
                </div>
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
          <div>• URL: <code className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-foreground">https://yourapi.example.com/upload</code></div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-1 text-foreground">2. Body Configuration</h3>
        <div className="text-sm space-y-1 text-muted-foreground">
          <div>• Select <code className="bg-muted px-1 py-0.5 rounded">form-data</code></div>
          <div>• Key: <code className="bg-muted px-1 py-0.5 rounded">file</code> (set type to <strong>File</strong>)</div>
          <div>• Value: Upload your document</div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-1 text-foreground">3. Headers</h3>
        <div className="text-sm bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-foreground">
          Content-Type: multipart/form-data
        </div>
        <p className="text-xs mt-1 text-muted-foreground">This is auto-set by Postman.</p>
      </div>

      <div>
        <h3 className="font-medium mb-1 text-foreground">4. Send Request</h3>
        <div className="text-sm text-muted-foreground">
          Hit <strong>Send</strong> and check the response.
        </div>
      </div>

    </div>
  </div>
</section>

          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">🔄 Processing Pipeline</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span><strong>Text Extraction:</strong> Extract content from various file formats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span><strong>Chunking:</strong> Split documents into semantic chunks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span><strong>Embedding:</strong> Generate vector embeddings for similarity search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span><strong>Indexing:</strong> Store in FAISS for fast retrieval</span>
              </div>
            </div>
          </div>
          
<div>
  <h2 className="font-semibold mb-2 text-foreground">📋 Response Examples</h2>
  <div className="space-y-3">

    <div>
      <strong className="block mb-2">Success Response:</strong>
      <CodeBlockWithCopy
        code={`// HTTP 200 OK
{
  "status": "success",
  "message": "Document uploaded and processed",
  "filename": "document.pdf",
  "file_size": 2048576
}`}
        className="text-xs"
      />
    </div>

    <div>
      <strong className="block mb-2">Error Response:</strong>
      <CodeBlockWithCopy
        code={`// HTTP 400 Bad Request
{
  "error": "Invalid file type",
  "supported_formats": ["pdf", "docx", "pptx", "html"]
}`}
        className="text-xs"
      />
    </div>

  </div>
</div>

          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">📊 File Limits & Guidelines</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>File Size:</strong> Recommended max 50MB per file</li>
              <li><strong>Batch Upload:</strong> Upload multiple files sequentially</li>
              <li><strong>File Names:</strong> Use descriptive names for better organization</li>
              <li><strong>Processing Time:</strong> Varies by file size and complexity</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold mb-2 text-foreground">⚡ Testing Tips</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Start Small:</strong> Test with a small PDF first</li>
              <li><strong>Check Response:</strong> Verify successful upload before querying</li>
              <li><strong>File Path:</strong> Use absolute paths in cURL commands</li>
              <li><strong>Format Support:</strong> Stick to supported file formats</li>
            </ul>
          </div>
        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> Documents are automatically processed and indexed after upload. 
          The system handles text extraction, chunking, and vector embedding generation seamlessly. 
          Wait for successful response before querying documents.
        </>
      }
    />
  )
}
