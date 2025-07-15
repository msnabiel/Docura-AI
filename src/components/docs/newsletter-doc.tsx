"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { NewsletterSignup } from "@/components/nabiel-ui/newsletter-signup"

export function newsletterDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">NewsletterSignup</h1>
      <p className="text-muted-foreground mb-6">
        The <code>NewsletterSignup</code> component is used to collect email addresses from users for updates, promotions, and product news.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Example NewsletterSignup</CardTitle>
            <CardDescription>A simple, responsive email signup box with confirmation.</CardDescription>
          </CardHeader>
          <CardContent>
            <NewsletterSignup
              onSubscribe={(email) =>
                new Promise((res) => {
                  setTimeout(() => {
                    console.log("Subscribed:", email)
                    res()
                  }, 1000)
                })
              }
            />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<NewsletterSignup
  onSubscribe={(email) => {
    // handle subscription logic
    console.log("Subscribed:", email)
  }}
/>`}
        </code>
      </div>
    </div>
  )
}
