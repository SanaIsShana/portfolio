import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BsArrowUpRightCircle } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"

import { portfolioProjectImages, projects } from "../utils/info"
import { useMousePosition } from "../utils/useMousePosition"
import { ThemeContext } from "../utils/themeContext"
import { ImageCarousel } from "../components/ImageCarousel"
import { LinkAnimation } from "../components/LinkAnimation"

export const Projects = () => {
  const { theme } = useContext(ThemeContext)

  const ref = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")

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
        ref={ref}
        className="grid justify-items-center font-mono overflow-x-auto text-xs lg:text-lg h-full justify-center items-center"
      >
        {projects.map((project, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 w-3/5 gap-2"
            key={index}
          >
            <div className="w-fit flex flex-col justify-self-center">
              <div className="flex gap-2">
                {project.title} - {project.time}
                <Link to={{ pathname: `${project.link}` }} target="_blank">
                  <FaGithubSquare
                    size={30}
                    className="cursor-pointer"
                    onMouseEnter={() => setCursorVariant("visible")}
                    onMouseLeave={() => setCursorVariant("hidden")}
                  />
                </Link>
              </div>

              <div className="grid grid-cols gap-1">
                {project.techList.map((tech, index) => (
                  <p key={index}>- {tech}</p>
                ))}
              </div>
            </div>
            <div className="items-center">
              <ImageCarousel images={portfolioProjectImages} />
            </div>
          </div>
        ))}
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
