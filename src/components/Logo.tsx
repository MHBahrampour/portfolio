import Image from "next/image";
import Link from "next/link";

import { m } from "framer-motion";

import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { directionMotion } from "@/utils/motions";

export default function Logo() {
  return (
    <Link href="/">
      <m.div className="flex items-center" {...directionMotion("LR", 1)}>
        <Image
          src="/images/logo.svg"
          height={36}
          width={36}
          alt="Logo"
          className="rounded-full transition-all hover:bg-lt-secondary-main/10 dark:hover:bg-dt-secondary-main/20"
        />
      </m.div>
    </Link>
  );
}
