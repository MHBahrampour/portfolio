import { useEffect, useState } from "react";

import Link from "next/link";

import { BiCodeCurly, BiGitRepoForked, BiStar } from "react-icons/bi";

import { Typography } from "@mui/material";

export default function Footer() {
  const [githubInfo, setGithubInfo] = useState({
    stars: null,
    forks: null,
    language: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/MHBahrampour/portfolio")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count, language } = json;
        setGithubInfo({
          stars: stargazers_count,
          forks: forks_count,
          language: language,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer className="dpx h-48 mt-20 bg-[url('/images/footerBgLight.svg')] dark:bg-[url('/images/footerBgDark.svg')] bg-cover grid place-items-center">
      <Link href="https://github.com/MHBahrampour/portfolio" target="_blank">
        <div className="group grid gap-4 place-items-center p-4 mt-4 hover:scale-110 transition-all backdrop-blur-[2px] dark:backdrop-blur-[1px]">
          <Typography variant="body2" className="text-center">
            Built and Designed by
            <span className="block">Mohammad H. Bahrmapour</span>
          </Typography>

          <Typography variant="body2" className="text-center flex gap-3">
            <span className="flex items-center gap-1 dark:text-amber-400 text-amber-600">
              <BiStar /> {githubInfo.stars}
            </span>
            <span className="flex items-center gap-1 dark:text-teal-400 text-teal-600">
              <BiGitRepoForked /> {githubInfo.forks}
            </span>
            <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
              <BiCodeCurly /> {githubInfo.language}
            </span>
          </Typography>
        </div>
      </Link>
    </footer>
  );
}
