import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sodiata — Solusi Digital Automata untuk Enterprise",
  description:
    "PT Solusi Digital Automata (Sodiata) menyediakan solusi IT enterprise, IoT, AI, ERP, dan integrasi sistem untuk transformasi digital bisnis Anda di Indonesia.",
  keywords: [
    "Sodiata",
    "Solusi Digital Automata",
    "Enterprise IT Solutions",
    "IoT",
    "AI",
    "ERP",
    "Transformasi Digital",
    "Indonesia",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sodiata — Solusi Digital Automata untuk Enterprise",
    description:
      "Solusi IT enterprise komprehensif — dari infrastruktur cloud, integrasi sistem, IoT industri, hingga implementasi AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-sodiata-bg text-sodiata-text`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}