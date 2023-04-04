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
        className={`text-color-animation fixed right-6 z-10 grid place-items-center rounded-full backdrop-blur-md transition-all hover:scale-110 sm:right-[38px] sm:!bg-common-white dark:sm:!bg-common-black ${
          showTrigger ? "bottom-4 sm:bottom-8" : "-bottom-14"
        }`}
      >
        <TbSquareRoundedChevronLeftFilled className="rotate-90 text-3xl" />
      </IconButton>
    </SmoothLink>
  );
}
