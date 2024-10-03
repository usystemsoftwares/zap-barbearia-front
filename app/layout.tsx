import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zap Barbearia",
  description: "Atenda e agende o corte de seus clientes usando inteligência artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
