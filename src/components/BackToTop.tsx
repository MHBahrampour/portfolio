import { TbSquareRoundedChevronLeftFilled } from "react-icons/tb";

import { IconButton, useScrollTrigger } from "@mui/material";

import SmoothLink from "./SmoothLink";

export default function BackToTop() {
  const showTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  return (
    <SmoothLink scrollToTop>
      <IconButton
        className={`text-color-animation fixed right-4 z-10 grid place-items-center rounded-full backdrop-blur-md transition-all hover:scale-110 sm:right-[60px] sm:translate-x-1/2 sm:!bg-common-white dark:sm:!bg-common-black ${
          showTrigger ? "bottom-4 sm:bottom-8" : "-bottom-10"
        }`}
      >
        <TbSquareRoundedChevronLeftFilled className="rotate-90 text-2xl" />
      </IconButton>
    </SmoothLink>
  );
}
