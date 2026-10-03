"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, profile } from "@/data/profile";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open ? "bg-bg/75 backdrop-blur-md" : ""
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <a href="#top" onClick={() => setOpen(false)} className="text-xl font-bold tracking-[-0.04em]" aria-label={`${profile.name}, back to top`}>
            MR<span className="text-accent">.</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a href={link.href} className="group tag inline-flex gap-1.5 text-fg">
                    <span className="text-accent">0{i + 1}</span>
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-smooth group-hover:bg-[length:100%_1px]">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary ml-2 hidden h-10 px-5 sm:inline-flex">
              Résumé
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu"
              className="tag ml-2 h-10 rounded-full border border-fg/20 px-4 text-fg lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu"
        className={`fixed inset-0 z-40 flex-col justify-between bg-bg px-5 pb-10 pt-24 sm:px-8 lg:hidden ${open ? "flex" : "hidden"}`}
      >
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-line">
                <a href={link.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4">
                  <span className="tag text-accent">0{i + 1}</span>
                  <span className="text-5xl font-bold tracking-[-0.04em]">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
          Download résumé
        </a>
      </div>
    </>
  );
}
