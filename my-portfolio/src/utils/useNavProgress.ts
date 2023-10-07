import { RefObject, useEffect, useState } from "react"

export const useSectionProgress = (
  sections: Array<RefObject<HTMLElement>>,
  scrollY: number
) => {
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const handleScroll = () => {
      if (sections === null) return
      const pageYOffset = scrollY

      sections.forEach((section) => {
        if (section.current === null) return
        const sectionOffsetTop = section.current?.offsetTop
        const sectionHeight = section.current?.offsetHeight

        if (pageYOffset > sectionOffsetTop - sectionHeight) {
          setActiveSection(section.current.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, true)

    return () => {
      window.removeEventListener("scroll", handleScroll, true)
    }
  }, [sections, scrollY])

  return activeSection
}
