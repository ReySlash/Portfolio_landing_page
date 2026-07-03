import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reynaldo Carmenate Arias | Full-Stack Developer",
  description:
    "Portfolio of Reynaldo Carmenate Arias, a full-stack developer building modern Next.js applications with practical UX and clean architecture.",
  openGraph: {
    title: "Reynaldo Carmenate Arias | Full-Stack Developer",
    description:
      "Portfolio of Reynaldo Carmenate Arias, a full-stack developer building modern Next.js applications with practical UX and clean architecture.",
    type: "website",
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
