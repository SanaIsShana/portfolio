import { Variants, motion } from "framer-motion"

interface TextAnimationProps {
  text: string[]
}

export const SkillsAnimation = ({ text = [] }: TextAnimationProps) => {
  const sentenceVariant: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.2,
      },
    },
  }

  const letterVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.div
      variants={sentenceVariant}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 border rounded-xl border-emerald-600 p-2 justify-items-center"
    >
      {text.map((letter, index) => {
        return (
          <motion.div
            key={letter + index}
            variants={letterVariant}
            className="font-header text-xs lg:text-lg"
          >
            {letter}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
