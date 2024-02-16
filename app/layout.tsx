import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./styles/global.css";
import "./styles/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zustand Playground",
  description: "A playground for Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
        />
        <Script rel="preload" src="https://cdn.tailwindcss.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
