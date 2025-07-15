"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContactFormProps {
  title?: string
  description?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => Promise<void> | void
  className?: string
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = "Get in touch",
  description = "We usually respond within 24 hours.",
  onSubmit,
  className,
}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    await onSubmit?.({ name, email, message })
    setSubmitted(true)
  }

  return (
    <div className={cn("w-full bg-muted p-6 rounded-lg space-y-4", className)}>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>

      {submitted ? (
        <p className="text-sm font-medium text-green-600">Thanks for reaching out! 💌</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      )}
    </div>
  )
}
