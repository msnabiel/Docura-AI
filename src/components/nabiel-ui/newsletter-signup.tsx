"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface NewsletterSignupProps {
  title?: string
  description?: string
  onSubscribe?: (email: string) => Promise<void> | void
  className?: string
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = "Stay in the loop",
  description = "Subscribe for product news, offers, and design updates.",
  onSubscribe,
  className,
}) => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    if (!email) return
    setLoading(true)
    try {
      await onSubscribe?.(email)
      setSubscribed(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "w-full rounded-xl border border-border bg-gradient-to-br from-muted/60 via-background to-muted/40 p-6 shadow-sm backdrop-blur-md",
        className
      )}
    >
      <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <AnimatePresence mode="wait">
        {subscribed ? (
          <motion.div
            key="subscribed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2 text-green-600 text-sm font-medium"
          >
            <CheckCircle className="w-4 h-4" />
            You're subscribed! 🎉
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2"
          >
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full sm:w-auto flex-1 bg-white/60 dark:bg-muted/70 border border-border"
            />
            <Button
              onClick={handleSubscribe}
              disabled={loading || !email}
              className="bg-foreground text-background hover:bg-foreground/90 transition"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
