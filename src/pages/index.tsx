import Head from "next/head";

import About from "@/features/HomePage/About";
import Experience from "@/features/HomePage/Experience";
import GetInTouch from "@/features/HomePage/GetInTouch";
import Hero from "@/features/HomePage/Hero";
import Projects from "@/features/HomePage/Projects";

export default function index() {
  return (
    <>
      <Head>
        <title>MHB Portfolio</title>
      </Head>

      <main className="grid w-full justify-items-center gap-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GetInTouch />
      </main>
    </>
  );
}
