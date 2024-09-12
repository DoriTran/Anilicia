"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApScrollbar, Navbar } from "@/components";
import styles from "./layout.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div className={styles.rootLayout}>
            <Navbar />
            <ApScrollbar className={styles.rootScrollbar}>{children}</ApScrollbar>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
