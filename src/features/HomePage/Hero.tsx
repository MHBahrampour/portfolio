import Link from "next/link";

import { motion } from "framer-motion";

import { Button, Typography } from "@mui/material";

import { itemsDirectionMotion, mainSectionsMotion } from "@/utils/motions";

export default function Hero() {
  return (
    <motion.section
      className={`dpx relative flex min-h-[calc(100dvh-64px)] flex-col justify-center gap-16 bg-[url('/images/heroBg.svg')] bg-cover bg-left`}
      {...mainSectionsMotion}
    >
      {/* Heading */}
      <motion.div className="grid gap-4" {...itemsDirectionMotion(3, "BT")}>
        <Typography
          variant="h6"
          component="h3"
          className="sm:text-3xl lg:text-4xl"
        >
          Hey👋 I’m,
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          className="font-bold sm:text-6xl lg:text-7xl"
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
      </motion.div>

      {/* Content */}
      <Typography
        variant="body1"
        component={motion.p}
        className="max-w-xl sm:text-lg lg:text-xl"
        {...itemsDirectionMotion(4, "BT")}
      >
        I’m a front-end developer who enjoys working with good technologies and
        finds designing entertaining. Currently, I’m focused on building
        accessible, human-centered products at Innovation Berlin.
      </Typography>

      {/* Resume */}
      <Link href="/bahrampour-resume.pdf" target="_blank" className="w-max">
        <Button
          disableElevation
          variant="contained"
          size="large"
          color="secondary"
          className="normal-case"
          component={motion.button}
          {...itemsDirectionMotion(5, "BT")}
        >
          Get My Resume
        </Button>
      </Link>
    </motion.section>
  );
}
