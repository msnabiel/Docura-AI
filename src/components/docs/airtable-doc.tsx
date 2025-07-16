"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

const installSnippet = `npm install airtable`

const fetchSnippet = `// lib/airtable.ts
import Airtable from "airtable"

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
)

export async function fetchProducts() {
  const records = await base("Products")
    .select({ view: "Grid view" })
    .all()

  return records.map((record) => ({
    id: record.id,
    name: record.get("Name"),
    price: record.get("Price"),
    description: record.get("Description"),
    image: record.get("Image")?.[0]?.url,
    category: record.get("Category"),
  }))
}`

const envSnippet = `// .env.local
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id`

const usageSnippet = `// app/shop/page.tsx
import { fetchProducts } from "@/lib/airtable"

export default async function ShopPage() {
  const products = await fetchProducts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-xl p-4">
          <img src={product.image} alt={product.name} className="rounded-md mb-2" />
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
          <span className="text-sm font-medium">₹{product.price}</span>
        </div>
      ))}
    </div>
  )
}`

export function airtableDoc() {
  return (
    <DocPageLayout
      title="Airtable Integration with Shop Page"
      description={
        <>Connect your <code>ShopPage</code> component to Airtable to fetch product listings and use Airtable as a lightweight CMS.</>
      }
      addSnippet={installSnippet}
      usageSnippet={fetchSnippet}
      preview={
<div className="space-y-4 text-sm text-muted-foreground text-center">
  <a
    href="https://airtable.com"
    target="_blank"
    rel="noreferrer"
    className="inline-block"
  >
    <Button>Open Airtable</Button>
  </a>
  <p>Use it to manage your product listings via the <code>Products</code> table.</p>
</div>

      }
      extraInfo={
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">🗂️ Airtable Table Structure</h3>
            <ul className="list-disc text-muted-foreground pl-5 text-sm space-y-1">
              <li><strong>Name</strong> (Single line text)</li>
              <li><strong>Price</strong> (Number)</li>
              <li><strong>Description</strong> (Long text)</li>
              <li><strong>Image</strong> (Attachment)</li>
              <li><strong>Category</strong> (Single select)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🌱 Environment Setup</h3>
            <CodeBlockWithCopy code={envSnippet} />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🛍️ Example Usage</h3>
            <CodeBlockWithCopy code={usageSnippet} />
          </div>
        </div>
      }
      extraNotes={
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>
            You can extend this setup to other components like <code>FAQ</code>, <code>Testimonials</code>, or even your <code>Contact Form</code> by creating new tables in Airtable.
          </p>
          <a href="https://airtable.com" target="_blank" rel="noreferrer">
            <Button className="mt-2">Open Airtable</Button>
          </a>
        </div>
      }
    />
  )
} 