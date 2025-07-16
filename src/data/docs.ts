import { clerkDoc } from "@/components/docs/clerk-doc"
import { mailchimpDoc } from "@/components/docs/mailchimp-doc"
import { razorpayDoc } from "@/components/docs/razorpay-doc"
import { resendDoc } from "@/components/docs/resend-doc"
import { shopifyIntegrationDoc } from "@/components/docs/shopify-doc"
import { stripeDoc } from "@/components/docs/stripe-doc"
import { supabaseDoc } from "@/components/docs/supabase-doc"
import { paypalDoc } from "@/components/docs/paypal-doc"

export type DocMeta = {
  name: string
  slug: string
}

export const docs: DocMeta[] = [
  { name: "Razorpay Integration", slug: "razorpay" },
  {name:"Stripe Integration",slug:"stripe"},
  {name: "Supabase Integration", slug: "supabase"},
  {name:"Resend Integration",slug:"resend"},
  {name:"Clerk Integration",slug:"clerk"},
  {name:"Mailchimp Integration",slug:"mailchimp"},
    {name:"Shopify Integration",slug:"shopify"},
    { name: "PayPal Integration", slug: "paypal" }, 
  // Add more docs here later
].sort((a, b) => a.name.localeCompare(b.name))
export const docPages: Record<string, React.FC> = {
  razorpay: razorpayDoc,
  stripe:stripeDoc,
  supabase: supabaseDoc,
  resend: resendDoc,
  clerk: clerkDoc,
  mailchimp:mailchimpDoc,
  shopify:shopifyIntegrationDoc,
  paypal: paypalDoc,
}