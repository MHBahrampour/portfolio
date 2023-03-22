import Head from "next/head";

import About from "@/features/HomePage/About";
import Hero from "@/features/HomePage/Hero";
import Jobs from "@/features/HomePage/Jobs";

export default function index() {
  return (
    <>
      <Head>
        <title>MHB Portfolio</title>
      </Head>

      <main className="grid gap-20">
        <Hero />
        <About />
        <Jobs />
      </main>
    </>
  );
}
