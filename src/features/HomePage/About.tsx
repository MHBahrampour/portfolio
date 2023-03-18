import Image from "next/image";

import { Typography } from "@mui/material";

const frequentTechsData = [
  {
    name: "JavaScript",
    logo: "/images/favTechs/javascript.svg",
    bgColor: "bg-yellow-200",
  },
  {
    name: "TypeScript",
    logo: "/images/favTechs/typescript.svg",
    bgColor: "bg-rose-300",
  },
  {
    name: "React JS",
    logo: "/images/favTechs/reactJS.svg",
    bgColor: "bg-emerald-300",
  },
  {
    name: "Next JS",
    logo: "/images/favTechs/nextJS.svg",
    bgColor: "bg-purple-300",
  },
  {
    name: "Tailwind CSS",
    logo: "/images/favTechs/tailwindCSS.svg",
    bgColor: "bg-sky-300",
  },
  {
    name: "Material UI",
    logo: "/images/favTechs/materialUI.svg",
    bgColor: "bg-slate-300",
  },
];

export default function About() {
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

        <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 max-w-4xl">
          {frequentTechsData.map((item) => (
            <div
              key={item.name}
              className={`p-3 sm:p-4 md:p-5 place-items-center dark:bg-opacity-50 rounded-lg hover:!bg-opacity-20 transition-all ${item.bgColor}`}
            >
              <Image
                src={item.logo}
                width={36}
                height={36}
                alt={item.name}
                className=""
              />

              <Typography className="text-lg md:text-xl font-semibold">
                {item.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
