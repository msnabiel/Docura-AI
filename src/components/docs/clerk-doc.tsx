"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const curlSnippet = `# Upload a file using curl
curl -X POST http://localhost:3000/api/upload \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@/path/to/your/file.pdf"`

const postmanInstructions = `1. Open Postman and create a new **POST** request.
2. Set the URL to: \`http://localhost:3000/api/upload\`
3. Under the **Body** tab, choose **form-data**.
4. Add a key named \`file\` and set the type to **File**.
5. Choose any file from your system to upload.
6. Click **Send** to test the upload.`

const backendSnippet = `// /app/api/upload/route.ts

import { NextRequest, NextResponse } from "next/server"
import path from "path"
import { writeFile, mkdir } from "fs/promises"
import fs from "fs"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const uploadDir = path.join(process.cwd(), "public", "uploads")

  if (!fs.existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true })
  }

  const filePath = path.join(uploadDir, file.name)
  await writeFile(filePath, buffer)

  return NextResponse.json({ url: \`/uploads/\${file.name}\` })
}`

export function clerkDoc() {
  return (
    <DocPageLayout
      title="Upload Documents via Curl or Postman"
      description={
        <>
          Test your file upload API endpoint using tools like <strong>curl</strong> or <strong>Postman</strong> instead of building a full frontend.
        </>
      }
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("Use curl or Postman to test /api/upload.")}>
            Show Instructions
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Use a <code>POST</code> request to <code>/api/upload</code> with <code>multipart/form-data</code>.
          </p>
        </div>
      }
      addSnippet={`npx your-cli-tool init upload-endpoint`}
      usageSnippet={curlSnippet}
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🛠 Backend: Create Upload Endpoint</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            This route accepts multipart file uploads and saves them to the local <code>/public/uploads</code> directory.
          </p>
          <CodeBlockWithCopy code={backendSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">📦 Test with Postman</h3>
          <p className="mb-2 text-sm text-muted-foreground whitespace-pre-wrap">{postmanInstructions}</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">⚠️ Notes for Deployments (e.g., Render)</h3>
          <ul className="text-sm list-disc pl-4 text-muted-foreground">
            <li>Files are saved to <code>/public/uploads</code>, which is ephemeral on platforms like Render.</li>
            <li>On redeploy/restart, uploaded files will be lost.</li>
            <li>Use S3, Supabase, or other persistent storage for production uploads.</li>
          </ul>
        </>
      }
    />
  )
}
