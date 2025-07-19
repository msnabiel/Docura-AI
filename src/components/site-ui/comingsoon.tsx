"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Languages,
  Sparkles,
  ActivitySquare,
  Brain,
  MessageSquarePlus,
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
    title: "Semantic Auto-Tagging",
    icon: Sparkles,
    color: "from-[#fef9c3] to-[#fefce8]", // soft yellow
    description:
      "Automatically extract and assign tags using contextual chunk-level insights.",
  },
  {
    title: "Actionable Insights",
    icon: ActivitySquare,
    color: "from-[#fbcfe8] to-[#fce7f3]", // soft pink
    description:
      "Generate smart summaries with recommended actions tailored to your business logic.",
  },
  {
    title: "LLM Fine-Tuning",
    icon: Brain,
    color: "from-[#fecaca] to-[#fef2f2]", // soft red
    description:
      "Upload your own data and fine-tune lightweight models to specialize on domain-specific queries.",
  },
  {
    title: "Custom Chat Personas",
    icon: MessageSquarePlus,
    color: "from-[#ddd6fe] to-[#ede9fe]", // soft violet
    description:
      "Deploy tailored AI chat agents for HR, legal, or support use cases — all grounded in your files.",
  },
]

export function ComingSoonFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold sm:text-4xl mb-2">Coming Soon to Docura</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore the next evolution in document automation — more intelligent, multilingual, and agent-driven than ever.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {comingSoonFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl border border-muted bg-gradient-to-br ${feature.color} backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-[1.015] transition-all`}
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
