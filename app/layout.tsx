// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tannor Wallace | IT Engineer & Full-Stack Developer",
  description:
    "Information Technology Engineer at Blue Cross of Idaho. Full-stack developer, problem solver, and hobby hoarder based in Caldwell, Idaho.",
  keywords: ["IT Engineer", "Full Stack Developer", "Software Engineer", "Boise", "Caldwell", "Idaho"],
  authors: [{ name: "Tannor Wallace" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}