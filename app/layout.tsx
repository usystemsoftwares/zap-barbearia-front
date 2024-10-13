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
        className={`${figtree.variable} ${matter.variable} font-figtree antialiased relative bg-white-bg text-[1.125rem] text-font-green`}
      >
        <div className="absolute aspect-square top-0 right-0 w-[75%] md:w-[40%] opacity-50 overflow-hidden">
          <div className="absolute -top-[30%] md:-top-[40%] -right-[35%] w-full h-full [background-image:radial-gradient(circle,#42E0AF_0%,rgba(255,255,255,0)_75%)]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
