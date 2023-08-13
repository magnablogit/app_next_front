import "@/styles/tailwind.css";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "highlight.js/styles/vs2015.css";
import { Analytics } from "@vercel/analytics/react";
import { Html, Head, Main, NextScript } from "next/document";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}
    >
      {children}
    </html>
  );
}
