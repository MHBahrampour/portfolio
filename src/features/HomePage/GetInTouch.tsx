import { useRef } from "react";

import Link from "next/link";

import { m } from "framer-motion";
import { BsDiscord } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

import { Button, IconButton, Typography } from "@mui/material";

import { useHighlightMenuItem } from "@/hooks/useHighlighMenuItem";

import { directionMotion } from "@/utils/motions";

export default function GetInTouch() {
  // Highlight active menu items
  const sectionRef = useRef(null);
  useHighlightMenuItem(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="get-in-touch"
      className="dpx grid w-full max-w-6xl gap-4"
    >
      <Typography
        component={m.h2}
        className="heading"
        {...directionMotion("TB", 0)}
      >
        Get In Touch
      </Typography>

      {/* Formal ways */}
      <m.div {...directionMotion("LR", 1)} className="grid gap-4 ">
        <Typography variant="body1">
          I welcome exciting opportunities and would be delighted to explore new
          possibilities with you. Whether it‘s a career opportunity or if you
          simply want to share an idea, ask a question, or just say hi, my inbox
          is always open. Feel free to reach out!
        </Typography>

        <div className="flex items-center justify-center gap-4 sm:justify-start">
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
      <m.div
        className="grid justify-center gap-1 sm:hidden sm:justify-start"
        {...directionMotion("RL", 2)}
      >
        <div className="flex items-center gap-4 text-lt-primary-main dark:text-dt-primary-main [&_button]:text-current">
          <Link href="https://github.com/MHBahrampour" target="_blank">
            <IconButton edge="start" size="large">
              <FaGithub />
            </IconButton>
          </Link>

          <Link href="https://t.me/mhbahrampour" target="_blank">
            <IconButton size="large">
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
    </section>
  );
}
