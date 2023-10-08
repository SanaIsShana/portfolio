import { RefObject, useLayoutEffect, useState } from "react"

export const useSectionProgress = (
  scrollY: number,
  sections: RefObject<HTMLElement>[]
) => {
  const [activeSection, setActiveSection] = useState("intro")

  const clamp = (value: number = 0) => Math.round(value)

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scroll = scrollY

      sections.map((section) => {
        const rect = section.current?.getBoundingClientRect()
        const top = clamp(rect?.top)
        const height = clamp(rect?.height)
        const id = section.current?.id || ""

        if (scroll + height >= top && top > 0) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener("resize", handleScroll, true)
    window.addEventListener("scroll", handleScroll, true)

    return () => {
      window.removeEventListener("resize", handleScroll, true)
      window.removeEventListener("scroll", handleScroll, true)
    }
  }, [scrollY, sections])

  return activeSection
}
