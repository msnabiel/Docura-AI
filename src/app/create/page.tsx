"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  storeName: z.string().min(2),
  tagline: z.string().min(2),
  primaryColor: z.string().regex(/^#([0-9A-Fa-f]{6})$/),
  logoUrl: z.string().url(),
  aboutText: z.string().min(10),
  ctaText: z.string().min(2),
  ctaLink: z.string().url(),
  contactEmail: z.string().email(),
  socials: z.object({
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
  }),
})

type FormValues = z.infer<typeof formSchema>

const steps = [
  ["storeName", "tagline"],
  ["primaryColor", "logoUrl"],
  ["aboutText"],
  ["ctaText", "ctaLink"],
  ["contactEmail"],
  ["socials.facebook", "socials.twitter", "socials.instagram"],
]

export default function AnimatedCreateForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
      tagline: "",
      primaryColor: "#FFC4B2",
      logoUrl: "",
      aboutText: "",
      ctaText: "",
      ctaLink: "",
      contactEmail: "",
      socials: { facebook: "", twitter: "", instagram: "" },
    },
  })

  const [step, setStep] = useState(0)
  const currentFields = steps[step]

  const isLastStep = step === steps.length - 1

  const handleNext = async () => {
    const result = await form.trigger(currentFields as any, { shouldFocus: true })
    if (result) {
      setStep((s) => s + 1)
    }
  }

  const handleBack = () => {
    setStep((s) => Math.max(0, s - 1))
  }

  const onSubmit = (data: FormValues) => {
    console.log("Submitted data", data)
    alert("Website generation started!")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFE8DC] to-[#FFFAF5] flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-extrabold mb-3 text-[#A6473E] text-center">Create Your Website</h1>
        <p className="text-center text-[#A6473E] mb-6 font-medium">
          Just a few quick questions and we’ll get your site up in no time.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-lg rounded-2xl p-6 space-y-6"
              >
                {currentFields.map((fieldName) => (
                  <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName as any}
                    render={({ field }) => {
                      const isTextarea = fieldName === "aboutText"
                      const label = {
                        storeName: "Store Name",
                        tagline: "Tagline",
                        primaryColor: "Primary Color (Hex)",
                        logoUrl: "Logo URL",
                        aboutText: "About Your Store",
                        ctaText: "CTA Text",
                        ctaLink: "CTA Link",
                        contactEmail: "Contact Email",
                        "socials.facebook": "Facebook URL",
                        "socials.twitter": "Twitter URL",
                        "socials.instagram": "Instagram URL",
                      }[fieldName] ?? fieldName

                      const placeholder = {
                        storeName: "Your store name",
                        tagline: "Catchy tagline",
                        primaryColor: "#FFC4B2",
                        logoUrl: "https://example.com/logo.png",
                        aboutText: "Tell us about your store...",
                        ctaText: "Shop Now, Contact Us...",
                        ctaLink: "https://yourstore.com/shop",
                        contactEmail: "contact@yourstore.com",
                        "socials.facebook": "https://facebook.com/yourstore",
                        "socials.twitter": "https://twitter.com/yourstore",
                        "socials.instagram": "https://instagram.com/yourstore",
                      }[fieldName]

                      return (
                        <FormItem>
                          <FormLabel className="text-[#A6473E] font-semibold">{label}</FormLabel>
                          <FormControl>
                            {fieldName === "primaryColor" ? (
                              <Input
                                type="color"
                                className="w-16 h-10 p-0 border-none cursor-pointer"
                                {...field}
                              />
                            ) : isTextarea ? (
                              <Textarea
                                rows={4}
                                placeholder={placeholder}
                                className="border-[#F5C4B0] focus:ring-[#F5A97F]"
                                {...field}
                              />
                            ) : (
                              <Input
                                type={fieldName.includes("email") ? "email" : "text"}
                                placeholder={placeholder}
                                className="border-[#F5C4B0] focus:ring-[#F5A97F]"
                                {...field}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )
                    }}
                  />
                ))}

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    variant="outline"
                  >
                    Back
                  </Button>
                  {isLastStep ? (
                    <Button type="submit" className="bg-[#F5A97F] hover:bg-[#e68a5c] text-white">
                      Generate Site
                    </Button>
                  ) : (
                    <Button type="button" onClick={handleNext} className="bg-[#F5A97F] hover:bg-[#e68a5c] text-white">
                      Next
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </form>
        </Form>
      </div>
    </main>
  )
}
