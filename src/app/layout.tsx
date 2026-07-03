import type { Metadata } from "next";
import ogImage from "../assets/OG-Image.webp";
import "./globals.css";

const siteUrl = "https://reyslash.com";
const siteTitle = "Reynaldo Carmenate Arias | Full-Stack Developer";
const siteDescription =
  "Portfolio of Reynaldo Carmenate Arias, a full-stack developer building modern web applications with practical UX and clean architecture.";
const socialImage = ogImage.src;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: "ReySlash Portfolio",
    images: [
      {
        url: socialImage,
        width: 1672,
        height: 941,
        alt: "ReySlash portfolio social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  icons: {
    icon: "/logoMark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
