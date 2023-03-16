import Head from "next/head";

import About from "@/features/HomePage/About";
import Hero from "@/features/HomePage/Hero";

export default function index() {
  return (
    <>
      <Head>
        <title>MHB Portfolio</title>
      </Head>

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
