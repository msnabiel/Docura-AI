"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { ProductDetailPage } from "@/components/vendora-ui/ProductDetailPage"

export function googleSheetsIntegrationDoc() {
  const mockVariant = {
    id: "demo-id",
    name: "Sheet Product",
    slug: "sheet-product",
    description: "This product is powered by data from a Google Sheet.",
    price: 299,
    images: ["/hero.jpeg"],
  }

  return (
    <DocPageLayout
      title="Google Sheets Integration"
      description={
        <>
          Connect your UI components with{" "}
          <a
            href="https://developers.google.com/sheets/api"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Google Sheets API
          </a>{" "}
          to turn any spreadsheet into a dynamic headless CMS powering your storefront.
        </>
      }
      preview={<ProductDetailPage variant={mockVariant} />}
      addSnippet={`npm install googleapis`}
      usageSnippet={`import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, "\\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
})

const sheets = google.sheets({ version: "v4", auth })

const response = await sheets.spreadsheets.values.get({
  spreadsheetId: "your-sheet-id",
  range: "Products!A2:E",
})`}
      extraNotes={
        <>
          <h3 className="text-base font-semibold mt-4 mb-2">📄 How It Works</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Use a Google Sheet as a mini CMS for your product catalog, pricing, stock, or orders.
            </li>
            <li>
              Securely fetch data with a service account using the <code>googleapis</code> Node.js SDK.
            </li>
            <li>
              Populate <code>&lt;ShopPage /&gt;</code>, <code>&lt;ProductDetailPage /&gt;</code>, or custom UI from sheet rows.
            </li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-2">🧪 Sheet Format Example</h3>
          <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
{`A        | B             | C       | D           | E
---------|---------------|---------|-------------|----------------
ID       | Name          | Price   | Description | Image URL
123      | Rose Candle   | 499     | Floral scent| https://...
124      | Lavender Jar  | 399     | Soothing    | https://...`}
          </pre>

          <h3 className="text-base font-semibold mt-6 mb-2">🔐 Setup Credentials</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Create a Google Cloud project & enable Sheets API</li>
            <li>Create a service account and download JSON credentials</li>
            <li>Share your sheet with the service account email</li>
            <li>
              Store credentials in environment variables:
              <CodeBlockWithCopy
                code={`GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nMIIE...\\n-----END PRIVATE KEY-----\\n"`}
              />
            </li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-2">🚀 Usage Ideas</h3>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Manage inventory and pricing directly in Google Sheets</li>
            <li>List products dynamically in <code>&lt;ShopPage /&gt;</code></li>
            <li>Use <code>&lt;TrackOrder /&gt;</code> to search order sheet by email or ID</li>
            <li>Render FAQ or testimonials from sheet rows</li>
          </ol>

          <h3 className="text-base font-semibold mt-6 mb-2">📚 Resources</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <a
                href="https://developers.google.com/sheets/api"
                className="underline"
                target="_blank"
              >
                Google Sheets API Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/googleapis/google-api-nodejs-client"
                className="underline"
                target="_blank"
              >
                Google APIs Node.js Client
              </a>
            </li>
            <li>
              <a
                href="https://gspreadsheetapi.vercel.app"
                className="underline"
                target="_blank"
              >
                Simple Sheet API Example (Vercel)
              </a>
            </li>
          </ul>
        </>
      }
    />
  )
}
