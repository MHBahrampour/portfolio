import { useRef, useState } from "react";

import Image from "next/image";

import { m } from "framer-motion";
import moment, { type Moment } from "moment";
import { PiHandTapFill } from "react-icons/pi";

import { ButtonBase, Typography } from "@mui/material";

import { useHighlightMenuItem } from "@/hooks/useHighlighMenuItem";

import getMonthsFromNow from "@/utils/getMonthfromNow";
import { directionMotion, getVariantsMotion } from "@/utils/motions";

import MyPhoto from "./MyPhoto";

interface FrequentTechsData {
  id: string;
  name: string;
  logo: string;
  bgColor: string;
  startDate: Moment;
  projectsUsed: number;
}

const frequentTechsData: FrequentTechsData[] = [
  {
    id: "js",
    name: "JavaScript",
    logo: "/images/favTechs/javascript.svg",
    bgColor: "bg-yellow-200",
    startDate: moment("2022-02-01"),
    projectsUsed: 6,
  },
  {
    id: "ts",
    name: "TypeScript",
    logo: "/images/favTechs/typescript.svg",
    bgColor: "bg-rose-300",
    startDate: moment("2022-09-01"),
    projectsUsed: 9,
  },
  {
    id: "react",
    name: "React JS",
    logo: "/images/favTechs/reactJS.svg",
    bgColor: "bg-emerald-300",
    startDate: moment("2022-06-01"),
    projectsUsed: 14,
  },
  {
    id: "next",
    name: "Next JS",
    logo: "/images/favTechs/nextJS.svg",
    bgColor: "bg-purple-300",
    startDate: moment("2022-10-01"),
    projectsUsed: 8,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    logo: "/images/favTechs/tailwindCSS.svg",
    bgColor: "bg-sky-300",
    startDate: moment("2022-10-01"),
    projectsUsed: 8,
  },
  {
    id: "mui",
    name: "Material UI",
    logo: "/images/favTechs/materialUi.svg",
    bgColor: "bg-slate-300",
    startDate: moment("2022-07-01"),
    projectsUsed: 8,
  },
  {
    id: "nextUi",
    name: "Next UI",
    logo: "/images/favTechs/nextUi.jpeg",
    bgColor: "bg-lime-300",
    startDate: moment("2024-05-01"),
    projectsUsed: 3,
  },
];

export default function About() {
  const [favTechDetail, setFavTechDetail] = useState<string | null>(null);

  const handleFavTechsClick = (id: string) => {
    setFavTechDetail((prevState) => (id === prevState ? null : id));
  };

  const { container: favtechContainer, items: favTechItems } =
    getVariantsMotion("BT", 3);

  // Highlight active menu items
  const sectionRef = useRef(null);
  useHighlightMenuItem(sectionRef);

  return (
    <m.section ref={sectionRef} id="about" className="dpx w-full max-w-6xl">
      <Typography
        component={m.h2}
        className="heading mb-4"
        {...directionMotion("TB", 0)}
      >
        About
      </Typography>

      {/* Photo */}
      <MyPhoto className="mx-auto max-w-[400px] sm:float-right sm:max-w-[250px] md:max-w-[300px]" />

      <m.div {...directionMotion("LR", 2)}>
        <Typography variant="body1" className="mb-4">
          Greetings! I‘m Mohammad Hossein Bahrampour, or simply{" "}
          <span className="font-medium">Mamad</span>.
        </Typography>
        <Typography variant="body1" className="mb-4">
          My coding journey began in 2020, initially tinkering with vanilla
          JavaScript, HTML, and CSS. As I explored, I stumbled upon the
          efficiency of CSS preprocessors and ventured into building robust
          back-end solutions using Django.
        </Typography>
        <Typography variant="body1" className="mb-4">
          In early 2022, my focus shifted towards diving deeper into front-end
          development—an experience that brought immense satisfaction. With a
          natural inclination for web apps, I found joy in the process.
          Exploring various technologies and embracing best practices became my
          approach to not just building, but crafting solutions of quality.
        </Typography>
        <Typography variant="body1" className="mb-4">
          Join me on this exciting journey as I continue to blend creativity
          with technical expertise in the world of web development!
        </Typography>
        <Typography variant="body1" className="mb-4">
          Here are some technologies that I use often:
        </Typography>
      </m.div>

      {/* Favorite technologies */}
      <m.div
        className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
        initial="hidden"
        whileInView="visible"
        variants={favtechContainer}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      >
        {frequentTechsData.map((techItem) => {
          const monthsNumber = getMonthsFromNow(techItem.startDate);
          const projectsNumber = techItem.projectsUsed;

          return (
            <m.div
              key={techItem.id}
              onClick={() => handleFavTechsClick(techItem.id)}
              variants={favTechItems}
            >
              <ButtonBase
                component="div"
                className={`group h-24 w-full cursor-pointer rounded-lg p-3 text-common-black transition-all @container hover:scale-105 dark:bg-opacity-50 dark:text-common-white sm:p-4 md:p-5 ${techItem.bgColor}`}
              >
                {/* show each fav techs or its details */}
                {favTechDetail !== techItem.id ? (
                  <div className="flex w-full flex-col justify-between gap-2">
                    <div className="flex justify-between">
                      <Image
                        src={techItem.logo}
                        width={36}
                        height={36}
                        alt={techItem.name}
                        className="b-to-t-animation animation-delay-100"
                      />

                      <PiHandTapFill className="b-to-t-animation animation-delay-500  !-rotate-45 text-lg text-black/60 group-hover:text-black dark:text-white/60 dark:group-hover:text-white md:text-xl" />
                    </div>

                    <Typography className="b-to-t-animation animation-delay-300 text-lg font-semibold text-inherit md:text-xl">
                      {techItem.name}
                    </Typography>
                  </div>
                ) : (
                  <div className="flex w-full flex-col gap-2 @[200px]:flex-row @[200px]:justify-evenly">
                    {[monthsNumber, projectsNumber].map((mpItem, index) => (
                      <Typography
                        key={index}
                        component="p"
                        className={`t-to-b-animation text-lg font-semibold text-inherit @[200px]:text-2xl ${
                          index === 0
                            ? "animation-delay-100"
                            : "animation-delay-300"
                        }`}
                      >
                        +{mpItem} <br className="hidden @[200px]:block" />
                        <span className="text-base font-light @[200px]:text-lg @[200px]:font-normal">
                          {index === 0
                            ? `month${monthsNumber > 1 ? "s" : ""}`
                            : `project${techItem.projectsUsed > 1 ? "s" : ""}`}
                        </span>
                      </Typography>
                    ))}
                  </div>
                )}
              </ButtonBase>
            </m.div>
          );
        })}
      </m.div>
    </m.section>
  );
}
