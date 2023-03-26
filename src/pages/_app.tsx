import { useEffect } from "react";

import { type AppProps } from "next/app";
import { useRouter } from "next/router";

import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import Side from "@/layouts/Side/Side";
import ThemeWrapper from "@/themes/ThemeWrapper/ThemeWrapper";
import { CacheProvider, type EmotionCache } from "@emotion/react";

import createEmotionCache from "@/utils/createEmotionCache";
import { initGA, logPageView } from "@/utils/reactGA";

import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const router = useRouter();

  useEffect(() => {
    initGA("G-NXVWJKW2N4");
  }, []);

  useEffect(() => {
    logPageView();
    router.events.on("routeChangeComplete", logPageView);

    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Side />
      </ThemeWrapper>
    </CacheProvider>
  );
}
