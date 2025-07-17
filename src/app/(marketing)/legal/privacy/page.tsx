"use client"

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">
        Last updated: July 16, 2025
      </p>

      <p>
        This Privacy Policy describes how Nabiel UI collects, uses, and protects your information when you use our website and services.
      </p>

      <h2 className="text-xl font-semibold">1. Information We Collect</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Personal data (e.g. name, email) when you subscribe to our newsletter</li>
        <li>Anonymous analytics data via tools like Vercel Analytics or Google Analytics</li>
        <li>Component install usage (locally stored only, not tracked remotely)</li>
      </ul>

      <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>To provide updates, documentation, and support</li>
        <li>To improve our components and user experience</li>
        <li>To send optional marketing or product updates (only with consent)</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Local Storage</h2>
      <p>
        We use your browser’s localStorage to persist component installation status, cart contents, and theme preferences. This data is not shared externally.
      </p>

      <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
      <p>
        Nabiel UI may use third-party providers like Resend (email), Stripe (payment), and Supabase (data). Your data may be processed in accordance with their privacy policies.
      </p>

      <h2 className="text-xl font-semibold">5. Your Rights</h2>
      <p>
        You may request access or deletion of your data by contacting us. We respect all data rights outlined in applicable laws like GDPR.
      </p>

      <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be posted here with a revised “last updated” date.
      </p>

      <p className="text-sm text-muted-foreground">
        For privacy-related questions, contact privacy@nabielui.dev
      </p>
    </section>
  )
}
