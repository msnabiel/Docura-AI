"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TrackOrderProps {
  className?: string
  storeSlug?: string // <-- Add this line
}

type OrderStatus = {
  status: string
  eta: string
  items: string[]
}

const mockOrderDB: Record<string, OrderStatus> = {
  ORD123456: {
    status: "Shipped",
    eta: "2-3 days",
    items: ["Aura Candle - Lavender", "Zen Candle - Eucalyptus"],
  },
  ORD654321: {
    status: "Out for Delivery",
    eta: "Today",
    items: ["Aura Candle - Rose"],
  },
}


export const TrackOrder: React.FC<TrackOrderProps> = ({ className }) => {
  const [orderId, setOrderId] = useState("")
  const [status, setStatus] = useState<null | { status: string; eta: string; items: string[] }>(null)
  const [notFound, setNotFound] = useState(false)

  const handleTrack = () => {
    const result = mockOrderDB[orderId.trim().toUpperCase()]
    if (result) {
      setStatus(result)
      setNotFound(false)
    } else {
      setStatus(null)
      setNotFound(true)
    }
  }

  return (
    <section className={cn("w-full py-12 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Track Your Order</h1>
        <p className="text-muted-foreground">Enter your order ID to see the current status.</p>
        <div className="flex gap-2 justify-center">
          <Input
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g., ORD123456"
            className="max-w-xs"
          />
          <Button onClick={handleTrack}>Track</Button>
        </div>

        {notFound && (
          <p className="text-sm text-red-500">Order not found. Please check the ID and try again.</p>
        )}

        {status && (
          <Card className="mt-6 text-left">
            <CardContent className="p-6 space-y-3">
              <p><span className="font-semibold">Status:</span> {status.status}</p>
              <p><span className="font-semibold">Estimated Delivery:</span> {status.eta}</p>
              <div>
                <p className="font-semibold mb-1">Items:</p>
                <ul className="list-disc ml-5 text-sm text-muted-foreground">
                  {status.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
