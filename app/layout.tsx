
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MawjAlhayaly | Portfolio",
  description:
    "Mawj Alhayaly — Computer Engineer and Full-Stack Developer. Explore my skills, projects, and professional experience.",
  applicationName: "MawjAlhayaly",
  keywords: [
    "Mawj Alhayaly",
    "Computer Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Mawj Alhayaly" }],
  openGraph: {
    title: "MawjAlhayaly | Portfolio",
    description:
      "Explore the portfolio, projects, and professional experience of Mawj Alhayaly, a Computer Engineer and Full-Stack Developer.",
    siteName: "MawjAlhayaly",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
