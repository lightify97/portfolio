"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@iconify/react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - with hard shadow */}
        <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] dark:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)]">
          <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">MR</span>
        </div>

        {/* Nav links - desktop */}
        <div className="hidden md:flex items-center gap-4">
          {["About", "Stack", "Experience", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="bg-white dark:bg-zinc-800 border-4 border-black dark:border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-0.5 transition-all text-sm md:text-base font-bold text-black dark:text-white uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Theme toggle - brutalist style */}
        <button
          onClick={toggleTheme}
          className="bg-blue-600 dark:bg-blue-500 border-4 border-black dark:border-white px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Icon icon="solar:sun-bold" className="text-yellow-300" width={24} height={24} />
          ) : (
            <Icon icon="solar:moon-bold" className="text-white" width={24} height={24} />
          )}
        </button>
      </div>
    </nav>
  );
}
