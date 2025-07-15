// data/components.ts

import { buttonDoc } from "@/components/docs/button-doc"
import { cardDoc } from "@/components/docs/card-doc"
import { navbarDoc } from "@/components/docs/navbar-doc"
import { footerDoc } from "@/components/docs/footer-doc"
import { newsletterDoc } from "@/components/docs/newsletter-doc"
import { contactDoc } from "@/components/docs/contact-doc"
import { heroDoc } from "@/components/docs/hero-doc"
import { shopDoc } from "@/components/docs/shop-doc"
import { cartDoc } from "@/components/docs/cart-doc"
import { checkoutDoc } from "@/components/docs/checkout-doc"
import { orderSuccessDoc } from "@/components/docs/order-success-doc"
export type ComponentMeta = {
  name: string
  slug: string
}
export const components: ComponentMeta[] = [
  { name: "Button", slug: "button" },
  { name: "Card", slug: "card" },
  { name: "Badge", slug: "badge" },
  { name: "Input", slug: "input" },
  { name: "Navbar", slug: "navbar" },
  { name: "Footer", slug: "footer" },
  { name: "Newsletter Signup", slug: "newsletter" },
  { name: "Contact Form", slug: "contact" },
  { name: "Hero Section", slug: "hero" },
  { name: "Shop Page", slug: "shop" },
  { name: "Cart Page", slug: "cart" },
  { name: "Checkout Page", slug: "checkout" },
  { name: "Order Success", slug: "order-success" },

].sort((a, b) => a.name.localeCompare(b.name))


// Slug-to-doc renderer mapping
export const componentDocs = {
// Component name: Doc component function
  button: buttonDoc,
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
} as const
