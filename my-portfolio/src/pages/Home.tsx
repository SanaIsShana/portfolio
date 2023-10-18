import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ThemeContext } from "../utils/themeContext"
import { CursorAnimation } from "../components/CursorAnimation"
import { TextAnimation } from "../components/TextAnimation"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [cursorVariant, setCursorVariant] = useState("default")
  const constraintsRef = useRef(null)

  return (
    <motion.div
      className={`flex border-solid border-4 rounded-lg ${
        theme === "dark" ? "border-dustyPink" : "border-black"
      } m-3 sm:m-7 font-header flex-col h-3/4`}
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
        className={`relative h-full bg-bottom bg-contain bg-no-repeat ${
          theme === "dark"
            ? "bg-[url('../public/assets/dark.svg')]"
            : "bg-[url('../public/assets/light.svg')]"
        }`}
      >
        <div className="p-2 sm:p-10">
          <div
            className="flex flex-col text-6xl sm:text-8xl align-start w-fit"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <TextAnimation text={"Sana Barilade"} />
          </div>
        </div>
        <motion.div ref={constraintsRef}>
          <motion.div
            className="bg-yellow rounded-full h-200 w-200 blur-lg fixed flex flex-col right-5 cursor-pointer"
            animate={{ scale: 2 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            drag
            dragConstraints={constraintsRef}
          />
        </motion.div>
        <div className="p-2 sm:pl-12">
          <div className="flex flex-col text-md sm:text-xl align-start w-3/5">
            <p
              className="w-fit"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Hi, I recently got my degree in full-stack development.
              <br />I am looking for a new opportunity!
            </p>
          </div>
          <motion.div
            className="bg-red rounded-full h-58 w-58 blur-lg"
            animate={{ scale: 1.5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="absolute bottom-0 right-0 p-2 sm:p-10">
          <motion.div
            className="bg-green rounded-full h-58 w-58 blur-lg"
            animate={{ scale: 1.5 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div
            className="flex flex-col text-4xl sm:text-6xl"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <button>
              <Link to="/about">About</Link>
            </button>
            <button>
              <Link to="/projects">Projects</Link>
            </button>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <CursorAnimation cursorVariant={cursorVariant} />
      </div>
    </motion.div>
  )
}
