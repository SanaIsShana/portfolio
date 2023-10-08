import { useContext, useRef, useState } from "react"
import { PageTransition } from "../components/PageTransition"
import { ThemeContext } from "../utils/theme-context"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Intro } from "../components/IntroSection"
import { Experience } from "../components/ExperienceSection"
import { tabs } from "../utils/info"
import { useScrollProgress } from "../utils/useScrollProgress"

export const About = () => {
  const { theme } = useContext(ThemeContext)

  const section1 = useRef<HTMLElement>(null)
  const section2 = useRef<HTMLElement>(null)
  const [scrolledY, setScrolledY] = useState(0)
  const activeSection = useScrollProgress(scrolledY, [section1, section2])

  return (
    <div role="main" className="flex flex-col fixed w-screen h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <div className="flex flex-col border-solid border-4 rounded-lg border-black m-3 sm:m-7 font-header h-4/6">
          <nav className="flex p-1 sticky top-0 w-full pl-5 pt-5">
            <ul className="flex justify-start space-x-2">
              {tabs.map((item) => (
                <li
                  className={`${
                    activeSection === item ? "bg-olive rounded-3xl" : ""
                  } p-2`}
                  onClick={() => setScrolledY(0)}
                >
                  <a href={`#${item}`}>{`${item.toLocaleUpperCase()}`} </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="overflow-x-auto"
            onScroll={(event) => {
              setScrolledY(event.currentTarget.scrollTop)
            }}
          >
            <section
              ref={section1}
              id="intro"
              className="flex h-full justify-center"
            >
              <Intro />
            </section>
            <section
              ref={section2}
              id="experience"
              className="flex h-full justify-center"
            >
              <Experience />
            </section>
          </div>
        </div>
        <Footer />
      </div>
      <PageTransition />
    </div>
  )
}
