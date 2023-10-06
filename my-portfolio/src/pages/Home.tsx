import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, Variants } from "framer-motion"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ThemeContext } from "../utils/theme-context"
import { PageTransition } from "../components/PageTransition"
import { useMousePosition } from "../utils/useMousePosition"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [cursorVariant, setCursorVariant] = useState("default")
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)

  const variants: Variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#a3b899",
      mixBlendMode: "difference",
    },
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  return (
    <div role="main" className="flex flex-col fixed w-screen h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <div className="flex border-solid border-4 rounded-lg border-black m-3 sm:m-7 font-header flex-col h-3/4">
          <div
            className={`static ${
              theme === "dark" ? "text-dustyPink" : "text-black"
            } relative h-full`}
          >
            <div className="p-2 sm:p-10">
              <div className="flex flex-col font-header text-6xl sm:text-8xl align-start w-fit">
                <p
                  className="font-header"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Sana Barilade
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 p-2 sm:p-10">
              <div className="flex flex-col font-header text-4xl sm:text-6xl ">
                <button onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <Link to="/about">
                    About
                    <motion.div />
                  </Link>
                </button>
                <button onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  Projects
                </button>
                <button onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  Contact
                </button>
              </div>
            </div>
            <motion.div
              ref={ref}
              className="bg-olive h-16 w-16 rounded-full fixed top-0 left-0 pointer-events-none"
              variants={variants}
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
