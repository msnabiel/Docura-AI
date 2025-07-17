"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Variant = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  images: string[]
}

type CartItem = {
  id: string
  name: string
  slug: string
  image: string
  price: number
  quantity: number
}

interface ProductDetailPageProps {
  variant: Variant
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ variant }) => {
  const [selectedImage, setSelectedImage] = useState(variant.images?.[0] ?? "/hero.jpeg")
  const [addedToCart, setAddedToCart] = useState(false)

  const uniqueImages = Array.from(new Set(variant.images))

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
    const cart: CartItem[] = stored ? JSON.parse(stored) : []

    const existingIndex = cart.findIndex((item) => item.id === variant.id)

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1
    } else {
      cart.push({
        id: variant.id,
        name: variant.name,
        slug: variant.slug,
        image: variant.images[0] || "/hero.jpeg",
        price: variant.price,
        quantity: 1,
      })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    setAddedToCart(true)

    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-5 max-w-5xl mx-auto">
      {/* Images Section */}
      <div className="flex flex-col gap-3">
        <div className="relative w-full h-72 sm:h-96 rounded-md border overflow-hidden">
          <Image
            src={selectedImage}
            alt={variant.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {uniqueImages.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`min-w-[56px] h-14 border rounded-md overflow-hidden ${
                selectedImage === img ? "ring-2 ring-primary" : ""
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-start">
        <h1 className="text-lg sm:text-xl font-semibold mb-1">{variant.name}</h1>

        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
          4.8 (124 reviews)
        </div>

        <p className="text-base sm:text-lg font-semibold text-primary mb-3">₹{variant.price}</p>
        <Separator className="mb-3" />

        <p className="text-sm text-muted-foreground mb-5 whitespace-pre-line">
          {variant.description}
        </p>

        <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="w-full sm:w-auto transition text-sm"
            variant={addedToCart ? "outline" : "default"}
          >
            <AnimatePresence mode="wait">
              {addedToCart ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  Added ✓
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  Add to Cart
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
