import { Link, useLocation } from "react-router-dom"
import { navbarTabs } from "../utils/info"
import { Variants, motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface MenuProps {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}

export const NavMenu = ({ toggle, setToggle }: MenuProps) => {
  const location = useLocation()

  const ref = useRef<HTMLDivElement>(null)

  const variants: Variants = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    closed: {
      opacity: 0,
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
      className="fixed h-fit top-20 right-2 w-fit bg-red opacity-90 rounded-lg z-10"
      variants={variants}
      animate={toggle ? "open" : "closed"}
      onBlur={() => setToggle(false)}
    >
      <ul className="flex flex-col items-center gap-3 p-5">
        {navbarTabs.map((navItem, index) =>
          location.pathname.includes(navItem) ? null : location.pathname ===
              "/" && navItem === "home" ? null : (
            <MenuItem key={index} navItem={navItem} setToggle={setToggle} />
          )
        )}
      </ul>
    </motion.div>
  )
}

interface ItemProp {
  navItem: string
  setToggle: (toggle: boolean) => void
}

const MenuItem = ({ navItem, setToggle }: ItemProp) => {
  return (
    <motion.li
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.75 }}
      className="font-header cursor-pointer"
      onClick={() => setToggle(false)}
    >
      <Link to={`/${navItem}`}>{navItem.toUpperCase()} </Link>
    </motion.li>
  )
}
