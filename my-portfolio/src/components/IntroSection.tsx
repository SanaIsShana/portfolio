import { useMousePosition } from "../utils/useMousePosition"
import { useRef, useState } from "react"
import code from "../../public/assets/code.gif"
import { LinkAnimation } from "./LinkAnimation"

export const Intro = () => {
  const ref = useRef(null)
  const mousePosition = useMousePosition(ref)
  const [cursorVariant, setCursorVariant] = useState("hidden")

  const textEnter = () => {
    setCursorVariant("visible")
  }
  const textLeave = () => {
    setCursorVariant("hidden")
  }
  return (
    <div className="m-2 sm:m-3 p-1 sm:p-2 w-fit sm:w-2/5">
      <div className="text-sm md:text-base lg:text-lg">
        <p>
          My name is Sana. I am a full-stack developer. I recently got my degree
          in full-stack development at Teknikhögskolan in Lund, Sweden. I love
          programming because I like to solve problems and be creative.
        </p>
      </div>

      <div className="text-sm md:text-base lg:text-lg mt-4">
        <p>
          When I'm not{" "}
          <span
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            ref={ref}
            className="text-darkOlive cursor-pointer"
          >
            coding
          </span>
          , I like to hang out with my friends, learn to cook different kinds of
          food, and play board games!
        </p>
      </div>

      <LinkAnimation
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
      >
        <img src={code} className="h-10 bg-olive rounded-full p-1" />
      </LinkAnimation>
    </div>
  )
}
