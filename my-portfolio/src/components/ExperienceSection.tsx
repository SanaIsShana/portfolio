import { experiences } from "../utils/info"
import Resume from "../../public/assets/Shana-CV.pdf"
import { AiFillSmile } from "react-icons/ai"

export const Experience = () => {
  const onResumeClick = () => {
    window.open(Resume)
  }

  return (
    <div className="p-1 sm:p-2 m-3 w-fit lg:w-2/5 font-mono">
      <div className="text-sm md:text-base lg:text-lg grid grid-rows-9 lg:grid-rows-3 divide-y-2 divide-emerald-600">
        {experiences.map((item) => (
          <div className="pt-2 pb-2">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-0 lg:gap-2">
              <div>{item.time}</div>
              <div>{item.company}</div>
            </div>
            <div className="col-span-2">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end align-baseline">
        <button
          className="flex w-fit cursor-pointer items-center bg-olive gap-1 p-1 rounded-lg mt-3"
          onClick={onResumeClick}
        >
          <span className="font-header"> Check my full resume!</span>
          <span>
            <AiFillSmile size={30} />
          </span>
        </button>
      </div>
    </div>
  )
}
