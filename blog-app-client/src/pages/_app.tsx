"use client";

import { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import styles from "./app.module.scss";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Sidebar from "./shared/Sidebar/Sidebar";
import "../styles/globals.css";
import { AppProps } from "next/app";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const noSidebarRoutes = ["/auntification"];
    if (noSidebarRoutes.includes(router.pathname)) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [router.pathname]);

  return (
    <ClerkProvider>
      <div className={styles.layoutContainer}>
        {showSidebar && <Sidebar />}
        <main className={styles.mainContent}>
          <Component {...pageProps} />
        </main>
      </div>
    </ClerkProvider>
  );
}
