import { TbSquareRoundedChevronLeftFilled } from "react-icons/tb";

import { IconButton, useScrollTrigger } from "@mui/material";

import SmoothLink from "./SmoothLink";

export default function BackToTop() {
  const showTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });
  console.log(showTrigger);

  return (
    <SmoothLink scrollToTop>
      <IconButton
        edge="end"
        className={`grid place-items-center fixed right-4 md:right-6 rounded-full backdrop-blur-[2px] transition-all text-current ${
          showTrigger ? "bottom-2 md:bottom-4" : "-bottom-10"
        }`}
      >
        <TbSquareRoundedChevronLeftFilled className="rotate-90 text-2xl" />
      </IconButton>
    </SmoothLink>
  );
}
