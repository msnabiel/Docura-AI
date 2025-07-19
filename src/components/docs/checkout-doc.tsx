"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const uploadEndpointSnippet = `// /app/api/upload/route.ts

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

const frontendSnippet = `// Uploading a document from the client side

const uploadFile = async (file: File) => {
  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  })

  const data = await res.json()
  console.log("Uploaded to:", data.url)
}`

export function checkoutDoc() {
  return (
    <DocPageLayout
      title="Document Upload via API Endpoint"
      description={
        <>
          Learn how to implement a simple file upload API using <code>FormData</code> and handle document uploads
          server-side with a POST endpoint.
        </>
      }
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This simulates a document upload flow.")}>
            Simulate Upload
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Use a <code>file</code> input on the frontend and send a <code>POST</code> request to <code>/api/upload</code>.
          </p>
        </div>
      }
      addSnippet={`npx your-cli-tool init upload-endpoint`}
      usageSnippet={frontendSnippet}
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🛠 Backend: Create Upload Endpoint</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            Here's how to create a Next.js API route that handles file uploads using <code>formData</code>:
          </p>
          <CodeBlockWithCopy code={uploadEndpointSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🖼 Frontend Usage</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            On the frontend, collect the file using an input and send it using <code>fetch()</code> and <code>FormData</code>:
          </p>
          <CodeBlockWithCopy code={frontendSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">⚠️ Notes for Deployments (e.g., Render)</h3>
          <ul className="text-sm list-disc pl-4 text-muted-foreground">
            <li>
              This saves files to the <code>/public/uploads</code> folder.
            </li>
            <li>
              On Render, this folder is ephemeral — files will be lost on redeploy or restart.
            </li>
            <li>
              For production use, store uploads on persistent storage like AWS S3 or Supabase Storage.
            </li>
          </ul>
        </>
      }
    />
  )
}
