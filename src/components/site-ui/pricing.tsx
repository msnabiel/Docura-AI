"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  bg: string
  badge?: string
}

const monthlyPlans: Plan[] = [
  {
    name: "Starter",
    price: "₹0",
    description: "For early stage makers trying things out.",
    features: [
      "Access to all UI components",
      "Basic integrations (e.g. Resend)",
      "Community support",
    ],
    bg: "bg-[#E3F2FD]",
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "₹499",
    description: "For growing businesses who want more power.",
    features: [
      "Everything in Starter",
      "Advanced integrations (Stripe, PayPal)",
      "Template library access",
      "Priority support",
    ],
    bg: "bg-[#E8F5E9]",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams that need custom support or licensing.",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Team onboarding & training",
      "SLA-backed support",
    ],
    bg: "bg-[#FFF3E0]",
  },
]

const yearlyPlans: Plan[] = [
  { ...monthlyPlans[0], price: "₹0" },
  { ...monthlyPlans[1], price: "₹4999" },
  { ...monthlyPlans[2], price: "Custom" },
]

const plans: Record<"monthly" | "yearly", Plan[]> = {
  monthly: monthlyPlans,
  yearly: yearlyPlans,
}

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="py-20 w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground mb-8 text-sm sm:text-base">
          Choose a plan that fits your stage. Scale as you grow.
        </p>

        <div className="flex justify-center mb-12">
          <ToggleGroup
            type="single"
            value={billing}
            onValueChange={(val: string) => {
  if (val === "monthly" || val === "yearly") {
    setBilling(val)
  }
}}

            className="border rounded-lg bg-muted/40"
          >
            <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
            <ToggleGroupItem value="yearly">Yearly</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {plans[billing].map((plan: Plan, idx: number) => (
            <div
              key={idx}
              className={cn(
                "rounded-2xl p-6 border transition-all hover:shadow-lg group relative",
                plan.bg
              )}
            >
              {plan.badge && (
                <Badge className="absolute top-4 right-4 text-xs" variant="secondary">
                  {plan.badge}
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <div className="flex items-center gap-2 mt-2">
  <p className="text-3xl font-bold">{plan.price}</p>
  <span className="text-sm text-muted-foreground capitalize">
    / {billing}
  </span>
</div>

              <p className="text-sm text-black mt-1 mb-4">{plan.description}</p>

              <ul className="space-y-3 text-sm mt-6">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-black">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
