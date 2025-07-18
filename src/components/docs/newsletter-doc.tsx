"use client"

import { NewsletterSignup } from "@/components/vendora-ui/newsletter-signup"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function newsletterDoc() {
  return (
    <DocPageLayout
      title="NewsletterSignup"
      description={
        <>
          The <code>NewsletterSignup</code> component is used to collect email addresses from users
          for updates, promotions, and product news.
        </>
      }
      preview={
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
      }
      addSnippet={`npx nabiel-ui add newsletter-signup`}
      usageSnippet={`import { NewsletterSignup } from "@/components/nabiel-ui/newsletter-signup"

export default function Page() {
  return (
    <NewsletterSignup
      onSubscribe={(email) => {
        console.log("Subscribed:", email)
      }}
    />
  )
}`}
    />
  )
}
