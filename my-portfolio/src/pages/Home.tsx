import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ThemeContext } from "../utils/themeContext"
import { CursorAnimation } from "../components/CursorAnimation"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [cursorVariant, setCursorVariant] = useState("default")

  return (
    <div
      className={`flex border-solid border-4 rounded-lg ${
        theme === "dark" ? "border-dustyPink" : "border-black"
      } m-3 sm:m-7 font-header flex-col h-3/4`}
    >
      <div className="relative h-full bg-bottom bg-contain bg-no-repeat bg-[url('../public/assets/bg-img.svg')]">
        <div className="p-2 sm:p-10">
          <div className="flex flex-col text-6xl sm:text-8xl align-start w-fit">
            <p
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Sana Barilade
            </p>
          </div>
        </div>
        <motion.div
          className="bg-yellow rounded-full h-200 w-200 blur-lg fixed flex flex-col right-5"
          animate={{ scale: 2 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="p-2 sm:pl-12">
          <div className="flex flex-col text-md sm:text-xl align-start w-3/5">
            <p
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Hi, I recently got my degree in full-stack development. <br />I am
              looking for a new opportunity!
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
              <Link to="/about">
                About
                <motion.div />
              </Link>
            </button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        </div>
        <CursorAnimation cursorVariant={cursorVariant} />
      </div>
    </div>
  )
}
