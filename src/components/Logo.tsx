import Link from "next/link";

import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <Link href="/">
      <Typography
        variant="h6"
        component="div"
        className="text-cCommon-white px-2 rounded-lg leading-snug gradient-bg-animation "
      >
        MHB
      </Typography>
    </Link>
  );
}
