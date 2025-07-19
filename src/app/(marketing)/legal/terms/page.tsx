"use client"

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      <p className="text-muted-foreground">Last updated: July 19, 2025</p>

      <p>
        These Terms and Conditions govern your use of the Docura platform, APIs, and services. By accessing or using Docura, you agree to be bound by these terms. If you do not agree with any part of the terms, you must not use the Service.
      </p>

      <h2 className="text-xl font-semibold">1. Use of Service</h2>
      <p>
        Docura provides tools for building RAG (Retrieval-Augmented Generation) systems, including document ingestion, semantic search, and chatbot integration. You may use Docura in personal, research, or commercial applications, subject to these terms.
      </p>

      <h2 className="text-xl font-semibold">2. Data Responsibility</h2>
      <p>
        You are responsible for any data you upload to or process through Docura. Ensure you have the right to use and process such data. Docura does not claim ownership of user-provided content.
      </p>

      <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
      <p>
        The Docura framework, source code, and prebuilt modules are intellectual property of the creators. You may not resell, sublicense, or redistribute core components without written permission.
      </p>

      <h2 className="text-xl font-semibold">4. Privacy and Local-First Design</h2>
      <p>
        Docura is designed to run locally by default, using open-source libraries like ChromaDB and GGML-based models. No data is sent to external servers unless explicitly configured by the user.
      </p>

      <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
      <p>
        Docura may optionally integrate with third-party services like Pinecone, Google Generative AI, or Hugging Face. Use of these services is subject to their respective terms and privacy policies. We recommend reviewing those before enabling third-party integrations.
      </p>

      <h2 className="text-xl font-semibold">6. Limitations</h2>
      <p>
        Docura is provided “as is” with no warranties, express or implied. We do not guarantee accuracy, uptime, or suitability for any particular purpose. Use at your own risk.
      </p>

      <h2 className="text-xl font-semibold">7. Modifications</h2>
      <p>
        We reserve the right to update or change these terms at any time. Continued use of Docura after changes constitutes your acceptance of the revised terms.
      </p>

      <p className="text-sm text-muted-foreground">
        For support or legal inquiries, contact us at support@docura.dev
      </p>
    </section>
  )
}
