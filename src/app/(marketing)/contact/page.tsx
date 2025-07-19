"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#E3F2FD]/50 via-white to-[#FFF3E0]/40 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Contact Docura</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Questions, feedback, or feature ideas? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            className="bg-white dark:bg-muted p-6 rounded-xl shadow-md space-y-4 border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks for reaching out! We'll be in touch shortly.")
            }}
          >
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows={5} required />
            <Button type="submit" className="w-full">Send Message</Button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="p-6 rounded-xl bg-[#EDE7F6]/60 dark:bg-[#1e1b4b]/30 shadow-md space-y-6 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-3">
              <Mail className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">support@docura.dev</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-muted-foreground">+91 xxxxx xxxxx</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-muted-foreground">Chennai, India – 600091</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
