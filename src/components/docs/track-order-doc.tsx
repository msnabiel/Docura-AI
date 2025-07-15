"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { TrackOrder } from "@/components/nabiel-ui/track-order"

export function trackOrderDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">TrackOrder</h1>
      <p className="text-muted-foreground mb-6">
        The <code>TrackOrder</code> component lets customers enter their order ID and check real-time status updates like <em>Processing</em>, <em>Shipped</em>, or <em>Delivered</em>. Uses a mocked dataset by default.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Track Order</CardTitle>
            <CardDescription>Input your order ID like <code>ORD123456</code> to test.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <TrackOrder />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<TrackOrder />`}
        </code>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        🔧 This version uses a local <code>mockOrderDB</code>. You can replace it with a dynamic fetch from Supabase or an API.  
        Optionally allow tracking via email or phone in the future.
      </div>
    </div>
  )
}
