import { Button, Typography, useScrollTrigger } from "@mui/material";

export default function Hero() {
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <section
      className={`dpx min-h-[calc(100vh-64px)] flex flex-col justify-center gap-16 relative bg-[url('/images/heroBgLight.png')] dark:bg-[url('/images/heroBgDark.png')] bg-cover bg-center ${
        !elevateTrigger && "!min-h-[calc(100vh)] pt-16"
      }`}
    >
      {/* Heading */}
      <div className="grid gap-4 t-to-b-animation animation-delay-100">
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
          className="font-bold sm:text-4xl lg:text-5xl"
        >
          I love building things for web.
        </Typography>
      </div>

      {/* Content */}
      <Typography
        variant="body1"
        className="max-w-xl sm:text-lg lg:text-xl t-to-b-animation animation-delay-500"
      >
        I’m a front-end developer who enjoys working with good technologies and
        finds designing entertaining. Currently, I’m focused on building
        accessible, human-centered products at Innovation Berlin.
      </Typography>

      <Button
        variant="contained"
        className="btn w-max t-to-b-animation animation-delay-1000"
      >
        Get My Resume
      </Button>
    </section>
  );
}
