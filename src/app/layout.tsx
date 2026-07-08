import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = localFont({
  variable: "--font-inter",
  src: [
    {
      path: "../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
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
    icon: "/logo-icon.svg",
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