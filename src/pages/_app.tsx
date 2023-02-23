import { type AppProps } from "next/app";

import Header from "@/layouts/Header/Header";
import ThemeWrapper from "@/themes/ThemeWrapper/ThemeWrapper";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, type EmotionCache } from "@emotion/react";

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
  return (
    <CacheProvider value={emotionCache}>
      <ThemeWrapper>
        <Header />
        <Component {...pageProps} />
      </ThemeWrapper>
    </CacheProvider>
  );
}
