import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
