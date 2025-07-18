"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline"
const installSnippet = `npm install @splinetool/react-spline
npx nabiel-ui add hero-section`

const usageSnippet = `import Spline from "@splinetool/react-spline"

export default function SplineHeroSection() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <Spline scene="https://prod.spline.design/your-spline-url/scene.splinecode" />
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-4xl font-bold">
        Welcome to Nabiel UI
      </div>
    </div>
  )
}`

export function splineDoc() {
  return (
    <DocPageLayout
      title="Spline Integration with Hero Section"
      description={
        <>
          Add beautiful 3D interactions to your{" "}
          <code>{"<HeroSection />"}</code> or landing page using{" "}
          <a
            href="https://spline.design"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Spline 3D
          </a>{" "}
          and the official <code>@splinetool/react-spline</code> React package.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={usageSnippet}
      preview={
  <div className="w-full aspect-[16/9] overflow-hidden rounded-md ring-1 ring-border">
    <Spline scene="https://prod.spline.design/aEiUQHZcIWEDlaxZ/scene.splinecode" />
  </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🛠 How to Get Your Spline Scene URL</h3>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Go to <a href="https://app.spline.design" target="_blank" className="underline">Spline Editor</a></li>
            <li>Create or open a 3D scene</li>
            <li>Click “Export” → “Share” → Enable Public Link</li>
            <li>Copy the scene link like <code>https://prod.spline.design/.../scene.splinecode</code></li>
            <li>Paste it into your <code>&lt;Spline scene="..." /&gt;</code> component</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">🎨 Use Cases with Nabiel UI</h3>
          <ul className="text-sm list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>HeroSection</strong>: Replace static image/banner with animated 3D scene
            </li>
            <li>
              <strong>Landing Pages</strong>: Add product visualizations or hover interactions
            </li>
            <li>
              <strong>Interactive Support</strong>: Trigger camera animations using the Spline API
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">📦 Component Scaffold Example</h3>
          <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
{`npx nabiel-ui add hero-section`}
          </pre>
          <p className="text-sm text-muted-foreground mt-2">
            Then replace the default image/video background with a Spline scene.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">📚 Resources</h3>
          <ul className="text-sm list-disc pl-5 text-muted-foreground">
            <li>
              <a
                href="https://docs.spline.design"
                className="underline"
                target="_blank"
              >
                Spline Documentation
              </a>
            </li>
            <li>
              <a
                href="https://github.com/splinetool/react-spline"
                className="underline"
                target="_blank"
              >
                @splinetool/react-spline GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=XEa-FDvj1U8"
                className="underline"
                target="_blank"
              >
                Video: Spline + React (YouTube)
              </a>
            </li>
          </ul>
        </>
      }
    />
  )
}
