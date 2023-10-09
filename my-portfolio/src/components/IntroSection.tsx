import { useState } from "react"

export const Intro = () => {
  const [isHover, setHover] = useState(false)

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
          When I'm not
          {!isHover && (
            <span
              className="text-darkOlive cursor-pointer w-67 inline-block ml-1"
              onMouseEnter={() => setHover(true)}
            >
              coding
            </span>
          )}
          {isHover && (
            <span
              className="text-darkOlive cursor-pointer w-67 inline-block text-center ml-1"
              onMouseLeave={() => setHover(false)}
            >
              &lt;/&gt;
            </span>
          )}
          , I like to hang out with my friends, learn to cook different kinds of
          food, and play board games!
        </p>
      </div>
    </div>
  )
}
