"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * MINIMALIST BRUTALIST NAVIGATION
 * Clean, consistent, industrial aesthetic
 * - Desktop: Vertical sidebar navigation
 * - Mobile: Bottom bar with scroll progress
 */
export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "about", label: "ABOUT", number: "01" },
    { id: "stack", label: "STACK", number: "02" },
    { id: "experience", label: "EXPERIENCE", number: "03" },
    { id: "work", label: "WORK", number: "04" },
    { id: "contact", label: "CONTACT", number: "05" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (window.scrollY / documentHeight) * 100;
      setScrollProgress(progress);

      const sectionElements = sections.map(section =>
        document.getElementById(section.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && window.scrollY >= element.offsetTop - windowHeight / 3) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = [
    "bg-blue-600",
    "bg-red-500",
    "bg-green-500",
    "bg-purple-600",
    "bg-pink-500",
  ];

  const colorHexs = ['#3b82f6', '#ef4444', '#22c55e', '#a855f7', '#ec4899'];

  return (
    <>
      {/* Desktop: Vertical Sidebar Navigation */}
      <nav className="hidden lg:flex fixed left-8 top-0 h-screen w-24 z-50 flex-col items-center justify-center py-4">
      {/* Decorative frame */}
      <div className="absolute inset-0 border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 pointer-events-none" />
      <div className="absolute inset-2 border-2 border-zinc-400 dark:border-zinc-600 pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-4 border-l-4 border-blue-600">
        <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-blue-400 animate-pulse shadow-[0_0_6px_#60a5fa]" />
      </div>
      <div className="absolute top-3 right-3 w-4 h-4 border-t-4 border-r-4 border-red-500">
        <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 bg-red-400 animate-pulse shadow-[0_0_6px_#f87171]" style={{ animationDelay: '0.2s' }} />
      </div>
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-4 border-l-4 border-green-500">
        <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-green-400 animate-pulse shadow-[0_0_6px_#4ade80]" style={{ animationDelay: '0.4s' }} />
      </div>
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-4 border-r-4 border-purple-600">
        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-purple-400 animate-pulse shadow-[0_0_6px_#c084fc]" style={{ animationDelay: '0.6s' }} />
      </div>

      {/* Top indicator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-black border-2 border-white dark:border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
        NAV
      </div>

      {/* Logo */}
      <div className="mb-4 relative z-10">
        <div className="relative group">
          <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-3 shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] dark:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-y-1 transition-all">
            <span className="text-2xl md:text-3xl font-black tracking-tighter block text-center leading-none">MR</span>
          </div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <div className="w-1 h-6 bg-blue-600 animate-pulse shadow-[0_0_8px_#2563eb]" />
            <div className="w-2 h-2 bg-blue-600 animate-ping" style={{ animationDuration: '1s' }} />
          </div>
        </div>
      </div>

      {/* Navigation items */}
      <div className="flex-1 relative flex flex-col items-center justify-center w-full px-4">
        {/* Progress line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-[calc(100%-2rem)] bg-zinc-300 dark:bg-zinc-700 border-l border-r border-black dark:border-white">
          <div
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transition-all duration-100 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
          <div
            className="absolute left-0 w-4 h-4 bg-red-500 border-2 border-black dark:border-white -translate-x-[3px] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(239,68,68,0.6)]"
            style={{ top: `${scrollProgress}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 left-0 w-full h-full border-2 border-red-400 opacity-0 animate-ping"
                  style={{
                    animationDelay: `${i * 150}ms`,
                    animationDuration: `${600 + i * 100}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Nav items */}
        <div className="flex flex-col items-center justify-center gap-2 relative z-10 py-2">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const color = colors[index % colors.length];
            const colorHex = colorHexs[index % colorHexs.length];

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="relative group"
              >
                <div className="relative">
                  {/* Number badge */}
                  <div className={`
                    absolute -top-2 left-1/2 -translate-x-1/2
                    px-2 py-0.5 text-[8px] font-black
                    border-2 border-black dark:border-white
                    transition-all duration-300 z-20
                    ${isActive
                      ? `${color} text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`
                      : 'bg-black dark:bg-white text-white dark:text-black'
                    }
                  `}>
                    {section.number}
                  </div>

                  {/* Nav box */}
                  <div className={`
                    w-16 h-28 md:w-20 md:h-32
                    border-4 border-black dark:border-white
                    flex items-center justify-center
                    transition-all duration-300
                    ${isActive
                      ? `${color} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] -translate-x-2`
                      : 'bg-white dark:bg-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'
                    }
                    group-hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:group-hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)]
                    group-hover:-translate-x-1
                  `}>
                    {/* Vertical text */}
                    <div className={`
                      font-black text-[9px] md:text-[10px] tracking-[0.1em] uppercase
                      transition-all duration-300
                      ${isActive ? 'text-white' : 'text-black dark:text-white'}
                    `}
                      style={{ transform: 'rotate(90deg)', whiteSpace: 'nowrap' }}
                    >
                      {section.label}
                    </div>
                  </div>

                  {/* Corner accents */}
                  {!isActive && (
                    <>
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-3 border-l-3 border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-3 border-r-3 border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}

                  {/* Active glow effect */}
                  {isActive && (
                    <div
                      className="absolute -inset-1 rounded-lg opacity-30 blur-md -z-10"
                      style={{ backgroundColor: colorHex }}
                    />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="mt-3 relative z-10 group"
        aria-label="Toggle theme"
      >
        <div className="relative">
          <div className={`
            w-14 h-14 border-4 border-black dark:border-white
            ${theme === 'dark' ? 'bg-yellow-400 text-black' : 'bg-blue-600 text-white'}
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
            group-hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:group-hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]
            group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300
            flex items-center justify-center
          `}>
            <Icon
              icon={theme === "dark" ? "solar:sun-bold" : "solar:moon-bold"}
              width={24}
              height={24}
              className="font-black"
            />
          </div>
          <div className={`
            absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-black dark:border-white
            transition-all duration-300
            ${theme === 'dark' ? 'bg-yellow-300 shadow-[0_0_8px_rgba(253,224,71,0.8)]' : 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]'}
          `} />
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </div>
        </div>
      </button>

      {/* Bottom decoration */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 border border-black dark:border-white transition-all duration-300 ${i < Math.floor(scrollProgress / 33.33) ? `${colors[i]} animate-pulse` : 'bg-zinc-400 dark:bg-zinc-600'}`}
            style={i < Math.floor(scrollProgress / 33.33) ? {
              animationDuration: '1s',
              boxShadow: `0 0_8px ${i === 0 ? '#3b82f6' : i === 1 ? '#ef4444' : '#22c55e'}`
            } : {}}
          />
        ))}
      </div>
    </nav>

      {/* Mobile: Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-zinc-100 dark:bg-zinc-900 border-t-4 border-black dark:border-white">
        {/* Scroll Progress Bar */}
        <div className="h-1 bg-zinc-300 dark:bg-zinc-700">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Navigation Items */}
        <div className="flex items-center justify-around px-2 py-2">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const color = colors[index % colors.length];

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex flex-col items-center gap-0.5 group relative"
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeMobileSection"
                    className={`absolute -top-1 w-8 h-1 ${color}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Number */}
                <span className={`text-[8px] font-black tabular-nums ${
                  isActive ? `${color}` : 'text-zinc-500 dark:text-zinc-400'
                }`}>
                  {section.number}
                </span>

                {/* Label */}
                <span className={`text-[8px] font-black uppercase tracking-wider ${
                  isActive ? 'text-black dark:text-white' : 'text-zinc-600 dark:text-zinc-400'
                }`}>
                  {section.label}
                </span>
              </a>
            );
          })}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center gap-0.5 p-1"
            aria-label="Toggle theme"
          >
            <Icon
              icon={theme === "dark" ? "solar:sun-bold" : "solar:moon-bold"}
              width={16}
              height={16}
              className={theme === 'dark' ? 'text-yellow-400' : 'text-blue-600'}
            />
            <span className="text-[8px] font-black uppercase">
              {theme === 'dark' ? '☀' : '☾'}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
