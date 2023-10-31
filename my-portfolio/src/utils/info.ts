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

export interface Experience {
  time: string
  title: string
  company: string
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

export const projects = [
  {
    id: "1",
    time: "2023",
    title: "Portfolio",
    link: "//github.com/SanaIsShana/portfolio",
    tech: "Typescript, React, Tailwind, CSS, HTML, Framer Motion",
  },
]


