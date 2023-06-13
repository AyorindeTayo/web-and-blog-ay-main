import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/image 3.webp";
import haruFashion from "public/projects/7.webp";
import haruApi from "public/projects/haru-api.webp";
import astroPaper from "public/projects/astro-paper.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/AyorindeTayo"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Vickers hardness Prediction App",
    type: "Frontend",
    image: (
      <Image
        src={terminalPortfolio}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "After carrying out machine Learning modeling, the model was saved in a pickel file. The Machine Learning app was built with Python Flask. ",
    tags: ["Flask app", "Pyhton", "CSS", "HTML"],
    liveUrl: "https://github.com/AyorindeTayo/Hardness-App",
    codeUrl: "https://github.com/AyorindeTayo/Hardness-App",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Sentiments Analysis of Covid-19 XBB. 1.5 Variant",
    type: "Frontend",
    image: (
      <Image
        src={haruFashion}
        sizes="100vw"
        fill
        alt="NLP Sentiments Analysis"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Application of different machine learning techniques for sentiment analysis of COVID-19 Subvariant XBB.1.5 was explored.",
    tags: ["NLP", "Python", "Machine learning", "Data Science"],
    liveUrl: "https://colab.research.google.com/github/AyorindeTayo/Web-Scrapping-and-Sentiments-Analysis-of-Covid-19/blob/main/AnalysisCOVID_19_subvariant_XBB_1_5.ipynb",
    codeUrl: "https://github.com/AyorindeTayo/Web-Scrapping-and-Sentiments-Analysis-of-Covid-19/blob/main/AnalysisCOVID_19_subvariant_XBB_1_5.ipynb",
    bgColor: "bg-[#A6CECE]",
  },

];

export default ProjectSection;
