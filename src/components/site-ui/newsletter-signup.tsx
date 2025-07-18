"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NewsletterSignupProps {
  title?: string
  description?: string
  onSubscribe?: (email: string) => Promise<void> | void
  className?: string
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Join our newsletter",
  description = "Get early access to sales and new product launches.",
  onSubscribe,
  className,
}) => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async () => {
    if (!email) return
    await onSubscribe?.(email)
    setSubscribed(true)
  }

  return (
    <div className={cn("w-full bg-muted p-6 rounded-lg space-y-4", className)}>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>

      {subscribed ? (
        <p className="text-sm font-medium text-green-600">You're subscribed! 🎉</p>
      ) : (
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSubscribe}>Subscribe</Button>
        </div>
      )}
    </div>
  )
}
