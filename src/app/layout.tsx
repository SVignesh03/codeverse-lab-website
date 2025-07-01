import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codeverse Lab - Web Design & Development Agency",
  description:
    "Bringing your ideas to life through thoughtful strategy, design, and development—crafted with care, from start to finish.",
  keywords:
    "web design, web development, UI/UX design, mobile apps, digital agency",
  authors: [{ name: "Codeverse Lab" }],
  openGraph: {
    title: "Codeverse Lab - Web Design & Development Agency",
    description:
      "Bringing your ideas to life through thoughtful strategy, design, and development—crafted with care, from start to finish.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
