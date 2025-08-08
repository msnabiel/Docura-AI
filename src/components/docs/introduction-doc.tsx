"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DocuraIntroDoc() {
  return (
    <DocPageLayout
      title="Meet Docura"
      description={
        <>
          <strong>Docura</strong> is a blazing-fast, privacy-first RAG framework built for <strong>internal tools</strong>, <strong>public chatbots</strong>, and everything in between. Engineered with real-time document awareness, smart chunking, and modular deployment in mind.
        </>
      }
      preview={
        <div className="text-center space-y-4">
          <img
            src="/hero.jpeg"
            alt="Docura Logo"
            className="mx-auto w-24 h-24"
          />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're building a chatbot or an internal knowledge system, Docura delivers smarter answers with blazing speed and full control.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/docs/installation">
              <Button>Get Started</Button>
            </Link>
            <Link href="/components">
              <Button variant="outline">Explore Features</Button>
            </Link>
          </div>
        </div>
      }
      extraInfo={
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <h2><strong>Why Docura?</strong></h2>
          <ul>
            <li>
              Built on <strong>Gemini 2.5 Flash</strong> for lightning-fast, real-time answers.
            </li>
            <li>
              Uses <strong>hybrid retrieval</strong> — combining semantic search with keyword matching and cross-encoder reranking.
            </li>
            <li>
              <strong>NLTK-powered chunking</strong> ensures smarter, context-aware results.
            </li>
            <li>
              <strong>Privacy-first</strong> with full local support — no external APIs required.
            </li>
            <li>
              Modular and production-ready with <strong>FastAPI</strong> + <strong>Docker</strong> for cloud and edge deployment.
            </li>
          </ul>

          <h2><strong>Core Capabilities</strong></h2>
          <ul>
            <li>
              Ingest PDFs, DOCX, HTML, PPTX, and emails with support for <code>system_cache</code> folders.
            </li>
            <li>
              Custom citation engine with contextual highlights and automatic metadata extraction.
            </li>
            <li>
              Powered by <strong>FAISS</strong> for fast local vector search and offline-ready embeddings (MiniLM or GGML).
            </li>
            <li>
              Multi-threaded pipelines optimized for speed, scalability, and control.
            </li>
          </ul>

          <h2><strong>Documentation</strong></h2>
          <p>
            Get full integration guides and feature docs covering setup, deployment, embedding strategies, vector stores, and advanced ingestion flows.
          </p>
        </div>
      }
    />
  )
}
