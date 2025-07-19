"use client"

import { Button } from "@/components/ui/button"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"

const dockerfile = `# Dockerfile
FROM node:20

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
`

const envFile = `# .env
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENV=your_pinecone_environment
PINECONE_INDEX=your_index_name
`

const runCommands = `# Build and run your app
docker build -t docura-app .
docker run -p 3000:3000 --env-file .env docura-app
`

export function buttonDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">📦 Docker & Deployment</h1>
      <p className="text-muted-foreground mb-4">
        Here's how to Dockerize and deploy your app (like Docura) with required environment variables.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">🛠️ Dockerfile</h2>
          <CodeBlockWithCopy code={dockerfile} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">🔐 .env Configuration</h2>
          <CodeBlockWithCopy code={envFile} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">🚀 Build & Run</h2>
          <CodeBlockWithCopy code={runCommands} />
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Make sure your `.env` file is in the root of the project and not committed to version control.
            When deploying, always use secrets or environment variables in your platform (like Vercel, Fly.io, or a VPS).
          </p>
        </div>

        <a
          href="https://docs.docker.com/get-started/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="mt-4">Learn More About Docker</Button>
        </a>
      </div>
    </div>
  )
}
