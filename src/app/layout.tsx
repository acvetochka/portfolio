import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Header } from "@/sections/Header/Header";
import StyledComponentsRegistry from "@/lib/registry";
import { GoogleAnalytics } from "@/components";

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
      <body className={`${agbalumo.variable} ${aldrich.variable}`}>
        <GoogleAnalytics/>
        <Header/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
