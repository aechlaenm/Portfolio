import React from 'react'

const data = [
  { name: 'Kai',  title: 'Game Producer',     quote: 'Delivered beyond expectations. The hover stability system is chef’s kiss — smooth and robust.', rating: 5 },
  { name: 'Mira', title: 'Tech Lead',         quote: 'Fast, communicative, and creative. Our players felt the difference immediately.',              rating: 5 },
  { name: 'Joon', title: 'Creative Director', quote: 'Refined UI and delightful animations. Would absolutely work together again.',                   rating: 5 },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={i < count ? 'w-4 h-4 fill-brand-400' : 'w-4 h-4 fill-white/20'}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.27 5.82.84-4.21 4.1.99 5.78L10 14.96l-5.2 2.73.99-5.78L1.58 7.61l5.82-.84L10 1.5z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((r, i) => (
          <article
            key={i}
            className="rounded-2xl p-6 bg-surface border border-white/5 transition-all duration-150 hover:ring-1 hover:ring-brand-400/50 hover:shadow-glow"
          >
            <Stars count={r.rating} />
            <p className="text-white/80 mt-2">&ldquo;{r.quote}&rdquo;</p>
            <div className="mt-4 text-sm text-white/60">
              {r.name} &mdash; {r.title}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}