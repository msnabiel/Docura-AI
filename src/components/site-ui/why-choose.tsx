"use client"

import { CheckCircle } from "lucide-react"

const benefits = [
  {
    title: "State-of-the-Art Extraction",
    bg: "bg-[#E0F7FA]",
    text: "text-[#004D40]",
    icon: "text-[#004D40]",
  },
  {
    title: "Agentic Intelligence",
    bg: "bg-[#FFF3E0]",
    text: "text-[#E65100]",
    icon: "text-[#E65100]",
  },
  {
    title: "Optimized Hybrid RAG",
    bg: "bg-[#EDE7F6]",
    text: "text-[#4527A0]",
    icon: "text-[#4527A0]",
  },
]

const benefitItems: Record<string, string[]> = {
"State-of-the-Art Extraction": [
    "Hybrid architecture integrating OCR, layout analysis, and NLP-driven content extraction",
    "Robust multi-engine parsing (OCR, PDF, layout) with intelligent fallback strategies",
    "Streamlined preprocessing: noise filtering, normalization, and encoding repair",
    "Context-aware chunking with NLTK, layout preservation, and smart de-hyphenation",
    "Comprehensive support for DOCX, PPTX, and mixed-format files with table and comment handling"
],
  "Agentic Intelligence": [
    "LLM agent executes autonomous multi-step tasks from natural queries",
    "Intent recognition routes queries to appropriate API workflows (e.g., order, status)",
    "One-shot multi-param extraction and auto-enrichment from vector context",
    "Private local context memory via ChromaDB ensures on-device recall and inference",
  ],
  "Optimized Hybrid RAG": [
    "Two-stage retrieval: dense semantic search + lexical keyword matching",
    "Cross-encoder reranker (e.g., bge-reranker-large) boosts answer precision",
    "Adaptive chunk merging + top-k scoring with redundancy-aware filtering",
    "Offline embedding using BGE-Small for speed, outperforming LLaMini-v2 on retrieval",
    "API-agnostic: plug-and-play with Gemini, OpenAI, Mistral, or local models",
    "Multithreaded async pipeline optimized for low-latency inference and throughput",
  ],
};


export function WhyChooseSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 leading-snug">
  What makes Docura Better?<br />
  <span className="text-primary">Smarter retrieval, cleaner output, less guesswork.</span>
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
