import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import {
  ThemeContext,
  checkVariants,
  textEnter,
  textLeave,
} from "../utils/theme-context"

import { useMousePosition } from "../utils/useMousePosition"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [cursorVariant, setCursorVariant] = useState("default")
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)

  return (
    <div
      className={`flex border-solid border-4 rounded-lg ${
        theme === "dark" ? "border-dustyPink" : "border-black"
      } m-3 sm:m-7 font-header flex-col h-3/4`}
    >
      <div className="relative h-full">
        <div className="p-2 sm:p-10">
          <div className="flex flex-col text-6xl sm:text-8xl align-start w-fit">
            <p
              onMouseEnter={() => textEnter(setCursorVariant)}
              onMouseLeave={() => textLeave(setCursorVariant)}
            >
              Sana Barilade
            </p>
          </div>
        </div>

        <div className="p-2 sm:pl-12">
          <div className="flex flex-col text-md sm:text-xl align-start w-3/5">
            <p
              onMouseEnter={() => textEnter(setCursorVariant)}
              onMouseLeave={() => textLeave(setCursorVariant)}
            >
              Hi, I recently got my degree in full-stack development. <br />I am
              looking for a new opportunity!
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 p-2 sm:p-10">
          <div
            className="flex flex-col text-4xl sm:text-6xl"
            onMouseEnter={() => textEnter(setCursorVariant)}
            onMouseLeave={() => textLeave(setCursorVariant)}
          >
            <button>
              <Link to="/about">
                About
                <motion.div />
              </Link>
            </button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        </div>
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
