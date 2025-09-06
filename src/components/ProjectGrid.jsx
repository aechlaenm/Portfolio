import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import BoxCarousel from './BubbleCarousel.jsx'
import PreviewVideo from './PreviewVideo.jsx'

export default function ProjectGrid({ projects = [] }) {
  const [openId, setOpenId] = React.useState(null)
  const [page, setPage] = React.useState(0)
  const [direction, setDirection] = React.useState(1)

  const pageSize = 6
  const pages = Math.max(1, Math.ceil(projects.length / pageSize))
  const start = page * pageSize
  const visible = projects.slice(start, start + pageSize)
  const current = projects.find(p => p.id === openId) || null

  const goTo = (next, dir = 1) => {
    setDirection(dir)
    setPage(((next % pages) + pages) % pages)
  }
  const prevPage = () => goTo(page - 1, -1)
  const nextPage = () => goTo(page + 1, 1)

  React.useEffect(() => {
    if (!current) return
    const onKey = (e) => { if (e.key === 'Escape') setOpenId(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current])

  const pageVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 56 : -56, scale: 0.985 }),
    center: {
      opacity: 1, x: 0, scale: 1,
      transition: { type: 'spring', stiffness: 380, damping: 32, mass: 0.6 }
    },
    exit: (dir) => ({
      opacity: 0, x: dir > 0 ? -56 : 56, scale: 0.985,
      transition: { type: 'spring', stiffness: 420, damping: 30, mass: 0.6 }
    }),
  }

  const cardHover = {
    rest:  { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)', transition: { type: 'spring', stiffness: 400, damping: 30 } },
    hover: { y: -4, scale: 1.01, boxShadow: '0 16px 48px rgba(124,58,237,0.20)', transition: { type: 'spring', stiffness: 400, damping: 26 } }
  }
  const mediaHover = {
    rest:  { scale: 1, transition: { type: 'spring', stiffness: 380, damping: 28 } },
    hover: { scale: 1.02, transition: { type: 'spring', stiffness: 380, damping: 24 } }
  }

  return (
    <>
      <div className="relative">
        <div className="min-h-[420px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map(p => (
                  <motion.button
                    key={p.id}
                    onClick={() => setOpenId(p.id)}
                    className="group relative text-left rounded-2xl p-4 bg-surface border border-white/5 focus-visible:outline-none"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={cardHover}
                    style={{ willChange: 'transform' }}
                  >
                    <motion.div
                      className="relative aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 mb-4"
                      variants={mediaHover}
                    >
                      {p.media?.[0]?.type === 'video' ? (
                        <PreviewVideo
                          fullSrc={p.media[0].src}
                          poster={p.media[0].poster}
                          className="w-full h-full object-cover pointer-events-none"
                        />
                      ) : (
                        <img
                          src={p.media?.[0]?.src}
                          alt={p.title}
                          className="w-full h-full object-cover pointer-events-none"
                        />
                      )}
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </motion.div>

                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-white/60 mt-1 line-clamp-2">{p.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags?.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70">{t}</span>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {projects.length > pageSize && (
          <div className="mt-6 flex items-center justify-between">
            <button onClick={prevPage} className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2">
              <ChevronLeft size={18} />
              <span className="text-sm">Prev</span>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > page ? 1 : -1)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition ${i === page ? 'bg-brand-400 scale-110' : 'bg-white/20 hover:bg-white/30'}`}
                />
              ))}
            </div>

            <button onClick={nextPage} className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 flex items-center gap-2">
              <span className="text-sm">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-strong flex items-center justify-center p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-surface/90 border border-white/10 rounded-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenId(null)}
              className="absolute right-4 top-4 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10"
            >
              Close
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <BoxCarousel media={current.media} />
              <div>
                <h3 className="text-2xl font-bold">{current.title}</h3>
                <p className="mt-2 text-white/70">{current.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {current.tags?.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}