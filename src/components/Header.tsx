import { useContext } from "react"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { motion } from "framer-motion"

import LogoLight from "../../public/assets/Logo-light.svg"
import LogoDark from "../../public/assets/Logo-dark.svg"
import { ThemeContext } from "../utils/themeContext"
import { Link } from "react-router-dom"
import { CgClose, CgMenuGridO } from "react-icons/cg"
import { NavMenu } from "./NavMenu"

interface HeaderProps {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}

export const Header = ({ toggle, setToggle }: HeaderProps) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark"
    setTheme(isCurrentDark ? "light" : "dark")
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark")
  }

  return (
    <>
      <div className="sticky h-30 w-full px-3 pt-4 sm:px-6 pb-3 mt-2 flex flex-row justify-between space-x-3 items-center">
        <motion.div
          whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 50, 50, 0],
          }}
          whileTap={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 50, 50, 0],
          }}
          className="pl-1 sm:pl-2"
        >
          <Link to="/">
            {theme === "dark" ? (
              <img src={LogoDark} />
            ) : (
              <img src={LogoLight} />
            )}
          </Link>
        </motion.div>

        <div className="grid grid-cols-2">
          {theme === "dark" ? (
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              className="flex items-center"
            >
              <BsFillMoonFill
                className="cursor-pointer"
                onClick={handleThemeChange}
                size={25}
              />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              className="flex items-center"
            >
              <BsFillSunFill
                className="cursor-pointer"
                onClick={handleThemeChange}
                size={25}
              />
            </motion.div>
          )}
          <div className="p-1 sticky top-0 w-full font-header align-middle">
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.5 }}>
              {!toggle ? (
                <CgMenuGridO
                  onClick={() => setToggle(true)}
                  size={30}
                  className="cursor-pointer"
                />
              ) : (
                <CgClose
                  onClick={() => setToggle(false)}
                  size={30}
                  className="cursor-pointer"
                />
              )}
            </motion.div>
            {toggle ? <NavMenu toggle={toggle} setToggle={setToggle} /> : null}
          </div>
        </div>
      </div>
    </>
  )
}
