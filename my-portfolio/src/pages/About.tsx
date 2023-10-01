import { useContext } from "react"
import { PageTransition } from "../utils/PageTransition"
import { ThemeContext } from "../utils/theme-context"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const About = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main role="main" className="w-full flex flex-col h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <div className="border-spacing"></div>
        <Footer />
      </div>
      <PageTransition />
    </main>
  )
}
