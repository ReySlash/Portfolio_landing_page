import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://reyslash.com";
const siteTitle = "Reynaldo Carmenate Arias | Full-Stack Developer";
const siteDescription =
  "Portfolio of Reynaldo Carmenate Arias, a full-stack developer building modern web applications with practical UX and clean architecture.";
const socialImage = "/logoMark.png";

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
        alt: "ReySlash portfolio logo",
      },
    ],
  },
  twitter: {
    card: "summary",
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
