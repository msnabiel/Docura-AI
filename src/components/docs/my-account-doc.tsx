"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { MyAccount } from "@/components/nabiel-ui/my-account"

export function myAccountDoc() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">MyAccount</h1>
      <p className="text-muted-foreground mb-6">
        The <code>MyAccount</code> component provides a user account dashboard with profile details and order history. It's built using <code>Tabs</code> and <code>Card</code> components from the Nabiel UI kit.
      </p>

      <div className="mb-6">
        <Card className="w-full overflow-hidden">
          <CardHeader>
            <CardTitle>Account Dashboard</CardTitle>
            <CardDescription>A tabbed interface with mock profile and order data.</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <MyAccount />
          </CardContent>
        </Card>
      </div>

      <div className="relative mt-4 bg-muted px-4 py-3 rounded-md text-sm font-mono text-muted-foreground overflow-auto">
        <code>
{`<MyAccount />`}
        </code>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        ✨ You can extend this by connecting to Supabase Auth, enabling profile editing, order actions (e.g. "Reorder", "Invoice Download"), and logout.
      </div>
    </div>
  )
}
