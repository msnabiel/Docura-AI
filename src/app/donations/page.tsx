"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DonationsPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-muted dark:from-background dark:to-muted/30 px-4 py-20">
      <div className="max-w-lg w-full border border-border bg-background dark:bg-muted rounded-xl shadow-md p-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Support <span className="text-primary">Vendora</span>
        </h1>

        <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
          Help us continue building fast, open e-commerce tools like <strong>Vendora & Nabiel UI</strong>. If you’ve found value, consider buying us a coffee!
        </p>

        <div className="w-56 h-56 mx-auto rounded-lg overflow-hidden border border-muted mb-4">
          <Image
            src="/qr.png" // Replace with your QR
            alt="UPI QR Code"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <p className="text-sm text-muted-foreground">
          UPI ID: <span className="font-semibold text-foreground">msyednabiel@oksbi</span>
        </p>

        <Button
          asChild
          className="mt-4"
        >
          <a
            href="upi://pay?pa=yourupi@bank&pn=Vendora&cu=INR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate via UPI
          </a>
        </Button>

        <p className="text-xs text-muted-foreground mt-6">
          Thank you for powering Vendora 🚀
        </p>
      </div>
    </main>
  )
}
