"use client"

import { Testimonial } from "@/components/nabiel-ui/Testimonial"
import { DocPageLayout } from "@/components/docs/doc-page-layout"

export function testimonialDoc() {
  return (
    <DocPageLayout
      title="Testimonial"
      description={
        <>
          The <code>Testimonial</code> component displays user or customer feedback with name, role,
          avatar, and quote — ideal for adding trust and social proof to your product pages.
        </>
      }
      preview={
        <div className="max-w-md mx-auto">
        <Testimonial
          name="Sarah Johnson"
          role="Frontend Engineer at CommerceFlow"
          quote="nabiel-ui helped us ship a complete storefront 10x faster. Beautiful defaults, no hassle."
          image="https://i.pravatar.cc/150?u=sarah"
        />
      </div>
      }
      addSnippet={`npx nabiel-ui add testimonial`}
      usageSnippet={`import { Testimonial } from "@/components/testimonial"

<Testimonial
  name="Sarah Johnson"
  role="Frontend Engineer at CommerceFlow"
  quote="nabiel-ui helped us ship a complete storefront 10x faster. Beautiful defaults, no hassle."
  image="https://i.pravatar.cc/150?u=sarah"
/>`}
      extraNotes={
        <>
          💡 You can omit the <code>image</code> prop to show a fallback initial avatar. Great for
          testimonials, team bios, or success stories.
        </>
      }
    />
  )
}
