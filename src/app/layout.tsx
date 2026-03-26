import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Ramazan - Full Stack Developer",
  description:
    "Portfolio of Muhammad Ramazan, a full-stack engineer focused on TypeScript, Python, scalable systems, and AI-powered product work.",
  keywords:
    "Muhammad Ramazan, Full Stack Developer, TypeScript, Python, React, Next.js, Portfolio",
  authors: [{ name: "Muhammad Ramazan" }],
  openGraph: {
    title: "Muhammad Ramazan - Full Stack Developer",
    description:
      "Portfolio of Muhammad Ramazan, a full-stack engineer focused on scalable systems and modern product development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem("theme");
                  const isLight =
                    storedTheme === "light" ||
                    (!storedTheme && window.matchMedia("(prefers-color-scheme: light)").matches);
                  document.documentElement.classList.toggle("dark", !isLight);
                } catch {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body className={geistMono.className}>
        <PostHogProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
