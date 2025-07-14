// src/data/components.ts
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export type ComponentDoc = {
  name: string
  slug: string
  description: string
  preview: React.ReactNode
}

export const componentDocs: ComponentDoc[] = [
  {
    name: "Button",
    slug: "button",
    description: "Flexible, accessible button component.",
    preview: <Button>Click me</Button>,
  },
  {
    name: "Card",
    slug: "card",
    description: "Composable card layout for content blocks.",
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sample Card</CardTitle>
          <CardDescription>This is a preview of the card component.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm">Action</Button>
        </CardContent>
      </Card>
    ),
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Status or tag label for highlighting.",
    preview: (
      <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded">
        New
      </span>
    ),
  },
  // Add more components here...
]
