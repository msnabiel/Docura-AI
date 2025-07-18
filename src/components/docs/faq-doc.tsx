"use client"

import { FAQ } from "@/components/vendora-ui/faq"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

const faqItems = [
  {
    question: "What is the delivery time?",
    answer: "Orders are delivered within 3–5 business days across India.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship only within India.",
  },
  {
    question: "Are your candles vegan and cruelty-free?",
    answer: "Yes, all our candles are 100% vegan and not tested on animals.",
  },
]

const addSnippet = `npx nabiel-ui add faq`

const usageSnippet = `import { FAQ } from "@/components/nabiel-ui/faq"

const faqItems = [
  { question: "What is the delivery time?", answer: "3–5 business days" },
  { question: "Do you offer international shipping?", answer: "Currently India only" },
]

export default function Page() {
  return <FAQ items={faqItems} />
}`

export function faqDoc() {
  return (
    <DocPageLayout
      title="FAQ"
      description={
        <>
          The <code>FAQ</code> component renders a list of frequently asked questions using an accordion layout. It’s responsive and allows multiple open sections.
        </>
      }
      preview={<FAQ items={faqItems} />}
      addSnippet={addSnippet}
      usageSnippet={usageSnippet}
      extraNotes={
        <>
          ✅ Built with ShadCN's <code>Accordion</code> component. You can pass <code>type="multiple"</code> internally
          to allow more than one item to stay open at once.
        </>
      }
    />
  )
}
