import type { Metadata } from "next";
import { Nunito, Playfair_Display, Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const headingFont = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
})

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portfolio V2",
  description: "in another life...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>{children}</body>
    </html>
  );
}
