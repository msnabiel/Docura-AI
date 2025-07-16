"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NabielUiIntroDoc() {
  return (
    <DocPageLayout
      title="Welcome to Nabiel UI"
      description={
        <>
          <strong>Nabiel UI</strong> is a React component library tailored for <strong>e-commerce</strong> and modern websites. It offers <strong>accessible</strong>, <strong>customizable</strong> components that integrate seamlessly with <strong>Next.js</strong>.
        </>
      }
      preview={
        <div className="text-center space-y-4">
          <img
            src="/hero.jpeg"
            alt="Nabiel UI Logo"
            className="mx-auto w-24 h-24"
          />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Build <strong>beautiful</strong>, <strong>functional</strong> e-commerce UIs fast with prebuilt components, consistent design, and easy theming.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/docs/installation">
              <Button>Get Started</Button>
            </Link>
            <Link href="/docs/components">
              <Button variant="outline">View Components</Button>
            </Link>
          </div>
        </div>
      }
      extraInfo={
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <h2><strong>Why Nabiel UI?</strong></h2>
          <ul>
            <li>
              Designed specifically for <strong>e-commerce</strong> use cases like product pages, carts, and checkout flows.
            </li>
            <li>
              Built with <strong>accessibility</strong> and <strong>responsiveness</strong> in mind to ensure a great experience on all devices.
            </li>
            <li>
              Works smoothly with <strong>Next.js 13 App Router</strong> and <strong>ShadCN UI</strong> styling system.
            </li>
            <li>
              Simple, intuitive API and ready to customize for your brand.
            </li>
          </ul>

          <h2><strong>Documentation</strong></h2>
          <p>
            Explore detailed docs for each component, plus guides for integrations like <strong>Stripe</strong>, <strong>PayPal</strong>, <strong>Airtable</strong>, <strong>Zapier</strong>, and more.
          </p>
        </div>
      }
    />
  )
}
