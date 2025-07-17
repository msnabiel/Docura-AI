"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/nabiel-ui/hero-section"
import { ShopPage } from "@/components/nabiel-ui/shop-page"
import { CheckoutPage } from "@/components/nabiel-ui/checkout-page"
import { CartPage } from "@/components/nabiel-ui/cart-page"
import { MyAccount } from "@/components/nabiel-ui/my-account"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ProductFilters } from "@/components/nabiel-ui/product-filters"
import { ProductDetailPage } from "@/components/nabiel-ui/ProductDetailPage"
import { RecentlyViewedProducts } from "@/components/nabiel-ui/recently-viewed"
import { ContactForm } from "@/components/nabiel-ui/contact-form"
import { OrderSuccess } from "@/components/nabiel-ui/order-success"
import { TrackOrder } from "@/components/nabiel-ui/track-order"
import { FAQ } from "@/components/nabiel-ui/faq"
import { FeaturesGrid } from "@/components/nabiel-ui/FeaturesGrid"
import { SupportCTA } from "@/components/nabiel-ui/support-cta"
import { Testimonial } from "@/components/nabiel-ui/Testimonial"
import { StartSellingSection } from "@/components/StartSellingSection"
import { PricingSection } from "@/components/pricing"

export default function VendoraTemplate({ data }: { data: any }) {
  const [formData, setFormData] = useState<any>(data || null)

  useEffect(() => {
    if (!data) {
      const stored = localStorage.getItem("vendora-form-data")
      if (stored) {
        try {
          setFormData(JSON.parse(stored))
        } catch {
          console.error("Invalid form data")
        }
      }
    }
  }, [data])

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-center text-gray-600 text-lg">
          No form data found. Please fill out the store setup form first.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <HeroSection title={formData.storeName} subtitle={formData.description} />
      <FeaturesGrid features={formData.features || []} />
      <ShopPage products={formData.featuredProducts || []} />
      <ProductFilters categories={formData.categories || []} />
      <ProductDetailPage
        variant={
          formData.featuredProducts?.[0] || {
            id: "1",
            name: "Sample Product",
            slug: "sample-product",
            description: "This is a sample product.",
            price: 999,
            images: ["/hero.jpeg"]
          }
        }
      />
      <CartPage />
      <CheckoutPage />
      <OrderSuccess />
      <TrackOrder />
      <MyAccount />
      <RecentlyViewedProducts />
      <ContactForm />
      <FAQ items={formData.faqItems || []} />
      <Testimonial
        name={formData.testimonial?.name || "Jane Doe"}
        role={formData.testimonial?.role || "Customer"}
        quote={formData.testimonial?.quote || "This is the best store ever!"}
        image={formData.testimonial?.image}
      />
      <SupportCTA />
      <NewsletterSignup />
      <PricingSection />
      <StartSellingSection />
    </div>
  )
}
