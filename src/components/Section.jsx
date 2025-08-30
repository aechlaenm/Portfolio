import React from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { margin: '-100px', once: true })

  return (
    <section id={id} ref={ref} className="relative py-16 md:py-24">
      {/* Animated divider line */}
      <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden md:block">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={inView ? { height: '100%', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="w-[2px] bg-gradient-to-b from-brand-500 via-brand-300/50 to-transparent rounded-full"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-2 text-white/60"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
