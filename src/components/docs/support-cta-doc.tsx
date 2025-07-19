"use client"

import { SupportCTA } from "@/components/nabiel-ui/support-cta"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function supportCtaDoc() {
  return (
    <DocPageLayout
      title="SupportCTA"
      description={
        <>
          The <code>SupportCTA</code> component highlights your live chat, email, or phone support
          options in a clear, action-driven layout. Use it to build trust and reduce friction.
        </>
      }
      preview={
        <SupportCTA
          title="Need assistance?"
          subtitle="Chat with us or send an email. We're here to help!"
          chatHref="https://wa.me/919999999999"
          emailHref="mailto:support@nabielui.com"
          phoneHref="tel:+919999999999"
        />
      }
      addSnippet={`npx nabiel-ui add support-cta`}
      usageSnippet={`import { SupportCTA } from "@/components/nabiel-ui/support-cta"

<SupportCTA
  title="Need assistance?"
  subtitle="Chat with us or send an email. We're here to help!"
  chatHref="https://wa.me/919999999999"
  emailHref="mailto:support@nabielui.com"
  phoneHref="tel:+919999999999"
/>`}
      extraNotes={
        <>
          💡 You can customize the links to route to Intercom, Crisp Chat, or WhatsApp Business
          directly.
        </>
      }
    />
  )
}
