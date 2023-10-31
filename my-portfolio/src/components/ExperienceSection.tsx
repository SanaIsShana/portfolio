import { experiences } from "../utils/info"
import Resume from "../../public/assets/Shana-CV.pdf"
import { AiFillSmile } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useContext, useRef, useState } from "react"
import { useMousePosition } from "../utils/useMousePosition"
import { LinkAnimation } from "./LinkAnimation"
import { BsArrowUpRightCircle } from "react-icons/bs"
import { ThemeContext } from "../utils/themeContext"

export const Experience = () => {
    const { theme } = useContext(ThemeContext)
    const onResumeClick = () => {
      window.open(Resume)
    }
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
        <div className="text-sm md:text-base lg:text-lg grid grid-rows-9 lg:grid-rows-3 divide-y-2 divide-emerald-600">
          {experiences.map((item, index) => (
            <div className="pt-2 pb-2" key={index}>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-0 lg:gap-2">
                <div>{item.time}</div>
                <Link
                  ref={ref}
                  to={{ pathname: `${item.link}` }}
                  target="_blank"
                >
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="underline decoration-1 flex lg:justify-end justify-start"
                  >
                    {item.company}
                  </div>
                </Link>
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
          <button
            className={`flex w-fit cursor-pointer items-center ${
              theme === "dark" ? "bg-darkOlive" : "bg-olive"
            } gap-1 p-1 rounded-lg mt-3`}
            onClick={onResumeClick}
          >
            <span className="font-header"> Check my full resume!</span>
            <span>
              <AiFillSmile size={30} />
            </span>
          </button>
        </div>
        <LinkAnimation
          mousePosition={mousePosition}
          cursorVariant={cursorVariant}
        >
          <BsArrowUpRightCircle
            size={30}
            className="bg-olive rounded-full p-1"
          />
        </LinkAnimation>
      </div>
    )
}
