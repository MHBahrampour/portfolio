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
        edge="end"
        className={`text-color-animation fixed right-4 z-10 grid place-items-center rounded-full !bg-cCommon-white transition-all hover:scale-110 dark:!bg-cCommon-black ${
          showTrigger ? "bottom-4 sm:bottom-8" : "-bottom-10"
        }`}
      >
        <TbSquareRoundedChevronLeftFilled className="rotate-90 text-2xl" />
      </IconButton>
    </SmoothLink>
  );
}
