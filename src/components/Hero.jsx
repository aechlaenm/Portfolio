import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute -z-10 inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-700 blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-brand-500 blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 md:pt-24 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Aechlaenm's Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/70 max-w-2xl"
        >
          A scripter available for hire!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex gap-3"
        >
          <a href="#projects" className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 transition shadow-glow">See projects</a>
          <a href="#about" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">About me</a>
        </motion.div>
      </div>
    </section>
  )
}
