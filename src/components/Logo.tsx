import Link from "next/link";

import { motion } from "framer-motion";

import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { itemsDirectionMotion } from "@/utils/motions";

export default function Logo() {
  return (
    <Link href="/">
      <Typography
        variant="h6"
        component={motion.div}
        className="gradient-bg-animation rounded-lg px-2 leading-snug text-common-white"
        {...itemsDirectionMotion(1, "LR")}
      >
        MHB
      </Typography>
    </Link>
  );
}
