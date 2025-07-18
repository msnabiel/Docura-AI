"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import Image from "next/image"

type CartItem = {
  id: string
  name: string
  slug: string
  image: string
  price: number
  quantity: number
}

interface CheckoutPageProps {
  className?: string
  storeSlug?: string 
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ className }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [couponError, setCouponError] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCart(JSON.parse(stored))
  }, [])

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = Math.max(0, subtotal - discount)

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase()
    if (code === "SAVE10") {
      setDiscount(100)
      setCouponError("")
    } else if (code === "FREESHIP") {
      setDiscount(50)
      setCouponError("")
    } else {
      setDiscount(0)
      setCouponError("Invalid coupon code")
    }
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.removeItem("cart")
    setCart([])
    setSubmitted(true)
  }

  return (
    <section className={cn("w-full py-10 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Shipping Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
          {submitted ? (
            <div className="p-6 rounded-md border bg-green-50 text-green-800">
              ✅ Order placed successfully! We'll email you the confirmation.
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <Input type="text" placeholder="Full Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder="Phone" required />
              <Input type="text" placeholder="Address Line 1" required />
              <Input type="text" placeholder="Address Line 2" />
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" placeholder="City" required />
                <Input type="text" placeholder="Pincode" required />
              </div>
              <Textarea placeholder="Additional Notes" />
              <Button type="submit" className="w-full mt-4">Place Order</Button>
            </form>
          )}
        </div>

        {/* Right: Order Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
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

              {/* Coupon */}
              <div className="flex items-center gap-2 pt-2">
                <Input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon code"
                  className="flex-1"
                />
                <Button type="button" onClick={handleApplyCoupon}>
                  Apply
                </Button>
              </div>
              {couponError && <p className="text-sm text-red-500">{couponError}</p>}
              {discount > 0 && (
                <p className="text-sm text-green-600">✓ Coupon applied: -₹{discount}</p>
              )}

              {/* Total */}
              <div className="flex justify-between pt-4 border-t font-semibold text-lg">
                <p>Total</p>
                <p>₹{total}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
