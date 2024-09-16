export const pageNav: Array<string> = ["intro", "education", "experience"]

export const navMenuItems: Array<string> = [
  "home",
  "about",
  "projects",
  "contact",
]

export const skillsList: Array<string> = [
  "Javascript",
  "Typescript",
  "Java",
  "React",
  "HTML",
  "CSS",
  "Node.js",
  "Bootstrap",
  "TailwindCSS",
  "SQL",
  "MongoDB",
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
      "TailwindCSS",
      "HTML",
      "CSS",
      "Framer Motion",
    ],
  },
]

export const experiences: Array<Experience> = [
  {
    time: "August - Current, 2024",
    title: "Frontend Developer Consultant (Full-time)",
    company: "Academic Work",
    link: "https://www.academicwork.se/",
    tech: "Javascript, React, HTML, CSS, Vite, Git, Gitlab, .NET, Azure",
  },
  {
    time: "March - June, 2024",
    title: "Frontend Developer (Intern)",
    company: "E.ON Sverige",
    link: "https://www.eon.se/",
    tech: "Javascript, React, HTML, CSS, Vite, Git, Gitlab",
  },
  {
    time: "June - August, 2023",
    title: "Frontend Developer (Summer Worker)",
    company: "Axis Communications",
    link: "https://www.axis.com/",
    tech: "Typescript, React, GraphQL, Styled-components, HTML, CSS, Git",
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
