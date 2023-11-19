import { motion } from "framer-motion"
import { ReactNode, useContext } from "react"
import { ThemeContext } from "../utils/themeContext"

interface PageTransitionProps {
  children: ReactNode
  cssStyle?: string
}

export const PageTransition = ({ children, cssStyle }: PageTransitionProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <motion.main
        className={`h-4/5 flex flex-col border-solid border-4 rounded-lg ${
          theme === "dark" ? "border-dustyPink" : "border-black"
        } m-3 sm:m-5 ${cssStyle}`}
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
        {children}
      </motion.main>
    </>
  )
}
