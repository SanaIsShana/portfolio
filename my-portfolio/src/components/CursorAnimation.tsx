import { Variants, motion } from "framer-motion"
import { useRef } from "react"
import { useMousePosition } from "../utils/useMousePosition"

interface CursorAnimationProps {
  cursorVariant: string
}

export const CursorAnimation = ({ cursorVariant }: CursorAnimationProps) => {
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)

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
      backgroundColor: "#fceee9",
      mixBlendMode: "difference",
    },
  }

  return (
    <motion.div
      ref={ref}
      className="bg-olive h-16 w-16 rounded-full fixed top-0 left-0 pointer-events-none"
      variants={variants}
      animate={cursorVariant}
    />
  )
}
