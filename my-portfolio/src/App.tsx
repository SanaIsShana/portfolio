import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { About } from "./pages/About"
import { useState } from "react"
import { ThemeContext } from "./utils/theme-context"

export const App = () => {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches

  const [theme, setTheme] = useState<string>(
    isBrowserDefaultDark() ? "dark" : "light"
  )

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
