"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"

const setupSnippet = `# Production API
BASE_URL="https://docura-nluj.onrender.com"

# Local Development
BASE_URL="http://localhost:8000"`

const usageSnippet = `# Quick Upload Example
curl -X POST "https://docura-nluj.onrender.com/upload" \\
  -F "file=@document.pdf"`

export function examplesDoc() {
  return (
    <DocPageLayout
      title="API Usage Examples"
      description="Ready-to-use examples for uploading documents to Docura AI using cURL, Python, and Postman."
      addSnippet={setupSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-3">Quick Start Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-600 dark:text-blue-400">cURL</div>
                  <div className="text-xs text-muted-foreground mt-1">Command line upload</div>
                </div>
                <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg">
                  <div className="font-semibold text-green-600 dark:text-green-400">Python</div>
                  <div className="text-xs text-muted-foreground mt-1">Script integration</div>
                </div>
                <div className="bg-white dark:bg-slate-900/50 p-4 rounded-lg">
                  <div className="font-semibold text-orange-600 dark:text-orange-400">Postman</div>
                  <div className="text-xs text-muted-foreground mt-1">GUI testing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      extraInfo={
        <div className="space-y-8">
          
          {/* cURL Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">💻 cURL Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Basic Upload</h3>
                <CodeBlockWithCopy
                  code={`# Upload PDF
curl -X POST "https://docura-nluj.onrender.com/upload" \\
  -F "file=@document.pdf"

# Upload Word document
curl -X POST "https://docura-nluj.onrender.com/upload" \\
  -F "file=@report.docx"

# Upload PowerPoint
curl -X POST "https://docura-nluj.onrender.com/upload" \\
  -F "file=@presentation.pptx"`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">With Response Headers</h3>
                <CodeBlockWithCopy
                  code={`# Verbose output with headers
curl -X POST "https://docura-nluj.onrender.com/upload" \\
  -H "Accept: application/json" \\
  -F "file=@document.pdf" \\
  -v

# Save response to file
curl -X POST "https://docura-nluj.onrender.com/upload" \\
  -F "file=@document.pdf" \\
  -o response.json`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Local Development</h3>
                <CodeBlockWithCopy
                  code={`# Upload to local instance
curl -X POST "http://localhost:8000/upload" \\
  -F "file=@document.pdf"

# Test different file types locally
curl -X POST "http://localhost:8000/upload" -F "file=@file.html"
curl -X POST "http://localhost:8000/upload" -F "file=@email.msg"`}
                />
              </div>
            </div>
          </section>

          {/* Python Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">🐍 Python Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Simple Upload</h3>
                <CodeBlockWithCopy
                  code={`import requests

# Basic upload function
def upload_file(file_path):
    url = "https://docura-nluj.onrender.com/upload"
    
    with open(file_path, 'rb') as f:
        files = {'file': f}
        response = requests.post(url, files=files)
    
    return response.json()

# Usage
result = upload_file("document.pdf")
print(result)`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">With Error Handling</h3>
                <CodeBlockWithCopy
                  code={`import requests
import os

def upload_document(file_path):
    if not os.path.exists(file_path):
        return {"error": "File not found"}
    
    url = "https://docura-nluj.onrender.com/upload"
    
    try:
        with open(file_path, 'rb') as f:
            files = {'file': (os.path.basename(file_path), f)}
            response = requests.post(url, files=files, timeout=30)
            response.raise_for_status()
            return response.json()
    
    except requests.exceptions.RequestException as e:
        return {"error": f"Upload failed: {str(e)}"}

# Usage
result = upload_document("report.pdf")
if "error" not in result:
    print(f"✅ Success: {result['message']}")
else:
    print(f"❌ Error: {result['error']}")`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Multiple Files Upload</h3>
                <CodeBlockWithCopy
                  code={`import requests
from pathlib import Path

def upload_multiple_files(file_paths):
    url = "https://docura-nluj.onrender.com/upload"
    results = []
    
    for file_path in file_paths:
        try:
            with open(file_path, 'rb') as f:
                files = {'file': (Path(file_path).name, f)}
                response = requests.post(url, files=files)
                
            if response.status_code == 200:
                results.append({"file": file_path, "status": "success"})
                print(f"✅ Uploaded: {Path(file_path).name}")
            else:
                results.append({"file": file_path, "status": "failed"})
                
        except Exception as e:
            results.append({"file": file_path, "status": "error", "message": str(e)})
    
    return results

# Usage
files = ["doc1.pdf", "doc2.docx", "presentation.pptx"]
results = upload_multiple_files(files)`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Upload Class</h3>
                <CodeBlockWithCopy
                  code={`import requests
from pathlib import Path

class DocuraUploader:
    def __init__(self, base_url="https://docura-nluj.onrender.com"):
        self.base_url = base_url
        self.upload_endpoint = f"{base_url}/upload"
    
    def upload(self, file_path):
        """Upload a single file"""
        with open(file_path, 'rb') as f:
            files = {'file': (Path(file_path).name, f)}
            response = requests.post(self.upload_endpoint, files=files)
            return response.json()
    
    def upload_folder(self, folder_path, extensions=('.pdf', '.docx', '.pptx')):
        """Upload all supported files from folder"""
        folder = Path(folder_path)
        uploaded = []
        
        for file_path in folder.iterdir():
            if file_path.suffix.lower() in extensions:
                result = self.upload(file_path)
                uploaded.append(result)
                print(f"Uploaded: {file_path.name}")
        
        return uploaded

# Usage
uploader = DocuraUploader()
uploader.upload("document.pdf")
uploader.upload_folder("./documents")`}
                />
              </div>
            </div>
          </section>

          {/* Postman Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">📮 Postman Setup</h2>
            
            <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">Create New Request</h3>
                    <div className="text-sm space-y-1">
                      <div>• Method: <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded">POST</code></div>
                      <div>• URL: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">https://docura-nluj.onrender.com/upload</code></div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">Headers Tab</h3>
                    <div className="bg-white dark:bg-slate-900 rounded border p-3 text-sm font-mono">
                      <div>Accept: application/json</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">Body Configuration</h3>
                    <div className="text-sm space-y-1">
                      <div>• Select <strong>form-data</strong></div>
                      <div>• Key: <code className="bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded">file</code></div>
                      <div>• Type: <strong>File</strong> (dropdown)</div>
                      <div>• Value: Select your document file</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-2">Send Request</h3>
                    <div className="text-sm">
                      Click <strong>Send</strong> button and check the response!
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Response Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">📄 Response Examples</h2>
            
            <div className="space-y-4">
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">✅ Success Response</h3>
                <CodeBlockWithCopy
                  code={`{
  "status": "success",
  "message": "Document uploaded and processed successfully",
  "filename": "document.pdf",
  "file_size": 2048576,
  "processing_time": "3.2s"
}`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-600 dark:text-red-400">❌ Error Response</h3>
                <CodeBlockWithCopy
                  code={`{
  "status": "error",
  "error": "Invalid file type",
  "supported_formats": ["pdf", "docx", "pptx", "html", "eml"],
  "received_format": "txt"
}`}
                />
              </div>

            </div>
          </section>

          {/* PowerShell Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">🪟 PowerShell Examples</h2>
            
            <div className="space-y-4">
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Basic Upload</h3>
                <CodeBlockWithCopy
                  code={`# Simple PowerShell upload
$form = @{
    file = Get-Item -Path "C:\\Documents\\report.pdf"
}
Invoke-RestMethod -Uri "https://docura-nluj.onrender.com/upload" -Method POST -Form $form`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">With Error Handling</h3>
                <CodeBlockWithCopy
                  code={`# PowerShell with try-catch
try {
    $file = Get-Item -Path "document.pdf"
    $form = @{ file = $file }
    
    $response = Invoke-RestMethod -Uri "https://docura-nluj.onrender.com/upload" \\
                                 -Method POST -Form $form
    
    Write-Host "✅ Upload successful!" -ForegroundColor Green
    Write-Host "File: $($response.filename)"
    Write-Host "Size: $($response.file_size) bytes"
    
} catch {
    Write-Host "❌ Upload failed: $($_.Exception.Message)" -ForegroundColor Red
}`}
                />
              </div>

            </div>
          </section>

          {/* Quick Tips */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">💡 Quick Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">File Types</h3>
                <div className="text-sm space-y-1">
                  <div>✅ PDF, DOCX, PPTX</div>
                  <div>✅ HTML, EML files</div>
                  <div>❌ Images, videos</div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Best Practices</h3>
                <div className="text-sm space-y-1">
                  <div>• Use absolute file paths</div>
                  <div>• Check file exists first</div>
                  <div>• Handle errors gracefully</div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">File Limits</h3>
                <div className="text-sm space-y-1">
                  <div>📏 Max: ~50MB per file</div>
                  <div>⏱️ Timeout: 30 seconds</div>
                  <div>🔄 Retry on failure</div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Development</h3>
                <div className="text-sm space-y-1">
                  <div>🏠 Local: localhost:8000</div>
                  <div>🌐 Production: docura-nluj.onrender.com</div>
                  <div>🔧 Use environment variables</div>
                </div>
              </div>

            </div>
          </section>

        </div>
      }
      extraNotes={
        <>
          <strong>Note:</strong> All examples use the production API endpoint. 
          For local development, replace the URL with <code>http://localhost:8000</code>
        </>
      }
    />
  )
}