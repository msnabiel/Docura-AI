"use client"

import { CheckCircle } from "lucide-react"

const benefits = [
  {
    title: "Answer Smarter",
    bg: "bg-[#E0F7FA]",
    text: "text-[#004D40]",
    icon: "text-[#004D40]",
  },
  {
    title: "Scale Intelligently",
    bg: "bg-[#FFF3E0]",
    text: "text-[#E65100]",
    icon: "text-[#E65100]",
  },
  {
    title: "Docurize Everything",
    bg: "bg-[#EDE7F6]",
    text: "text-[#4527A0]",
    icon: "text-[#4527A0]",
  },
]

const benefitItems: Record<string, string[]> = {
  "Answer Smarter": [
    "Built on Gemini 2.5 Flash for lightning-fast responses",
    "Hybrid RAG using semantic search + keyword matching",
    "NLTK-powered smart chunking for accurate context",
    "Real-time document-aware responses",
    "Cross-encoder reranking for relevant answers",
  ],
  "Scale Intelligently": [
    "ChromaDB for high-performance local vector search",
    "Optimized for speed with multi-threaded pipelines",
    "Offline embeddings with all-MiniLM or GGML-based models",
    "No external APIs required — privacy-first architecture",
    "Modular components ready for cloud or edge deployment",
  ],
  "Docurize Everything": [
    "Ingest PDFs, DOCX, PPTX, HTML, and even email files",
    "Custom citation engine with contextual highlights",
    "Supports bulk ingestion & system_cache directories",
    "Automatic metadata extraction and indexing",
    "Ready-to-deploy with FastAPI + Docker",
  ],
}

export function WhyChooseSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 leading-snug">
          Whether you're building internal tools or public chatbots,
          <br />
          <span className="text-primary">here's why Docura is your ultimate RAG framework</span>
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {benefits.map(({ title, bg, text, icon }, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md ${bg} transition-all hover:shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${text}`}>{title}</h3>
              <ul className="space-y-3 text-sm">
                {benefitItems[title].map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-2`}>
                    <CheckCircle className={`h-4 w-4 mt-0.5 ${icon}`} />
                    <span className={`${text}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
