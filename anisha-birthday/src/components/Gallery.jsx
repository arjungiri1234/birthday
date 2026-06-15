import { motion } from 'framer-motion'
import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
import photo3 from '../assets/images/photo3.jpg'
import photo4 from '../assets/images/photo4.jpg'
import photo5 from '../assets/images/photo5.jpg'
import photo6 from '../assets/images/photo6.jpg'
import photo7 from '../assets/images/photo7.jpg'
import photo8 from '../assets/images/photo8.jpg'
import photo9 from '../assets/images/photo9.jpg'
import photo10 from '../assets/images/photo10.jpg'

// Gallery slots:
// photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg, photo5.jpg,
// photo6.jpg, photo7.jpg, photo8.jpg, photo9.jpg, photo10.jpg
// Swap in real memories by replacing these image files.

const galleryPhotos = [
  { src: photo1,  span: 'md:col-span-2 md:row-span-2', position: 'object-center' },
  { src: photo2,  span: 'md:col-span-1 md:row-span-1', position: 'object-center' },
  { src: photo3,  span: 'md:col-span-1 md:row-span-2', position: 'object-center' },
  { src: photo4,  span: 'md:col-span-1 md:row-span-2', position: 'object-center' },
  { src: photo5,  span: 'md:col-span-1 md:row-span-2', position: 'object-center' },
  { src: photo6,  span: 'md:col-span-1 md:row-span-1', position: 'object-center' },
  { src: photo7,  span: 'md:col-span-1 md:row-span-1', position: 'object-center' },
  { src: photo8,  span: 'md:col-span-1 md:row-span-1', position: 'object-center' },
  { src: photo10, span: 'md:col-span-1 md:row-span-2', position: 'object-center' },
  { src: photo9,  span: 'md:col-span-2 md:row-span-1', position: 'object-center' },
]

const container = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const Gallery = () => (
  <motion.section
    className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-32 sm:pt-16 sm:pb-24 md:pb-28"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.05 }}
    variants={container}
  >
    <div className="mb-6 sm:mb-8 max-w-3xl">
      <h2 className="font-display text-2xl sm:text-3xl leading-tight text-[#2C1810] md:text-4xl">
        एक बर्स बुढी भयौ 😂
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-3 auto-rows-[160px] sm:gap-4 sm:auto-rows-[190px] md:grid-cols-3 md:auto-rows-[220px]">
      {galleryPhotos.map((photo, index) => (
        <motion.article
          key={index}
          variants={item}
          className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl bg-white shadow-[0_18px_50px_rgba(44,24,16,0.08)] transition-transform duration-500 hover:-translate-y-1 ${photo.span}`}
        >
          <img
            src={photo.src}
            alt=""
            className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${photo.position}`}
          />
        </motion.article>
      ))}
    </div>
  </motion.section>
)

export default Gallery
