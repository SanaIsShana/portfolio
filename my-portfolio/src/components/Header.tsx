import { useContext, useEffect, useState } from "react"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { motion } from "framer-motion"

import LogoLight from "../../public/assets/Logo-light.svg"
import LogoDark from "../../public/assets/Logo-dark.svg"
import { ThemeContext } from "../utils/themeContext"
import { Link } from "react-router-dom"

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark"
    setTheme(isCurrentDark ? "light" : "dark")
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark")
  }

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="sticky h-30 w-full p-3 mt-2 flex flex-row justify-between space-x-3 items-center">
      <motion.div
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 50, 50, 0],
        }}
        whileTap={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 50, 50, 0],
        }}
      >
        <Link to="/">
          {theme === "dark" ? <img src={LogoDark} /> : <img src={LogoLight} />}
        </Link>
      </motion.div>

      <div className="flex justify-center space-x-3">
        <div>{date.toLocaleString()}</div>
        {theme === "dark" ? (
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
            <BsFillMoonFill
              className="cursor-pointer"
              onClick={handleThemeChange}
              size={25}
            />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
            <BsFillSunFill
              className="cursor-pointer"
              onClick={handleThemeChange}
              size={25}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
