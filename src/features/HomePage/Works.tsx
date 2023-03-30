import { FaGithub } from "react-icons/fa";
import { HiArrowUpOnSquareStack } from "react-icons/hi2";

import {
  Avatar,
  ButtonBase,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";

export default function Works() {
  return (
    <section id="works" className="dpx grid gap-4">
      <Typography component="h2" className="heading">
        Works
      </Typography>

      <div className="max-w-6xl">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(288px,_1fr))] gap-4">
          {/* Card */}
          <ButtonBase
            component="div"
            className="gradient-border group grid gap-8 rounded-xl p-4 transition-all hover:scale-105 hover:cursor-pointer sm:p-6"
          >
            {/* Header: Company logo and Links */}
            <div className="grid grid-cols-[1fr_repeat(2,min-content)] items-center gap-2 text-2xl text-common-black dark:text-common-white [&_button]:text-inherit">
              <Avatar alt="Company" src="/broken-image.jpg" />

              <IconButton>
                <FaGithub />
              </IconButton>

              <IconButton className="!animation-delay-300 group-hover:animate-bounce">
                <HiArrowUpOnSquareStack />
              </IconButton>
            </div>

            {/* Body: Title and Descriprions */}
            <div className="grid gap-4">
              <Typography
                component="h6"
                className="text-xl font-semibold sm:text-2xl"
              >
                Title Project
              </Typography>

              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quaerat laboriosam quod culpa aliquid asperiores,
                repudiandae dignissimos impedit quidem sunt enim repellendus est
                ad cumque iusto ipsum magnam! Quam, sunt.
              </Typography>
            </div>

            {/* Footer: Used technologies */}
            <div className="flex flex-wrap gap-2">
              <Chip label="Chip #1" size="small" className="font-jbm" />
              <Chip label="Chip #2" size="small" className="font-jbm" />
              <Chip label="Chip #3" size="small" className="font-jbm" />
              <Chip label="Chip #4" size="small" className="font-jbm" />
              <Chip label="Chip #5" size="small" className="font-jbm" />
              <Chip label="Chip #6" size="small" className="font-jbm" />
            </div>
          </ButtonBase>
        </div>
      </div>
    </section>
  );
}
