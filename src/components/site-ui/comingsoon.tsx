"use client"

import { motion } from "framer-motion"
import {
Users,
  Camera,
  Mic,
} from "lucide-react"

const comingSoonFeatures = [
{
  title: "Multi-User Chat",
  icon: Users,
  color: "from-[#ddd6fe] to-[#ede9fe]",
  description:
    "Collaborate with teammates in shared AI-powered chat rooms — co-ask, discuss, and refine answers together in real time.",
},
  {
    title: "Multimodal Intelligence",
    icon: Camera,
    color: "from-[#bae6fd] to-[#e0f2fe]",
    description:
      "Process and understand images, videos, and audio with advanced embeddings — search and analyze across formats.",
  },
  {
    title: "Voice Commands",
    icon: Mic,
    color: "from-[#fde68a] to-[#fef3c7]",
    description:
      "Control your document assistant with natural voice queries — fast, hands-free, and contextual.",
  },
];

export function ComingSoonFeatures() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Coming Soon to Docura
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
          Discover the next generation of document intelligence — interactive, multilingual, and voice-driven.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {comingSoonFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className={`p-4 sm:p-5 rounded-xl border border-muted bg-gradient-to-br ${feature.color} backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-[1.015] transition-all`}
          >
            <feature.icon className="w-6 h-6 mb-2 text-muted-foreground" />
            <h3 className="font-medium text-base text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
