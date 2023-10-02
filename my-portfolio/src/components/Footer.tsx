import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { useContext } from "react"
import { motion } from "framer-motion"

import { ThemeContext } from "../utils/theme-context"
import { Link } from "react-router-dom"

export const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`absolute bottom-10 w-full flex flex-row justify-center space-x-2 ${
        theme === "dark" ? "text-dustyPink" : "text-black"
      }`}
    >
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
        <Link
          to={{ pathname: "//www.linkedin.com/in/shana-shana" }}
          target="_blank"
        >
          <FaLinkedin size={30} className="cursor-pointer" />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
        <Link to={{ pathname: "//github.com/SanaIsShana" }} target="_blank">
          <FaGithubSquare size={30} className="cursor-pointer" />
        </Link>
      </motion.div>
    </div>
  )
}
