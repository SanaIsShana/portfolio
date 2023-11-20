import { useState } from "react"
import { HashRouter } from "react-router-dom"
import { ThemeContext } from "./utils/themeContext"
import { AnimatedRoutes } from "./components/AnimatedRoutes"

export const App = () => {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches

  const [theme, setTheme] = useState<string>(
    isBrowserDefaultDark() ? "dark" : "light"
  )

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <HashRouter>
          <AnimatedRoutes />
        </HashRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
