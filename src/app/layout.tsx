import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mkhize NP Physiotherapy Inc. | Professional Rehabilitation Services",
  description: "Mkhize NP Physiotherapy Inc. provides holistic physiotherapy treatment, home visits, and specialised rehabilitation in Pietermaritzburg and Hammarsdale.",
    icons: {
      icon: "/icon.jpg",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-brand-dark`}
      >
        {children}
        <VisualEditsMessenger />
      <Analytics />

      </body>
    </html>
  );
}
