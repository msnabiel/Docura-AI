"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

type CartItem = {
  id: string
  name: string
  slug: string
  image: string
  price: number
  quantity: number
}

interface OrderSuccessProps {
  className?: string
}

export const OrderSuccess: React.FC<OrderSuccessProps> = ({ className }) => {
  const [orderItems, setOrderItems] = useState<CartItem[]>([])
  const [orderId, setOrderId] = useState("")

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setOrderItems(JSON.parse(storedCart))
    }
    localStorage.removeItem("cart")

    const fakeOrderId = "ORD" + Math.floor(100000 + Math.random() * 900000)
    setOrderId(fakeOrderId)
  }, [])

  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className={cn("w-full py-16 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Thank you for your order!</h1>
        <p className="text-muted-foreground mb-2">Your order has been placed successfully.</p>
        <p className="font-medium text-sm mb-6">Order ID: <span className="text-primary">{orderId}</span></p>

        {orderItems.length > 0 ? (
          <div className="border rounded-lg p-6 bg-muted text-left space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-md border object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <p className="font-medium">₹{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="flex justify-between pt-4 border-t font-semibold text-lg">
              <p>Total</p>
              <p>₹{total}</p>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground mb-6">Your order details are unavailable.</p>
        )}

        <Button asChild className="mt-6">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    </section>
  )
}
