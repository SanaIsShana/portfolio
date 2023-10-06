import { experiences } from "../utils/info"
import Resume from "../../public/assets/Shana-CV.pdf"
import { AiFillSmile } from "react-icons/ai"

export const Experience = () => {
  const onResumeClick = () => {
    window.open(Resume)
  }

  return (
    <div className="p-1 sm:p-2 m-3 w-fit sm:w-2/5">
      {experiences.map((item) => (
        <div className="text-sm sm:text-lg font-body">
          <div className="flex flex-row gap-2">
            <p className="">{item.time}</p>
            <p className="">{item.company}</p>
          </div>
          <p className="">{item.title}</p>
        </div>
      ))}

      <div
        className="flex w-fit cursor-pointer items-center border-dotted border-2 border-olive gap-2 p-2"
        onClick={onResumeClick}
      >
        <span> Check my full resume!</span>
        <span>
          <AiFillSmile size={30} />
        </span>
      </div>
    </div>
  )
}
