"use client"

import { ContactForm } from "@/components/nabiel-ui/contact-form"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

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
    <DocPageLayout
      title="ContactForm"
      description={
        <>
          The <code>ContactForm</code> component allows users to reach out with inquiries,
          feedback, or support requests. It includes fields for name, email, and message.
        </>
      }
      preview={
          <ContactForm
            onSubmit={(data) =>
              new Promise((res) => {
                console.log("Contact form submitted:", data)
                setTimeout(res, 1000)
              })
            }
          />
      }
      addSnippet={addSnippet}
      usageSnippet={usageSnippet}
    />
  )
}
