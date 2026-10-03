import Contact from "@/components/sections/Contact";
import Credentials from "@/components/sections/Credentials";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stack from "@/components/sections/Stack";
import Testimonials from "@/components/sections/Testimonials";
import RevealObserver from "@/components/ui/RevealObserver";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Experience />
        <Stack />
        <Testimonials />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05] dark:opacity-[0.07]" />
      <RevealObserver />
    </>
  );
}
