import { type AppType } from "next/app";

import Header from "@/layouts/Header/Header";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import ThemeWrapper from "@/features/themes/ThemeWrapper/ThemeWrapper";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeWrapper>
        <Header />
        <Component {...pageProps} />
      </ThemeWrapper>
    </SessionProvider>
  );
};

export default MyApp;
