// data/components.ts

export type ComponentMeta = {
  name: string
  slug: string
}
export const components: ComponentMeta[] = [
  { name: "Navbar", slug: "navbar" },
  { name: "Footer", slug: "footer" },
  { name: "Newsletter Signup", slug: "newsletter" },
  { name: "Contact Form", slug: "contact" },
  { name: "Hero Section", slug: "hero" },
  { name: "Shop Page", slug: "shop" },
  { name: "Cart Page", slug: "cart" },
  { name: "Checkout Page", slug: "checkout" },
  { name: "Order Success", slug: "order-success" },
  { name: "Track Order", slug: "track-order" },
  { name: "FAQ", slug: "faq" },
  { name: "My Account", slug: "my-account" },
  { name: "Support CTA", slug: "support-cta" },
  { name: "Product Filters", slug: "product-filters" },
  { name: "Recently Viewed", slug: "recently-viewed" },
  {name: "Product Page",slug:"product-page"},
  {name: "Testimonial", slug: "testimonial"},
  { name: "Features Grid", slug: "features-grid" },

  

].sort((a, b) => a.name.localeCompare(b.name))


// Slug-to-doc renderer mapping
export const componentDocs = {
// Component name: Doc component function
} as const
