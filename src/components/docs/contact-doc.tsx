"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "@/components/ui/card"
import { ContactForm } from "@/components/nabiel-ui/contact-form"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"

const usageSnippet = `import { ContactForm } from "@/components/nabiel-ui/contact-form"

export default function Page() {
  return (
    <ContactForm
      onSubmit={(data) => {
        // handle contact message
        console.log("Contact form submitted:", data)
      }}
    />
  )
}`

const addSnippet = `npx nabiel-ui add contact-form`

export function contactDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">ContactForm</h1>
      <p className="text-muted-foreground mb-6">
        The <code>ContactForm</code> component allows users to reach out with inquiries, feedback, or support requests.
      </p>

      {/* Example Preview */}
      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Contact Form</CardTitle>
            <CardDescription>
              Includes name, email, message, and a success state.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm
              onSubmit={(data) =>
                new Promise((res) => {
                  console.log("Contact form submitted:", data)
                  setTimeout(res, 1000)
                })
              }
            />
          </CardContent>
        </Card>
      </div>

      {/* How to add */}
      <h2 className="text-xl font-semibold mb-2">How to add</h2>
      <CodeBlockWithCopy code={addSnippet} />

      {/* How to use */}
      <h2 className="text-xl font-semibold mt-6 mb-2">How to use</h2>
      <CodeBlockWithCopy code={usageSnippet} />
    </div>
  )
}
