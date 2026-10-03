import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Credentials from "@/components/sections/Credentials";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Sidebar from "@/components/sections/Sidebar";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import RevealObserver from "@/components/ui/RevealObserver";
import Spotlight from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <div className="relative">
      <Spotlight />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main id="main" className="pt-14 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Testimonials />
            <Credentials />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
      <RevealObserver />
    </div>
  );
}
