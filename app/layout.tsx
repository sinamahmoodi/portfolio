import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import MainLayout from "@/components/layout/Main";
import "./globals.css";

const Manrope = localFont({
  src: [
    { path: "../public/fonts/Manrope-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Manrope-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Manrope-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/Manrope-Bold.ttf", weight: "700" },
    { path: "../public/fonts/Manrope-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = "https://sinamahmoodi.ir";
const siteName = "Sina Mahmoodi";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sina Mahmoodi | Front-End Engineer",
    template: "%s | Sina Mahmoodi",
  },
  description:
    "Sina Mahmoodi is a Front-End Engineer specializing in React, Next.js, TypeScript, and building modern, accessible, and maintainable web applications.",
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Sina Mahmoodi",
    "Sina Mahmoodi Front-End Engineer",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Sina Mahmoodi | Front-End Engineer",
    description:
      "The personal portfolio of Sina Mahmoodi, a Front-End Engineer specializing in React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary",
    title: "Sina Mahmoodi | Front-End Engineer",
    description:
      "The personal portfolio of Sina Mahmoodi, a Front-End Engineer specializing in React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Sina Mahmoodi | Front-End Engineer",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      jobTitle: "Front-End Engineer",
      description:
        "Front-End Engineer specializing in React, Next.js, TypeScript, and maintainable web application architecture.",
      knowsAbout: [
        "Front-End Engineering",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Web Accessibility",
        "Responsive Web Design",
        "UI Architecture",
        "API Integration",
      ],
      sameAs: [
        "https://github.com/sinamahmoodi",
        "https://www.linkedin.com/in/sina-mahmoudi-1126b1308",
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${Manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
