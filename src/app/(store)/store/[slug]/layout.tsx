import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../../../globals.css"
import { Footer } from "@/components/vendora-ui/footer"
import { NavBar } from "@/components/vendora-ui/navbar"
import { ClientFooter } from "@/components/vendora-ui/footer-wrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Static metadata — can be made dynamic too if needed
export const metadata: Metadata = {
  title: "Nabiel UI",
  description: "A modern e-commerce UI kit for Next.js",
}

export default function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const { slug } = params

  return (
    <html lang="en">
      <head>
        {/* Razorpay Checkout Script */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
<NavBar
  logo={<span className="font-bold text-xl">{slug.toUpperCase()}</span>}
  links={[
    { label: "Shop", href: "/shop" },
    { label: "Orders", href: "/orders" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ]}
  cartCount={0}
  sticky
  storeSlug={slug} // ✅ correctly passed
  promoBar={
    <div className="bg-primary text-white text-center text-sm py-2">
      Get 10% off on your first order!
    </div>
  }
/>


        <main className="flex-1">{children}</main>

<ClientFooter slug={slug} />

      </body>
    </html>
  )
}
