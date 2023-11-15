export const tabs = ["intro", "education", "experience"]

export const navbarTabs = ["home", "about", "projects", "contact"]

export const skillsList = [
  "Typescript",
  "Javascript",
  "React",
  "Angular",
  "GraphQL",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
]

export interface Project {
  id: string
  time: string
  title: string
  link: string
  techList: string[]
}

export const experiences = [
  {
    time: "June - August, 2023",
    title: "Frontend Developer (Summer Worker)",
    company: "Axis Communications",
    link: "//www.axis.com/",
    tech: "Typescript, React, GraphQL, Styled-components, CSS, HTML, Git",
  },
  {
    time: "January - May, 2023",
    title: "Frontend Developer (Intern)",
    company: "Axis Communications",
    link: "//www.axis.com/",
    tech: "Typescript, React, GraphQL, Styled-components, CSS, HTML, Git",
  },
  {
    time: "April - August, 2022",
    title: "Fullstack Developer (Intern)",
    company: "Bookboost",
    link: "//www.bookboost.io/",
    tech: "Typescript, Angular, Bootstrap, CSS, HTML, PostgreSQL, PHP, Laravel",
  },
]

export const projects: Array<Project> = [
  {
    id: "1",
    time: "2023",
    title: "Portfolio",
    link: "//github.com/SanaIsShana/portfolio",
    techList: [
      "Typescript",
      "React",
      "Tailwind",
      "CSS",
      "HTML",
      "Framer Motion",
    ],
  },
]

export const portfolioProjectImages = [
  "../../public/assets/p-1.png",
  "../../public/assets/p-2.png",
  "../../public/assets/p-3.png",
  "../../public/assets/p-4.png",
]


