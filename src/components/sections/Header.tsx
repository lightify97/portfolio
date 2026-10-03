"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, profile } from "@/data/profile";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
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
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-line/70 bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#top" className="font-serif text-[1.35rem] leading-none tracking-tight" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 text-sm transition-colors duration-300 hover:text-fg ${
                    active === link.href
                      ? "text-fg after:absolute after:-bottom-0.5 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-accent"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary ml-2 hidden h-9 px-4 sm:inline-flex">
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="icon-btn lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="h-[calc(100dvh-4.5rem)] border-t border-line bg-bg lg:hidden">
          <ul className="container flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-5 font-serif text-3xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Download résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
