"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Founder, EcoMart",
    quote:
      "Nabiel UI helped us launch a beautiful storefront in days, not weeks. The components are polished, fast, and incredibly easy to use.",
    avatar: "/avatars/aarav.jpg",
    color: "bg-[#E0F7FA]/60 text-[#00796B]",
  },
  {
    name: "Sanya Kapoor",
    title: "CTO, TrendyThreads",
    quote:
      "The checkout experience is buttery smooth. Our conversion rate improved just by switching to Nabiel UI’s design system.",
    avatar: "/avatars/sanya.jpg",
    color: "bg-[#FFF3E0]/60 text-[#EF6C00]",
  },
  {
    name: "Rahul Verma",
    title: "Growth Lead, D2C Labs",
    quote:
      "Best decision we made. The prebuilt pages saved our dev team weeks, and our UI now looks professional out of the box.",
    avatar: "", // fallback
    color: "bg-[#EDE7F6]/60 text-[#5E35B1]",
  },
]

export function TestimonialSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-foreground">What our users are saying</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Real results from real teams using Nabiel UI to build and scale faster.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 text-left shadow-sm hover:shadow-md transition-all ${t.color} backdrop-blur-sm`}
            >
              <Quote className={`h-6 w-6 mb-4 ${t.color.split(" ")[1]}`} />
              <p className="text-sm italic mb-6 text-black dark:text-white">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar || "/hero.jpeg"}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
