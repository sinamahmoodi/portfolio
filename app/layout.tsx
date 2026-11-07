import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import MainLayout from "@/components/layout/Main";
import "./globals.css";

const Manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Manrope-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Manrope-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Manrope-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Manrope-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sina Mahmoodi | Frontend Developer",
  description: "Personal Portfolio of Sina Mahmoodi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${Manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}