"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

const techStackData: Record<string, TechItem[]> = {
  "Backend": [
    { name: "Node.js", icon: "devicon:nodejs", category: "Backend" },
    { name: "Python", icon: "devicon:python", category: "Backend" },
    { name: "Express", icon: "skill-icons:expressjs-dark", category: "Backend" },
    { name: "Fastify", icon: "simple-icons:fastify", category: "Backend" },
    { name: "FastAPI", icon: "devicon:fastapi", category: "Backend" },
    { name: "GraphQL", icon: "logos:graphql", category: "Backend" },
    { name: "Socket.io", icon: "simple-icons:socketdotio", category: "Backend" },
  ],
  "Frontend": [
    { name: "React", icon: "skill-icons:react-dark", category: "Frontend" },
    { name: "Next.js", icon: "devicon:nextjs", category: "Frontend" },
    { name: "TypeScript", icon: "devicon:typescript", category: "Frontend" },
    { name: "JavaScript", icon: "devicon:javascript", category: "Frontend" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", category: "Frontend" },
    { name: "Flutter", icon: "devicon:flutter", category: "Frontend" },
  ],
  "Database": [
    { name: "PostgreSQL", icon: "logos:postgresql", category: "Database" },
    { name: "MongoDB", icon: "devicon:mongodb", category: "Database" },
    { name: "MySQL", icon: "logos:mysql", category: "Database" },
    { name: "Redis", icon: "devicon:redis", category: "Database" },
    { name: "Prisma", icon: "skill-icons:prisma", category: "Database" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "skill-icons:aws-light", category: "Cloud & DevOps" },
    { name: "GCP", icon: "skill-icons:gcp-light", category: "Cloud & DevOps" },
    { name: "Firebase", icon: "vscode-icons:file-type-firebase", category: "Cloud & DevOps" },
    { name: "Docker", icon: "devicon:docker", category: "Cloud & DevOps" },
    { name: "Git", icon: "devicon:git", category: "Cloud & DevOps" },
  ],
  "AI & Integration": [
    { name: "OpenAI", icon: "simple-icons:openai", category: "AI & Integration" },
    { name: "LangChain", icon: "simple-icons:langchain", category: "AI & Integration" },
    { name: "Vercel AI SDK", icon: "skill-icons:vercel-light", category: "AI & Integration" },
    { name: "Stripe", icon: "logos:stripe", category: "AI & Integration" },
    { name: "Vector DB", icon: "ph:vector-three-duotone", category: "AI & Integration" },
  ],
};

// Advanced tech card with industrial design
function AdvancedTechCard({ tech, index, colorScheme }: { tech: TechItem; index: number; colorScheme: { primary: string; secondary: string; accent: string } }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 30);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 30}ms`,
      }}
    >
      {/* Main card */}
      <div
        className={`
          relative border-4 border-black dark:border-white overflow-hidden
          transition-all duration-300
          ${isHovered ? '-translate-y-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.8)]'}
        `}
        style={{
          backgroundColor: colorScheme.secondary,
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
        }}
      >
        {/* Inner border */}
        <div
          className="absolute inset-1 border-2 border-black/20 dark:border-white/20 pointer-events-none"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          }}
        />

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(${colorScheme.accent} 1px, transparent 1px), linear-gradient(90deg, ${colorScheme.accent} 1px, transparent 1px)`,
            backgroundSize: '8px 8px',
          }} />
        </div>

        {/* Corner rivets */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full border-2 border-black/30 dark:border-white/30 shadow-inner" style={{ backgroundColor: colorScheme.primary }} />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full border-2 border-black/30 dark:border-white/30 shadow-inner" style={{ backgroundColor: colorScheme.primary }} />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full border-2 border-black/30 dark:border-white/30 shadow-inner" style={{ backgroundColor: colorScheme.primary }} />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full border-2 border-black/30 dark:border-white/30 shadow-inner" style={{ backgroundColor: colorScheme.primary }} />

        {/* Content */}
        <div className="relative px-1 py-3 flex flex-col items-center gap-2">
          {/* Icon container with decorative frame */}
          <div className="relative">
            {/* Icon badge */}
            <div
              className={`
                relative w-10 h-10 flex items-center justify-center
                border-3 border-black dark:border-white rounded-lg
                transition-all duration-300
                ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
              `}
            >
              {/* Decorative corner accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-black dark:border-white" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-black dark:border-white" />

              <Icon
                icon={tech.icon}
                width={32}
                height={32}
                className="transition-transform duration-300"
                style={{ color: colorScheme.primary }}
              />
            </div>
          </div>

          {/* Tech name */}
          <div className="text-center">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-wider" style={{ color: colorScheme.primary }}>
              {tech.name}
            </h4>

            {/* Decorative underline */}
            <div
              className={`
                h-0.5 mt-0.5 transition-all duration-300
                ${isHovered ? 'w-full' : 'w-1/2'}
              `}
              style={{ backgroundColor: colorScheme.accent }}
            />
          </div>

          {/* Status indicators */}
          <div className="flex items-center gap-0.5 mt-0.5">
            <div className="w-1 h-1 rounded-full border border-black/50 dark:border-white/50 animate-pulse" style={{ backgroundColor: colorScheme.primary }} />
            <div className="w-1 h-1 rounded-full border border-black/50 dark:border-white/50 animate-pulse" style={{ backgroundColor: colorScheme.accent, animationDelay: '0.2s' }} />
            <div className="w-1 h-1 rounded-full border border-black/50 dark:border:white/50 animate-pulse" style={{ backgroundColor: colorScheme.primary, animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>

      {/* Hover accent elements */}
      {isHovered && (
        <>
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 transition-all duration-300" style={{ borderColor: colorScheme.primary }} />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 transition-all duration-300" style={{ borderColor: colorScheme.accent }} />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 transition-all duration-300" style={{ borderColor: colorScheme.accent }} />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 transition-all duration-300" style={{ borderColor: colorScheme.primary }} />
        </>
      )}
    </div>
  );
}

export default function TechStackSection() {
  const categories = Object.keys(techStackData);
  const [activeCategory, setActiveCategory] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Update indicator position when category changes
  useEffect(() => {
    if (tabsRef.current) {
      const tabs = tabsRef.current.querySelectorAll('button');
      const activeTab = tabs[activeCategory] as HTMLButtonElement;
      if (activeTab) {
        setIndicatorStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
        });
      }
    }
  }, [activeCategory]);

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      if (tabsRef.current) {
        const tabs = tabsRef.current.querySelectorAll('button');
        const activeTab = tabs[activeCategory] as HTMLButtonElement;
        if (activeTab) {
          setIndicatorStyle({
            left: activeTab.offsetLeft,
            width: activeTab.offsetWidth,
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCategory]);

  const colorSchemes = [
    { primary: '#3b82f6', secondary: '#eff6ff', accent: '#1d4ed8' }, // Blue
    { primary: '#22c55e', secondary: '#f0fdf4', accent: '#15803d' }, // Green
    { primary: '#a855f7', secondary: '#faf5ff', accent: '#7c3aed' }, // Purple
    { primary: '#ec4899', secondary: '#fdf2f8', accent: '#db2777' }, // Pink
    { primary: '#6366f1', secondary: '#eef2ff', accent: '#4f46e5' }, // Indigo
  ];

  return (
    <section id="stack" className="py-12 md:py-16 lg:py-24 bg-white dark:bg-zinc-950">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 lg:mb-16">
        <div className="bg-red-500 dark:bg-red-600 border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
            Technology Stack
          </h2>
        </div>
        <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl text-zinc-800 dark:text-zinc-200 font-bold">
          Technologies I use to bring ideas to life
        </p>
      </div>

      {/* Metro-style category tabs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div ref={tabsRef} className="relative bg-black dark:bg-white p-2 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
          {/* Sliding indicator */}
          <div
            className="absolute top-2 bottom-2 bg-yellow-300 dark:bg-yellow-500 border-4 border-black dark:border-white transition-all duration-300 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(index)}
              className={`relative z-10 flex-1 px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-black uppercase tracking-wider transition-colors ${activeCategory === index
                  ? 'text-black'
                  : 'text-white dark:text-black hover:text-zinc-300 dark:hover:text-zinc-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Categories */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        {categories.map((categoryName, categoryIndex) => {
          const categoryColors = [
            'bg-blue-600',
            'bg-green-500',
            'bg-purple-600',
            'bg-pink-500',
            'bg-indigo-600',
          ];
          const headerColor = categoryColors[categoryIndex % categoryColors.length];
          const colorScheme = colorSchemes[categoryIndex % colorSchemes.length];

          return (
            <div
              key={categoryName}
              id={`category-${categoryIndex}`}
              className={activeCategory === categoryIndex ? 'block' : 'hidden'}
            >
              {/* Metro-style header with line */}
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800"></div>
                <h3 className={`${headerColor} text-white border-4 border-black dark:border-white px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-2xl md:text-3xl font-black uppercase tracking-tighter relative`}>
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-white border-4 border-black dark:border-white"></div>
                  {categoryName}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-white border-4 border-black dark:border-white"></div>
                </h3>
                <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {techStackData[categoryName].map((tech, index) => (
                  <AdvancedTechCard
                    key={tech.name}
                    tech={tech}
                    index={index}
                    colorScheme={colorScheme}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
