import { useContext, useRef, useState } from "react"
import { Variants, motion } from "framer-motion"
import { AiFillSmile } from "react-icons/ai"
import { BsArrowUpRightCircle } from "react-icons/bs"

import Resume from "../../public/assets/Sana-resume.pdf"
import { experiences } from "../utils/info"
import { useMousePosition } from "../utils/useMousePosition"
import { ThemeContext } from "../utils/themeContext"
import { LinkAnimation } from "./LinkAnimation"

export const ExperienceSection = () => {
  const { theme } = useContext(ThemeContext)
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")

  const [isHovered, setIsHovered] = useState(false)

  const onResumeClick = () => {
    window.open(Resume)
  }

  const buttonIcon: Variants = {
    hovered: {
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 50, 50, 0],
    },
    default: {},
  }

  return (
    <div className="p-1 sm:p-2 m-3 w-fit sm:w-2/5 font-mono">
      <div className="text-sm md:text-base lg:text-lg grid grid-rows-9 lg:grid-rows-3 divide-y-2 divide-emerald-600">
        {experiences.map((item, index) => (
          <div className="pt-2 pb-2" key={index}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-0 lg:gap-2">
              <div>{item.time}</div>
              <a ref={ref} href={`${item.link}`} target="_blank">
                <div
                  onMouseEnter={() => setCursorVariant("visible")}
                  onMouseLeave={() => setCursorVariant("hidden")}
                  className="underline decoration-1 flex lg:justify-end justify-start"
                >
                  {item.company}
                </div>
              </a>
            </div>
            <div className="col-span-2">{item.title}</div>
            <div
              className={`col-span-2 mt-2 ${
                theme === "dark" ? "text-slate-400" : " text-gray-700"
              }`}
            >
              {item.tech}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end align-baseline">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.75 }}
          className={`flex w-fit cursor-pointer items-center ${
            theme === "dark" ? "bg-darkOlive" : "bg-olive"
          } gap-1 p-1 rounded-lg mt-3`}
          onClick={onResumeClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="font-header"> Check my full resume!</span>
          <motion.span
            animate={isHovered ? "hovered" : "default"}
            variants={buttonIcon}
          >
            <AiFillSmile size={30} />
          </motion.span>
        </motion.button>
      </div>
      <LinkAnimation
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
      >
        <BsArrowUpRightCircle size={30} className="bg-olive rounded-full p-1" />
      </LinkAnimation>
    </div>
  )
}
