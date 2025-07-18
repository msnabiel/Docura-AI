"use client"

import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialProps {
  name: string
  role: string
  quote: string
  image?: string
}

export function Testimonial({ name, role, quote, image }: TestimonialProps) {
  return (
    <div className="bg-muted p-6 rounded-2xl shadow-sm max-w-md w-full">
      <Quote className="w-6 h-6 text-muted-foreground mb-4" />
      <blockquote className="text-base text-muted-foreground italic mb-6">
        “{quote}”
      </blockquote>
      <div className="flex items-center gap-3">
        <Avatar>
          {image && <AvatarImage src={image} alt={name} />}
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
