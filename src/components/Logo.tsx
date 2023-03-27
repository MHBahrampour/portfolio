import Link from "next/link";

import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <Link href="/">
      <Typography
        variant="h6"
        component="div"
        className="gradient-bg-animation rounded-lg px-2 leading-snug text-common-white"
      >
        MHB
      </Typography>
    </Link>
  );
}
