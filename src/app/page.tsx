"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function Home() {
  const [copied, setCopied] = useState(false)
  const command = "npm install nabiel-ui"

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={stagger}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-6"
    >
      <motion.div variants={fadeInUp}>
        <Badge className="mb-4" variant="outline">
          Now Available — <code className="ml-1 text-xs font-mono">nabiel-ui</code> for commerce
        </Badge>
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
      >
        Build fast, stunning commerce UIs
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="max-w-xl text-muted-foreground text-base sm:text-lg mb-6"
      >
        <span className="font-medium text-foreground">nabiel-ui</span> is a drop-in UI kit built for product pages, carts, checkouts, and everything e-commerce — built with Tailwind CSS and ShadCN components.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Link href="/docs">
          <Button size="lg">
            Explore Docs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://github.com/msnabiel/nabiel-ui" target="_blank">
          <Button variant="outline" size="lg">
            View on GitHub
          </Button>
        </Link>
      </motion.div>

      {/* Install Command */}
      <motion.div
  variants={fadeInUp}
  className="relative mt-8 inline-flex items-center bg-muted rounded-md px-4 py-3 text-sm font-mono text-muted-foreground w-auto"
>
  <span>{command}</span>
  <Button
    size="icon"
    variant="ghost"
    onClick={handleCopy}
    className="hover:text-foreground ml-2"
  >
    {copied ? (
      <Check className="h-4 w-4 text-green-500" />
    ) : (
      <Copy className="h-4 w-4" />
    )}
  </Button>

  {copied && (
    <span className="absolute -top-6 right-2 text-xs text-green-500 animate-fade-in">
      Copied!
    </span>
  )}
</motion.div>

    </motion.section>
  )
}
