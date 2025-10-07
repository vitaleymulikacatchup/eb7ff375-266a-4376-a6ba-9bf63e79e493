import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — Futuristic memecoin with clear buy steps",
  description: "MemePulse blends neon futurism with a simple buy flow, transparent tokenomics, and a community-first vibe. Find your path to joining the pulse.",
  keywords: ["memecoin", "crypto", "meme", "buy memecoin", "tokenomics", "futuristic crypto", "web3 landing", "neon design", "community"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MemePulse — Futuristic memecoin with clear buy steps",
    description: "MemePulse blends neon futurism with a simple buy flow, transparent tokenomics, and a community-first vibe. Find your path to joining the pulse.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759832468719-fc8b0e1e.jpg", width: 1200, height: 630, alt: "MemePulse Logo" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — Futuristic memecoin with clear buy steps",
    description: "MemePulse blends neon futurism with a simple buy flow, transparent tokenomics, and a community-first vibe. Find your path to joining the pulse.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759832468719-fc8b0e1e.jpg" }]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}