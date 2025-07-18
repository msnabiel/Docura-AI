"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { ProductDetailPage } from "@/components/vendora-ui/ProductDetailPage"
export function shopifyIntegrationDoc() {
    const mockVariant = {
  id: "demo-id",
  name: "Sample Product",
  slug: "sample-product",
  description: "This is a beautiful product from Shopify’s catalog.",
  price: 499,
  images: ["/hero.jpeg", "/hero.jpeg", "/hero.jpeg"],
}
  return (
    <DocPageLayout
      title="Shopify Integration"
      description={
        <>
          Integrate <code>nabiel-ui</code> with{" "}
          <a
            href="https://shopify.dev/docs/api/storefront"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Shopify’s Storefront API
          </a>{" "}
          to build a fully custom headless e-commerce storefront using modern components.
        </>
      }
      preview={<ProductDetailPage variant={mockVariant} />}
      addSnippet={`npm install graphql-request`}
      usageSnippet={`import { GraphQLClient } from "graphql-request"

const shopify = new GraphQLClient("https://your-shop.myshopify.com/api/2023-07/graphql.json", {
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN!,
  },
})`}
      extraNotes={
        <>
          <h3 className="text-base font-semibold mt-4 mb-2">🧩 Component-by-Component Integration</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>ProductPage</strong>: Fetch single product by handle and pass it to{" "}
              <code>{`<ProductDetailPage variant={product} />`}</code>.
              <br />
              → Use Shopify's <code>productByHandle</code> query.
            </li>
            <li>
              <strong>CartPage</strong>: Store cart items in <code>localStorage</code> or a local store.
              <br />
              → On checkout, create a cart on Shopify and redirect to <code>checkoutUrl</code>.
            </li>
            <li>
              <strong>CheckoutPage</strong>: Accept shipping data + apply coupon logic.
              <br />
              → (Optional) forward to Shopify’s checkout or use it as review before redirect.
            </li>
            <li>
              <strong>OrderSuccess</strong>: After checkout, Shopify can redirect to your custom <code>/order-success</code> page.
              <br />
              → Show confirmation UI with order ID, send email via Resend or display thank-you.
            </li>
            <li>
              <strong>RecentlyViewed</strong>: Automatically stores product IDs or handles in localStorage.
              <br />
              → You can fetch those again from Shopify to display personalized content.
            </li>
            <li>
              <strong>ShopPage</strong>: List products from a collection.
              <br />
              → Use <code>products(first: 20)</code> or <code>collectionByHandle</code> queries.
            </li>
            <li>
              <strong>ProductFilters</strong>: Shopify allows filtering by tags, product types, or price ranges via the Storefront API.
            </li>
          </ul>

          <h3 className="text-base font-semibold mt-6 mb-2">📦 Example: Product Query</h3>
          <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
{`query ProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
    title
    description
    images(first: 4) {
      edges {
        node {
          url
          altText
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}`}
          </pre>

          <h3 className="text-base font-semibold mt-6 mb-2">🚀 End-to-End Workflow</h3>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>User visits <code>/shop</code> → fetch and render products using <code>&lt;ShopPage /&gt;</code></li>
            <li>Clicks a product → navigate to <code>/product/[handle]</code> → fetch single product</li>
            <li>Adds to cart → store in localStorage and show in <code>&lt;CartPage /&gt;</code></li>
            <li>Checkout → show <code>&lt;CheckoutPage /&gt;</code> with form and summary</li>
            <li>Submit → create Shopify checkout and redirect to <code>checkoutUrl</code></li>
            <li>Shopify checkout success → redirect to <code>/order-success</code> (handled by your UI)</li>
          </ol>

          <h3 className="text-base font-semibold mt-6 mb-2">🛠 Helpful Resources</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <a href="https://shopify.dev/docs/api/storefront" target="_blank" className="underline">
                Shopify Storefront API Docs
              </a>
            </li>
            <li>
              <a href="https://shopify.dev/docs/custom-storefronts" target="_blank" className="underline">
                Shopify Headless Storefront Guide
              </a>
            </li>
            <li>
              <a href="https://github.com/Shopify/storefront-api-examples" target="_blank" className="underline">
                Shopify Storefront Examples (GitHub)
              </a>
            </li>
          </ul>
        </>
      }
    />
  )
}
