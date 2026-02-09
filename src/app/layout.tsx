"use client"

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { DM_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <SessionProvider>
          <AuthDialogProvider>
            <ThemeProvider
              attribute="class"
              enableSystem
              defaultTheme="system"
            >
              <Aoscompo>
                <Header />
                <NextTopLoader />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </AuthDialogProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
