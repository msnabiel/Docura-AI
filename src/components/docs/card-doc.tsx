"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export function cardDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Card</h1>
      <p className="text-muted-foreground mb-6">Cards are used to group related content in a flexible container.</p>

      <div className="mb-6">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
            <CardDescription>Upgrade to unlock premium features</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get access to advanced analytics, priority support, and more.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground">
        <code>
{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here.</p>
  </CardContent>
</Card>`}
        </code>
      </div>
    </div>
  )
}
