import { Variants, motion } from "framer-motion"
import { FC, ReactNode } from "react"

interface LinkAnimationProps {
  mousePosition: {
    x: number
    y: number
  }
  cursorVariant: string
  children?: ReactNode
}

export const LinkAnimation: FC<LinkAnimationProps> = ({
  mousePosition,
  cursorVariant,
  children,
}: LinkAnimationProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      left: mousePosition.x + 15,
      top: mousePosition.y + 10,
    },
    visible: {
      position: "fixed",
      left: mousePosition.x + 15,
      top: mousePosition.y + 10,
    },
  }

  return (
    <motion.div
      className={`w - fit h-fit pointer-events-none fixed ${
        children !== undefined
          ? "rounded-full bg-darkOlive"
          : "bg-white rounded-lg p-1 border-solid border-2 border-darkOlive"
      } `}
      variants={variants}
      animate={cursorVariant}
    >
      {children !== undefined ? children : "Go to"}
    </motion.div>
  )
}
