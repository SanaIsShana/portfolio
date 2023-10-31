import { skillsList } from "../utils/info"
import { SkillsAnimation } from "./SkillsAnimation"

export const Intro = () => {
  return (
    <div className="m-2 sm:m-3 p-1 sm:p-2 w-fit sm:w-2/5 text-center">
      <div className="text-sm md:text-base lg:text-lg">
        <p>
          My name is Sana Barilide. I am a frontend developer. I love
          programming because I like to solve problems and be creative.
        </p>
      </div>

      <div className="text-sm md:text-base lg:text-lg mt-4">
        <p>
          When I'm not coding, I like to hang out with my friends and play board
          games! I also love dancing, cooking, and home interior design!
        </p>
      </div>
      <div className="mt-2">
        <SkillsAnimation text={skillsList} />
      </div>
    </div>
  )
}
