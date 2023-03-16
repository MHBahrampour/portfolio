import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Chip, Typography } from "@mui/material";

const frequentTechsData = [
  {
    name: "JavaScript (ES6+)",
    icon: <QuestionMarkIcon />,
    color: "yellow-400",
  },
  {
    name: "TypeScript",
    icon: <QuestionMarkIcon />,
    color: "sky-500",
  },
  {
    name: "React",
    icon: <QuestionMarkIcon />,
    color: "sky-300",
  },
  {
    name: "Next.js",
    icon: <QuestionMarkIcon />,
    color: "emerald-400",
  },
  {
    name: "Tailwind CSS",
    icon: <QuestionMarkIcon />,
    color: "purple-400",
  },
  {
    name: "Material UI (MUI)",
    icon: <QuestionMarkIcon />,
    color: "rose-400",
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

        <div className="flex gap-3 max-w-md">
          {frequentTechsData.map((item) => (
            <Chip
              key={item.name}
              icon={item.icon}
              label={item.name}
              // className={`bg-${item.color} dark:bg-opacity-50`}
              className={`bg-red`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
