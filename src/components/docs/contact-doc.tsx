"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { ContactForm } from "@/components/nabiel-ui/contact-form"

export function contactDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">ContactForm</h1>
      <p className="text-muted-foreground mb-6">
        The <code>ContactForm</code> component allows users to reach out with inquiries, feedback, or support requests.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example Contact Form</CardTitle>
            <CardDescription>Includes name, email, message, and a success state.</CardDescription>
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

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<ContactForm
  onSubmit={(data) => {
    // handle contact message
    console.log("Contact form submitted:", data)
  }}
/>`}
        </code>
      </div>
    </div>
  )
}
