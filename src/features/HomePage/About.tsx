import { useState } from "react";

import Image from "next/image";

import moment, { type Moment } from "moment";

import { Typography } from "@mui/material";

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

export default function About() {
  const [favTechDetail, setFavTechDetail] = useState<string | null>(null);

  const handleFavTechsClick = (id: string) => {
    setFavTechDetail((prevState) => (id === prevState ? null : id));
  };

  const getMonthsFromNow = (date: Moment) => {
    const now = moment();
    const months = now.diff(moment(date), "months");
    return months;
  };

  return (
    <section className="dpx grid gap-4">
      <Typography component="h2" className="heading">
        About
      </Typography>

      <Typography variant="body1">
        Hello! My name is Mohammad H. Bahrampour. Don’t worry you can call me
        Mamad!
      </Typography>

      <Typography variant="body1">
        I started my journey in 2020 as a back-end developer and my weapon of
        choice was Django .Although it was very attractive to me, I was looking
        for something that would challenge my artistic creativity more and this
        is where I was drawn to the front end.
      </Typography>

      <Typography variant="body1">
        Fast-forward to early 2022 I decided to switch to front-end, and boy I
        loved it.
      </Typography>

      <div className="grid gap-3">
        <Typography variant="body1">
          Here are some technologies that I use often:
        </Typography>

        <div className="grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 max-w-4xl">
          {frequentTechsData.map((techItem) => {
            const monthsNumber = getMonthsFromNow(techItem.startDate);
            return (
              <div
                key={techItem.id}
                onClick={() => handleFavTechsClick(techItem.id)}
                className={`p-3 sm:p-4 md:p-5 place-items-center dark:bg-opacity-50 rounded-lg  hover:scale-105 transition-all cursor-pointer ${techItem.bgColor}`}
              >
                {favTechDetail !== techItem.id ? (
                  <>
                    <Image
                      src={techItem.logo}
                      width={36}
                      height={36}
                      alt={techItem.name}
                    />

                    <Typography className="text-lg md:text-xl font-semibold">
                      {techItem.name}
                    </Typography>
                  </>
                ) : (
                  <div className="grid md:grid-cols-2 md:place-items-center h-full gap-3">
                    {[monthsNumber, techItem.projectsUsed].map(
                      (mpItem, index) => (
                        <Typography
                          key={index}
                          component="p"
                          className="font-semibold text-lg md:text-2xl"
                        >
                          +{mpItem} <br className="hidden md:block" />
                          <span className="font-light text-base md:font-normal md:text-lg">
                            {index === 0
                              ? `month${monthsNumber > 1 ? "s" : ""}`
                              : `project${
                                  techItem.projectsUsed > 1 ? "s" : ""
                                }`}
                          </span>
                        </Typography>
                      ),
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
