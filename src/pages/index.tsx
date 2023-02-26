import Head from "next/head";

import Hero from "@/features/HomePage/Hero";

export default function index() {
  return (
    <>
      <Head>
        <title>MHB Portfolio</title>
      </Head>

      <main>
        <Hero />
      </main>
    </>
  );
}
