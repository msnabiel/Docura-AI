"use client"

import { motion } from "framer-motion"
import {
  Bot,
  BrainCircuit,
  FileText,
  BookOpenCheck,
  Server,
  Zap,
  Code,
  FolderSearch,
  TerminalSquare,
  Cloud,
  Globe,
  Layers,
  PackageCheck,
  Database,
} from "lucide-react"

const integrations: { name: string; icon: React.ElementType; color: string }[] = [
  { name: "FAISS", icon: Database, color: "text-[#0EA5E9]" },
  { name: "Gemini 2.5 Flash", icon: Bot, color: "text-[#7C3AED]" },
  { name: "LangChain", icon: BrainCircuit, color: "text-[#F59E0B]" },
  { name: "FastAPI", icon: Zap, color: "text-[#3B82F6]" },
  { name: "Hugging Face", icon: Layers, color: "text-[#F43F5E]" },
  { name: "GGML Inference", icon: Code, color: "text-[#1E3A8A]" },
  { name: "NLTK", icon: BookOpenCheck, color: "text-[#DC2626]" },
  { name: "Smart Chunking", icon: FolderSearch, color: "text-[#4B5563]" },
  { name: "Offline Embeddings", icon: Code, color: "text-[#1E40AF]" },
  { name: "Docx/PDF/Email", icon: FileText, color: "text-[#6B7280]" },
  { name: "Local Vector Store", icon: Server, color: "text-[#16A34A]" },
  { name: "Terminal-based Deploy", icon: TerminalSquare, color: "text-[#6366F1]" },
  { name: "Docker Deployments", icon: PackageCheck, color: "text-[#0F766E]" },
]

// 🔁 Repeat for smooth animation
const repeated = Array(10).fill(integrations).flat()

export function IntegrationsMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-gradient-to-b from-muted/50 to-background border-y border-muted">
      <motion.div
        className="flex w-max gap-16 animate-marquee"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 75,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm min-w-max hover:scale-105 transition-transform"
          >
            <item.icon className={`w-5 h-5 ${item.color}`} />
            <span className={`${item.color} font-medium`}>{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
