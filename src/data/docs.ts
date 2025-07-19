import { clerkDoc } from "@/components/docs/clerk-doc"
import { mailchimpDoc } from "@/components/docs/mailchimp-doc"
import { razorpayDoc } from "@/components/docs/razorpay-doc"
import { resendDoc } from "@/components/docs/resend-doc"
import { shopifyIntegrationDoc } from "@/components/docs/shopify-doc"
import { stripeDoc } from "@/components/docs/stripe-doc"
import { supabaseDoc } from "@/components/docs/supabase-doc"
import {  paypalDoc } from "@/components/docs/paypal-doc"
import { uploadthingDoc } from "@/components/docs/uploadthing-doc"
import { GoogleSheetsIntegrationDoc } from "@/components/docs/google-sheets-doc"
import { paytmDoc } from "@/components/docs/paytm-doc"
import { cashfreeDoc } from "@/components/docs/cashfree-doc"
import { splineDoc } from "@/components/docs/spline-doc"
import { environmentDoc } from "@/components/docs/environment-doc"
import { zapierDoc } from "@/components/docs/zapier-doc"
import { NabielUiInstallationDoc } from "@/components/docs/installation-doc"
import { DocuraIntroDoc } from "@/components/docs/introduction-doc"
import { DocuraHealthDoc } from "@/components/docs/docura-health-doc"
import { DocuraUploadDoc } from "@/components/docs/docura-upload-doc"
import { DocuraQueryDoc } from "@/components/docs/docura-query-doc"

export type DocMeta = {
  name: string
  slug: string
}

export const docs: DocMeta[] = [
  { name: "Installation", slug: "installation" },
  { name: "Introduction", slug: "introduction" },
   { name: "Environment Setup", slug: "environment" },
  { name: "Health Check", slug: "health-check" },
  { name: "Document Upload", slug: "document-upload" },
  { name: "Document Query", slug: "document-query" },
  // Add more docs here later
]

export const docPages: Record<string, React.FC> = {
  razorpay: razorpayDoc,
  stripe: stripeDoc,
  supabase: supabaseDoc,
  resend: resendDoc,
  clerk: clerkDoc,
  mailchimp: mailchimpDoc,
  shopify: shopifyIntegrationDoc,
  paypal: paypalDoc,
  uploadthing: uploadthingDoc,
  "google-sheets": GoogleSheetsIntegrationDoc,
  paytm: paytmDoc,
  cashfree: cashfreeDoc,
  spline: splineDoc,
  environment: environmentDoc,
  zapier: zapierDoc,
  installation: NabielUiInstallationDoc,
  introduction: DocuraIntroDoc,
  "health-check": DocuraHealthDoc,
  "document-upload": DocuraUploadDoc,
  "document-query": DocuraQueryDoc
}
