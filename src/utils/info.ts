export const pageNav: Array<string> = ["intro", "education", "experience"]

export const navMenuItems: Array<string> = [
  "home",
  "about",
  "projects",
  "contact",
]

export const skillsList: Array<string> = [
  "Typescript",
  "Javascript",
  "Java",
  "React",
  "Angular",
  "HTML",
  "CSS",
  "Node.js",
  "GraphQL",
  "Bootstrap",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Figma",
  "Git",
]

export interface Project {
  id: string
  time: string
  title: string
  link: string
  techList: string[]
}

export interface Experience {
  time: string
  title: string
  company: string
  link: string
  tech: string
}

export const projects: Array<Project> = [
  {
    id: "1",
    time: "2023",
    title: "Portfolio",
    link: "https://www.github.com/SanaIsShana/portfolio",
    techList: [
      "Typescript",
      "React",
      "Tailwind",
      "HTML",
      "CSS",
      "Framer Motion",
    ],
  },
]

export const experiences: Array<Experience> = [
  {
    time: "June - August, 2023",
    title: "Frontend Developer (Summer Worker)",
    company: "Axis Communications",
    link: "https://www.axis.com/",
    tech: "Typescript, React, GraphQL, Styled-components, CSS, HTML, Git",
  },
  {
    time: "January - May, 2023",
    title: "Frontend Developer (Intern)",
    company: "Axis Communications",
    link: "https://www.axis.com/",
    tech: "Typescript, React, GraphQL, Styled-components, CSS, HTML, Git",
  },
  {
    time: "April - August, 2022",
    title: "Fullstack Developer (Intern)",
    company: "Bookboost",
    link: "https://www.bookboost.io/",
    tech: "Typescript, Angular, Bootstrap, CSS, HTML, PostgreSQL, PHP, Laravel",
  },
]
