import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { BsArrowUpRightCircle } from "react-icons/bs"

import { useMousePosition } from "../utils/useMousePosition"
import { ThemeContext } from "../utils/themeContext"
import { LinkAnimation } from "./LinkAnimation"

export const EducationSection = () => {
  const { theme } = useContext(ThemeContext)
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")

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
                onMouseEnter={() => setCursorVariant("visible")}
                onMouseLeave={() => setCursorVariant("hidden")}
                className="underline decoration-1 flex justify-end"
              >
                Teknikhögskolan
              </div>
            </Link>
          </div>
          <div className="col-span-2 mt-2">
            <p
              className={`${
                theme === "dark" ? "text-slate-400" : " text-gray-700"
              }`}
            >
              Javascript, Java, HTML, CSS, Bootstrap, React, Java Spring, MySQL,
              MongoDB, Node.js, REST API, Git, Figma...
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
