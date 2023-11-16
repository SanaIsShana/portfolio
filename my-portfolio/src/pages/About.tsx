import { useContext, useRef, useState } from "react"
import { motion } from "framer-motion"

import { pageNav } from "../utils/info"
import { Intro } from "../components/IntroSection"
import { EducationSection } from "../components/EducationSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { ThemeContext } from "../utils/themeContext"
import { useScrollProgress } from "../utils/useScrollProgress"

export const About = () => {
  const { theme } = useContext(ThemeContext)

  const section1 = useRef<HTMLDivElement>(null)
  const section2 = useRef<HTMLDivElement>(null)
  const section3 = useRef<HTMLDivElement>(null)
  const [scrolledY, setScrolledY] = useState(0)
  const activeSection = useScrollProgress(scrolledY, [
    section1,
    section2,
    section3,
  ])

  return (
    <motion.div
      className={`flex flex-col border-solid border-4 rounded-lg ${
        theme === "dark" ? "border-dustyPink" : "border-black"
      } m-3 sm:m-7 h-3/4`}
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
      <nav className="flex p-1 top-0 w-full pl-2 sm:pl-5 pt-5 font-header">
        <ul className="flex justify-start text-xs lg:text-lg">
          {pageNav.map((item, index) => (
            <li
              className={`${
                activeSection === item
                  ? theme === "dark"
                    ? "bg-darkOlive"
                    : "bg-olive"
                  : ""
              } p-2 rounded-3xl`}
              key={index}
              onClick={() => setScrolledY(0)}
            >
              <a href={`#${item}`}>{`${item.toLocaleUpperCase()}`} </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="overflow-x-auto font-mono"
        onScroll={(event) => {
          setScrolledY(event.currentTarget.scrollTop)
        }}
      >
        <section
          ref={section1}
          id="intro"
          className="flex h-full justify-center items-center"
        >
          <Intro />
        </section>
        <section
          ref={section2}
          id="education"
          className="flex h-full justify-center items-center"
        >
          <EducationSection />
        </section>
        <section
          ref={section3}
          id="experience"
          className="flex h-full justify-center mb-20"
        >
          <ExperienceSection />
        </section>
      </div>
    </motion.div>
  )
}
