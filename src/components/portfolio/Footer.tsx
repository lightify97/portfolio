"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="relative bg-black dark:bg-white py-8 md:py-12 lg:py-16 border-t-4 md:border-t-8 border-yellow-300 dark:border-zinc-600">
      {/* Decorative top border lines */}
      <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-blue-600 dark:bg-blue-500"></div>
      <div className="absolute top-1 md:top-2 left-0 w-full h-[2px] md:h-1 bg-red-500 dark:bg-red-600"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 md:space-y-6">
          {/* Main footer text with brutalist styling */}
          <div className="bg-yellow-300 dark:bg-zinc-800 border-3 md:border-4 border-white dark:border-black px-4 md:px-8 py-2 md:py-4 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] dark:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] md:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] inline-block">
            <p className="text-base md:text-xl lg:text-3xl font-black text-black dark:text-white uppercase tracking-tighter">
              © 2026 Muhammad Ramazan
            </p>
          </div>

          {/* Tech stack with brutalist badges */}
          <p className="text-sm md:text-base lg:text-xl font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">
            Built with
            <span className="inline-block mx-1 md:mx-2 px-2 md:px-3 py-0.5 md:py-1 bg-white dark:bg-zinc-900 border-2 border-zinc-600 dark:border-zinc-400 text-zinc-900 dark:text-white text-[10px] md:text-sm">Next.js</span>
            <span className="inline-block mx-1 md:mx-2 px-2 md:px-3 py-0.5 md:py-1 bg-white dark:bg-zinc-900 border-2 border-zinc-600 dark:border-zinc-400 text-zinc-900 dark:text-white text-[10px] md:text-sm">Tailwind CSS</span>
            <span className="inline-block mx-1 md:mx-2 px-2 md:px-3 py-0.5 md:py-1 bg-white dark:bg-zinc-900 border-2 border-zinc-600 dark:border-zinc-400 text-zinc-900 dark:text-white text-[10px] md:text-sm">TypeScript</span>
          </p>

          {/* Social links with brutalist style */}
          <div className="flex justify-center gap-2 md:gap-4 pt-2 md:pt-4">
            <a
              href="https://github.com/lightify97"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-zinc-900 border-3 md:border-4 border-white dark:border-black px-3 md:px-6 py-1.5 md:py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:md:hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all flex items-center gap-1.5 md:gap-2"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-base font-black text-black dark:text-white uppercase">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/m-ramazan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 dark:bg-blue-500 border-3 md:border-4 border-white dark:border-black px-3 md:px-6 py-1.5 md:py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all flex items-center gap-1.5 md:gap-2"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-xs md:text-base font-black text-white uppercase">LinkedIn</span>
            </a>

            <a
              href="mailto:mramazan1@yahoo.com"
              className="group bg-green-500 dark:bg-green-600 border-3 md:border-4 border-white dark:border-black px-3 md:px-6 py-1.5 md:py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all flex items-center gap-1.5 md:gap-2"
            >
              <Icon icon="solar:letter-bold" width={16} height={16} className="w-4 h-4 md:w-6 md:h-6 text-white" />
              <span className="text-xs md:text-base font-black text-white uppercase">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative lines */}
      <div className="absolute bottom-1 md:bottom-2 left-0 w-full h-[2px] md:h-1 bg-blue-600 dark:bg-blue-500"></div>
      <div className="absolute bottom-[2px] md:bottom-1 left-0 w-full h-[2px] md:h-1 bg-red-500 dark:bg-red-600"></div>
    </footer>
  );
}
