import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareCover Pro — Flexible Health Insurance & Member Portal",
  description: "CareCover Pro helps individuals and small businesses get flexible, affordable health plans with fast claims, 24/7 care access, and a simple member portal. Compare plans, enroll online, and manage claims in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
