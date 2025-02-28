import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Header } from "@/sections/Header/Header";
import StyledComponentsRegistry from "@/lib/registry";
import Script from "next/script";

const agbalumo = localFont({
  src: "./fonts/Agbalumo-Regular.ttf",
  variable: "--font-agbalumo"
})

const aldrich = localFont({
  src: "./fonts/Aldrich-Regular.ttf",
  variable: "--font-aldrich"
})

export const metadata: Metadata = {
  title: "Portfolio | Alona Kuznietsova",
  description: "This is my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1YH3M8SMR0"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', {GA_TRACKING_ID});`}
      </Script></head>
      <body className={`${agbalumo.variable} ${aldrich.variable}`}>
        <Header/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
