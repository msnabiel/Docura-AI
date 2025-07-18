"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDown, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const { slug } = useParams()
  const [store, setStore] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem(`site-${slug}`)
    if (data) {
      try {
        setStore(JSON.parse(data))
      } catch {
        console.warn("Invalid store data")
      }
    }
  }, [slug])

  const name = store?.storeName || "Our Store"
  const theme = store?.themeColor || "#f4f4f5"
  const ctaText = "Shop Now"
  const ctaLink = store?.ctaLink || "#"

  const faqs = store?.faqs || [
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day hassle-free return policy on most items. Please ensure products are in original condition."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping usually takes 3–5 business days. Expedited options are also available at checkout."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship globally! Shipping times and rates vary depending on your location."
    }
  ]

  return (
    <main className="max-w-xl mx-auto px-4 py-10 space-y-8">
      {/* Title & Subtitle */}
      <section className="text-center space-y-1">
        <h1 className="text-2xl font-semibold">FAQs</h1>
        <p className="text-sm text-muted-foreground">
          Answers to common questions about shopping with {name}
        </p>
      </section>

      {/* FAQ List */}
      <section
        className="rounded-xl p-4 border"
        style={{ backgroundColor: `${theme}22` }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq: any, i: number) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-sm font-medium flex justify-between items-center">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Button */}
      <div className="text-center">
        <Link href={ctaLink}>
          <Button className="mx-auto text-sm px-4 py-2">
            <ShoppingBag className="w-4 h-4 mr-2" />
            {ctaText}
          </Button>
        </Link>
      </div>
    </main>
  )
}
