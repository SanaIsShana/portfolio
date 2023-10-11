import { Variants } from "framer-motion"
import { createContext } from "react"

export const ThemeContext = createContext({
  theme: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (_theme: string) => {},
})

export const CursorVariantContext = createContext({
  cursorVariant: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCursorVariant: (_variant: string) => {},
})

export const checkVariants = (mousePosition: { x: number; y: number }) => {
  const variants: Variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#a3b899",
      mixBlendMode: "difference",
    },
  }

  return variants
}

export const aboutPageCursorVariants = (mousePosition: {
  x: number
  y: number
}) => {
  const variants: Variants = {
    default: {
      opacity: 0,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#a3b899",
      mixBlendMode: "difference",
    },
  }

  return variants
}

export const textEnter = (setCursorVariant: (variant: string) => void) => {
  setCursorVariant("text")
}
export const textLeave = (setCursorVariant: (variant: string) => void) => {
  setCursorVariant("default")
}
