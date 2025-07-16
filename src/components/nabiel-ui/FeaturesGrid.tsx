"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface FeaturesGridProps {
  features: Feature[]
  className?: string
}

export function FeaturesGrid({ features, className }: FeaturesGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", className)}>
      {features.map((feature, i) => (
        <div
          key={i}
          className="border rounded-xl p-6 bg-muted/50 hover:shadow transition-all"
        >
          <feature.icon className="w-6 h-6 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
