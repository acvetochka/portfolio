"use client";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Замініть своїм ID


declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ініціалізуємо dataLayer, якщо його немає
      window.dataLayer = window.dataLayer || [];

      const gtag = (...args: [string, ...unknown[]]) => {
        window.dataLayer.push(args);
      };

      gtag("js", new Date());
      gtag("config", "G-XXXXXXXXXX", {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};


