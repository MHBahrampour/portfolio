import { useEffect, useState } from "react";

import Link from "next/link";

import BackToTop from "@/components/BackToTop";
import { m } from "framer-motion";
import { BsDiscord } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

import { IconButton } from "@mui/material";

import { directionMotion } from "@/utils/motions";
import useWindowDimentions from "@/utils/useWindowDimentions";

const contactWaysData = [
  {
    name: "Email",
    link: "mailto:bahrampour@protonmail.com",
    icon: <HiMailOpen />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mhbahrampour/",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    link: "https://github.com/MHBahrampour",
    icon: <FaGithub />,
  },
  {
    name: "Telegram",
    link: "https://t.me/mhbahrampour",
    icon: <FaTelegram />,
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/Mamad#7034",
    icon: <BsDiscord />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MHBahrampour",
    icon: <FaTwitter />,
  },
];

export default function Side() {
  const [rightOffset, setRightOffset] = useState<number>(24);
  const { windowWidth } = useWindowDimentions();

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      const style = getComputedStyle(nav);
      const marginRight = parseFloat(style.marginRight);
      setRightOffset(marginRight + 32);
    }
  }, [windowWidth]);

  return (
    <>
      <m.div
        className="fixed bottom-0 hidden w-12 flex-col items-center rounded-full backdrop-blur-sm after:inline-block after:h-32 after:w-[3px] after:rounded-full after:bg-common-black after:content-[''] after:dark:bg-dt-primary-main sm:flex sm:gap-2"
        style={{ right: rightOffset }}
        {...directionMotion("RL", 7)}
      >
        {contactWaysData.map((item) => (
          <Link key={item.name} href={item.link} target="_blank">
            <IconButton
              className={`hover:animation-duration-2 hover:text-color-animation text-2xl text-lt-primary-main transition-all hover:scale-110 dark:text-dt-primary-main`}
            >
              {item.icon}
            </IconButton>
          </Link>
        ))}
      </m.div>

      <BackToTop rightOffset={rightOffset} />
    </>
  );
}
