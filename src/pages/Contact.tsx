import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { HiOutlineMail } from "react-icons/hi"
import { BsArrowUpRightCircle } from "react-icons/bs"

import { ThemeContext } from "../utils/themeContext"
import { useMousePosition } from "../utils/useMousePosition"
import { LinkAnimation } from "../components/LinkAnimation"
import { PageTransition } from "../components/PageTransition"

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
    <PageTransition cssStyle="font-header">
      <div
        className={`flex h-full justify-center items-center bg-gradient-to-r ${
          theme === "dark"
            ? "from-sky-900 via-gray-600 to-stone-900"
            : "from-[#EEE0C9] via-gray-100 to-[#ADC4CE]"
        }`}
      >
        <div className="flex p-10 w-fit items-center h-full" ref={ref}>
          <div className="text-lg sm:text-2xl grid lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-5">
            <div className="flex flex-col">
              <p>Email:</p>
              <Link
                to="#"
                onClick={() =>
                  (window.location.href = "mailto:sanabarilide@gmail.com")
                }
              >
                <motion.div
                  className="text-md sm:text-lg"
                  onMouseEnter={() => textEnter("mail")}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1 }}
                >
                  <p
                    className={`${
                      theme === "dark" ? " text-dustyPink" : " text-black"
                    }`}
                  >
                    sanabarilide@gmail.com
                  </p>
                </motion.div>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <p>Other:</p>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/shana-shana" }}
                target="_blank"
              >
                <motion.div
                  className="text-md sm:text-lg cursor-pointer"
                  onMouseEnter={() => textEnter("arrow")}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1 }}
                >
                  <p
                    className={`${
                      theme === "dark" ? " text-dustyPink" : " text-black"
                    }`}
                  >
                    LinkedIn
                  </p>
                </motion.div>
              </Link>
              <Link
                to={{ pathname: "https://github.com/SanaIsShana" }}
                target="_blank"
              >
                <motion.div
                  className="text-md sm:text-lg cursor-pointer "
                  onMouseEnter={() => textEnter("arrow")}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.1 }}
                >
                  <p
                    className={`${
                      theme === "dark" ? " text-dustyPink" : " text-black"
                    }`}
                  >
                    Github
                  </p>
                </motion.div>
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
    </PageTransition>
  )
}
