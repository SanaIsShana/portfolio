import { useRef, useState } from "react"
import { checkVariants, textEnter, textLeave } from "../utils/theme-context"
import { useMousePosition } from "../utils/useMousePosition"
import { motion } from "framer-motion"

export const Intro = () => {
  const [cursorVariant, setCursorVariant] = useState("default")
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)

  return (
    <div className="m-2 sm:m-3 p-1 sm:p-2 w-fit sm:w-2/5">
      <div
        className="text-sm md:text-base lg:text-lg"
        onMouseEnter={() => textEnter(setCursorVariant)}
        onMouseLeave={() => textLeave(setCursorVariant)}
      >
        <p>
          My name is Sana. I am a full-stack developer. I recently got my degree
          in full-stack development at Teknikhögskolan in Lund, Sweden. I love
          programming because I like to solve problems and be creative.
        </p>
      </div>

      <div
        className="text-sm md:text-base lg:text-lg mt-4"
        onMouseEnter={() => textEnter(setCursorVariant)}
        onMouseLeave={() => textLeave(setCursorVariant)}
      >
        <p>
          When I'm not coding, I like to hang out with my friends, learn to cook
          different kinds of food, and play board games!
        </p>
        <motion.div
          ref={ref}
          className="bg-olive h-16 w-16 rounded-full fixed top-0 left-0 pointer-events-none"
          variants={checkVariants(mousePosition)}
          animate={cursorVariant}
        />
      </div>
    </div>
  )
}
