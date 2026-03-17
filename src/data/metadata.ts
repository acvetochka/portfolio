const data = {
  title: "Portfolio | Alona Kuznietsova | Frontend Developer",
  description:
    "Portfolio of Alona Kuznietsova, a Frontend Developer specializing in React, Next.js and TypeScript. Experienced in bilding modern, performant user interfaces, reusable UI components and responsive web applications",
  // keywords: "DoGood, social impact, volunteering",
  locale: "en_US",
  // images: [
  //   {
  //     url: "/metadata/_.jpg",
  //     width: 1200,
  //     height: 630,
  //     alt: "Alona Kuznietsova | Portfolio",
  //   },
  // ],
};

const { title, description } = data;

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export const meta = {
  title: title,
  description: description,
  // keywords: keywords,
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  // manifest: "/metadata/manifest.webmanifest",
  // openGraph: {
  //   title: title,
  //   description: description,
  //   url: BASE_URL,
  //   siteName: title,
  //   locale: locale,
  //   type: "website",
  //   images: images,
  // },
  // twitter: {
  //   title: title,
  //   description: description,
  //   card: "summary_large_image",
  //   images: images,
  // },
  // icons: {
  //   icon: [
  //     {
  //       url: "/metadata/favicon.ico",
  //     },
  //     {
  //       url: "/metadata/favicon-16x16.png",
  //       sizes: "16x16",
  //       type: "image/png",
  //     },
  //     {
  //       url: "/metadata/favicon-32x32.png",
  //       sizes: "32x32",
  //       type: "image/png",
  //     },
  //     {
  //       url: "/metadata/android-chrome-192x192.png",
  //       sizes: "192x192",
  //       type: "image/png",
  //     },
  //     {
  //       url: "/metadata/android-chrome-512x512.png",
  //       sizes: "512x512",
  //       type: "image/png",
  //     },
  //   ],
  //   shortcut: "/metadata/favicon.ico",
  //   apple: "/metadata/apple-touch-icon.png",
  //   other: {
  //     rel: "/metadata/apple-touch-icon.png",
  //     url: "/metadata/apple-touch-icon.png",
  //   },
  // },
};
