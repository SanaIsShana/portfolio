import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { BsArrowUpRightCircle } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"

import { projects } from "../utils/info"
import { useMousePosition } from "../utils/useMousePosition"
import { ImageCarousel } from "../components/ImageCarousel"
import { LinkAnimation } from "../components/LinkAnimation"
import { PageTransition } from "../components/PageTransition"

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")

  return (
    <PageTransition cssStyle="font-header">
      <div
        ref={ref}
        className="grid justify-items-center font-mono overflow-x-auto text-sm lg:text-lg h-full justify-center items-center"
      >
        {projects.map((project, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 w-3/5 gap-2"
            key={index}
          >
            <div className="w-fit grid grid-col justify-self-center content-middle">
              <div className="flex gap-2 items-end">
                {project.title} - {project.time}
                <Link to={{ pathname: `${project.link}` }} target="_blank">
                  <FaGithubSquare
                    className={`cursor-pointer h-5 w-5 lg:h-8 lg:w-8`}
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
              <ImageCarousel />
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
    </PageTransition>
  )
}
