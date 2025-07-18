"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  imageSrc?: string
  reversed?: boolean
  className?: string
  showGeneralDescription?: boolean
  storeSlug?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Elevate Your Space",
  subtitle = "Thoughtfully designed products for everyday living.",
  ctaLabel = "Shop Now",
  ctaHref = "/shop",
  imageSrc = "/hero.jpeg",
  reversed = false,
  className,
  showGeneralDescription = true,
  storeSlug,
}) => {
  // 👇 same logic as NavBar
  const prefix = storeSlug ? `/store/${storeSlug}` : ""
  const link = ctaHref.startsWith("http") ? ctaHref : `${prefix}${ctaHref}`

  const generalDescription = `Welcome to ${title} — where comfort meets quality. Tap “${ctaLabel}” to explore our curated picks.`

  return (
    <section className={cn("w-full px-4 pt-6 pb-3 sm:pt-8 sm:pb-4 md:pt-10 md:pb-6", className)}>

      <div
        className={cn(
          "mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10",
          reversed && "md:flex-row-reverse"
        )}
      >
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-3 max-w-md mx-auto md:mx-0">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {subtitle}
            </p>

            {showGeneralDescription && (
              <p className="text-sm text-muted-foreground/80">
                {generalDescription}
              </p>
            )}

            <div className="pt-2">
              <Button asChild size="lg">
                <Link href={link}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        {imageSrc && (
          <motion.div
            className="flex-1 w-full max-w-[280px] sm:max-w-[320px] md:max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src={imageSrc}
                alt="Hero image"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
