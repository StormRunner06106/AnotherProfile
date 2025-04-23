"use client"

import { NAME } from "@/lib/constants"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-4 pt-16">
        {/* Avatar at top center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 relative"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-sky-400 shadow-lg shadow-sky-500/20">
            <Image
              src="/me_half.png"
              alt="Lucas Taylor"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-4">
            { NAME }
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl text-slate-600 mb-8">
            AI Developer | Full-Stack Engineer | Python & AI Specialist
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <a href="#about" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors">
            <span>Explore My Work</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
