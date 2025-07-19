"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IntegrationsMarquee } from "@/components/site-ui/integrations-marquee"
import { WhyChooseSection } from "@/components/site-ui/why-choose"
import { FeatureHighlightsSection } from "@/components/site-ui/FeatureHighlightsSection"
import { TestimonialSection } from "@/components/site-ui/TestimonialSection"
import { DeploymentOptionsSection } from "@/components/site-ui/pricing"
import { StartSellingSection } from "@/components/site-ui/StartSellingSection"
import { ComingSoonFeatures } from "@/components/site-ui/comingsoon"
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
  const command = "https://docura-nluj.onrender.com"

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
      className="bg-gradient-to-br from-[#E0F7FA] via-white to-[#FFF3E0] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-center"
    >
<motion.div variants={fadeInUp} className="w-full px-4 sm:px-6 py-20 sm:py-24 max-w-6xl mx-auto">
  <motion.div variants={fadeInUp}>
    <Badge
      variant="secondary"
      className="mb-6 text-sm tracking-wide bg-[#E1F5FE] text-[#0277BD] dark:bg-[#1e3a8a]/20 dark:text-blue-400"
    >
      📄 <code className="ml-1 text-xs font-mono">docura</code> powered by{""}
      <span className="font-semibold ml-1">deadbytes</span>
    </Badge>
  </motion.div>

  <motion.h1
    variants={fadeInUp}
    className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4"
  >
    Intelligent Document Understanding at Scale
  </motion.h1>

  <motion.p
    variants={fadeInUp}
    className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground mb-8"
  >
    <span className="font-semibold text-foreground">Docura</span> is your AI-powered backend for automating queries, summaries, and insights from documents — built with FastAPI, ChromaDB, and RAG, and supercharged by{" "}
    <span className="text-primary font-semibold">deadbytes</span>.
  </motion.p>

  <motion.div
    variants={fadeInUp}
    className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6 px-2"
  >
    <Link href="/chat" className="w-[90%] sm:w-auto max-w-xs">
      <Button size="lg" className="w-full bg-indigo-500 text-white hover:bg-indigo-600">
        Try Docura <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>

    <Link href="/models" className="w-[90%] sm:w-auto max-w-xs">
      <Button
        size="lg"
        className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300"
      >
        Models <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>

    <Link href="/docs/introduction" className="w-[90%] sm:w-auto max-w-xs">
      <Button
        size="lg"
        className="w-full bg-emerald-500 text-black hover:bg-emerald-600"
      >
        Docs <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </motion.div>

  <motion.div
    variants={fadeInUp}
    className="relative mx-auto w-full max-w-md sm:max-w-fit inline-flex items-center bg-white dark:bg-muted px-4 py-3 rounded-md border shadow-sm text-sm font-mono text-muted-foreground"
  >
    <span className="text-xs sm:text-sm truncate">{command}</span>
    <Button
      size="icon"
      variant="ghost"
      onClick={handleCopy}
      className="ml-2 hover:text-foreground"
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
</motion.div>


      <motion.div variants={fadeInUp} className="w-full mt-6 sm:mt-10">
        <h2 className="text-center text-muted-foreground text-sm uppercase font-medium mb-2">
          Tech Stack & Features
        </h2>
        <IntegrationsMarquee />
      </motion.div>

      {/* Additional sections below */}
      <WhyChooseSection />
      <FeatureHighlightsSection />
      <ComingSoonFeatures />
      <StartSellingSection />
    </motion.section>
  )
}
