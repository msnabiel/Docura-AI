import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../../globals.css";
import { Footer } from "@/components/nabiel-ui/footer";
import { NavBar } from "@/components/nabiel-ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nabiel UI",
  description: "A modern e-commerce UI kit for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NavBar />

        {/* Main content area */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
      
    </html>
  );
}
