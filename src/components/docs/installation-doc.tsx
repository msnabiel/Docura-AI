"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"

const installSnippet = `// Using npm
npm install nabiel-ui

// Using yarn
yarn add nabiel-ui`

const usageSnippet = `// Example: app/layout.tsx or app/page.tsx
import { Navbar } from "nabiel-ui"
import "nabiel-ui/styles.css"

export default function App() {
  return (
    <>
      <Navbar />
      {/* Your app content */}
    </>
  )
}`

export function NabielUiInstallationDoc() {
  return (
    <DocPageLayout
      title="Installing Nabiel UI"
      description={
        <>
          Get started quickly by installing <code>nabiel-ui</code> in your <strong>Next.js</strong> project. Nabiel UI provides reusable, accessible React components designed for <strong>e-commerce</strong> and modern web apps.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={usageSnippet}
      preview={
        <div className="text-center text-muted-foreground text-sm space-y-2">
          <p>Install via <strong>npm</strong> or <strong>yarn</strong>, then import components and styles in your app.</p>
        </div>
      }
      extraInfo={
        <div className="space-y-6 text-sm text-muted-foreground">
          <div>
            <h2 className="font-semibold mb-2">🚀 Quick Start</h2>
            <p>
              Nabiel UI is built with modern React and supports <strong>Next.js 13 App Router</strong> out of the box.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">🎨 Styling</h2>
            <p>
              Import <code>nabiel-ui/styles.css</code> once globally, for example in <code>app/layout.tsx</code>, to enable consistent styling.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">🧩 Available Components</h2>
            <p>
              Explore components like <code>Navbar</code>, <code>ShopPage</code>, <code>CheckoutPage</code>, and many more designed for e-commerce experiences.
            </p>
          </div>
        </div>
      }
    />
  )
}
