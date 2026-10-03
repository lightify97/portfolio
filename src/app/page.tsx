import Contact from "@/components/sections/Contact";
import Credentials from "@/components/sections/Credentials";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import RevealObserver from "@/components/ui/RevealObserver";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Skills />
        <Testimonials />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
