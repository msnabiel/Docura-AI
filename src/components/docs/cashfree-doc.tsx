"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install
docker build -t docura-app .
docker run -p 3000:3000 docura-app`

const clientSnippet = `// Dockerfile (place this in the root of your project)

# Use the official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app (if using Next.js or similar)
RUN npm run build

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]`

const serverSnippet = `// render.yaml (place in the root of your project)

services:
  - type: web
    name: docura-app
    env: docker
    plan: free
    dockerfilePath: ./Dockerfile
    buildCommand: ""
    startCommand: ""
    autoDeploy: true
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
`

export function cashfreeDoc() {
  return (
    <DocPageLayout
      title="Deploying Docura on Render using Docker"
      description={
        <>
          Deploy your <code>Docura</code> app to{" "}
          <a href="https://render.com" className="underline" target="_blank" rel="noreferrer">
            Render
          </a>{" "}
          using a <code>Dockerfile</code> and <code>render.yaml</code> configuration.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This simulates a Docker build and deploy to Render.")}>
            Simulate Docker Deployment
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            This simulates deployment using Docker and Render's auto-deploy feature.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">⚙️ Dockerizing Your App</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            Create a <code>Dockerfile</code> at your project root. This example assumes a Node.js-based frontend app.
          </p>
          <CodeBlockWithCopy code={clientSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🚀 Configuring Render Deployment</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Create a <code>render.yaml</code> file to tell Render how to build and run the container.</li>
            <li>Push your code to GitHub/GitLab and connect the repo to Render.</li>
            <li>Render will automatically detect the Docker setup and deploy your app.</li>
          </ul>

          <CodeBlockWithCopy code={serverSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🧪 Testing Locally</h3>
          <ul className="text-sm list-disc pl-4 text-muted-foreground">
            <li>Build your image locally: <code>docker build -t docura-app .</code></li>
            <li>Run the container: <code>docker run -p 3000:3000 docura-app</code></li>
            <li>Visit <code>http://localhost:3000</code> to test it before pushing to Render.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">📌 Tips for Successful Deployment</h3>
          <ul className="text-sm list-disc pl-4 text-muted-foreground">
            <li>Ensure your <code>Dockerfile</code> exposes the right port (usually 3000).</li>
            <li>Set correct environment variables in Render's dashboard or in <code>render.yaml</code>.</li>
            <li>Use <code>npm run build</code> for production-optimized builds if needed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">📚 Helpful Resources</h3>
          <ul className="text-sm list-disc pl-5 text-muted-foreground">
            <li>
              <a
                href="https://render.com/docs/docker"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Render Docker Deployment Docs
              </a>
            </li>
            <li>
              <a
                href="https://docs.docker.com/get-started/"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Docker Getting Started
              </a>
            </li>
          </ul>
        </>
      }
    />
  )
}
