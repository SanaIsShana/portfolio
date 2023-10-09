import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import {
  ThemeContext,
  checkVariants,
  textEnter,
  textLeave,
} from "../utils/theme-context"
import { PageTransition } from "../components/PageTransition"
import { useMousePosition } from "../utils/useMousePosition"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [cursorVariant, setCursorVariant] = useState("default")
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)

  return (
    <div role="main" className="flex flex-col fixed w-screen h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <div
          className={`flex border-solid border-4 rounded-lg  ${
            theme === "dark" ? "border-dustyPink" : "border-black"
          } m-3 sm:m-7 font-header flex-col h-3/4`}
        >
          <div
            className={`static ${
              theme === "dark" ? "text-dustyPink" : "text-black"
            } relative h-full`}
          >
            <div className="p-2 sm:p-10">
              <div className="flex flex-col font-header text-6xl sm:text-8xl align-start w-fit">
                <p
                  className="font-header"
                  onMouseEnter={() => textEnter(setCursorVariant)}
                  onMouseLeave={() => textLeave(setCursorVariant)}
                >
                  Sana Barilade
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 p-2 sm:p-10">
              <div
                className="flex flex-col font-header text-4xl sm:text-6xl"
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
        <Footer />
      </div>
      <PageTransition />
    </div>
  )
}
