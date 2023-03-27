import { useEffect, useState } from "react";

import Link from "next/link";

import { BiCodeCurly, BiGitRepoForked, BiStar } from "react-icons/bi";

import { Typography } from "@mui/material";

interface GithubInfo {
  stars: string;
  forks: number;
  language: string;
}

export default function Footer() {
  const [githubInfo, setGithubInfo] = useState<GithubInfo>();

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
    <footer className="mt-20 grid h-48 place-items-center bg-[url('/images/footerBgLight.svg')] bg-cover dark:bg-[url('/images/footerBgDark.svg')]">
      <Link href="https://github.com/MHBahrampour/portfolio" target="_blank">
        <div className="group mt-4 grid place-items-center gap-4 p-4 backdrop-blur-[2px] transition-all hover:scale-110 dark:backdrop-blur-[1px]">
          <Typography variant="body2" className="text-center">
            Built and Designed by
            <span className="block">Mohammad H. Bahrmapour</span>
          </Typography>

          {githubInfo && (
            <Typography
              variant="body2"
              className="font-jbm flex gap-3 text-center"
            >
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <BiStar /> {githubInfo.stars}
              </span>
              <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400">
                <BiGitRepoForked /> {githubInfo.forks}
              </span>
              <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                <BiCodeCurly /> {githubInfo.language}
              </span>
            </Typography>
          )}
        </div>
      </Link>
    </footer>
  );
}
