"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface FeaturesGridProps {
  features: Feature[]
  className?: string
}

const colorThemes = [
  {
    bg: "bg-red-100/60",
    border: "border-red-300",
    icon: "text-red-600",
    shadow: "shadow-red-200",
  },
  {
    bg: "bg-yellow-100/60",
    border: "border-yellow-300",
    icon: "text-yellow-600",
    shadow: "shadow-yellow-200",
  },
  {
    bg: "bg-green-100/60",
    border: "border-green-300",
    icon: "text-green-600",
    shadow: "shadow-green-200",
  },
  {
    bg: "bg-blue-100/60",
    border: "border-blue-300",
    icon: "text-blue-600",
    shadow: "shadow-blue-200",
  },
  {
    bg: "bg-purple-100/60",
    border: "border-purple-300",
    icon: "text-purple-600",
    shadow: "shadow-purple-200",
  },
  {
    bg: "bg-pink-100/60",
    border: "border-pink-300",
    icon: "text-pink-600",
    shadow: "shadow-pink-200",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturesGrid({ features, className }: FeaturesGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", className)}>
      {features.map((feature, i) => {
        const color = colorThemes[i % colorThemes.length]

        return (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: i * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            className={cn(
              "rounded-2xl p-6 border transition-all hover:scale-[1.02] hover:shadow-xl bg-opacity-50",
              color.bg,
              color.border,
              color.shadow
            )}
          >
            <feature.icon className={cn("w-6 h-6 mb-4", color.icon)} />
            <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
