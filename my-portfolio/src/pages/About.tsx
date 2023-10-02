import { useContext } from "react"
import { PageTransition } from "../utils/PageTransition"
import { ThemeContext } from "../utils/theme-context"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Resume from "../../public/assets/Shana-CV.pdf"

export const About = () => {
  const { theme } = useContext(ThemeContext)

  const onResumeClick = () => {
    window.open(Resume)
  }

  return (
    <main role="main" className="w-full flex flex-col h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <div className="">
          My name is Shana and I recently got my degree in full-stack
          development from Teknikhögskolan in Lund, Sweden. I am seeking a new
          challange!
        </div>
        <button onClick={onResumeClick}>Resume</button>
        <Footer />
      </div>
      <PageTransition />
    </main>
  )
}
