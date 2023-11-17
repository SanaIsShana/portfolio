import { motion } from "framer-motion"
import { useContext, useState } from "react"
import {
  FaCircleChevronLeft,
  FaCircleChevronRight,
  FaMagnifyingGlass,
} from "react-icons/fa6"
import { MagnifiedImage } from "./MagnifiedImage"
import { ThemeContext } from "../utils/themeContext"

export interface ImageCarouselProps {
  images: string[]
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(1)
  const [expand, setExpand] = useState(false)
  const { theme } = useContext(ThemeContext)

  const previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === images.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <>
      <div className="overflow-hidden relative z-0">
        <div
          className="flex transition ease-in-out duration-700"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                className="border-dashed border-2 rounded-xl border-emerald-600 p-2"
              />
            )
          })}
        </div>

        <div
          className={`absolute top-0 h-full w-full ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          <div className="absolute top-0 h-full w-full justify-between items-center flex px-2">
            <motion.button
              onClick={previousSlide}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              className="bg-red rounded-xl"
            >
              {current !== 0 ? <FaCircleChevronLeft size={25} /> : null}
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              className="bg-red rounded-xl"
              disabled={current === images.length - 1 ? true : false}
            >
              {current !== images.length - 1 ? (
                <FaCircleChevronRight size={25} />
              ) : null}
            </motion.button>
          </div>
          <motion.button
            className={`absolute bottom-1 right-1 p-2  ${
              theme === "dark" ? "bg-black" : "bg-white"
            } rounded-xl text-red`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
          >
            <FaMagnifyingGlass onClick={() => setExpand(true)} />
          </motion.button>
        </div>
      </div>

      {expand ? (
        <MagnifiedImage images={images} setExpand={setExpand} expand={expand} />
      ) : null}
    </>
  )
}