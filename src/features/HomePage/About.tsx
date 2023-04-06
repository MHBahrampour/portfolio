import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import moment, { type Moment } from "moment";
import { HiCursorClick } from "react-icons/hi";

import { ButtonBase, Typography } from "@mui/material";

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
    projectsUsed: 3,
  },
  {
    id: "react",
    name: "React JS",
    logo: "/images/favTechs/reactJS.svg",
    bgColor: "bg-emerald-300",
    startDate: moment("2022-06-01"),
    projectsUsed: 9,
  },
  {
    id: "next",
    name: "Next JS",
    logo: "/images/favTechs/nextJS.svg",
    bgColor: "bg-purple-300",
    startDate: moment("2022-10-01"),
    projectsUsed: 3,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    logo: "/images/favTechs/tailwindCSS.svg",
    bgColor: "bg-sky-300",
    startDate: moment("2022-10-01"),
    projectsUsed: 4,
  },
  {
    id: "mui",
    name: "Material UI",
    logo: "/images/favTechs/materialUI.svg",
    bgColor: "bg-slate-300",
    startDate: moment("2022-07-01"),
    projectsUsed: 4,
  },
];

const aboutContent = [
  "Hello! My name is Mohammad Hossein Bahrampour. Don’t worry you can call me Mamad!",
  "I started my journey in 2020 as a back-end developer and my weapon of choice was Django .Although it was very attractive to me, I was looking for something that would challenge my artistic creativity more and this is where I was drawn to the front end.",
  "Fast-forward to early 2022 I decided to switch to front-end, and boy I loved it. Since then, I started learning with more enthusiasm. I tried well-known technologies and studied best practices so that Icould not only build something, but build something of quality.",
  "Here are some technologies that I use often:",
];

export default function About() {
  const [favTechDetail, setFavTechDetail] = useState<string | null>(null);

  const handleFavTechsClick = (id: string) => {
    setFavTechDetail((prevState) => (id === prevState ? null : id));
  };

  const { container, items } = getVariantsMotion("BT", 6);

  return (
    <motion.section id="about" className="dpx grid gap-4">
      <Typography
        component={motion.h2}
        className="heading"
        {...directionMotion("TB", 0)}
      >
        About
      </Typography>

      <div className="max-w-4xl">
        {/* Photo */}
        <MyPhoto className="mx-auto max-w-[400px] sm:float-right sm:max-w-[250px] md:max-w-[300px]" />

        {aboutContent.map((content, index) => (
          <Typography
            key={index}
            variant="body1"
            className="mb-4"
            component={motion.p}
            {...directionMotion("LR", index + 1)}
          >
            {content}
          </Typography>
        ))}

        {/* Favorite technologies */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
          initial="hidden"
          whileInView="visible"
          variants={container}
        >
          {frequentTechsData.map((techItem) => {
            const monthsNumber = getMonthsFromNow(techItem.startDate);
            const projectsNumber = techItem.projectsUsed;

            return (
              <ButtonBase
                key={techItem.id}
                onClick={() => handleFavTechsClick(techItem.id)}
                className={`group grid cursor-pointer grid-cols-1 justify-start gap-1 rounded-lg p-3 text-common-black transition-all duration-300 hover:scale-105 dark:bg-opacity-50 dark:text-common-white sm:p-4 md:p-5 ${techItem.bgColor}`}
                component={motion.div}
                variants={items}
              >
                {/* show each fav techs or its details */}
                {favTechDetail !== techItem.id ? (
                  <>
                    <div className="flex justify-between">
                      <Image
                        src={techItem.logo}
                        width={36}
                        height={36}
                        alt={techItem.name}
                        className="b-to-t-animation animation-delay-100"
                      />

                      <HiCursorClick className="b-to-t-animation animation-delay-500 text-lg text-black/40 group-hover:text-black dark:text-white/40 dark:group-hover:text-white md:text-xl" />
                    </div>

                    <Typography className="b-to-t-animation animation-delay-300 text-lg font-semibold text-inherit md:text-xl">
                      {techItem.name}
                    </Typography>
                  </>
                ) : (
                  <div className="grid h-full gap-3 md:grid-cols-2 md:place-items-center">
                    {[monthsNumber, projectsNumber].map((mpItem, index) => (
                      <Typography
                        key={index}
                        component="p"
                        className={`t-to-b-animation text-lg font-semibold text-inherit md:text-2xl ${
                          index === 0
                            ? "animation-delay-100"
                            : "animation-delay-300"
                        }`}
                      >
                        +{mpItem} <br className="hidden md:block" />
                        <span className="text-base font-light md:text-lg md:font-normal">
                          {index === 0
                            ? `month${monthsNumber > 1 ? "s" : ""}`
                            : `project${techItem.projectsUsed > 1 ? "s" : ""}`}
                        </span>
                      </Typography>
                    ))}
                  </div>
                )}
              </ButtonBase>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
