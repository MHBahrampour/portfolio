import Head from "next/head";

import About from "@/features/HomePage/About";
import GetInTouch from "@/features/HomePage/GetInTouch";
import Hero from "@/features/HomePage/Hero";
import Jobs from "@/features/HomePage/Jobs";
import Works from "@/features/HomePage/Works";

export default function index() {
  return (
    <>
      <Head>
        <title>MHB Portfolio</title>
      </Head>

      <main className="grid w-full justify-items-center gap-20">
        <Hero />
        <About />
        <Jobs />
        <Works />
        <GetInTouch />
      </main>
    </>
  );
}
