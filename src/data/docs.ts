import { razorpayDoc } from "@/components/docs/razorpay-doc"

export type DocMeta = {
  name: string
  slug: string
}

export const docs: DocMeta[] = [
  { name: "Razorpay Integration", slug: "razorpay" },
  // Add more docs here later
]
export const docPages: Record<string, React.FC> = {
  razorpay: razorpayDoc,
}