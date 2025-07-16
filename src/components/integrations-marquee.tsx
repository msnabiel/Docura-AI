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

const integrations: { name: string; icon: LucideIcon }[] = [
  { name: "Shopify", icon: ShoppingBag },
  { name: "Mailchimp", icon: Mail },
  { name: "GitHub", icon: Github },
  { name: "Stripe", icon: Zap },
  { name: "Google Sheets", icon: TerminalSquare },
]

// 🔁 Duplicate it 10 times
const repeated = Array(10).fill(integrations).flat()

export function IntegrationsMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-muted">
      <motion.div
        className="flex w-max gap-16"
        animate={{ x: ["0%", "-50%"] }} // Move half the content, second half takes over
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-muted-foreground text-sm min-w-max"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
