import { useState } from "react";

import Link from "next/link";

import { m } from "framer-motion";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

import { Avatar, Chip, IconButton, Typography } from "@mui/material";

import { directionMotion } from "@/utils/motions";

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

export default function Works() {
  const [moreTechs, setMoreTechs] = useState<string | null>(null);

  return (
    <section id="works" className="dpx grid gap-4">
      <Typography
        component={m.h2}
        className="heading"
        {...directionMotion("TB", 0)}
      >
        Works
      </Typography>

      <div className="max-w-4xl">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(288px,_1fr))] gap-4">
          {/* Work cards */}
          {works.map((work, index) => {
            const handleMoreTechsClick = (title: string) => {
              setMoreTechs((prevState) =>
                work.title === prevState ? null : title,
              );
            };

            return (
              <m.div key={work.title} {...directionMotion("BT", index + 1)}>
                <div className="gradient-border group relative grid h-full cursor-default grid-rows-[min-content_1fr_min-content] gap-8 rounded-xl p-6 transition-all hover:scale-105">
                  {/* Header: Company logo and Links */}
                  <div className="flex items-center justify-between gap-2 text-2xl text-lt-primary-main dark:text-dt-primary-main [&_button]:text-inherit">
                    <div className="flex flex-1 items-center gap-2">
                      <Avatar alt={work.company} src={work.companyLogo} />

                      <Typography variant="body2">{work.company}</Typography>
                    </div>

                    {work.githubLink && (
                      <Link href={work.githubLink} target="_blank">
                        <IconButton>
                          <FaGithub />
                        </IconButton>
                      </Link>
                    )}

                    <Link href={work.siteLink} target="_blank">
                      <IconButton
                        edge="end"
                        className="group-hover:text-color-animation"
                      >
                        <TbArrowBigUpLineFilled className="rotate-45" />
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
                  {/* We can't use one div with absolute positioning since the card height possibly shrinks. Hence we use 2 implementations */}
                  {/* Only show 3 items */}
                  <div className={`grid grid-cols-[1fr_min-content] gap-2`}>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          className="font-jbm text-xs"
                        />
                      ))}
                    </div>

                    {work.technologies.length > 3 && (
                      <AiFillPlusCircle
                        className={`hover:text-color-animation cursor-pointer self-end text-2xl`}
                        onClick={() => setMoreTechs(work.title)}
                      />
                    )}
                  </div>

                  {/* Show all items */}
                  <m.div
                    className={`absolute bottom-3 left-3 right-3 -z-10 grid grid-cols-[1fr_min-content] gap-2 p-3 ${
                      moreTechs === work.title &&
                      "!z-10 rounded-2xl bg-common-white/50 backdrop-blur-3xl dark:bg-common-black/30"
                    }`}
                    initial={{ scale: 0 }}
                    animate={moreTechs === work.title ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 32,
                    }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech) => (
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
      </div>
    </section>
  );
}
