import { useState } from "react";

import Link from "next/link";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpOnSquareStack } from "react-icons/hi2";

import {
  Avatar,
  ButtonBase,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";

interface Works {
  title: string;
  description: string;
  company: string;
  companyLogo: string;
  siteLink: string;
  githubLink: string | null;
  technologies: string[];
}

const works: Works[] = [
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
    siteLink: "https://mu-demopage.netlify.app/",
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

export default function Works() {
  const [moreTechs, setMoreTechs] = useState<string | null>(null);

  return (
    <section id="works" className="dpx grid gap-4">
      <Typography component="h2" className="heading">
        Works
      </Typography>

      <div className="max-w-6xl">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(288px,_1fr))] gap-4">
          {/* Work cards */}
          {works.map((work) => {
            const handleMoreTechsClick = (title: string) => {
              setMoreTechs((prevState) =>
                work.title === prevState ? null : title,
              );
            };

            return (
              <div
                key={work.title}
                className="gradient-border group relative grid cursor-default grid-rows-[min-content_1fr_min-content] gap-8 rounded-xl p-4 transition-all duration-300 sm:p-6 hover:sm:scale-105"
              >
                {/* Header: Company logo and Links */}
                <div className="flex items-center justify-between gap-2 text-2xl text-common-black dark:text-common-white [&_button]:text-inherit">
                  <div className="flex flex-1 items-center gap-2">
                    <Avatar alt={work.company} src={work.companyLogo} />

                    <Typography variant="body2">{work.company}</Typography>
                  </div>

                  {work.githubLink && (
                    <Link href={work.githubLink} target="_blank">
                      <IconButton className="z-10">
                        <FaGithub />
                      </IconButton>
                    </Link>
                  )}

                  <Link href={work.siteLink} target="_blank">
                    <IconButton className="!animation-delay-300 z-10 group-hover:animate-bounce">
                      <HiArrowUpOnSquareStack />
                    </IconButton>
                  </Link>
                </div>

                {/* Body: Title and Descriprions */}
                <div className="grid gap-4 self-start">
                  <Typography
                    component="h6"
                    className="text-xl font-semibold sm:text-2xl"
                  >
                    {work.title}
                  </Typography>

                  <Typography variant="body1">{work.description}</Typography>
                </div>

                {/* Footer: Used technologies */}
                {/* We can't use one div with absolute positioning since the card height possibly shrinks. Hence we use 2 implementation */}

                {/* Only show 3 items */}
                <div className={`flex flex-wrap gap-2`}>
                  {work.technologies.slice(0, 3).map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      className="font-jbm text-xs"
                    />
                  ))}

                  {work.technologies.length > 3 && (
                    <AiFillPlusCircle
                      className={`hover:text-color-animation cursor-pointer text-2xl`}
                      onClick={() => setMoreTechs(work.title)}
                    />
                  )}
                </div>

                {/* Show all items */}
                <div
                  className={`absolute bottom-4 left-4 right-4 -z-10 flex flex-wrap gap-2 opacity-0 transition-all duration-300 ${
                    moreTechs === work.title &&
                    "!z-10 rounded-2xl p-2 !opacity-100 backdrop-blur-3xl"
                  }`}
                >
                  {work.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      className="font-jbm text-xs"
                    />
                  ))}

                  <AiFillMinusCircle
                    className="hover:text-color-animation cursor-pointer text-2xl"
                    onClick={() => setMoreTechs(null)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
