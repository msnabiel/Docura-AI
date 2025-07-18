import { PricingSection } from "@/components/site-ui/pricing"
import { StartSellingSection } from "@/components/site-ui/StartSellingSection"

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-0 px-4 md:px-8">
      <PricingSection />
      <StartSellingSection />
    </main>
  )
}
