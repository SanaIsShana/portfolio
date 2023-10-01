import { useContext } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { ThemeContext } from "../utils/theme-context"

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main role="main" className="w-full flex flex-col h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </main>
  )
}
