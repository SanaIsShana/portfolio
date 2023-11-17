import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="sticky bottom-0 w-full flex flex-row justify-center space-x-2">
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }}>
        <Link
          to={{ pathname: "//www.linkedin.com/in/shana-shana" }}
          target="_blank"
        >
          <FaLinkedin size={30} className="cursor-pointer" />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }}>
        <Link to={{ pathname: "//github.com/SanaIsShana" }} target="_blank">
          <FaGithubSquare size={30} className="cursor-pointer" />
        </Link>
      </motion.div>
    </div>
  )
}
