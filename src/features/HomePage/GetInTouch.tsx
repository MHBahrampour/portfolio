import Link from "next/link";

import { m } from "framer-motion";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

import { Button, IconButton, Typography } from "@mui/material";

import { directionMotion } from "@/utils/motions";

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="dpx grid w-full max-w-6xl gap-4">
      <Typography
        component={m.h2}
        className="heading"
        {...directionMotion("TB", 0)}
      >
        Get In Touch
      </Typography>

      {/* Formal ways */}
      <m.div {...directionMotion("LR", 1)} className="grid gap-4">
        <Typography variant="body1">
          I’m open to better opportunities, if you can offer one, i’ll be glad
          to consider it.
        </Typography>
        <Typography variant="body1">
          Also my inbox is always open to any idea and question, or maybe you
          just wanna say hi?
        </Typography>

        <div className="flex items-center gap-4">
          <Link href="mailto:bahrampour@protonmail.com" target="_blank">
            <Button
              disableElevation
              variant="contained"
              size="large"
              startIcon={<HiMailOpen />}
              className="normal-case"
            >
              Send Email
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/mhbahrampour/"
            target="_blank"
          >
            <Button
              variant="outlined"
              size="large"
              startIcon={<FaLinkedin />}
              className="normal-case "
            >
              Send DM
            </Button>
          </Link>
        </div>
      </m.div>

      {/* Informal ways */}
      <m.div className="mt-4 grid gap-1" {...directionMotion("RL", 2)}>
        <Typography variant="body1">
          And if you want to see me in a less formal way:
        </Typography>

        <div className="flex items-center gap-4 text-lt-primary-main dark:text-dt-primary-main [&_button]:text-current">
          <Link href="https://t.me/mhbahrampour" target="_blank">
            <IconButton edge="start" size="large">
              <FaTelegram />
            </IconButton>
          </Link>

          <Link href="https://discordapp.com/users/Mamad#7034" target="_blank">
            <IconButton size="large">
              <BsDiscord />
            </IconButton>
          </Link>

          <Link href="https://twitter.com/MHBahrampour" target="_blank">
            <IconButton size="large">
              <FaTwitter />
            </IconButton>
          </Link>
        </div>
      </m.div>

      {/* Github */}
      <Typography variant="body1" component={m.p} {...directionMotion("LR", 3)}>
        Or just follow me on{" "}
        <Link
          href="https://github.com/MHBahrampour"
          target="_blank"
          className="link"
        >
          Github
        </Link>
        .
      </Typography>
    </section>
  );
}
