import { Icon } from "@iconify/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-zinc-950 border-b-4 border-black dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Bento Grid Hero Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Main Name Block - Spans 8 columns, 3 rows */}
          <div className="col-span-12 md:col-span-8 row-span-3 bg-black dark:bg-zinc-100 text-white dark:text-zinc-900 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
              Muhammad
              <span className="block text-blue-500 dark:text-blue-600">Ramazan</span>
            </h1>
          </div>

          {/* Status Badge - Spans 4 columns, 1 row */}
          <div className="hidden md:block md:col-span-4 row-span-1 bg-blue-600 text-white p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold">Available</div>
              <div className="text-sm opacity-80">For Projects</div>
            </div>
          </div>

          {/* Role Tag - Spans 4 columns, 1 row */}
          <div className="hidden md:block md:col-span-4 row-span-1 bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-zinc-600 p-6 flex items-center justify-center">
            <span className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Full Stack Developer
            </span>
          </div>

          {/* Quick Stats Row - 3 stat blocks */}
          <div className="col-span-12 md:col-span-4 row-span-1 grid grid-cols-3 gap-0">
            <div className="bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-zinc-600 p-4 flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">5+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Years</div>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-zinc-600 p-4 flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">50+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Projects</div>
            </div>
            <div className="bg-green-600 text-white p-4 flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold">Top</div>
              <div className="text-xs uppercase tracking-wider opacity-80">Rated</div>
            </div>
          </div>

          {/* Tagline Block - Spans 8 columns, 1 row */}
          <div className="col-span-12 md:col-span-8 row-span-1 bg-zinc-900 dark:bg-zinc-200 text-white dark:text-zinc-900 p-6 md:p-8 flex items-center">
            <p className="text-base md:text-lg leading-relaxed">
              Crafting exceptional digital experiences with clean code and thoughtful design
            </p>
          </div>

          {/* Social Links - Spans 4 columns, 1 row */}
          <div className="hidden md:flex md:col-span-4 row-span-1 gap-0">
            <Link
              href="https://github.com/lightify97"
              className="flex-1 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-600 text-zinc-900 dark:text-zinc-100 p-4 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Icon icon="simple-icons:github" width={24} height={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/m-ramazan"
              className="flex-1 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-600 text-zinc-900 dark:text-zinc-100 p-4 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Icon icon="skill-icons:linkedin" width={24} height={24} />
            </Link>
            <Link
              href="mailto:lightify6@gmail.com"
              className="flex-1 bg-blue-600 border-2 border-black dark:border-zinc-600 text-white p-4 flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Icon icon="material-icon-theme:email" width={24} height={24} />
            </Link>
          </div>

          {/* Mobile Social Row - Full width on mobile */}
          <div className="md:hidden col-span-12 flex gap-2">
            <Link
              href="https://github.com/lightify97"
              className="flex-1 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-600 text-zinc-900 dark:text-zinc-100 p-4 flex items-center justify-center"
            >
              <Icon icon="simple-icons:github" width={24} height={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/m-ramazan"
              className="flex-1 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-600 text-zinc-900 dark:text-zinc-100 p-4 flex items-center justify-center"
            >
              <Icon icon="skill-icons:linkedin" width={24} height={24} />
            </Link>
            <Link
              href="mailto:lightify6@gmail.com"
              className="flex-1 bg-blue-600 border-2 border-black dark:border-zinc-600 text-white p-4 flex items-center justify-center"
            >
              <Icon icon="material-icon-theme:email" width={24} height={24} />
            </Link>
          </div>

          {/* Scroll Indicator - Sharp triangle */}
          <div className="col-span-12 flex justify-center pt-8">
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <span className="text-sm font-medium uppercase tracking-widest">Scroll</span>
              <div className="w-0 h-0 border-l-8 border-zinc-600 dark:border-zinc-400 group-hover:border-black dark:group-hover:border-zinc-100 transition-colors"></div>
              {/* Down arrow using CSS triangle */}
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-zinc-600 dark:border-zinc-400 group-hover:border-black dark:group-hover:border-zinc-100 transition-colors"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
