import React from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

export default function VideoPlayer({
  src,
  poster,
  autoPlay = true,  
  loop = true,
  muted = false,    
  compact = false, 
}) {
  const videoRef = React.useRef(null)
  const [playing, setPlaying] = React.useState(false)
  const [mutedState, setMutedState] = React.useState(muted)
  const [volume, setVolume] = React.useState(0.9)
  const [duration, setDuration] = React.useState(0)
  const [time, setTime] = React.useState(0)
  const [autoplayBlocked, setAutoplayBlocked] = React.useState(false)

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onLoaded = () => {
      setDuration(v.duration || 0)
      v.playbackRate = 1
      if (autoPlay) {
        v.muted = mutedState
        v.volume = volume
        v.play().then(() => {
          setPlaying(true)
          setAutoplayBlocked(false)
        }).catch(() => {
          setPlaying(false)
          setAutoplayBlocked(true)
        })
      }
    }
    const onTime = () => setTime(v.currentTime || 0)
    v.addEventListener('loadedmetadata', onLoaded)
    v.addEventListener('timeupdate', onTime)
    return () => {
      v.removeEventListener('loadedmetadata', onLoaded)
      v.removeEventListener('timeupdate', onTime)
    }
  }, [src, autoPlay, mutedState, volume])

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = mutedState
  }, [mutedState])

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.volume = volume
  }, [volume])

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (playing) v.play().catch(() => setPlaying(false))
    else v.pause()
  }, [playing])

  const togglePlay = () => {
    setAutoplayBlocked(false)
    setPlaying(p => !p)
  }
  const toggleMute = () => {
    setMutedState(m => !m)
    if (autoplayBlocked) {
      const v = videoRef.current
      v && v.play().then(() => setPlaying(true)).catch(() => {})
      setAutoplayBlocked(false)
    }
  }
  const onSeek = (e) => {
    const v = videoRef.current
    if (!v) return
    const val = Number(e.target.value)
    v.currentTime = val
    setTime(val)
  }
  const fmt = (s) => {
    if (!isFinite(s)) return '0:00'
    const m = Math.floor(s / 60)
    const ss = Math.floor(s % 60).toString().padStart(2, '0')
    return `${m}:${ss}`
  }
  const enterFs = () => {
    const wrapper = videoRef.current?.parentElement
    wrapper && wrapper.requestFullscreen?.()
  }
  const onKey = (e) => {
    const v = videoRef.current
    if (!v) return
    if (e.key === ' ') { e.preventDefault(); togglePlay() }
    if (e.key.toLowerCase() === 'm') toggleMute()
    if (e.key.toLowerCase() === 'f') enterFs()
    if (e.key === 'ArrowLeft') v.currentTime = Math.max(0, v.currentTime - 5)
    if (e.key === 'ArrowRight') v.currentTime = Math.min(duration, v.currentTime + 5)
  }

  return (
    <div
      className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#0b0914]"
      onKeyDown={onKey}
      tabIndex={0}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        loop={loop}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
      />

      {/* Center hint if autoplay blocked */}
      {autoplayBlocked && (
        <div className="absolute inset-0 grid place-items-center">
          <button
            onClick={() => { setPlaying(true); setAutoplayBlocked(false) }}
            className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-white text-sm backdrop-blur"
            aria-label="Play"
          >
            Click to play
          </button>
        </div>
      )}

      {/* Controls */}
      <div className="absolute left-0 right-0 bottom-0 p-2 text-white
                      bg-gradient-to-t from-black/70 via-black/40 to-transparent
                      transition-opacity duration-200 opacity-0 group-hover:opacity-100">
        {!compact && (
          <input
            type="range"
            min={0}
            max={duration || 0}
            step="0.1"
            value={time}
            onChange={onSeek}
            className="w-full accent-brand-400"
          />
        )}

        <div className="mt-1 flex items-center gap-2 text-[12px]">
          <button
            onClick={togglePlay}
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#1a102e]/90 hover:bg-[#27194a] border border-white/10"
          >
            {playing ? <Pause size={14}/> : <Play size={14}/>}{playing ? 'Pause' : 'Play'}
          </button>

          <span className="tabular-nums text-white/80">{fmt(time)} / {fmt(duration)}</span>

          <button
            onClick={toggleMute}
            className="ml-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-[#1a102e]/90 hover:bg-[#27194a] border border-white/10"
          >
            {mutedState ? <VolumeX size={14}/> : <Volume2 size={14}/>}{mutedState ? 'Unmute' : 'Mute'}
          </button>

          {!compact && (
            <input
              type="range"
              min={0} max={1} step="0.02"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-24 accent-brand-400"
            />
          )}

          <button
            onClick={enterFs}
            className="ml-auto inline-flex items-center gap-1 px-2 py-1 rounded bg-[#1a102e]/90 hover:bg-[#27194a] border border-white/10"
          >
            <Maximize size={14}/> Fullscreen
          </button>
        </div>
      </div>
    </div>
  )
}
