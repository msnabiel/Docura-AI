// data/components.ts

import { buttonDoc } from "@/components/docs/button-doc"
import { cardDoc } from "@/components/docs/card-doc"
import { navbarDoc } from "@/components/docs/navbar-doc"
import { footerDoc } from "@/components/docs/footer-doc"
import { newsletterDoc } from "@/components/docs/newsletter-doc"
import { contactDoc } from "@/components/docs/contact-doc"
import heroDoc from "@/components/docs/hero-doc"
import { shopDoc } from "@/components/docs/shop-doc"
import { cartDoc } from "@/components/docs/cart-doc"
import { checkoutDoc } from "@/components/docs/checkout-doc"
import { orderSuccessDoc } from "@/components/docs/order-success-doc"
import { trackOrderDoc } from "@/components/docs/track-order-doc"
import { faqDoc } from "@/components/docs/faq-doc"
import myAccountDoc from "@/components/docs/my-account-doc"
import { supportCtaDoc } from "@/components/docs/support-cta-doc"
import { productFiltersDoc } from "@/components/docs/product-filters-doc"
import { recentlyViewedDoc } from "@/components/docs/recently-viewed-doc"
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

].sort((a, b) => a.name.localeCompare(b.name))


// Slug-to-doc renderer mapping
export const componentDocs = {
// Component name: Doc component function
  button: buttonDoc,
  "product-filters": productFiltersDoc,
  "recently-viewed": recentlyViewedDoc,
  card: cardDoc,
  cart: cartDoc,
  checkout: checkoutDoc,
  navbar: navbarDoc,
  footer: footerDoc,
  newsletter: newsletterDoc,
  contact: contactDoc,
  hero: heroDoc,
  shop: shopDoc,
  "order-success": orderSuccessDoc,
  "track-order": trackOrderDoc,
  faq: faqDoc,
  "my-account": myAccountDoc,
  "support-cta": supportCtaDoc,
} as const
