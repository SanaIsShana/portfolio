import { useContext, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Variants, motion } from "framer-motion"

import { navMenuItems } from "../utils/info"
import { ThemeContext } from "../utils/themeContext"
interface NavMenuProps {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}

export const NavMenu = ({ toggle, setToggle }: NavMenuProps) => {
  const location = useLocation()
  const { theme } = useContext(ThemeContext)

  const ref = useRef<HTMLDivElement>(null)

  const navMenuVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        toggle &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setToggle(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler)
    }
  }, [setToggle, toggle])

  return (
    <motion.div
      ref={ref}
      className={`fixed h-fit top-20 right-2 w-fit ${
        theme === "dark" ? "bg-darkOlive" : "bg-red"
      } opacity-80 rounded-lg z-10`}
      variants={navMenuVariant}
      initial="hidden"
      animate="show"
      onBlur={() => setToggle(false)}
    >
      <ul className="flex flex-col items-center gap-3 p-5">
        {navMenuItems.map((navMenuItem, index) =>
          location.pathname.includes(navMenuItem) ? null : location.pathname ===
              "/" && navMenuItem === "home" ? null : (
            <NavMenuItem
              key={index}
              navMenuItem={navMenuItem}
              setToggle={setToggle}
            />
          )
        )}
      </ul>
    </motion.div>
  )
}

interface NavMenuItemProps {
  navMenuItem: string
  setToggle: (toggle: boolean) => void
}

const NavMenuItem = ({ navMenuItem, setToggle }: NavMenuItemProps) => {
  const itemVariant: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.li
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.75 }}
      variants={itemVariant}
      className="font-header cursor-pointer"
      onClick={() => setToggle(false)}
    >
      <Link to={`/${navMenuItem}`}>{navMenuItem.toUpperCase()} </Link>
    </motion.li>
  )
}
