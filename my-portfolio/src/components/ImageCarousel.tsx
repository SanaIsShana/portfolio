import { motion } from "framer-motion"
import { useState } from "react"
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6"

interface ImageCarouselProps {
  images: string[]
}
export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === images.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-in-out duration-700"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((s) => {
          return (
            <img
              src={s}
              className="border-dashed border-2 rounded-xl border-emerald-600 p-2"
            />
          )
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center text-red flex px-2">
        <motion.button
          onClick={previousSlide}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.5 }}
          className="bg-white rounded-xl"
        >
          <FaCircleChevronLeft size={25} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.5 }}
          className="bg-white rounded-xl"
        >
          <FaCircleChevronRight size={25} />
        </motion.button>
      </div>
    </div>
  )
}
