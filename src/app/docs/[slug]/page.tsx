// src/app/docs/[slug]/page.tsx

import { notFound } from "next/navigation"
import { SidebarMenu } from "@/components/docs/sidebar-menu"
import { docPages } from "@/data/docs"

type ComponentPageProps = {
  params: { slug: string }
}

export default function DocsPage({ params }: ComponentPageProps) {
  const slug = params.slug

  // 👇 Add this type assertion to make sure it's a React component
  const DocComponent = docPages[slug] as React.FC

  if (!DocComponent) return notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-48 md:shrink-0 md:pr-4 mb-6 md:mb-0">
          <SidebarMenu />
        </aside>
        <div className="flex-1">
          <DocComponent /> {/* ✅ Now valid JSX usage */}
        </div>
      </div>
    </div>
  )
}
