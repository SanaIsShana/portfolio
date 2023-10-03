import Resume from "../../public/assets/Shana-CV.pdf"
import { AiFillSmile } from "react-icons/ai"

export const ResumeTab = () => {
  const onResumeClick = () => {
    window.open(Resume)
  }
  return (
    <>
      <div className="p-1 sm:p-2 m-3 flex justify-center">
        <p className="text-lg">
          My name is Shana. <br />
          I recently got my degree in full-stack development <br />
          from Teknikhögskolan in Lund, Sweden.
          <br />I am seeking a new challange!
        </p>
      </div>
      <div
        className="flex w-fit cursor-pointer items-center border-dotted border-2 border-olive gap-2 p-2"
        onClick={onResumeClick}
      >
        <span> Check my resume!</span>
        <span>
          <AiFillSmile size={30} />
        </span>
      </div>
    </>
  )
}
