"use client"

import { motion } from "framer-motion"
import {
  LucideIcon,
  ShoppingBag,
  Mail,
  Github,
  Zap,
  TerminalSquare,
} from "lucide-react"

const integrations: { name: string; icon: LucideIcon; color: string }[] = [
  { name: "Shopify", icon: ShoppingBag, color: "text-[#7C3AED]" },
  { name: "Mailchimp", icon: Mail, color: "text-[#F59E0B]" },
  { name: "GitHub", icon: Github, color: "text-black dark:text-white" },
  { name: "Stripe", icon: Zap, color: "text-[#635BFF]" },
  { name: "Google Sheets", icon: TerminalSquare, color: "text-[#0F9D58]" },
]

// 🔁 Duplicate it 10 times for smooth looping
const repeated = Array(10).fill(integrations).flat()

export function IntegrationsMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-gradient-to-b from-muted/50 to-background border-y border-muted">
      <motion.div
        className="flex w-max gap-16 animate-marquee"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm min-w-max hover:scale-105 transition-transform"
          >
            <item.icon className={`w-5 h-5 ${item.color}`} />
            <span className={`${item.color} font-medium`}>{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
