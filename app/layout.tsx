import React from "react";

import type { Metadata } from "next";
import { Open_Sans} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const font = Open_Sans({
  subsets : ["latin"],
  weight : ["300" , "400" , "500" , "600" , "700" , "800"]
});

export const metadata: Metadata = {
  title: "Moon-Ecommerce",
  description: "Simple ecommerce website build with NextJs and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
