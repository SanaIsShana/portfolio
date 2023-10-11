import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { HomePage } from "./pages/Home"
import { About } from "./pages/About"
import { ThemeContext } from "./utils/themeContext"
import { Layout } from "./components/Layout"

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
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
