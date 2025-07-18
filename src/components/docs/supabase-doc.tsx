"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install @supabase/supabase-js
npx nabiel-ui add my-account`

const clientSnippet = `// lib/supabase.ts
import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)`

const authSnippet = `// example usage in a login form

import { supabase } from "@/lib/supabase"

const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: "user@example.com"
  })

  if (error) console.error("Login error:", error)
  else console.log("Magic link sent:", data)
}`

const logoutSnippet = `// logout user
await supabase.auth.signOut()`

export function supabaseDoc() {
  return (
    <DocPageLayout
      title="Supabase Integration"
      description={
        <>
          Learn how to connect <code>Supabase</code> to your Nabiel UI app for{" "}
          authentication, database access, and more.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={clientSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This would log in via Supabase in production.")}>
            Simulate Supabase Login
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            This simulates calling Supabase’s Auth API using magic link login.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🔑 Authentication</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Use Supabase Auth to sign up, log in, and manage sessions.
            This works well inside Nabiel UI components like <code>MyAccount</code>.
          </p>
          <CodeBlockWithCopy code={authSnippet} />
          <p className="text-sm mt-4 mb-2 text-muted-foreground">Logout example:</p>
          <CodeBlockWithCopy code={logoutSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🧩 Use with Nabiel UI</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>
              Use Supabase inside <code>MyAccount</code> to show user session or profile info.
            </li>
            <li>
              Use Supabase DB to store contact messages (see <code>ContactForm</code> integration).
            </li>
            <li>
              Store orders, cart items, or recently viewed products in Supabase Tables.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">📦 Optional: Database Example</h3>
          <p className="text-sm text-muted-foreground mb-2">
            You can store form submissions or checkout data in a Supabase table:
          </p>
          <CodeBlockWithCopy
            code={`// Save contact form message
await supabase.from("messages").insert([{ name, email, message }])`}
          />

          <h3 className="text-lg font-semibold mt-6 mb-2">⚠️ Notes</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Always use <code>NEXT_PUBLIC_</code> prefix for Supabase env vars in the client.</li>
            <li>Restrict access to tables using Supabase RLS (Row-Level Security).</li>
            <li>You can combine Supabase Auth + Stripe/Razorpay for logged-in checkout flows.</li>
          </ul>
        </>
      }
    />
  )
}
