"use client"

import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"
import slugify from "slugify"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"

const formSchema = z.object({
  storeName: z.string().min(2, "Store name must be at least 2 characters"),
  tagline: z.string().min(2, "Tagline must be at least 2 characters"),
  themeColor: z.string().regex(/^#([0-9A-Fa-f]{6})$/, "Must be a valid hex color"),
  logoUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  description: z.string().min(10, "Description must be at least 10 characters"),
  ctaText: z.string().min(2, "CTA text must be at least 2 characters"),
  contactEmail: z.string().email("Must be a valid email"),
  socials: z.object({
    facebook: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    twitter: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    instagram: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  }),
  categories: z.array(z.string().min(1, "Category name required")).min(1, "At least one category required"),
  featuredProducts: z.array(z.object({
    name: z.string().min(1, "Product name required"),
    category: z.string().min(1, "Category required"),
    price: z.number().min(0, "Price must be positive"),
    images: z.array(z.string().url("Must be valid URL")).min(1, "At least one image required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
  })).min(1, "At least one featured product required"),
  features: z.array(z.object({
    icon: z.string().min(1, "Icon required"),
    title: z.string().min(1, "Title required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
  })).min(1, "At least one feature required"),
  paymentMethod: z.enum(["razorpay", "stripe", "paypal", "none"]),
  razorpayId: z.string().optional(),
  stripeKey: z.string().optional(),
  paypalClientId: z.string().optional(),
}).refine((data) => {
  if (data.paymentMethod === "razorpay" && !data.razorpayId) {
    return false
  }
  if (data.paymentMethod === "stripe" && !data.stripeKey) {
    return false
  }
  if (data.paymentMethod === "paypal" && !data.paypalClientId) {
    return false
  }
  return true
}, {
  message: "Payment method credentials are required",
  path: ["paymentMethod"]
})

type FormValues = z.infer<typeof formSchema>

const steps = [
  ["storeName", "tagline"],
  ["themeColor", "logoUrl"],
  ["description"],
  ["ctaText", "contactEmail"],
  ["socials.facebook", "socials.twitter", "socials.instagram"],
  ["categories"],
  ["featuredProducts"],
  ["features"],
  ["paymentMethod", "razorpayId", "stripeKey", "paypalClientId"],
]

const iconOptions = [
  "Truck", "ShieldCheck", "Smile", "Star", "Heart", "Gift", "Zap", "Award", "CheckCircle", "ThumbsUp"
]

export default function AnimatedCreateForm() {
  const router = useRouter()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
      tagline: "",
      themeColor: "#FFC4B2",
      logoUrl: "",
      description: "",
      ctaText: "Shop Now",
      contactEmail: "",
      socials: { facebook: "", twitter: "", instagram: "" },
      categories: ["Books", "Electronics", "Clothing", "Home"],
      featuredProducts: [
        {
          name: "Demo Product 1",
          category: "Books",
          price: 199,
          images: ["/hero.jpeg"],
          description: "A great book for curious minds."
        },
        {
          name: "Demo Product 2",
          category: "Electronics",
          price: 299,
          images: ["/hero.jpeg"],
          description: "A cool gadget to make life easier."
        }
      ],
      features: [
        {
          icon: "Truck",
          title: "Fast Shipping",
          description: "Get your products delivered quickly and reliably."
        },
        {
          icon: "ShieldCheck",
          title: "Secure Payments",
          description: "We use industry-standard encryption for all transactions."
        },
        {
          icon: "Smile",
          title: "Customer Happiness",
          description: "Friendly support and hassle-free returns."
        }
      ],
      paymentMethod: "none",
      razorpayId: "",
      stripeKey: "",
      paypalClientId: "",
    },
  })

  const { fields: productFields, append: appendProduct, remove: removeProduct } = useFieldArray({
    control: form.control,
    name: "featuredProducts"
  })

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: "features"
  })

  const [categories, setCategories] = useState<string[]>(["Books", "Electronics", "Clothing", "Home"])

  const [step, setStep] = useState(0)
  const currentFields = steps[step]
  const isLastStep = step === steps.length - 1
  const paymentMethod = form.watch("paymentMethod")

  const handleNext = async () => {
    const result = await form.trigger(currentFields as any, { shouldFocus: true })
    if (result) setStep((s) => s + 1)
  }

  const handleBack = () => setStep((s) => Math.max(0, s - 1))

  const onSubmit = (data: FormValues) => {
    const slug = slugify(data.storeName, { lower: true })

    // Clean up social URLs - remove empty strings
    const cleanSocials = Object.fromEntries(
      Object.entries(data.socials).filter(([_, value]) => value && value.trim() !== "")
    )

    // Format featured products with proper structure
    const featuredProducts = data.featuredProducts.map((product, index) => ({
      id: `prod-${index + 1}`,
      slug: slugify(product.name, { lower: true }),
      name: product.name,
      parentName: product.name,
      category: product.category,
      price: product.price,
      images: product.images,
      description: product.description
    }))

    const payload = {
      storeName: data.storeName,
      tagline: data.tagline,
      themeColor: data.themeColor,
      logoUrl: data.logoUrl && data.logoUrl.trim() !== "" ? data.logoUrl : "https://example.com/logo.png",
      description: data.description,
      ctaText: data.ctaText,
      ctaLink: `/store/${slug}/shop`,
      contactEmail: data.contactEmail,
      socials: Object.keys(cleanSocials).length > 0 ? cleanSocials : {
        facebook: `https://facebook.com/${slug}`,
        twitter: `https://twitter.com/${slug}`,
        instagram: `https://instagram.com/${slug}`
      },
      featuredProducts,
      categories: data.categories,
      features: data.features,
      paymentConfig: data.paymentMethod !== "none" ? {
        method: data.paymentMethod,
        ...(data.paymentMethod === "razorpay" && { razorpayId: data.razorpayId }),
        ...(data.paymentMethod === "stripe" && { stripeKey: data.stripeKey }),
        ...(data.paymentMethod === "paypal" && { paypalClientId: data.paypalClientId }),
      } : null,
      template: "vendora"
    }

    localStorage.setItem(`site-${slug}`, JSON.stringify(payload))
    router.push(`/store/${slug}`)
  }

  const renderStepContent = () => {
    const currentStepFields = steps[step]
    
    // Categories step
    if (currentStepFields.includes("categories")) {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <FormLabel className="text-[#A6473E] font-semibold">Categories</FormLabel>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => setCategories([...categories, ""])}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Category
            </Button>
          </div>
          {categories.map((category, index) => (
            <div key={index} className="flex gap-2">
              <Input
                placeholder="Category name"
                className="border-[#F5C4B0] focus:ring-[#F5A97F] flex-1"
                value={category}
                onChange={(e) => {
                  const newCategories = [...categories]
                  newCategories[index] = e.target.value
                  setCategories(newCategories)
                  form.setValue("categories", newCategories)
                }}
              />
              {categories.length > 1 && (
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="sm"
                  onClick={() => {
                    const newCategories = categories.filter((_, i) => i !== index)
                    setCategories(newCategories)
                    form.setValue("categories", newCategories)
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )
    }

    // Featured Products step
    if (currentStepFields.includes("featuredProducts")) {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <FormLabel className="text-[#A6473E] font-semibold">Featured Products</FormLabel>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => appendProduct({
                name: "",
                category: "",
                price: 0,
                images: [""],
                description: ""
              })}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Product
            </Button>
          </div>
          {productFields.map((field, index) => (
            <div key={field.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Product {index + 1}</h4>
                {productFields.length > 1 && (
                  <Button 
                    type="button" 
                    variant="destructive" 
                    size="sm"
                    onClick={() => removeProduct(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`featuredProducts.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`featuredProducts.${index}.category`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="Category" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`featuredProducts.${index}.price`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="199" 
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`featuredProducts.${index}.images.0`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`featuredProducts.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Product description" 
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      )
    }

    // Features step
    if (currentStepFields.includes("features")) {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <FormLabel className="text-[#A6473E] font-semibold">Store Features</FormLabel>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => appendFeature({
                icon: "Star",
                title: "",
                description: ""
              })}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Feature
            </Button>
          </div>
          {featureFields.map((field, index) => (
            <div key={field.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Feature {index + 1}</h4>
                {featureFields.length > 1 && (
                  <Button 
                    type="button" 
                    variant="destructive" 
                    size="sm"
                    onClick={() => removeFeature(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`features.${index}.icon`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Icon</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select icon" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {iconOptions.map((icon) => (
                            <SelectItem key={icon} value={icon}>
                              {icon}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`features.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Feature title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`features.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Feature description" 
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
      )
    }

    // Payment Method step
    if (currentStepFields.includes("paymentMethod")) {
      return (
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#A6473E] font-semibold">Payment Method</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="none">No Payment (Display Only)</SelectItem>
                    <SelectItem value="razorpay">Razorpay</SelectItem>
                    <SelectItem value="stripe">Stripe</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {paymentMethod === "razorpay" && (
            <FormField
              control={form.control}
              name="razorpayId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Razorpay Key ID</FormLabel>
                  <FormControl>
                    <Input placeholder="rzp_test_xxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {paymentMethod === "stripe" && (
            <FormField
              control={form.control}
              name="stripeKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stripe Publishable Key</FormLabel>
                  <FormControl>
                    <Input placeholder="pk_test_xxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {paymentMethod === "paypal" && (
            <FormField
              control={form.control}
              name="paypalClientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PayPal Client ID</FormLabel>
                  <FormControl>
                    <Input placeholder="sb-xxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
      )
    }

    // Default step rendering for other fields
    return (
      <div className="space-y-6">
        {currentFields.map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName as any}
            render={({ field }) => {
              const isTextarea = fieldName === "description"
              const labelMap: Record<string, string> = {
                storeName: "Store Name",
                tagline: "Tagline",
                themeColor: "Theme Color (Hex)",
                logoUrl: "Logo URL (Optional)",
                description: "About Your Store",
                ctaText: "Call-to-Action Text",
                contactEmail: "Contact Email",
                "socials.facebook": "Facebook URL (Optional)",
                "socials.twitter": "Twitter URL (Optional)",
                "socials.instagram": "Instagram URL (Optional)",
              }

              const placeholderMap: Record<string, string> = {
                storeName: "My Demo Store",
                tagline: "Best products online",
                themeColor: "#FFC4B2",
                logoUrl: "https://example.com/logo.png",
                description: "Welcome to My Demo Store — where simplicity meets quality.",
                ctaText: "Shop Now",
                contactEmail: "contact@yourstore.com",
                "socials.facebook": "https://facebook.com/yourstore",
                "socials.twitter": "https://twitter.com/yourstore",
                "socials.instagram": "https://instagram.com/yourstore",
              }

              return (
                <FormItem>
                  <FormLabel className="text-[#A6473E] font-semibold">
                    {labelMap[fieldName] ?? fieldName}
                  </FormLabel>
                  <FormControl>
                    {fieldName === "themeColor" ? (
                      <div className="flex items-center gap-3">
                        <Input
                          type="color"
                          className="w-16 h-10 p-0 border-none cursor-pointer"
                          {...field}
                        />
                        <Input
                          type="text"
                          placeholder="#FFC4B2"
                          className="border-[#F5C4B0] focus:ring-[#F5A97F]"
                          {...field}
                        />
                      </div>
                    ) : isTextarea ? (
                      <Textarea
                        rows={4}
                        placeholder={placeholderMap[fieldName]}
                        className="border-[#F5C4B0] focus:ring-[#F5A97F]"
                        {...field}
                      />
                    ) : (
                      <Input
                        type={fieldName.includes("email") ? "email" : "text"}
                        placeholder={placeholderMap[fieldName]}
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
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFE8DC] to-[#FFFAF5] flex items-center justify-center px-4 py-10">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold mb-3 text-[#A6473E] text-center">Create Your Website</h1>
        <p className="text-center text-[#A6473E] mb-6 font-medium">
          Step {step + 1} of {steps.length} - Let's build your amazing store!
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
                className="bg-white shadow-lg rounded-2xl p-6 min-h-[500px]"
              >
                {renderStepContent()}

                <div className="flex justify-between pt-6 mt-6 border-t">
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
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#F5A97F] hover:bg-[#e68a5c] text-white"
                    >
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