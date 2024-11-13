import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/sections/Header/Header";
import StyledComponentsRegistry from "@/lib/registry";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


// const lobster = localFont({
//   src: "./fonts/Lobster-Regular.ttf",
//   variable: "--font-lobster",
//   weight: "100 400"
// })

// ${geistSans.variable} ${geistMono.variable} ${lobster.variable} 

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
        <Header/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
