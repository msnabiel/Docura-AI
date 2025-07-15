"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"

type Variant = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  images: string[]
}

interface ProductDetailPageProps {
  variant: Variant
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ variant }) => {
  const [selectedImage, setSelectedImage] = useState(variant.images?.[0] ?? "/hero.jpeg")

  // Add to recently viewed
  useEffect(() => {
    const viewed = {
      id: variant.id,
      name: variant.name,
      slug: variant.slug,
      image: variant.images?.[0] ?? "/hero.jpeg",
    }
    const stored = localStorage.getItem("recentlyViewed")
    const prev = stored ? JSON.parse(stored) : []
    const updated = [viewed, ...prev.filter((p: any) => p.id !== viewed.id)].slice(0, 10)
    localStorage.setItem("recentlyViewed", JSON.stringify(updated))
  }, [variant])

  const handleAddToCart = () => {
    const stored = localStorage.getItem("cart")
    const cart = stored ? JSON.parse(stored) : []
    const updated = [...cart, { ...variant, quantity: 1 }]
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
      {/* Images */}
      <div>
        <div className="border rounded-lg overflow-hidden mb-4">
          <Image
            src={selectedImage}
            alt={variant.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto p-1">
          {variant.images.map((img, idx) => {
            const isSelected = selectedImage === img
            return (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`
                  relative w-16 h-16 flex-shrink-0 rounded-md
                  border bg-background
                  overflow-hidden
                  ${isSelected ? "ring-2 ring-offset-2 ring-primary" : ""}
                `}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            )
          })}
        </div>
      </div>

      {/* Details */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{variant.name}</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
          4.8 (124 reviews)
        </div>
        <p className="text-xl font-semibold text-primary mb-2">₹{variant.price}</p>
        <Separator className="my-4" />
        <p className="text-sm text-muted-foreground mb-6 whitespace-pre-line">
          {variant.description}
        </p>
        <Button size="lg" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}