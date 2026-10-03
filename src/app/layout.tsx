import { PostHogProvider } from "@/components/PostHogProvider";
<<<<<<< HEAD
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
=======
import { profile } from "@/data/profile";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = `${profile.name} | ${profile.role}`;
const description =
  "Full stack software engineer building complete web products, from the data layer to the interface, with 4+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    profile.name,
    "Full Stack Engineer",
    "Software Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "Islamabad",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "profile",
>>>>>>> origin/claude/practical-ptolemy-3wc9zo
  },
  twitter: { card: "summary_large_image", title, description },
};

<<<<<<< HEAD
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
=======
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1efea" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0d" },
  ],
};

// Runs before paint so the saved or system theme applies without a flash.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark')}catch(e){}})()`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  sameAs: Object.values(profile.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
>>>>>>> origin/claude/practical-ptolemy-3wc9zo
      </body>
    </html>
  );
}
