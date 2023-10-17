import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../utils/themeContext"
import { Link } from "react-router-dom"
import { LinkAnimation } from "../components/LinkAnimation"
import { useMousePosition } from "../utils/useMousePosition"
import { BsArrowUpRightCircle } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { motion } from "framer-motion"

export const Contact = () => {
  const { theme } = useContext(ThemeContext)
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")
  const [gifVariant, setGifVariant] = useState("")

  const textEnter = (gifVariant: string) => {
    setCursorVariant("visible")
    setGifVariant(gifVariant)
  }
  const textLeave = () => {
    setCursorVariant("hidden")
  }

  return (
    <div
      className={`border-solid border-4 rounded-lg ${
        theme === "dark" ? "border-dustyPink" : "border-black"
      } m-3 sm:m-7 font-header h-3/4`}
    >
      <div className="flex p-10 w-fit items-center h-full" ref={ref}>
        <div className="p-2 sm:p-10">
          <div className="flex flex-row text-lg sm:text-2xl justify-between gap-8">
            <div className="flex flex-col">
              <p className="">Email:</p>
              <Link
                to="javascript:void(0)"
                onClick={() =>
                  (window.location.href = "mailto:sanabarilad@gmail.com")
                }
              >
                <motion.p
                  className="text-md sm:text-lg"
                  onMouseEnter={() => textEnter("mail")}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1, color: "#667b68" }}
                >
                  sanabarilad@gmail.com
                </motion.p>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <p className="">Other:</p>
              <Link
                to={{ pathname: "//www.linkedin.com/in/shana-shana" }}
                target="_blank"
              >
                <motion.p
                  className="text-md sm:text-lg cursor-pointer"
                  onMouseEnter={() => textEnter("arrow")}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1, color: "#667b68" }}
                >
                  LinkedIn
                </motion.p>
              </Link>
              <Link
                to={{ pathname: "//github.com/SanaIsShana" }}
                target="_blank"
              >
                <motion.p
                  className="text-md sm:text-lg cursor-pointer"
                  onMouseEnter={() => textEnter("arrow")}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1, color: "#667b68" }}
                >
                  Github
                </motion.p>
              </Link>
            </div>
          </div>
        </div>
        <LinkAnimation
          mousePosition={mousePosition}
          cursorVariant={cursorVariant}
        >
          {gifVariant === "arrow" ? (
            <BsArrowUpRightCircle
              size={34}
              className=" bg-olive rounded-full p-1"
            />
          ) : (
            <HiOutlineMail size={34} className=" bg-olive rounded-full p-1" />
          )}
        </LinkAnimation>
      </div>
    </div>
  )
}
