import React from 'react'

export default function HireBadge() {
  const [copied, setCopied] = React.useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText('aechlaenm')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <button
      onClick={handleCopy}
      title="Click to copy Discord username"
      className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface text-white/90 hover:text-white shadow-glow"
    >
      {/* small green dot */}
      <span className="w-2 h-2 rounded-full bg-neon animate-pulse-dot" />
      <span className="text-[11px] font-semibold tracking-wide whitespace-nowrap">
        {copied ? 'Copied: aechlaenm' : 'Available for hire · Discord: aechlaenm'}
      </span>
    </button>
  )
}