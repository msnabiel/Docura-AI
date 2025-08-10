"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "../site-ui/code-block-with-copy"

const setupSnippet = `# Step 1: Environment Setup

git clone https://github.com/msnabiel/Docura.git
cd Docura

python -m venv venv
source venv/bin/activate  # Linux/Mac
# or
venv\\Scripts\\activate   # Windows

pip install -r requirements.txt
`

const envSnippet = `# Step 2: Configure Environment

cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY_PAID
`

const startSnippet = `# Step 3: Start the Application

python main.py
# or
uvicorn app:app --reload --port 8000
`

const dockerSnippet = `# Step 4: Docker Build & Run

docker build -t docura .
docker run -d -p 8000:8000 docura

docker pull msnabiel/docura
docker run -d -p 8000:8000 msnabiel/docura
`

export function NabielUiInstallationDoc() {
  return (
    <DocPageLayout
      title="🚀 How to Run Docura"
      description={
        <>
          Follow these steps to set up and run <code>Docura</code> locally or with Docker for fast, private, and real-time document search.
        </>
      }
      addSnippet={setupSnippet}
      usageSnippet={envSnippet}
      preview={
        <div className="px-4 sm:px-6 lg:px-12 bg-background text-foreground">
          <div className="text-center text-muted-foreground text-sm space-y-3">
            <p>Quickstart guide to get Docura running in minutes.</p>
          </div>
        </div>
      }
      extraInfo={
        <>
          <div className="space-y-6 text-sm text-muted-foreground">
            <div>
              <h2 className="font-semibold mb-3 text-foreground">⚙️ Local Setup</h2>
              <p>
                Clone the repo, create a virtual environment, install dependencies, and configure your API key.
              </p>
              <CodeBlockWithCopy code={startSnippet} className="mb-6" />
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-foreground">🐳 Docker</h2>
              <p>
                Build and run the Docker image locally, or pull the official image from Docker Hub for quick deployment.
              </p>
              <CodeBlockWithCopy code={dockerSnippet} />
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-foreground">📡 Access</h2>
              <p>
                Once running, open <code>http://localhost:8000</code> to explore the API and docs.
              </p>
            </div>
          </div>
        </>
      }
    />
  )
}
