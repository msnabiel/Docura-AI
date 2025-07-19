"use client"

export default function CookiePolicyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Cookie Policy</h1>
      <p className="text-muted-foreground">Last updated: July 19, 2025</p>

      <p>
        This Cookie Policy explains how Docura uses cookies and related technologies to enhance your
        experience on our platform.
      </p>

      <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored in your browser when you visit a website. They help remember
        your preferences, interactions, and session state.
      </p>

      <h2 className="text-xl font-semibold">2. How We Use Cookies</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Remember your theme preference (dark or light)</li>
        <li>Preserve document upload sessions and search context</li>
        <li>Track anonymous usage analytics (via tools like Vercel Analytics or Google Analytics)</li>
        <li>Improve document rendering and performance consistency</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Types of Cookies We Use</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Essential Cookies:</strong> Required for core functionality (e.g. login, session state)
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us monitor performance and usage trends
        </li>
        <li>
          <strong>Preference Cookies:</strong> Store settings like view modes, layout, or theme
        </li>
      </ul>

      <h2 className="text-xl font-semibold">4. Third-Party Cookies</h2>
      <p>
        Some services integrated with Docura—like Pinecone, OpenAI, Supabase, or Stripe—may use their own
        cookies when you interact with their APIs or UIs.
      </p>

      <h2 className="text-xl font-semibold">5. Managing Cookies</h2>
      <p>
        You can disable or clear cookies from your browser settings. However, disabling essential cookies
        may affect your experience or prevent certain features from working properly.
      </p>

      <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy as our platform evolves. Updates will appear on this page with a
        new “last updated” date.
      </p>

      <p className="text-sm text-muted-foreground">
        For cookie-related concerns, contact us at privacy@docura.dev
      </p>
    </section>
  )
}
