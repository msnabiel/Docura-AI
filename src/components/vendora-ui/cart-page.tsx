"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useParams } from "next/navigation"

type CartItem = {
  id: string
  name: string
  slug: string
  image: string
  price: number
  quantity: number
}

interface CartPageProps {
  className?: string
  storeSlug?: string
}

export const CartPage: React.FC<CartPageProps> = ({ className, storeSlug }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const params = useParams()

  const fallbackSlug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
      ? params.slug[0]
      : undefined

  const finalSlug = storeSlug ?? fallbackSlug

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCart(JSON.parse(stored))
  }, [])

  const updateCart = (items: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(items))
    setCart(items)
  }

  const removeItem = (id: string) => {
    const filtered = cart.filter((item) => item.id !== id)
    updateCart(filtered)
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className={cn("w-full py-10 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Your cart is empty.</p>
            <Button asChild>
              <Link href={finalSlug ? `/store/${finalSlug}/shop` : `/shop`}>
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="divide-y border rounded-md">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex items-center gap-4 p-4">
                  <Image
                    src={item.image || "/hero.jpeg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md border object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">₹{item.price} × {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">₹{item.price * item.quantity}</p>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right space-y-3">
              <p className="text-lg font-medium">
                Total: <span className="text-primary">₹{total}</span>
              </p>
              <Button className="w-full sm:w-auto">Checkout</Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
