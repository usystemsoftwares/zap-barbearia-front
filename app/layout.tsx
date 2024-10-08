import localFont from "next/font/local"
import type { Metadata } from "next";
import { Figtree } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Zap Barbearia",
  description: "Atenda e agende o corte de seus clientes usando inteligência artificial.",
};

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree"
})

const matter = localFont({
  src: "./fonts/Matter-Medium.ttf",
  display: "swap",
  variable: "--font-matter"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${matter.variable} font-figtree antialiased bg-white-bg text-[1.125rem] text-font-green`}
      >
        {children}
      </body>
    </html>
  );
}
