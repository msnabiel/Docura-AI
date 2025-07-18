"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/nabiel-ui/hero-section"
import { ShopPage } from "@/components/nabiel-ui/shop-page"
import { ProductFilters } from "@/components/nabiel-ui/product-filters"
import { RecentlyViewedProducts } from "@/components/nabiel-ui/recently-viewed"
import { NewsletterSignup } from "@/components/nabiel-ui/newsletter-signup"
import { SupportCTA } from "@/components/nabiel-ui/support-cta"
import { FeaturesGrid } from "@/components/nabiel-ui/FeaturesGrid"
import { StartSellingSection } from "@/components/StartSellingSection"

export function VendoraTemplate({ data }: { data: any }) {
  const [formData, setFormData] = useState<any>(data || null)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

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

  const allProducts = formData.featuredProducts || []
  const allCategories = formData.categories || []
  const features = formData.features || []

  const filteredProducts = allProducts
    .filter((product: any) =>
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
    )
    .filter((product: any) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.parentName.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <HeroSection title={formData.storeName} subtitle={formData.description} />
      </div>

      {features.length > 0 && (
        <div className="mb-10">
          <FeaturesGrid features={features} />
        </div>
      )}

      {showFilters && (
        <div className="mb-10">
          <ProductFilters
            categories={
              allCategories.length > 0
                ? allCategories
                : ["Books", "Electronics", "Clothing", "Home"]
            }
          />
        </div>
      )}
{/*
<div className={`${features.length > 0 ? 'mb-10' : 'mb-6'}`}>
  <ShopPage
    products={filteredProducts}
    query={searchQuery}
    onQueryChange={setSearchQuery}
    showFilters={showFilters}
    onToggleFilters={() => setShowFilters((prev) => !prev)}
  />
</div>

      <div className="mb-10">
        <RecentlyViewedProducts />
      </div>*/}

      <div className="mb-10">
        <SupportCTA />
      </div>

      <div className="mb-16">
        <NewsletterSignup />
      </div>

      <StartSellingSection />
    </div>
  )
}
