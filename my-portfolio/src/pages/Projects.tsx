import { useContext } from "react"
import { ThemeContext } from "../utils/themeContext"
import portfolio from "../../public/assets/portfolio.png"

export const Projects = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`flex flex-col border-solid border-4 rounded-lg ${
        theme === "dark" ? "border-dustyPink" : "border-black"
      } m-3 sm:m-7 font-header h-3/4`}
    >
      <div className="w-full flex justify-center items-center align-middle">
        <div className="border-solid border-2 border-olive rounded-sm p-1 w-fit">
          <img src={portfolio} />
        </div>
      </div>
    </div>
  )
}
