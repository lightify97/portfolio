"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Animated counter component
function AnimatedCounter({ end, duration = 2000 }: { end: string | number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetValue = typeof end === "number" ? end : parseInt(end);
    const incrementTime = duration / targetValue;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= targetValue) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {typeof end === "string" && isNaN(parseInt(end)) ? end : count}
    </span>
  );
}

// Kinetic tagline component
function KineticTagline({ text }: { text: string }) {
  const words = text.split(" ");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="text-base md:text-xl lg:text-2xl font-bold leading-relaxed md:leading-tight">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 mr-1.5 last:mr-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${index * 100}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative bg-transparent overflow-hidden flex items-center justify-center"
    >
      {/* Subtle Background Pattern - static gradients */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 dark:bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Name - Creative brutalist design with decorative elements */}
        <div className="mb-8 md:mb-16 relative">
          {/* Decorative corner brackets with pulse animation - hidden on small mobile */}
          <div className="hidden md:block absolute -top-8 -left-8 w-16 h-16 border-l-8 border-t-8 border-black dark:border-white animate-pulse" style={{ animationDuration: "3s" }}></div>
          <div className="hidden md:block absolute -top-8 -right-8 w-16 h-16 border-r-8 border-t-8 border-blue-600 dark:border-blue-400 animate-pulse" style={{ animationDuration: "3s", animationDelay: "0.5s" }}></div>
          <div className="hidden md:block absolute -bottom-8 -left-8 w-16 h-16 border-l-8 border-b-8 border-red-500 dark:border-red-400 animate-pulse" style={{ animationDuration: "3s", animationDelay: "1s" }}></div>
          <div className="hidden md:block absolute -bottom-8 -right-8 w-16 h-16 border-r-8 border-b-8 border-yellow-400 dark:border-yellow-500 animate-pulse" style={{ animationDuration: "3s", animationDelay: "1.5s" }}></div>

          {/* Name container with brutalist frame and cursor spotlight */}
          <div
            className="relative border-4 md:border-8 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] p-4 md:p-8 lg:p-12 transition-all duration-300"
            style={{
              boxShadow: mousePosition.x !== 0
                ? `${16 + (mousePosition.x - heroRef.current?.getBoundingClientRect().width! / 2) / 50}px ${16 + (mousePosition.y - heroRef.current?.getBoundingClientRect().height! / 2) / 50}px 0px 0px rgba(0,0,0,1)`
                : "",
            }}
          >

            {/* Row counter badge */}
            <div className="absolute -left-4 top-8 bg-blue-600 dark:bg-blue-500 text-white text-xs font-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              01
            </div>

            {/* Status indicator */}
            <div className="absolute -right-4 top-8 flex items-center gap-2 bg-green-500 dark:bg-green-600 text-white text-xs font-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              ONLINE
            </div>

            {/* Muhammad */}
            <div className="mb-1 md:mb-2 relative">
              <div className="flex items-baseline gap-2 md:gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tighter text-black dark:text-white">
                  MUHAMMAD
                </h1>
                <span className="hidden xl:inline-block bg-yellow-300 dark:bg-yellow-500 text-black text-xs md:text-sm font-black px-2 md:px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  /moʊˈhɑːmɑːd/
                </span>
              </div>
              {/* Underline decoration */}
              <div className="h-4 bg-red-500 dark:bg-red-600 mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"></div>
            </div>

            {/* Ramazan with offset treatment */}
            <div className="relative inline-block mt-2 md:mt-4">
              <div className="absolute -inset-1 md:-inset-2 bg-black dark:bg-white transform -rotate-2"></div>
              <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-white dark:text-black transform rotate-1">
                RAMAZAN
              </h2>
            </div>

            {/* Decorative code-like annotation */}
            <div className="absolute bottom-2 md:bottom-4 left-4 md:left-8 text-[10px] md:text-xs font-mono text-zinc-400">
              &lt;developer version="5.0" /&gt;
            </div>
          </div>
        </div>

        {/* Role - with color block background */}
        <div className="mb-8 md:mb-12 text-center">
          <div className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 md:px-6 md:py-4 lg:px-10 lg:py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block transform -rotate-1">
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase">
              Full-Stack Engineer
            </span>
          </div>
        </div>

        {/* Quick stats - horizontal row with animated counters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 py-4 md:py-8 mb-8 md:mb-12">
          <div className="relative">
            <div className="bg-white dark:bg-zinc-800 border-3 md:border-4 border-black dark:border-white px-3 md:px-4 lg:px-6 py-2 md:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-2xl md:text-4xl lg:text-6xl font-black text-black dark:text-white">
                <AnimatedCounter end={5} /><span>+</span>
              </div>
              <div className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Years</div>
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] md:text-xs font-black px-1.5 md:px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">EXP</div>
          </div>

          <div className="relative">
            <div className="bg-blue-600 dark:bg-blue-500 text-white border-3 md:border-4 border-black dark:border-white px-3 md:px-4 lg:px-6 py-2 md:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-2xl md:text-4xl lg:text-6xl font-black">
                <AnimatedCounter end={50} /><span>+</span>
              </div>
              <div className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider opacity-80">Projects</div>
            </div>
            <div className="absolute -top-2 -right-2 bg-yellow-300 text-black text-[10px] md:text-xs font-black px-1.5 md:px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">DONE</div>
          </div>

          <div className="relative">
            <div className="bg-green-500 dark:bg-green-600 text-white border-3 md:border-4 border-black dark:border-white px-3 md:px-4 lg:px-6 py-2 md:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-2xl md:text-4xl lg:text-6xl font-black">TOP</div>
              <div className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider opacity-80">Rated</div>
            </div>
            <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] md:text-xs font-black px-1.5 md:px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">BEST</div>
          </div>
        </div>

        {/* Tagline - creative block with kinetic animation */}
        <div className="mb-8 md:mb-12 relative">
          <div className="absolute -left-4 top-0 text-xs font-mono text-zinc-400" style={{writingMode: 'vertical-rl'}}>
            // MISSION
          </div>
          <div className="bg-black dark:bg-white text-white dark:text-black px-6 py-6 md:px-12 md:py-8 shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] dark:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] max-w-4xl mx-auto relative">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-black px-2 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">!</div>
            <KineticTagline text="Building scalable platforms with TypeScript, Python, and AI — from backend architecture to data-rich frontends" />
          </div>
        </div>

        {/* Social links - with sticker peel hover effect */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-4">
            <div className="h-px bg-black dark:bg-white w-8 md:w-12"></div>
            <span className="text-[10px] md:text-xs font-mono text-zinc-500 font-black">CONNECT</span>
            <div className="h-px bg-black dark:bg-white w-8 md:w-12"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Link
              href="https://github.com/lightify97"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-zinc-800 border-3 md:border-4 border-black dark:border-white px-4 md:px-8 py-2 md:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:md:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 hover:-rotate-2 transition-all flex items-center gap-2 md:gap-3 relative"
            >
              <span className="absolute -top-1.5 md:-top-2 -left-1.5 md:-left-2 bg-black dark:bg-white text-white dark:text-black text-[8px] md:text-[10px] font-black px-1 md:px-1.5">GIT</span>
              <Icon icon="simple-icons:github" width={20} height={20} className="text-black dark:text-white" />
              <span className="text-sm md:text-lg font-bold text-black dark:text-white">GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/m-ramazan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 dark:bg-blue-500 border-3 md:border-4 border-black dark:border-white px-4 md:px-8 py-2 md:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:md:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:rotate-2 transition-all flex items-center gap-2 md:gap-3 relative"
            >
              <span className="absolute -top-1.5 md:-top-2 -left-1.5 md:-left-2 bg-yellow-300 text-black text-[8px] md:text-[10px] font-black px-1 md:px-1.5">IN</span>
              <Icon icon="skill-icons:linkedin" width={20} height={20} className="text-white" />
              <span className="text-sm md:text-lg font-bold text-white">LinkedIn</span>
            </Link>

            <Link
              href="mailto:mramazan1@yahoo.com"
              className="group bg-green-500 dark:bg-green-600 border-3 md:border-4 border-black dark:border-white px-4 md:px-8 py-2 md:py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:md:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-rotate-1 transition-all flex items-center gap-2 md:gap-3 relative"
            >
              <span className="absolute -top-1.5 md:-top-2 -left-1.5 md:-left-2 bg-red-500 text-white text-[8px] md:text-[10px] font-black px-1 md:px-1.5">MAIL</span>
              <Icon icon="material-icon-theme:email" width={20} height={20} className="text-white" />
              <span className="text-sm md:text-lg font-bold text-white">Email</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator - creative with code annotation */}
        <div className="flex flex-col items-center gap-2 md:gap-3 relative">
          <div className="text-[10px] md:text-xs font-mono text-zinc-400 mb-1 md:mb-2">// SCROLL ↓</div>
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group relative"
          >
            <div className="absolute -inset-1.5 md:-inset-2 bg-black dark:bg-white transform rotate-3 transition-transform group-hover:rotate-6"></div>
            <div className="relative bg-white dark:bg-zinc-900 text-black dark:text-white px-4 md:px-8 py-2 md:py-4 border-3 md:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all flex items-center gap-2 md:gap-3">
              <span className="text-sm md:text-lg md:text-xl font-black uppercase tracking-widest">Explore Work</span>
              <Icon icon="solar:alt-arrow-down-bold" className="animate-bounce w-4 h-4 md:w-6 md:h-6" style={{animationDuration: "1.5s"}} />
            </div>
          </button>
        </div>

      </div>

    </section>
  );
}
