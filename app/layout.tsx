import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Mollie Anderson — Product Designer",
  description:
    "Product designer based in Los Angeles working at the intersection of design, engineering, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inconsolata.variable}>
      <body>{children}</body>
    </html>
  );
}
