import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const letters = [
  { char: 'A', color: '#E8524A' },
  { char: 'n', color: '#E8943A' },
  { char: 'i', color: '#D4A843' },
  { char: 's', color: '#4BAB6A' },
  { char: 'h', color: '#4A8FD4' },
  { char: 'a', color: '#9B5CE8' },
]

const Hero = () => {
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#E8524A', '#E8943A', '#D4A843', '#4BAB6A', '#4A8FD4', '#9B5CE8'],
      scalar: 0.9,
      ticks: 260,
    })
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] px-6 pb-20 pt-8 sm:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.10),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-5 sm:gap-7">
          <motion.p
            className="text-sm sm:text-xl tracking-[0.25em] sm:tracking-[0.45em] uppercase text-[#C4A882]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Happy Birthday
          </motion.p>

          <h1 className="font-display leading-none tracking-tight text-[clamp(5rem,16vw,11rem)]">
            {letters.map(({ char, color }, i) => (
              <motion.span
                key={i}
                style={{ color }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.09, duration: 0.5, ease: 'easeOut' }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="flex items-center gap-4 text-[#D4A843]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="h-px w-20 bg-[#D4A843]/45" />
            <span className="font-display text-2xl sm:text-3xl tracking-widest">25</span>
            <div className="h-px w-20 bg-[#D4A843]/45" />
          </motion.div>

          <motion.p
            className="font-display text-xl sm:text-3xl text-[#2C1810]/75 tracking-wide"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            जन्मदिनको शुभकामना
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero
