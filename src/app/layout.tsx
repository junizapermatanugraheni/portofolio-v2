import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Juniza Permata Nugraheni · Frontend Developer",
  description:
    "Frontend Developer crafting modern, scalable, and responsive web applications with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent`}>
        {children}
      </body>
    </html>
  );
}
