import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useMousePosition } from "../utils/useMousePosition"
import { LinkAnimation } from "./LinkAnimation"
import { BsArrowUpRightCircle } from "react-icons/bs"

export const TechAndEducation = () => {
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
    <div className="p-1 sm:p-2 m-3 w-fit sm:w-2/5 font-mono">
      <div className="text-sm md:text-base lg:text-lg">
        <div className="pt-2 pb-2">
          <div className="col-span-2">
            <p>August, 2021 - June, 2023</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 lg:gap-2 mt-2">
            <p> Fullstack development</p>
            <Link
              ref={ref}
              to={{ pathname: "//teknikhogskolan.se/" }}
              target="_blank"
            >
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="underline decoration-1 flex justify-start"
              >
                Teknikhögskolan
              </div>
            </Link>
          </div>
          <div className="col-span-2 mt-2">
            <p>
              JavaScript, Java, HTML, CSS, Bootstrap, React, Java Spring, MySQL,
              MongoDB, Node.js, REST API, Git, Figma
            </p>
          </div>
        </div>
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
    </div>
  )
}
