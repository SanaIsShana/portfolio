import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../utils/themeContext"
import portfolio from "../../public/assets/portfolio.svg"
import { motion } from "framer-motion"
import { projects } from "../utils/info"
import { Link } from "react-router-dom"
import { LinkAnimation } from "../components/LinkAnimation"
import { useMousePosition } from "../utils/useMousePosition"
import { BsArrowUpRightCircle } from "react-icons/bs"

export const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")
  const textEnter = () => {
    setCursorVariant("visible")
  }
  const textLeave = () => {
    setCursorVariant("hidden")
  }

  return (
    <motion.div
      className={`flex flex-col border-solid border-4 rounded-lg ${
        theme === "dark" ? "border-dustyPink" : "border-black"
      } m-3 sm:m-7 font-header h-3/4`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        },
      }}
    >
      <div
        className="grid justify-items-center font-mono overflow-x-auto text-xs lg:text-lg"
        ref={ref}
      >
        {projects.map((project) => {
          return (
            <>
              <div className="grid grid-cols-1 w-3/6">
                <p className="m-1 text-center">{project.tech}</p>
                <img src={portfolio} className="w-auto m-1" />
                <button onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <Link to={{ pathname: `${project.link}` }} target="_blank">
                    Github
                  </Link>
                </button>
              </div>
            </>
          )
        })}
      </div>

      <LinkAnimation
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
      >
        <BsArrowUpRightCircle
          size={30}
          className=" bg-olive rounded-full p-1"
        />
      </LinkAnimation>
    </motion.div>
  )
}
