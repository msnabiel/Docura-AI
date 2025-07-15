"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const MyAccount = () => {
  const [orders] = useState([
    {
      id: "ORD123456",
      date: "2025-07-12",
      total: 1098,
      status: "Shipped",
      items: ["Aura Candle - Lavender", "Zen Candle - Eucalyptus"],
    },
    {
      id: "ORD654321",
      date: "2025-06-22",
      total: 499,
      status: "Delivered",
      items: ["Aura Candle - Rose"],
    },
  ])

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="font-semibold">Name</p>
                <p className="text-muted-foreground">Nabiel M</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">nabiel@example.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">+91 xxxxxxxxxx</p>
              </div>
              <Button variant="outline" className="mt-4">Log Out</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardContent className="p-6 space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border-b pb-4">
                  <div className="flex justify-between font-semibold">
                    <p>#{order.id}</p>
                    <p>₹{order.total}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{order.date} • {order.status}</p>
                  <ul className="list-disc ml-5 text-sm mt-2 text-muted-foreground">
                    {order.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {orders.length === 0 && (
                <p className="text-muted-foreground">You have no orders yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
