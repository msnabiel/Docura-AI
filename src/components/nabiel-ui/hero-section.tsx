"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  imageSrc?: string
  reversed?: boolean
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Elevate Your Space",
  subtitle = "Discover hand-poured candles, curated for calm and comfort.",
  ctaLabel = "Shop Now",
  ctaHref = "/shop",
  imageSrc = "/hero.jpeg",
  reversed = false,
  className,
}) => {
  return (
    <section className={cn("w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20", className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl flex flex-col-reverse items-center justify-between gap-8 md:gap-16 md:flex-row",
          reversed && "md:flex-row-reverse"
        )}
      >
        {/* Text */}
        <div className="w-full max-w-xl space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">{subtitle}</p>
          <div className="flex justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        {imageSrc && (
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg">
            <Image
              src={imageSrc}
              alt="Hero image"
              width={800}
              height={800}
              className="w-full h-auto rounded-xl object-cover shadow-md"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}
