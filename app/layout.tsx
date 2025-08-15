import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "How Deep Will You Go?",
  description: "A zen-inspired party game of deep questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.className} antialiased`}>{children}</body>
    </html>
  );
}
