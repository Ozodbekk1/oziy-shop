import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";

// import NoSSR from 'react-no-ssr';

const montserratFont = Montserrat({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Oziy Shop",
  description: "Oziy Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratFont} ${montserratFont} antialiased`}
        data-new-gr-c-s-check-loaded="8.929.0"
        data-gr-ext-installed=""

      >
        
        <Navbar />
        {/* <NoSSR> */}
        {children}
        {/* </NoSSR> */}
      </body>
    </html>
  );
}
