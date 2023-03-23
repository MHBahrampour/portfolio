import Link from "next/link";

import { BiGitRepoForked, BiStar } from "react-icons/bi";

import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="dpx h-40 mt-20 bg-[url('/images/footerBgLight.svg')] dark:bg-[url('/images/footerBgDark.svg')] bg-cover grid place-items-center">
      <Link href="https://github.com/MHBahrampour/portfolio" target="_blank">
        <div className="grid gap-4 place-items-center p-4 mt-4 hover:scale-110 transition-all backdrop-blur-[2px] dark:backdrop-blur-[1px]">
          <Typography variant="body2" className="text-center">
            Built and Designed by
            <span className="block">Mohammad H. Bahrmapour</span>
          </Typography>

          <Typography variant="body2" className="text-center flex gap-3">
            <span className="flex items-center gap-1">
              <BiStar /> 12
            </span>
            <span className="flex items-center gap-1">
              <BiGitRepoForked /> 3
            </span>
          </Typography>
        </div>
      </Link>
    </footer>
  );
}
