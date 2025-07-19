"use client"

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: July 19, 2025</p>

      <p>
        This Privacy Policy outlines how Docura handles, stores, and protects your data when using our platform, tools, and integrations.
      </p>

      <h2 className="text-xl font-semibold">1. Information We Process</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Documents and files uploaded to Docura for retrieval or summarization</li>
        <li>Optional configuration data, such as Pinecone or OpenAI keys (only if enabled)</li>
        <li>Diagnostic logs if you explicitly enable error reporting (disabled by default)</li>
      </ul>

      <h2 className="text-xl font-semibold">2. How We Use Your Data</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>To enable document search, extraction, and retrieval</li>
        <li>To improve local vector indexing and chatbot performance</li>
        <li>To enable optional external integrations, if configured by you</li>
      </ul>

      <h2 className="text-xl font-semibold">3. Local-First Design</h2>
      <p>
        Docura is designed to run fully locally. Uploaded files, vector indexes, and chat history are stored on your device unless explicitly configured to use cloud storage. We do not collect or transmit user data without your consent.
      </p>

      <h2 className="text-xl font-semibold">4. Third-Party Integrations</h2>
      <p>
        Docura may optionally connect to services like Pinecone, Google Generative AI, Hugging Face, or OpenAI. Any data sent to these services is governed by their respective privacy policies. We never transmit data to third-party APIs unless you explicitly enable and configure them.
      </p>

      <h2 className="text-xl font-semibold">5. Your Control</h2>
      <p>
        You control your data. You may delete documents, indexes, and configuration data at any time. We do not store or analyze your data unless you explicitly enable telemetry or cloud sync (coming soon).
      </p>

      <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Significant changes will be communicated via version notes or in-app notifications, with the latest revision date always shown here.
      </p>

      <p className="text-sm text-muted-foreground">
        For any privacy-related questions, contact us at privacy@docura.dev
      </p>
    </section>
  )
}
