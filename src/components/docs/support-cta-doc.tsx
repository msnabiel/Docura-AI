"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { SupportCTA } from "@/components/nabiel-ui/support-cta"

export function supportCtaDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">SupportCTA</h1>
      <p className="text-muted-foreground mb-6">
        The <code>SupportCTA</code> component highlights your live chat, email, or phone support options in a clear, action-driven layout. Use it to build trust and reduce friction.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Support Call to Action</CardTitle>
            <CardDescription>
              A responsive section to connect customers with your team.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <SupportCTA
              title="Need assistance?"
              subtitle="Chat with us or send an email. We're here to help!"
              chatHref="https://wa.me/919999999999"
              emailHref="mailto:support@nabielui.com"
              phoneHref="tel:+919999999999"
            />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<SupportCTA
  title="Need assistance?"
  subtitle="Chat with us or send an email. We're here to help!"
  chatHref="https://wa.me/919999999999"
  emailHref="mailto:support@nabielui.com"
  phoneHref="tel:+919999999999"
/>`}
        </code>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        💡 You can customize the links to route to Intercom, Crisp Chat, or WhatsApp Business directly.
      </div>
    </div>
  )
}
