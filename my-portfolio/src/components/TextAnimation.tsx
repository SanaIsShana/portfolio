import { Variants, motion } from "framer-motion"

interface TextAnimationProps {
  text: string
}

export const TextAnimation = ({ text = "" }: TextAnimationProps) => {
  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.2,
      },
    },
  }

  const letter: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.p variants={sentence} initial="hidden" animate="visible">
      {text.split("").map((char, index) => {
        return (
          <motion.span key={char + index} variants={letter}>
            {char}
          </motion.span>
        )
      })}
    </motion.p>
  )
}
