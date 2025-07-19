"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Languages,
  Mic,
} from "lucide-react"

const comingSoonFeatures = [
  {
    title: "Agentic Workflows",
    icon: Bot,
    color: "from-[#c7d2fe] to-[#e0e7ff]", // soft indigo
    description:
      "Chain document tasks across intelligent agents — summarize, tag, route, and respond autonomously.",
  },
  {
    title: "Multilingual Support",
    icon: Languages,
    color: "from-[#bbf7d0] to-[#dcfce7]", // soft green
    description:
      "Query, summarize, and translate documents across 20+ languages with seamless LLM integration.",
  },
  {
    title: "Voice Commands",
    icon: Mic,
    color: "from-[#fde68a] to-[#fef3c7]", // soft orange-yellow
    description:
      "Control your document assistant with natural voice queries — fast, hands-free, and contextual.",
  },
]

export function ComingSoonFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl font-bold sm:text-4xl mb-3">Coming Soon to Docura</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
          Discover the next generation of document intelligence — interactive, multilingual, and voice-driven.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {comingSoonFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl border border-muted bg-gradient-to-br ${feature.color} backdrop-blur-md shadow-md hover:shadow-xl hover:scale-[1.02] transition-all`}
          >
            <feature.icon className="w-7 h-7 mb-3 text-muted-foreground" />
            <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
