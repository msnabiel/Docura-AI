export type Variant = {
  id: string
  name: string
  slug: string
  sku: string
  price: number
  description: string
  images: string[]
}

export type Product = {
  id: string
  name: string
  type: "Aura" | "Zen"
  variants: Variant[]
}

export type FlattenedVariant = Variant & {
  parentName: string
  type: "Aura" | "Zen"
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Aura Candle",
    type: "Aura",
    variants: [
      {
        id: "v1",
        name: "Lavender",
        slug: "aura-lavender",
        sku: "AURA-LAVENDER",
        price: 499,
        description: "Calming lavender scent to relax your senses.",
        images: ["/hero.jpeg"],
      },
      {
        id: "v2",
        name: "Rose",
        slug: "aura-rose",
        sku: "AURA-ROSE",
        price: 499,
        description: "Romantic rose aroma for soothing evenings.",
        images: ["/hero.jpeg"],
      },
    ],
  },
  {
    id: "p2",
    name: "Zen Candle",
    type: "Zen",
    variants: [
      {
        id: "v3",
        name: "Eucalyptus",
        slug: "zen-eucalyptus",
        sku: "ZEN-EUCALYPTUS",
        price: 549,
        description: "Invigorating eucalyptus for mental clarity.",
        images: ["/hero.jpeg"],
      },
      {
        id: "v4",
        name: "Sandalwood",
        slug: "zen-sandalwood",
        sku: "ZEN-SANDALWOOD",
        price: 549,
        description: "Earthy sandalwood for grounding vibes.",
        images: ["/hero.jpeg"],
      },
    ],
  },
]

// ✅ Corrected flattenedVariants with proper typing
export const flattenedVariants: FlattenedVariant[] = products.flatMap((product: Product) =>
  product.variants.map((variant: Variant) => ({
    ...variant,
    parentName: product.name,
    type: product.type,
  }))
)
