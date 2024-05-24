import React from "react";
import { FaPython } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foxizecloud from "@/public/foxizecloud.png";
import params from "@/public/params2.png";
import starwardle from "@/public/starwardle.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Chemistry",
    location: "UB, Barcelona",
    description:
      "My introduction to the world of programming began during my time at the University of Barcelona, where I used Python to develop chemical applications.",
    icon: React.createElement(FaPython),
    date: "2019-2022",
  },
  {
    title: "DAW",
    location: "Stucom, Barcelona",
    description:
      "I graduated as a web developer with excellent grades.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Foxize, Barcelona",
    description:
      "I worked at foxize as a full-stack with Agile methodology, I was involved in several projects, and I created one of them.",
    icon: React.createElement(FaSymfony),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Foxizecloud",
    description:
      "I worked as a full-stack developer on this startup project for 1 year. Is an LMS for managing and creating courses.",
    tags: ["Php", "Symfony", "Mysql", "Bootstrap", "JS & JQuery", "Jira"],
    imageUrl: foxizecloud,
    link: "https://www.foxizecloud.com/"
  },
  {
    title: "Foxize params",
    description:
      "I created an internal company application to document. The API (backend) was created with graphql and is connected to the frontend with react (NextJS).",
    tags: ["NextJS", "TypeScript", "Symfony", "GraphQL", "Apollo"],
    imageUrl: params,
    link: "https://www.foxizecloud.com/"
  },
  {
    title: "Starwardle",
    description:
      "Starwardle is a Node.js and Express based game that connects to the Starwardle API, allowing players to guess characters from the Star Wars universe.",
    tags: ["Node.js", "Express", "CSS", "JS"],
    imageUrl: starwardle,
    link: "https://github.com/Tomvsa/Starwardle"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Mysql",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "Java",
  "Laravel",
  "Symfony",
  "Jira",
  "JWT"
] as const;
