import { FC, ReactNode, useContext } from "react"
import { ThemeContext } from "../utils/themeContext"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutProp {
  children: ReactNode
}
export const Layout: FC<LayoutProp> = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`flex flex-col fixed w-screen h-screen ${
        theme === "dark" ? "bg-black text-dustyPink" : "bg-dustyPink text-black"
      }`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
