import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { ThemeContext } from "../utils/themeContext"
import { CursorAnimation } from "../components/CursorAnimation"
import { TextAnimation } from "../components/TextAnimation"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [cursorVariant, setCursorVariant] = useState("default")

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
        className={`grid grid-flow-row h-full bg-bottom bg-contain bg-no-repeat ${
          theme === "dark"
            ? "bg-[url('../public/assets/dark.svg')]"
            : "bg-[url('../public/assets/light.svg')]"
        }`}
      >
        <div
          className="flex flex-col text-6xl sm:text-8xl align-start w-fit p-2 sm:p-4"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <TextAnimation text={"Sana Barilide"} />
          <p
            className="w-fit text-xs sm:text-xl align-start p-2 sm:p-4"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Hi, I am a frontend developer.
            <br />I am looking for a new opportunity!
          </p>
        </div>

        <div className="flex flex-row relative justify-between">
          <motion.div
            className="bg-yellow rounded-full h-[100px] w-[100px] blur-lg fixed left-20 cursor-pointer"
            animate={{ scale: 2 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="absolute bottom-0 right-0 p-2 sm:p-4 flex flex-col text-4xl sm:text-6xl">
            <motion.button
              whileHover={{ fontStyle: "italic", scale: 1.1 }}
              whileTap={{ scale: 1.5 }}
            >
              <Link to="/about">About</Link>
            </motion.button>
            <motion.button
              whileHover={{ fontStyle: "italic", scale: 1.1 }}
              whileTap={{ scale: 1.5 }}
            >
              <Link to="/projects">Projects</Link>
            </motion.button>
            <motion.button
              whileHover={{ fontStyle: "italic", scale: 1.1 }}
              whileTap={{ scale: 1.5 }}
            >
              <Link to="/contact">Contact</Link>
            </motion.button>
          </div>
        </div>

        <CursorAnimation cursorVariant={cursorVariant} />
      </div>
    </motion.div>
  )
}
