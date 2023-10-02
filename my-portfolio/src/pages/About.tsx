import { useContext } from "react"
import { PageTransition } from "../utils/PageTransition"
import { ThemeContext } from "../utils/theme-context"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Resume from "../../public/assets/Shana-CV.pdf"
import { AiFillSmile } from "react-icons/ai"

export const About = () => {
  const { theme } = useContext(ThemeContext)

  const onResumeClick = () => {
    window.open(Resume)
  }

  return (
    <main role="main" className="w-full flex flex-col h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-dustyPink"
        } p-5 h-full`}
      >
        <Header />
        <div className="flex border-solid border-4 rounded-lg border-black justify-center m-6 sm:m-20">
          <div className="p-2 sm:p-5 m-5">
            My name is Shana and I recently got my degree in full-stack
            development from Teknikhögskolan in Lund, Sweden. I am seeking a new
            challange!
            <div className="flex w-fit cursor-pointer items-center mt-2 border-dotted border-2 rounded-lg border-olive p-1 gap-1.5">
              <span> Check my resume!</span>
              <span className="">
                <AiFillSmile onClick={onResumeClick} size={30} />
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <PageTransition />
    </main>
  )
}
