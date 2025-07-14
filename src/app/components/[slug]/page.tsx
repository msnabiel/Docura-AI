import { notFound } from "next/navigation"
import { SidebarMenu } from "@/components/docs/sidebar-menu"
import { buttonDoc } from "@/components/docs/button-doc"
import { cardDoc } from "@/components/docs/card-doc"

const docs = {
  button: buttonDoc,
  card: cardDoc,
}

type ComponentPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ComponentDocPage({ params }: ComponentPageProps) {
  const { slug } = await params
  const DocComponent = docs[slug as keyof typeof docs]
  
  if (!DocComponent) return notFound()
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-48 md:shrink-0 md:pr-4 mb-6 md:mb-0">
          <SidebarMenu />
        </aside>
        <div className="flex-1">
          <DocComponent />
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return [{ slug: "button" }, { slug: "card" }]
}