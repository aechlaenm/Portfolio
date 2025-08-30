import React from 'react'
import HireBadge from './HireBadge.jsx'
import { Menu } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-xl text-white hover:text-brand-200 transition">
          Aechlaenm<span className="text-brand-500">.</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>

        <div className="flex items-center gap-3">
          <HireBadge />
          <button className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/90 backdrop-blur-strong">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-4">
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white transition text-white/80">Projects</a>
            <a href="#reviews" onClick={() => setOpen(false)} className="hover:text-white transition text-white/80">Reviews</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-white transition text-white/80">About</a>
          </div>
        </div>
      )}
    </header>
  )
}
