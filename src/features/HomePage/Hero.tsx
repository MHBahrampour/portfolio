import Link from "next/link";

// import Resume from "@/documents/MHBahrampour.pdf";
import { Button, Typography } from "@mui/material";

export default function Hero() {
  return (
    <section
      className={`dpx relative flex min-h-[calc(100vh-64px)] flex-col justify-center gap-16 bg-[url('/images/heroBg.svg')] bg-cover bg-left`}
    >
      {/* Heading */}
      <div className="t-to-b-animation animation-delay-100 grid gap-4">
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
          className="font-bold dark:text-dt-primary-dark sm:text-4xl lg:text-5xl"
        >
          I love building things for web.
        </Typography>
      </div>

      {/* Content */}
      <Typography
        variant="body1"
        className="t-to-b-animation animation-delay-500 max-w-xl sm:text-lg lg:text-xl"
      >
        I’m a front-end developer who enjoys working with good technologies and
        finds designing entertaining. Currently, I’m focused on building
        accessible, human-centered products at Innovation Berlin.
      </Typography>

      {/* Resume */}
      <Link
        href="/bahrampour-resume.pdf"
        target="_blank"
        className="t-to-b-animation animation-delay-1000 w-max"
      >
        <Button
          disableElevation
          variant="contained"
          size="large"
          className="normal-case"
        >
          Get My Resume
        </Button>
      </Link>
    </section>
  );
}
