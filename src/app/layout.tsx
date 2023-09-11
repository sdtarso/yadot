import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header, Footer } from "@organisms";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "YADOT",
  description: "Yet Another Dofus Toolset",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="prose max-w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
