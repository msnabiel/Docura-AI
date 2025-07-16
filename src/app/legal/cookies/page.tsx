"use client"

export default function CookiePolicyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Cookie Policy</h1>
      <p className="text-muted-foreground">Last updated: July 16, 2025</p>

      <p>
        This Cookie Policy explains how Nabiel UI uses cookies and related technologies to improve your
        experience on our website.
      </p>

      <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored in your browser when you visit a website. They help remember
        your preferences, activity, or login status.
      </p>

      <h2 className="text-xl font-semibold">2. How We Use Cookies</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Remember your theme preference (light or dark)</li>
        <li>Store recently viewed templates or components</li>
        <li>Preserve cart contents in your local browser</li>
        <li>Track anonymous usage for analytics (e.g. Google Analytics, Vercel)</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Types of Cookies We Use</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Essential Cookies:</strong> Required for basic site functionality (e.g. storing cart items)
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand usage patterns and improve the platform
        </li>
        <li>
          <strong>Preference Cookies:</strong> Remember your UI settings and preferences
        </li>
      </ul>

      <h2 className="text-xl font-semibold">4. Third-Party Cookies</h2>
      <p>
        Some services we use (like Stripe, Resend, or Supabase) may place their own cookies based on how
        you interact with embedded or API-based functionality.
      </p>

      <h2 className="text-xl font-semibold">5. Managing Cookies</h2>
      <p>
        You can clear or disable cookies via your browser settings. Some features (like remembering
        installs or cart items) may stop working if disabled.
      </p>

      <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy as features evolve. Any updates will appear here with a new “last
        updated” date.
      </p>

      <p className="text-sm text-muted-foreground">
        For cookie-related questions, contact privacy@nabielui.dev
      </p>
    </section>
  )
}
