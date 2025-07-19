"use client"

import {
  Zap,
  ServerCog,
  ShieldCheck,
  FileBarChart,
  Search,
  Rocket,
} from "lucide-react"

const features = [
  {
    title: "Lightning-Fast Responses",
    description:
      "Built on Gemini 2.5 Flash for blazing speed. Your answers appear in real time—no delays, just clarity.",
    icon: Zap,
    bg: "bg-[#E3F2FD]",
    text: "text-[#0D47A1]",
  },
  {
    title: "Hybrid Retrieval Engine",
    description:
      "Combines semantic search with keyword matching, powered by cosine similarity + cross-encoder reranking.",
    icon: Search,
    bg: "bg-[#FFF3E0]",
    text: "text-[#E65100]",
  },
  {
    title: "Smart Preprocessing",
    description:
      "Advanced chunking using NLTK ensures more meaningful context chunks for better and accurate results.",
    icon: FileBarChart,
    bg: "bg-[#E8F5E9]",
    text: "text-[#1B5E20]",
  },
  {
    title: "Private & Local-first",
    description:
      "Runs locally using ChromaDB and GGML/All-MiniLM models—no internet, no leaks. Your documents stay with you.",
    icon: ShieldCheck,
    bg: "bg-[#F3E5F5]",
    text: "text-[#6A1B9A]",
  },
  {
    title: "Flexible File Ingestion",
    description:
      "Ingest PDFs, DOCX, HTML, email, and more with system_cache support. Bulk uploads and auto-indexing ready.",
    icon: ServerCog,
    bg: "bg-[#FFF8E1]",
    text: "text-[#F57F17]",
  },
  {
    title: "Ready for Cloud & Edge",
    description:
      "FastAPI backend and modular Docker setup lets you deploy Docura on the cloud or local edge devices easily.",
    icon: Rocket,
    bg: "bg-[#E0F7FA]",
    text: "text-[#006064]",
  },
]

export function FeatureHighlightsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Why Docura Stands Out
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          From hybrid retrieval to privacy-first architecture, Docura delivers powerful RAG-based intelligence from your documents—wherever you deploy it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map(({ title, description, icon: Icon, bg, text }, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-sm transition-all hover:shadow-lg ${bg}`}
            >
              <div
                className={`mb-4 flex items-center justify-center h-10 w-10 rounded-md bg-white/40 ${text}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`text-base font-semibold mb-1 ${text}`}>{title}</h3>
              <p className={`text-sm ${text}/90`}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
