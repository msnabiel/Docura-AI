"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { FAQ } from "@/components/nabiel-ui/faq"

export function faqDoc() {
  const faqItems = [
    {
      question: "What is the delivery time?",
      answer: "Orders are delivered within 3-5 business days across India.",
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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">FAQ</h1>
      <p className="text-muted-foreground mb-6">
        The <code>FAQ</code> component renders a list of frequently asked questions using an accordion layout. It’s responsive and allows multiple open sections.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Built using the <code>Accordion</code> component from ShadCN UI.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <FAQ items={faqItems} />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<FAQ items={[
  { question: "What is the delivery time?", answer: "3–5 business days" },
  { question: "Do you offer international shipping?", answer: "Currently India only" },
]} />`}
        </code>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        ✅ Use <code>type="multiple"</code> on the Accordion if you want multiple FAQs to stay open at once.
      </div>
    </div>
  )
}
