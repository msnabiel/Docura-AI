import { razorpayDoc } from "@/components/docs/razorpay-doc"
import { stripeDoc } from "@/components/docs/stripe-doc"

export type DocMeta = {
  name: string
  slug: string
}

export const docs: DocMeta[] = [
  { name: "Razorpay Integration", slug: "razorpay" },
  {name:"Stripe Integration",slug:"stripe"}
  // Add more docs here later
]
export const docPages: Record<string, React.FC> = {
  razorpay: razorpayDoc,
  stripe:stripeDoc
}