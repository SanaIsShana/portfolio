import { Variants, motion } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useMousePosition } from "../utils/useMousePosition"

export const TechAndEducation = () => {
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")
  const variants: Variants = {
    hidden: {
      opacity: 0,
      left: mousePosition.x + 15,
      top: mousePosition.y + 10,
    },
    visible: {
      position: "fixed",
      left: mousePosition.x + 15,
      top: mousePosition.y + 10,
    },
  }

  const textEnter = () => {
    setCursorVariant("visible")
  }
  const textLeave = () => {
    setCursorVariant("hidden")
  }
  return (
    <div className="p-1 sm:p-2 m-3 w-fit lg:w-2/5 font-mono">
      <div className="text-sm md:text-base lg:text-lg grid grid-rows-9 lg:grid-rows-3 divide-y-2 divide-emerald-600">
        <div className="pt-2 pb-2">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-0 lg:gap-2">
            <div>August, 2021 - June, 2023</div>
            <Link
              ref={ref}
              to={{ pathname: "//teknikhogskolan.se/" }}
              target="_blank"
            >
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="underline decoration-1"
              >
                Teknikhögskolan in Lund
              </div>
            </Link>
            <div>Full-stack development</div>
          </div>
          <div className="col-span-2 mt-2">
            <div className="">
              JavaScript, Java, HTML, CSS, Bootstrap, React, Java Spring, MySQL,
              MongoDB, Node.js, REST API, Git, Figma
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="w-fit h-fit pointer-events-none bg-white fixed rounded-lg p-1 border-solid border-2 border-darkOlive"
        variants={variants}
        animate={cursorVariant}
      >
        Go to
      </motion.div>
    </div>
  )
}
