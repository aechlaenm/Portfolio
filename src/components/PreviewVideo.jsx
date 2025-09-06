import React from 'react'

export default function PreviewVideo({
  fullSrc,
  poster,
  previewSrc,
  className = '',
  onReady,
}) {
  const ref = React.useRef(null)
  const [shouldLoad, setShouldLoad] = React.useState(false)
  const [src, setSrc] = React.useState('') // assigned when we decide to load

  const computedPreview = previewSrc || `${fullSrc}#t=0,10`

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  React.useEffect(() => {
    if (!shouldLoad) return

    const preconnect = document.createElement('link')
    try {
      const u = new URL(fullSrc)
      preconnect.rel = 'preconnect'
      preconnect.href = `${u.protocol}//${u.host}`
      preconnect.crossOrigin = ''
      document.head.appendChild(preconnect)
    } catch {}

    const preload = document.createElement('link')
    preload.rel = 'preload'
    preload.as = 'video'
    preload.href = computedPreview
    preload.crossOrigin = ''
    document.head.appendChild(preload)

    setSrc(computedPreview)

    return () => {
      preconnect?.remove()
      preload?.remove()
    }
  }, [shouldLoad, fullSrc, computedPreview])

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const onInt = ([entry]) => {
      if (entry.isIntersecting) {
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    }
    const io = new IntersectionObserver(onInt, { rootMargin: '0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src || undefined}
      poster={poster}
      playsInline
      muted
      loop
      autoPlay={Boolean(src)} 
      preload={src ? 'metadata' : 'none'}
      onCanPlayThrough={onReady}
      className={`w-full h-full object-cover pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}