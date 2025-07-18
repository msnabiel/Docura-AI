"use client"

import { TrackOrder } from "@/components/vendora-ui/track-order"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function trackOrderDoc() {
  return (
    <DocPageLayout
      title="TrackOrder"
      description={
        <>
          The <code>TrackOrder</code> component lets customers enter their order ID and check
          real-time status updates like <em>Processing</em>, <em>Shipped</em>, or <em>Delivered</em>. Uses a mocked dataset by default.
        </>
      }
      preview={<TrackOrder />}
      addSnippet={`npx nabiel-ui add track-order`}
      usageSnippet={`import { TrackOrder } from "@/components/nabiel-ui/track-order"

<TrackOrder />`}
      extraNotes={
        <>
          🔧 This version uses a local <code>mockOrderDB</code>. You can replace it with a dynamic
          fetch from Supabase or an API. Optionally allow tracking via email or phone in the future.
        </>
      }
    />
  )
}
