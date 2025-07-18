"use client"

import { MyAccount } from "@/components/vendora-ui/my-account"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export default function MyAccountDoc() {
  return (
    <DocPageLayout
      title="MyAccount"
      description="The `MyAccount` component provides a user account dashboard with profile details and order history. It's built using `Tabs` and `Card` components from the Nabiel UI kit."
      preview={<MyAccount />}
      addSnippet={`npx nabiel-ui add my-account`}
      usageSnippet={`<MyAccount />`}
      extraInfo={
        <div className="mt-4 text-sm text-muted-foreground">
          ✨ You can extend this by connecting to Supabase Auth, enabling profile editing,
          order actions (e.g. <code>"Reorder"</code>, <code>"Invoice Download"</code>), and logout.
        </div>
      }
    />
  )
}
