import Link from "next/link";

import BackToTop from "@/components/BackToTop";
import { BsDiscord } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

import { IconButton } from "@mui/material";

const contactWaysData = [
  {
    name: "Email",
    link: "mailto:bahrampour@protonmail.com",
    icon: <HiMailOpen />,
    hoverStyle: "hover:!text-[#6d4aff]",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mhbahrampour/",
    icon: <FaLinkedin />,
    hoverStyle: "hover:!text-[#2977c9]",
  },
  {
    name: "Github",
    link: "https://github.com/MHBahrampour",
    icon: <FaGithub />,
    hoverStyle: "hover:!text-[#000000]",
  },
  {
    name: "Telegram",
    link: "https://t.me/mhbahrampour",
    icon: <FaTelegram />,
    hoverStyle: "hover:!text-[#28a8e9]",
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/Mamad#7034",
    icon: <BsDiscord />,
    hoverStyle: "hover:!text-[#5865f2]",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MHBahrampour",
    icon: <FaTwitter />,
    hoverStyle: "hover:!text-[#1d9bf0]",
  },
];

export default function Side() {
  return (
    <>
      <div className="fixed bottom-0 hidden w-12 translate-x-1/2 flex-col items-center rounded-full backdrop-blur-sm after:inline-block after:h-32 after:w-[3px] after:rounded-full after:bg-cCommon-black after:content-[''] after:dark:bg-cCommon-white sm:right-[60px] sm:flex sm:gap-2">
        {contactWaysData.map((item) => (
          <Link key={item.name} href={item.link} target="_blank">
            <IconButton
              className={`text-2xl text-cCommon-black transition-all hover:scale-110 dark:text-cCommon-white 
              ${item.hoverStyle}
            `}
            >
              {item.icon}
            </IconButton>
          </Link>
        ))}
      </div>

      <BackToTop />
    </>
  );
}
