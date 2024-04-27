import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../config/fonts";

export const metadata: Metadata = {
  title: "Guitar | Shop",
  description: "Eccomerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
