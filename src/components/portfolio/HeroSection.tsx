import { Icon } from "@iconify/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center animate-fade-in">
      <div className="max-w-4xl mx-auto px-6 text-center -mb-8">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-zinc-50">
          Muhammad Ramazan
        </h1>

        {/* Role - Static, no typewriter */}
        <p className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-6">
          Full Stack Developer & Software Engineer
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with clean code and thoughtful design
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-full mb-10">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <Link href="#contact">
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Available for projects
            </span>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            { href: "https://github.com/lightify97", icon: "simple-icons:github", label: "GitHub" },
            { href: "https://linkedin.com/in/m-ramazan", icon: "skill-icons:linkedin", label: "LinkedIn" },
            { href: "mailto:lightify6@gmail.com", icon: "material-icon-theme:email", label: "Email" }
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-900 dark:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Icon icon={link.icon} width={18} height={18} />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Scroll Indicator - Static */}
        <div className="hidden md:flex absolute bottom-20 left-0 right-0 justify-center pb-8">
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="flex flex-col items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-200 cursor-pointer"
          >
            <span className="text-sm font-medium tracking-wide">Scroll for more</span>
            <Icon
              icon="mdi:chevron-down"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
