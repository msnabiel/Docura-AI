"use client"

import { DocPageLayout } from "@/components/docs/doc-page-layout"
import { CodeBlockWithCopy } from "@/components/site-ui/code-block-with-copy"
import { Button } from "@/components/ui/button"

const installSnippet = `npm install @clerk/nextjs
npx nabiel-ui add my-account`

const layoutSnippet = `// app/layout.tsx

import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      {children}
    </ClerkProvider>
  )
}`

const signinSnippet = `// app/sign-in/[[...sign-in]]/page.tsx

import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return <SignIn />
}`

const navbarSnippet = `// components/navbar.tsx

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <div className="font-bold text-lg">Nabiel UI</div>
      <div className="space-x-2">
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  )
}`

const myAccountSnippet = `// components/my-account.tsx

import { useUser } from "@clerk/nextjs"

export function MyAccount() {
  const { user } = useUser()

  if (!user) return <p className="text-sm text-muted-foreground">Not signed in</p>

  return (
    <div className="space-y-2">
      <p className="text-sm">Logged in as:</p>
      <p className="font-medium">{user.fullName || "Anonymous"}</p>
      <p className="text-muted-foreground text-sm">
        {user.primaryEmailAddress?.emailAddress}
      </p>
    </div>
  )
}`

const checkoutLogic = `// components/checkout-page.tsx

import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export function CheckoutPage() {
  const { user } = useUser()

  if (!user)
    return (
      <div className="text-center text-muted-foreground py-12">
        Please sign in to proceed to checkout.
      </div>
    )

  return (
    <div>
      {/* your cart + payment UI here */}
      <Button className="mt-4">Pay Now</Button>
    </div>
  )
}`

export function clerkDoc() {
  return (
    <DocPageLayout
      title="Clerk Auth Integration"
      description={
        <>
          Learn how to integrate <code>Clerk</code> into your Nabiel UI components like{" "}
          <code>{"<MyAccount />"}</code>, <code>Navbar</code>, and <code>CheckoutPage</code>.
        </>
      }
      addSnippet={installSnippet}
      usageSnippet={layoutSnippet}
      preview={
        <div className="flex flex-col items-center space-y-4">
          <Button onClick={() => alert("This would show Clerk Sign In modal.")}>
            Simulate Sign In
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Integrate Clerk sign-in directly into your Nabiel UI layout and components.
          </p>
        </div>
      }
      extraNotes={
        <>
          <h3 className="text-lg font-semibold mt-6 mb-2">🔐 Setup Sign In / Sign Up Pages</h3>
          <CodeBlockWithCopy code={signinSnippet} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🧱 Integrating into Nabiel UI Components</h3>

          <h4 className="font-medium text-base mt-4 mb-1">✅ Navbar (SignIn + UserButton)</h4>
          <CodeBlockWithCopy code={navbarSnippet} />

          <h4 className="font-medium text-base mt-4 mb-1">✅ MyAccount Component</h4>
          <CodeBlockWithCopy code={myAccountSnippet} />

          <h4 className="font-medium text-base mt-4 mb-1">✅ CheckoutPage (Require Auth)</h4>
          <CodeBlockWithCopy code={checkoutLogic} />

          <h3 className="text-lg font-semibold mt-6 mb-2">🔒 Protecting Routes</h3>
          <CodeBlockWithCopy
            code={`// middleware.ts

import { authMiddleware } from "@clerk/nextjs/server"

export default authMiddleware({
  publicRoutes: ["/", "/shop", "/sign-in", "/sign-up"]
})

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
}`}
          />

          <h3 className="text-lg font-semibold mt-6 mb-2">⚙️ Environment Variables</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li><code>CLERK_PUBLISHABLE_KEY</code></li>
            <li><code>CLERK_SECRET_KEY</code></li>
            <li><code>CLERK_JWT_KEY</code> (optional, for Supabase syncing)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">✨ Tips</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-2">
            <li>Use <code>useUser()</code> inside any component to get session info</li>
            <li>Use <code>&lt;UserButton /&gt;</code> in nav or drawer for a mini profile/settings menu</li>
            <li>Combine with Supabase to store additional user data (e.g. phone, address)</li>
          </ul>
        </>
      }
    />
  )
}
