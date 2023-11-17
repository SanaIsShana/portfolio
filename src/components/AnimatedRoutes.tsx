import { Route, Routes, useLocation } from "react-router-dom"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { HomePage } from "../pages/Home"
import { Projects } from "../pages/Projects"
import { Layout } from "./Layout"
import { AnimatePresence } from "framer-motion"

export const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  )
}
