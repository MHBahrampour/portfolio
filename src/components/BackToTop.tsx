import { TbSquareRoundedChevronLeftFilled } from "react-icons/tb";

import {
  IconButton,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";

import SmoothLink from "./SmoothLink";

interface BackToTopProps {
  rightOffset: number;
}
export default function BackToTop({ rightOffset }: BackToTopProps) {
  const showTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SmoothLink scrollToTop>
      <IconButton
        className={`text-color-animation fixed right-6 z-10 grid place-items-center rounded-full backdrop-blur-md transition-all hover:scale-110 sm:!bg-common-white dark:sm:!bg-common-black ${
          showTrigger ? "bottom-4 sm:bottom-8" : "-bottom-14"
        }`}
        style={{ right: isMobile ? "24px" : rightOffset }}
      >
        <TbSquareRoundedChevronLeftFilled className="rotate-90 text-3xl" />
      </IconButton>
    </SmoothLink>
  );
}
