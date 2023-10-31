import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../utils/themeContext"
import { Intro } from "../components/IntroSection"
import { Experience } from "../components/ExperienceSection"
import { tabs } from "../utils/info"
import { useScrollProgress } from "../utils/useScrollProgress"
import { TechAndEducation } from "../components/TechAndEducation"
import { motion } from "framer-motion"

export const About = () => {
  const { theme } = useContext(ThemeContext)

  const section1 = useRef<HTMLElement>(null)
  const section2 = useRef<HTMLElement>(null)
  const section3 = useRef<HTMLElement>(null)
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
      <nav className="flex p-1 sticky top-0 w-full pl-2 sm:pl-5 pt-5 font-header">
        <ul className="flex justify-start text-xs lg:text-lg">
          {tabs.map((item, index) => (
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
          <TechAndEducation />
        </section>
        <section
          ref={section3}
          id="experience"
          className="flex h-full justify-center mb-20"
        >
          <Experience />
        </section>
      </div>
    </motion.div>
  )
}
