import { Icon } from "@iconify/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative bg-yellow-300 dark:bg-zinc-900 overflow-hidden">
      {/* Decorative background elements - chaotic geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 dark:bg-blue-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-red-500 dark:bg-red-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-500 dark:bg-green-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Chaos-ordered layout */}
        <div className="space-y-6 md:space-y-8">

          {/* MASSIVE Name - Breaking boundaries */}
          <div className="relative">
            <h1 className="text-[15vw] md:text-[12vw] lg:text-[150px] font-black leading-none tracking-tighter text-black dark:text-white">
              MUHAMMAD
            </h1>
            <div className="absolute -right-4 -bottom-8 md:-right-8 md:-bottom-12 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <span className="text-xl md:text-3xl font-bold">RAMAZAN</span>
            </div>
          </div>

          {/* Status badge - floating with hard shadow */}
          <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]">
            <span className="text-lg md:text-2xl font-bold uppercase tracking-wider">
              Available for Hire
            </span>
          </div>

          {/* Role - with color block background */}
          <div className="bg-red-500 dark:bg-red-600 text-white px-6 py-4 md:px-10 md:py-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block transform -rotate-1">
            <span className="text-2xl md:text-4xl font-black uppercase">
              Full Stack Developer
            </span>
          </div>

          {/* Quick stats - horizontal row with hard shadows */}
          <div className="flex flex-wrap gap-4 md:gap-6 py-8">
            <div className="bg-white dark:bg-zinc-800 border-4 border-black dark:border-white px-6 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-4xl md:text-6xl font-black text-black dark:text-white">5+</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Years</div>
            </div>

            <div className="bg-blue-600 dark:bg-blue-500 text-white border-4 border-black dark:border-white px-6 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-4xl md:text-6xl font-black">50+</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-80">Projects</div>
            </div>

            <div className="bg-green-500 dark:bg-green-600 text-white border-4 border-black dark:border-white px-6 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <div className="text-4xl md:text-6xl font-black">TOP</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-80">Rated</div>
            </div>
          </div>

          {/* Tagline - massive text block */}
          <div className="bg-black dark:bg-white text-white dark:text-black px-6 py-6 md:px-12 md:py-8 shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] dark:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] max-w-4xl">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Crafting exceptional digital experiences with clean code and thoughtful design
            </p>
          </div>

          {/* Social links - stacked with hard shadows */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="https://github.com/lightify97"
              className="group bg-white dark:bg-zinc-800 border-4 border-black dark:border-white px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <Icon icon="simple-icons:github" width={28} height={28} className="text-black dark:text-white" />
              <span className="text-lg md:text-xl font-bold text-black dark:text-white">GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/m-ramazan"
              className="group bg-blue-600 dark:bg-blue-500 border-4 border-black dark:border-white px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <Icon icon="skill-icons:linkedin" width={28} height={28} className="text-white" />
              <span className="text-lg md:text-xl font-bold text-white">LinkedIn</span>
            </Link>

            <Link
              href="mailto:lightify6@gmail.com"
              className="group bg-green-500 dark:bg-green-600 border-4 border-black dark:border-white px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <Icon icon="material-icon-theme:email" width={28} height={28} className="text-white" />
              <span className="text-lg md:text-xl font-bold text-white">Email</span>
            </Link>
          </div>

          {/* Scroll indicator - brutalist style */}
          <div className="pt-12 pb-8">
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] dark:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)]">
                <span className="text-lg md:text-xl font-black uppercase tracking-widest">Scroll Down</span>
              </div>
              <div className="w-16 h-16 bg-black dark:bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center">
                <Icon icon="solar:alt-arrow-down-bold" width={32} height={32} className="text-yellow-300 dark:text-zinc-900" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-black dark:bg-white"></div>
      <div className="absolute bottom-4 left-0 w-full h-2 bg-blue-600 dark:bg-blue-500"></div>
      <div className="absolute bottom-6 left-0 w-full h-1 bg-red-500 dark:bg-red-600"></div>
    </section>
  );
}
