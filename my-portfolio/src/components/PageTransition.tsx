import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "../utils/theme-context"

export const PageTransition = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-full h-screen origin-bottom ${
          theme === "dark" ? "bg-black" : "bg-black"
        }`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-full h-screen origin-top ${
          theme === "dark" ? "bg-dustyPink" : "bg-black"
        }`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}
