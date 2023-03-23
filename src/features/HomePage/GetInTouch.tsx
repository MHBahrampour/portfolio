import Link from "next/link";

import { BsDiscord } from "react-icons/bs";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

import { Button, IconButton, Typography } from "@mui/material";

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="dpx grid gap-4">
      <Typography component="h2" className="heading">
        Get In Touch
      </Typography>

      <Typography variant="body1">
        I’m open to better opportunities, if you can offer one, i’ll be glad to
        consider it.
      </Typography>
      <Typography variant="body1">
        Also my inbox is always open to any idea and question, or maybe you just
        wanna say hi?
      </Typography>

      <div className="flex items-center gap-4">
        <Link href="mailto:bahrampour@protonmail.com" target="_blank">
          <Button
            disableElevation
            variant="contained"
            size="large"
            startIcon={<HiMailOpen />}
            className="normal-case "
          >
            Send Email
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/mhbahrampour/" target="_blank">
          <Button
            variant="outlined"
            size="large"
            startIcon={<FaLinkedin />}
            className="normal-case "
          >
            DM On LinkedIn
          </Button>
        </Link>
      </div>

      <div className="mt-4 grid gap-1">
        <Typography variant="body1">
          And if you want to see me in a less formal way:
        </Typography>

        <div className="flex gap-4 items-center text-cCommon-black dark:text-cCommon-white">
          <Link href="https://t.me/mhbahrampour" target="_blank">
            <IconButton edge="start" size="large" className="text-blue-500">
              <FaTelegram />
            </IconButton>
          </Link>

          <Link href="https://twitter.com/MHBahrampour" target="_blank">
            <IconButton size="large" className="text-blue-400">
              <FaTwitter />
            </IconButton>
          </Link>

          <Link href="https://discordapp.com/users/Mamad#7034" target="_blank">
            <IconButton size="large" className="text-indigo-500">
              <BsDiscord />
            </IconButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
