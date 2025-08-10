import { examplesDoc } from "@/components/docs/examples-doc"
import { environmentDoc } from "@/components/docs/environment-doc"
import { NabielUiInstallationDoc } from "@/components/docs/installation-doc"
import { DocuraIntroDoc } from "@/components/docs/introduction-doc"
import { DocuraHealthDoc } from "@/components/docs/docura-health-doc"
import { DocuraUploadDoc } from "@/components/docs/docura-upload-doc"
import { DocuraQueryDoc } from "@/components/docs/docura-query-doc"
import { DocuraParserDoc } from "@/components/docs/parser-api"
import { HackRxEndpointDoc } from "@/components/docs/hackrx-endpoint-doc"
import { CacheEndpointDoc } from "@/components/docs/cache-endpoint-doc"

export type DocMeta = {
  name: string
  slug: string
}

export const docs: DocMeta[] = [
  { name: "Introduction", slug: "introduction" },
  { name: "Installation", slug: "installation" },
  { name: "Environment Setup", slug: "environment" },
  { name: "Health Check", slug: "health-check" },
  { name: "HackRx Endpoint", slug: "hackrx-endpoint" },
  { name: "Cache Endpoint", slug: "cache-endpoint" },
  { name: "Examples", slug: "examples" }
]

export const docPages: Record<string, React.FC> = {
  examples: examplesDoc,
  environment: environmentDoc,
  installation: NabielUiInstallationDoc,
  introduction: DocuraIntroDoc,
  "health-check": DocuraHealthDoc,
  "document-upload": DocuraUploadDoc, // kept internally
  "document-query": DocuraQueryDoc,   // kept internally
  "extraction-api": DocuraParserDoc,
  "hackrx-endpoint": HackRxEndpointDoc,
  "cache-endpoint": CacheEndpointDoc // ✅
}
