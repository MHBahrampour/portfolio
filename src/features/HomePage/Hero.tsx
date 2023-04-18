import Link from "next/link";

import { m } from "framer-motion";

import { Button, Typography } from "@mui/material";

import { directionMotion } from "@/utils/motions";

export default function Hero() {
  return (
    <section
      className={`grid min-h-[calc(100dvh-66px)] w-full place-items-center bg-[url('/images/heroBg.svg')] bg-cover bg-left`}
    >
      <div className="dpx grid max-w-[1440px] gap-12 sm:gap-16">
        {/* Heading */}
        <m.div className="grid gap-4" {...directionMotion("BT", 3)}>
          <Typography
            variant="h6"
            component="h3"
            className="sm:text-3xl lg:text-4xl"
          >
            Hey👋 I’m,
          </Typography>

          <Typography
            component="h1"
            className="text-[40px] font-bold sm:text-6xl lg:text-7xl"
          >
            Mohammad Bahrampour.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            className="font-bold !text-lt-primary-light dark:!text-dt-primary-dark sm:text-4xl lg:text-5xl"
          >
            I love building things for web.
          </Typography>
        </m.div>

        {/* Content */}
        <Typography
          variant="body1"
          component={m.p}
          className="max-w-xl sm:text-lg lg:text-xl"
          {...directionMotion("BT", 5)}
        >
          I’m a front-end developer who enjoys working with good technologies
          and finds designing entertaining. Currently, I’m focused on building
          accessible, human-centered products at Innovation Berlin.
        </Typography>

        {/* Resume */}
        <Link href="/MHBahrampour.pdf" target="_blank" className="w-max">
          <Button
            disableElevation
            variant="contained"
            size="large"
            color="secondary"
            className="normal-case"
            component={m.button}
            {...directionMotion("BT", 7, 0)}
          >
            Get My Resume
          </Button>
        </Link>
      </div>
    </section>
  );
}
