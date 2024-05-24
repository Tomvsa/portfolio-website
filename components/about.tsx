"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After studying{" "}
        <span className="font-medium">Chemistry</span>, I decided to pursue my
        passion for programming. I enrolled in a higher vocational degree in programming and learned{" "}
        <span className="font-medium"> full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the satisfaction of finding a solution to a challenging issue.
        My core stack
        is{" "}
        <span className="font-medium">
         Node.js, Symfony, Graphql
        </span>
        . I am also familiar with <span className="font-medium">React (Next.js), Java and Laravel</span>. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games and watching movies.
         I enjoy sports and staying healthy.
      </p>
    </motion.section>
  );
}
