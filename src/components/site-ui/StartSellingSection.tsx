"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function StartSellingSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#FDE68A]/60 via-[#FCA5A5]/50 to-[#C4B5FD]/60 rounded-t-3xl shadow-inner">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-3 text-primary font-medium">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span>Ready to grow?</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Start selling online today.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-8">
          Take your business online with <span className="font-semibold text-foreground">Vendora</span>. 
          Get your free store in just <span className="underline decoration-wavy decoration-primary">30 seconds</span>.
        </p>
        <Link href="/signup">
          <Button size="lg" className="text-base shadow-md hover:scale-105 transition-transform">
            Get Started for Free
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
