import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© <span id="y">{new Date().getFullYear()}</span> Aechlaenm. All rights reserved.</div>
        <div className="flex gap-4">

        </div>
      </div>
    </footer>
  )
}