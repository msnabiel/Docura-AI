import { PricingSection } from "@/components/pricing"
import { StartSellingSection } from "@/components/StartSellingSection"

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-0 px-4 md:px-8">
      <PricingSection />
      <StartSellingSection />
    </main>
  )
}
