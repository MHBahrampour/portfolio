import { useRef, useState } from "react";

import Link from "next/link";

import { m } from "framer-motion";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { RiLink } from "react-icons/ri";

import { Avatar, Chip, IconButton, Typography } from "@mui/material";

import { useHighlightMenuItem } from "@/hooks/useHighlighMenuItem";

import { directionMotion } from "@/utils/motions";

interface ProjectsData {
  title: string;
  description: string;
  company: string;
  companyLogo: string;
  siteLink: string;
  githubLink: string | null;
  technologies: string[];
}
const projectsData: ProjectsData[] = [
  {
    title: "Metaroom App",
    description:
      "Gateway for traditional tourism, short or long-term rental into WEB3 for an unique travel community of digital nomads and remote workers.",
    company: "030labs",
    companyLogo: "/images/works/030labs.png",
    siteLink: "https://demo.metaroom.gg/",
    githubLink: null,
    technologies: [
      "React",
      "Metamask",
      "Material UI",
      "Tailwind CSS",
      "React Router",
      "Moment.js",
      "Axios",
    ],
  },
  {
    title: "Mu Website",
    description:
      "Mu Protocol is a distributed, decentralized cloud provider marketplace. mu allows infrastructure providers to offer their servers for sale in a standardized and secure way.",
    company: "030labs",
    companyLogo: "/images/works/030labs.png",
    siteLink: "https://muprotocol.io/",
    githubLink: null,
    technologies: [
      "Next.js",
      "Typescript",
      "Solana Wallet Adapter",
      "Tailwind CSS",
      "Material UI",
      "React Icons",
      "Prettier",
    ],
  },
];

export default function Projects() {
  const [moreTechs, setMoreTechs] = useState<string | null>(null);

  // Highlight active menu items
  const sectionRef = useRef(null);
  useHighlightMenuItem(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="dpx grid w-full max-w-6xl gap-4"
    >
      <Typography
        className="heading"
        component={m.h2}
        {...directionMotion("TB", 0)}
      >
        Projects
      </Typography>

      <Typography
        variant="body1"
        component={m.h2}
        {...directionMotion("LR", 1)}
      >
        Consider this portfolio as well because I’m proud of it 😉
      </Typography>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(288px,_1fr))] gap-6">
        {/* Project cards */}
        {projectsData.map((project, index) => {
          return (
            <m.div key={project.title} {...directionMotion("BT", index + 2)}>
              <div className="group relative grid h-full cursor-default grid-rows-[min-content_1fr_min-content] gap-8 rounded-xl bg-lt-primary-main/5 p-6 transition-all duration-500 dark:bg-lt-primary-main/50 ">
                {/* Header: Company logo and Links */}
                <div className="flex items-center justify-between gap-2 text-2xl text-lt-primary-main dark:text-dt-primary-main [&_button]:text-inherit">
                  <div className="flex flex-1 items-center gap-2">
                    <Avatar alt={project.company} src={project.companyLogo} />

                    <Typography variant="body2">{project.company}</Typography>
                  </div>

                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank">
                      <IconButton>
                        <FaGithub />
                      </IconButton>
                    </Link>
                  )}

                  <Link href={project.siteLink} target="_blank">
                    <IconButton
                      edge="end"
                      className="group-hover:text-color-animation"
                    >
                      <RiLink />
                    </IconButton>
                  </Link>
                </div>

                {/* Body: Title and Descriprions */}
                <div className="grid gap-4 self-start">
                  <Typography
                    component="h6"
                    className="text-xl font-semibold sm:text-2xl"
                  >
                    {project.title}
                  </Typography>

                  <Typography variant="body1">{project.description}</Typography>
                </div>

                {/* 
                    Footer: Used technologies
                 */}
                {/* We can't use one div with absolute positioning since the card height possibly shrinks. Hence we use 2 implementations */}
                {/* Only show 3 items */}
                <div className={`grid grid-cols-[1fr_min-content] gap-2`}>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        className="font-jbm text-xs"
                      />
                    ))}
                  </div>

                  {project.technologies.length > 3 && (
                    <AiFillPlusCircle
                      className={`hover:text-color-animation cursor-pointer self-end text-2xl`}
                      onClick={() => setMoreTechs(project.title)}
                    />
                  )}
                </div>

                {/* Show all items */}
                <m.div
                  className={`absolute bottom-3 left-3 right-3 -z-10 grid grid-cols-[1fr_min-content] gap-2 p-3 ${
                    moreTechs === project.title &&
                    "!z-10 rounded-2xl bg-common-white/50 backdrop-blur-3xl dark:bg-common-black/30"
                  }`}
                  initial={{ scale: 0 }}
                  animate={moreTechs === project.title ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 32,
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        className="font-jbm text-xs"
                      />
                    ))}
                  </div>

                  <AiFillMinusCircle
                    className="hover:text-color-animation cursor-pointer self-end text-2xl"
                    onClick={() => setMoreTechs(null)}
                  />
                </m.div>
              </div>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
