"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const team = [
  { name: "Nabiel M", role: "AI + Full Stack Engineer", avatar: "/hero.jpeg" },
  { name: "Arvindhan K", role: "Full Stack Engineer", avatar: "/hero.jpeg" },
  { name: "Yashwanth B", role: "Full Stack Engineer", avatar: "/hero.jpeg" },
  { name: "Vijay A", role: "Full Stack Engineer", avatar: "/hero.jpeg" },
]

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 py-24 px-6 sm:px-8 lg:px-24 text-zinc-800 dark:text-zinc-100">
      <div className="max-w-6xl mx-auto">

        {/* Meet the Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Makers</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Behind every line of code is a curious mind. Here's who we are.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] dark:from-[#1f2937] dark:to-[#111827] p-6 rounded-2xl w-64 text-center shadow-sm border border-zinc-200 dark:border-zinc-800"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 mx-auto rounded-full mb-3 object-cover border border-zinc-300 dark:border-zinc-700"
                />
                <div className="text-xl font-semibold">{member.name}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Who We Are</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
            We’re a team of builders, hackers, and AI enthusiasts obsessed with simplifying how people
            interact with automation and intelligence. Our product? Crafted with passion, late nights,
            and way too much coffee ☕.
          </p>
        </motion.div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] dark:from-[#1e293b] dark:to-[#0f172a] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
          >
            <h3 className="text-xl font-semibold mb-2">🧠 Our Mission</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              To empower creators and developers with infrastructure that’s smart, scalable, and
              intuitively human. We bridge cutting-edge AI with real-world utility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#fef9c3] to-[#fefce8] dark:from-[#3f3f46] dark:to-[#27272a] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
          >
            <h3 className="text-xl font-semibold mb-2">🌍 Our Values</h3>
            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
              <li>Keep it simple — but powerful</li>
              <li>Build fast. Learn faster.</li>
              <li>Be human, even in code</li>
              <li>Transparency & impact {'>'} buzzwords</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            Curious what we’re building next?
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-200 text-white dark:text-black font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            Go Home <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
