"use client"

import { CheckCircle } from "lucide-react"

const benefits = [
  {
    title: "Launch Fast",
    bg: "bg-[#E0F7FA]",
    text: "text-[#004D40]",
    icon: "text-[#004D40]",
  },
  {
    title: "Scale Faster",
    bg: "bg-[#FFF3E0]",
    text: "text-[#E65100]",
    icon: "text-[#E65100]",
  },
  {
    title: "Manage Better",
    bg: "bg-[#EDE7F6]",
    text: "text-[#4527A0]",
    icon: "text-[#4527A0]",
  },
]

const benefitItems: Record<string, string[]> = {
  "Launch Fast": [
    "Fully responsive e-commerce website & mobile app",
    "Loads 6X faster than existing solutions",
    "Upload/import products and inventory in bulk",
    "Integrate payment gateways",
    "Easily customizable themes",
  ],
  "Scale Faster": [
    "Guaranteed 99.5% uptime for your store",
    "60+ third party plugins",
    "Marketing tools and discounts to drive repeat orders",
    "Add staff accounts, assign different roles",
    "Unlimited transactions, minimal transaction fees",
  ],
  "Manage Better": [
    "Order tracking, invoicing and order reports",
    "Bulk edit product prices, variants, inventory",
    "Manage global deliveries",
    "In-depth business analytics",
    "Automate all tax calculations",
  ],
}

export function WhyChooseSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 leading-snug">
          Whether you’re a startup or an established business,
          <br />
          <span className="text-primary">here’s why Vendora is your best choice</span>
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {benefits.map(({ title, bg, text, icon }, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md ${bg} transition-all hover:shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${text}`}>{title}</h3>
              <ul className="space-y-3 text-sm">
                {benefitItems[title].map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-2`}>
                    <CheckCircle className={`h-4 w-4 mt-0.5 ${icon}`} />
                    <span className={`${text}`}>{item}</span>
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
