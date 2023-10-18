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
    <motion.div
      className={`border-solid border-4 rounded-lg ${
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
                to="javascript:void(0)"
                onClick={() =>
                  (window.location.href = "mailto:sanabarilad@gmail.com")
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
                    sanabarilad@gmail.com
                  </p>
                </motion.div>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <p>Other:</p>
              <Link
                to={{ pathname: "//www.linkedin.com/in/shana-shana" }}
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
                to={{ pathname: "//github.com/SanaIsShana" }}
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
    </motion.div>
  )
}
