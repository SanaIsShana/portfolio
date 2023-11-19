import { FC, ReactNode, useContext, useState } from "react"
import { ThemeContext } from "../utils/themeContext"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutProp {
  children: ReactNode
}
export const Layout: FC<LayoutProp> = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className={`flex flex-col h-screen overflow-hidden ${
        theme === "dark" ? "bg-black text-dustyPink" : "bg-dustyPink text-black"
      }`}
    >
      <Header toggle={toggle} setToggle={setToggle} />
      {children}
      <Footer />
    </div>
  )
}
