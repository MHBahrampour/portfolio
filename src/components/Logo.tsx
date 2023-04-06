import Link from "next/link";

import { m } from "framer-motion";

import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { directionMotion } from "@/utils/motions";

export default function Logo() {
  return (
    <Link href="/">
      <Typography
        variant="h6"
        component={m.div}
        className="gradient-bg-animation rounded-lg px-2 leading-snug text-common-white"
        {...directionMotion("LR", 1)}
      >
        MHB
      </Typography>
    </Link>
  );
}
