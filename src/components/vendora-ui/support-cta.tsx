"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SupportCTAProps {
  title?: string
  subtitle?: string
  chatHref?: string
  emailHref?: string
  phoneHref?: string
  className?: string
}

export const SupportCTA: React.FC<SupportCTAProps> = ({
  title = "Need help?",
  subtitle = "Our support team is here 24/7 to assist you.",
  chatHref = "https://wa.me/919876543210",
  emailHref = "mailto:support@nabielui.com",
  phoneHref = "tel:+919876543210",
  className,
}) => {
  return (
    <section className={cn("w-full py-2 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button asChild variant="default">
            <Link href={chatHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href={emailHref}>
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href={phoneHref}>
              <Phone className="w-4 h-4 mr-2" />
              Call Support
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
