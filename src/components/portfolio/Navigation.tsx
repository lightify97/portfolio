"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@iconify/react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 md:top-4 w-full z-50">
      <div className="md:max-w-fit md:border-2 mx-auto px-7 py-2 bg-zinc-200/80 dark:bg-zinc-900/80 backdrop-blur-xl">
        <div className="flex justify-between items-center gap-10">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
            MR
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Stack", "Experience", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-bold" className="text-yellow-500" width={20} height={20} />
              ) : (
                <Icon icon="solar:moon-bold" className="text-blue-500" width={20} height={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 