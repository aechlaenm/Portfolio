import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-6 bg-surface border border-white/5"
      >
        <h3 className="text-xl font-semibold">Hi, I’m Aechlaenm</h3>
        <p className="mt-2 text-white/70">
          I am an experienced Roblox developer, particularly in general scripting and UI scripting. If you have any projects in mind, I am available for commissions and eager to bring your ideas to life. With over three years of experience in Lua and Roblox Studio, I'm well-equipped to tackle a wide range of challenges. Do not hesitate in reaching out – I look forward to collaborate with you! Thank you for considering my services.
        </p>
        <p className="mt-2 text-white/70">
          I’m available for commision and collaborations.
        </p>
        <button
          onClick={() => navigator.clipboard.writeText('aechlaenm')}
          className="mt-4 inline-block px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 transition shadow-glow"
        >
          Copy Discord: aechlaenm
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl p-6 bg-surface border border-white/5"
      >
        <h3 className="text-xl font-semibold">Capabilities</h3>
        <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-white/70">
          <li className="bg-white/5 rounded-lg p-3">Leadership</li>
          <li className="bg-white/5 rounded-lg p-3">Commitment</li>
          <li className="bg-white/5 rounded-lg p-3">Fast work</li>
          <li className="bg-white/5 rounded-lg p-3">Quality work</li>
          <li className="bg-white/5 rounded-lg p-3">Backend</li>
          <li className="bg-white/5 rounded-lg p-3">Frontend</li>
        </ul>
      </motion.div>
    </div>
  )
}