import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { motion } from "framer-motion"

export const Footer = () => {
  return (
    <div className="sticky h-10 w-full flex flex-row justify-center space-x-2 pb-2">
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }}>
        <a href="//www.linkedin.com/in/shana-shana" target="_blank">
          <FaLinkedin size={30} className="cursor-pointer" />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }}>
        <a href="https://www.github.com/SanaIsShana" target="_blank">
          <FaGithubSquare size={30} className="cursor-pointer" />
        </a>
      </motion.div>
    </div>
  )
}
