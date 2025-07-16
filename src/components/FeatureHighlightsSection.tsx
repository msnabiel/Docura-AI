"use client"

import {
  BarChart3,
  Globe,
  LayoutDashboard,
  MapPin,
  Smartphone,
  UserPlus,
} from "lucide-react"

const features = [
  {
    title: "Site Speed",
    description:
      "Incredibly fast storefronts. Don’t take our word for it, start selling online and see it for yourself!",
    icon: Globe,
    bg: "bg-[#E0F7FA]",
    text: "text-[#004D40]",
  },
  {
    title: "Multi-Warehouse",
    description:
      "One store, multiple locations. Ship products from multiple warehouses across India.",
    icon: MapPin,
    bg: "bg-[#FFF3E0]",
    text: "text-[#E65100]",
  },
  {
    title: "Optimised Checkouts",
    description:
      "Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.",
    icon: LayoutDashboard,
    bg: "bg-[#EDE7F6]",
    text: "text-[#4527A0]",
  },
  {
    title: "Staff Accounts",
    description:
      "Add employees, colleagues and teammates to help you grow your business while managing access.",
    icon: UserPlus,
    bg: "bg-[#F1F8E9]",
    text: "text-[#33691E]",
  },
  {
    title: "Android App",
    description:
      "The world is mobile. It's time your store is too. Get more loyal customers with your mobile app.",
    icon: Smartphone,
    bg: "bg-[#FBE9E7]",
    text: "text-[#BF360C]",
  },
  {
    title: "Advanced Analytics",
    description:
      "All the information about your sales, traffic, regions and products, just a single click away.",
    icon: BarChart3,
    bg: "bg-[#E3F2FD]",
    text: "text-[#0D47A1]",
  },
]

export function FeatureHighlightsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          E-commerce Simplified, Success Amplified
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Empowering your online business growth with all the essential tools.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map(({ title, description, icon: Icon, bg, text }, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-sm transition-all hover:shadow-lg ${bg}`}
            >
              <div
                className={`mb-4 flex items-center justify-center h-10 w-10 rounded-md bg-white/40 ${text}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`text-base font-semibold mb-1 ${text}`}>{title}</h3>
              <p className={`text-sm ${text}/90`}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
