import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { ThemeContext } from "../utils/themeContext"
import { CursorAnimation } from "../components/CursorAnimation"
import { TextAnimation } from "../components/TextAnimation"
import { PageTransition } from "../components/PageTransition"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [cursorVariant, setCursorVariant] = useState("default")

  return (
    <PageTransition cssStyle="font-header">
      <div
        className={`grid grid-flow-row h-full bg-bottom bg-contain bg-no-repeat ${
          theme === "dark"
            ? "bg-[url('../public/assets/dark.svg')]"
            : "bg-[url('../public/assets/light.svg')]"
        }`}
      >
        <div className="flex flex-col text-6xl sm:text-8xl align-start w-fit p-2 sm:p-4">
          <div
            className="w-fit cursor-none"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <TextAnimation text={"Sana Barilide"} />
          </div>
          <p
            className="w-fit text-xs sm:text-xl align-start p-2 sm:p-4 cursor-none"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Hi, I am a frontend developer.
            <br />
            Thanks for popping by 😃!
          </p>
        </div>

        <div className="flex flex-row relative justify-between">
          <motion.div
            className="bg-yellow rounded-full h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] blur-lg fixed left-20"
            animate={{ scale: 2 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="absolute bottom-8 right-0 p-2 sm:p-4 flex flex-col text-4xl sm:text-6xl">
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
    </PageTransition>
  )
}
