import { examplesDoc } from "@/components/docs/examples-doc"
import { environmentDoc } from "@/components/docs/environment-doc"
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
  {name:"Examples",slug:"examples"},
  // Add more docs here later
]

export const docPages: Record<string, React.FC> = {
  examples: examplesDoc,
  environment: environmentDoc,
  installation: NabielUiInstallationDoc,
  introduction: DocuraIntroDoc,
  "health-check": DocuraHealthDoc,
  "document-upload": DocuraUploadDoc,
  "document-query": DocuraQueryDoc
}
