import AnimatedBackground from "@/components/AnimatedBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ramazan - Full Stack Developer",
  description: "Portfolio of Muhammad Ramazan, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords: "Muhammad Ramazan, Full Stack Developer, React, Next.js, Web Development, Portfolio",
  authors: [{ name: "Muhammad Ramazan" }],
  openGraph: {
    title: "Muhammad Ramazan - Full Stack Developer",
    description: "Portfolio of Muhammad Ramazan, a passionate full-stack developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 