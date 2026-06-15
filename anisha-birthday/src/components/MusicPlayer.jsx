import { useEffect, useRef, useState } from 'react'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [tapped, setTapped] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.4

    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    setTapped(true)
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/happy-birthday.mp3" loop />

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!tapped && (
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#2C1810] shadow-[0_4px_16px_rgba(44,24,16,0.14)] animate-bounce">
            🎵 Tap to play
          </span>
        )}

        <button
          onClick={toggle}
          aria-label={playing ? 'Pause music' : 'Play music'}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(44,24,16,0.18)] transition-transform duration-200 active:scale-95 hover:scale-105"
        >
          {playing && (
            <span className="absolute inset-0 rounded-full bg-[#D4A843]/20 animate-ping" />
          )}

          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="4" width="4" height="16" rx="1.5" fill="#D4A843" />
              <rect x="15" y="4" width="4" height="16" rx="1.5" fill="#D4A843" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 17H5a2 2 0 1 0 2 2V7l10-2v10h-4a2 2 0 1 0 2 2V5L9 7v10z"
                fill="#D4A843"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}

export default MusicPlayer
