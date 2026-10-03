"use client";

import Emphasis from "@/components/ui/Emphasis";
import SocialLinks from "@/components/ui/SocialLinks";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState(navLinks[0].href);

  // Track which section is in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            <a href="#about">{profile.name}</a>
          </h1>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-fg sm:text-xl">{profile.role}</h2>
        <p className="mt-4 max-w-xs leading-normal">
          <Emphasis text={profile.headline} />
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium text-fg transition-colors hover:border-accent"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {profile.availability}
        </a>

        <nav aria-label="In-page" className="hidden lg:block">
          <ul className="mt-14 w-max">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center py-3" aria-current={isActive ? "true" : undefined}>
                    <span
                      className={`mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-fg motion-reduce:transition-none ${
                        isActive ? "w-16 bg-fg" : "w-8 bg-subtle"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-fg ${
                        isActive ? "text-fg" : "text-subtle"
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-0">
        <SocialLinks className="-ml-2" />
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm font-semibold text-fg hover:text-accent"
        >
          View résumé
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </header>
  );
}
