"use client"

import { useState } from "react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  storeName: z.string().min(2, "Store name is required"),
  tagline: z.string().min(2, "Tagline is required"),
  primaryColor: z.string().regex(/^#([0-9A-Fa-f]{6})$/, "Enter a valid hex color"),
  logoUrl: z.string().url("Enter a valid URL"),
  aboutText: z.string().min(10, "Please tell us about your store"),
  ctaText: z.string().min(2, "CTA text required"),
  ctaLink: z.string().url("Enter a valid URL"),
  contactEmail: z.string().email("Enter a valid email"),
  socials: z.object({
    facebook: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
  }),
})

type FormValues = z.infer<typeof formSchema>

function MainInfoForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<FormValues>>
  onSubmit: (data: FormValues) => void
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {[
          {
            name: "storeName",
            label: "Store Name *",
            placeholder: "Your store name",
            type: "text",
          },
          {
            name: "tagline",
            label: "Tagline *",
            placeholder: "Catchy tagline",
            type: "text",
          },
          {
            name: "primaryColor",
            label: "Primary Color (Hex) *",
            placeholder: "#FFC4B2",
            type: "color",
            className: "w-16 h-10 p-0 border-none cursor-pointer mb-6",
          },
          {
            name: "logoUrl",
            label: "Logo URL (500x500 px) *",
            placeholder: "https://example.com/logo.png",
            type: "url",
          },
          {
            name: "aboutText",
            label: "About Your Store *",
            placeholder: "Tell us about your store...",
            type: "textarea",
            rows: 4,
          },
          {
            name: "ctaText",
            label: "Call To Action Text *",
            placeholder: "Shop Now, Contact Us...",
            type: "text",
          },
          {
            name: "ctaLink",
            label: "Call To Action Link *",
            placeholder: "https://yourstore.com/shop",
            type: "url",
          },
          {
            name: "contactEmail",
            label: "Contact Email *",
            placeholder: "contact@yourstore.com",
            type: "email",
          },
        ].map(({ name, label, placeholder, type, className, rows }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as any} // TS fix
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="text-[#A6473E] font-semibold">{label}</FormLabel>
                <FormControl>
                  {type === "textarea" ? (
                    <Textarea
                      placeholder={placeholder}
                      rows={rows}
                      {...field}
                      className="border-[#F5C4B0] focus:ring-[#F5A97F]"
                    />
                  ) : (
                    <Input
                      type={type}
                      placeholder={placeholder}
                      {...field}
                      className={
                        className ??
                        "border-[#F5C4B0] focus:ring-[#F5A97F]"
                      }
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          className="mt-4 bg-[#F5A97F] hover:bg-[#e68a5c] text-white font-semibold w-full"
        >
          Create Website
        </Button>
      </form>
    </Form>
  )
}

function SocialLinksForm({
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<FormValues>>
  onSubmit: (data: FormValues) => void
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {[
          { name: "socials.facebook", label: "Facebook URL", placeholder: "https://facebook.com/yourstore" },
          { name: "socials.twitter", label: "Twitter URL", placeholder: "https://twitter.com/yourstore" },
          { name: "socials.instagram", label: "Instagram URL", placeholder: "https://instagram.com/yourstore" },
        ].map(({ name, label, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as any}
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="text-[#A6473E] font-semibold">{label}</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder={placeholder}
                    {...field}
                    className="border-[#F5C4B0] focus:ring-[#F5A97F]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          className="mt-4 bg-[#F5A97F] hover:bg-[#e68a5c] text-white font-semibold w-full"
        >
          Save Socials
        </Button>
      </form>
    </Form>
  )
}

export default function CreateWebsiteForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
      tagline: "",
      primaryColor: "#FFC4B2", // peach pastel
      logoUrl: "",
      aboutText: "",
      ctaText: "",
      ctaLink: "",
      contactEmail: "",
      socials: { facebook: "", twitter: "", instagram: "" },
    },
  })

  const [tab, setTab] = useState("main")

  function onSubmit(data: FormValues) {
    console.log("Form submitted", data)
    alert("Website creation started! Check console for data.")
    // TODO: send data to backend to generate website
  }

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#FFE8DC] to-[#FFFAF5] p-6 flex flex-col items-center"
      aria-label="Create website form"
    >
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-[#A6473E] text-center tracking-tight">
          Create Your Website
        </h1>

        <Tabs value={tab} onValueChange={setTab} className="mb-8">
          <TabsList className="bg-[#FAD7C7] rounded-lg p-1 shadow-inner">
            <TabsTrigger
              value="main"
              className="text-[#A6473E] font-semibold data-[state=active]:bg-[#F5A97F] data-[state=active]:text-white rounded-lg"
            >
              Main Info
            </TabsTrigger>
            <TabsTrigger
              value="socials"
              className="text-[#A6473E] font-semibold data-[state=active]:bg-[#F5A97F] data-[state=active]:text-white rounded-lg"
            >
              Social Links
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="mt-6">
            <MainInfoForm form={form} onSubmit={onSubmit} />
          </TabsContent>

          <TabsContent value="socials" className="mt-6">
            <SocialLinksForm form={form} onSubmit={onSubmit} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
