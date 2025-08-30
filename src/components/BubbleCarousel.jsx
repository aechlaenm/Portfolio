import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import VideoPlayer from './VideoPlayer.jsx'

export default function BoxCarousel({ media = [] }) {
  const [idx, setIdx] = React.useState(0)
  if (!media || media.length === 0) return null

  const prev = () => setIdx(i => (i - 1 + media.length) % media.length)
  const next = () => setIdx(i => (i + 1) % media.length)

  const m = media[idx]

  return (
    <div className="relative w-full h-full">
      <div className="aspect-video w-full">
        {m?.type === 'video' ? (
          <VideoPlayer src={m.src} poster={m.poster} />
        ) : (
          <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10">
            <img src={m?.src} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {media.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white">
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {media.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === idx ? 'bg-brand-400' : 'bg-white/30 hover:bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}