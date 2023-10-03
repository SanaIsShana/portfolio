import { useContext, useState } from "react"
import { PageTransition } from "../utils/PageTransition"
import { ThemeContext } from "../utils/theme-context"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { AnimatePresence, motion } from "framer-motion"
import { ResumeTab } from "../components/ResumeTab"
import { WorkExperienceTab } from "../components/WorkExperienceTab"
import { Technologies } from "../components/TechonologiesTab"

export const About = () => {
  const { theme } = useContext(ThemeContext)
  const [selectedTab, setSelectedTab] = useState("CV")

  const tabs = ["CV", "Experience", "Core technologies"]

  return (
    <div role="main" className="flex flex-col fixed w-screen h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <div className="flex border-solid border-4 rounded-lg border-black m-3 sm:m-7 font-check flex-col h-4/6 ">
          <nav className="flex w-full p-1 sm:p-3">
            <ul className="flex justify-between w-1/3">
              {tabs.map((item) => (
                <li
                  key={item}
                  className={`${
                    item === selectedTab ? "selected" : ""
                  } cursor-pointer`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item}`}
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          {selectedTab === "CV" ? (
            <ResumeTab />
          ) : selectedTab === "Experience" ? (
            <WorkExperienceTab />
          ) : (
            <Technologies />
          )}
        </div>
        <Footer />
      </div>
      <PageTransition />
    </div>
  )
}
